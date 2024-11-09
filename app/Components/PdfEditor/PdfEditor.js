// components/PDFEditor.js
"use client";
import React, { useState } from "react";
import { PDFDocument, rgb } from "pdf-lib";
import SignaturePad from "./SignaturePadComponent";
import NotarySeal from "./NotarySeal";
import PdfViewer from "./PdfViewer";

const PdfEditor = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfDataUrl, setPdfDataUrl] = useState("");
  const [signatureData, setSignatureData] = useState(null);
  const [sealData, setSealData] = useState(null);
  const [sealPosition, setSealPosition] = useState({ x: 100, y: 100 });

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const pdfBytes = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(pdfBytes);
      const dataUrl = await pdfDoc.saveAsBase64({ dataUri: true });
      setPdfFile(pdfDoc);
      setPdfDataUrl(dataUrl);
    }
  };

  const handleSignature = (canvas) => {
    setSignatureData(canvas.getTrimmedCanvas().toDataURL("image/png"));
  };

  const handleSealUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setSealData(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const addElementsToPDF = async () => {
    if (!pdfFile) return;

    const pdfDoc = pdfFile;
    const page = pdfDoc.getPages()[0];
    const { width, height } = page.getSize();

    if (signatureData) {
      const signatureImage = await pdfDoc.embedPng(signatureData);
      page.drawImage(signatureImage, {
        x: width - 150,
        y: height - 150,
        width: 100,
        height: 50,
      });
    }

    if (sealData) {
      const sealImage = await pdfDoc.embedPng(sealData);
      page.drawImage(sealImage, {
        x: sealPosition.x,
        y: sealPosition.y,
        width: 80,
        height: 80,
      });
    }

    const pdfBytes = await pdfDoc.save();
    setPdfDataUrl(
      URL.createObjectURL(new Blob([pdfBytes], { type: "application/pdf" }))
    );
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <input type="file" accept="application/pdf" onChange={handleFileUpload} />

      {pdfDataUrl && <PdfViewer pdfDataUrl={pdfDataUrl} />}

      <SignaturePad onSave={handleSignature} />

      <NotarySeal onSealUpload={handleSealUpload} />

      <button
        onClick={addElementsToPDF}
        className="bg-blue-500 text-white px-4 py-2 mt-4"
      >
        Finalize and Seal PDF
      </button>
    </div>
  );
};

export default PdfEditor;
