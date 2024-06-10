import { useEffect } from "react";
import PDFObject from "pdfobject";

const PdfViewer = ({ pdfUrl }) => {
  var options = {
    title: "Tampil PDF File KPU DKI Jakarta",
    pdfOpenParams: { view: "Fit" },
  };

  useEffect(() => {
    PDFObject.embed(pdfUrl, document.body, options);
  }, [pdfUrl]);

  return (
    <div
      className="pdfobject-container"
      id="my-pdf"
      style={{ height: "100vh", border: "none" }}
    ></div>
  );
};

export default PdfViewer;
