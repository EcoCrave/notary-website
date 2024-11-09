import PdfEditor from "@/app/Components/PdfEditor/PdfEditor";
import PdfViewer from "@/app/Components/PdfEditor/PdfViewer";
import React from "react";

const page = () => {
  return (
    <div>
      <PdfViewer />
      <PdfEditor />
    </div>
  );
};

export default page;
