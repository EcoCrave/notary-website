// components/PDFViewer.js

import React from "react";

const PdfViewer = ({ pdfDataUrl }) => (
  <iframe
    src={pdfDataUrl}
    className="w-full h-96 border rounded"
    title="PDF Viewer"
  />
);

export default PdfViewer;
