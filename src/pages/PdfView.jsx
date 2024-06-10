import { useLocation } from "react-router-dom";
import PdfViewer from "../components/Pdf/PdfViewer";

const PdfView = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const pdfUrl = params.get("pdfUrl");
  console.log(pdfUrl);

  return (
    <div>
      <PdfViewer pdfUrl={pdfUrl} />
    </div>
  );
};

export default PdfView;
