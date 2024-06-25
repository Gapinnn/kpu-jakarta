import { useEffect, useState } from "react";
import VisiMisiComponent from "../components/VisiMisi/VisiMisi";
import Loading from "../components/Loading";
import SpeechRecognition from "../components/SpeechRecognition";

export default function VisiMisi() {
  const [loadingPage, setLoadingPage] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoadingPage(false);
    }, 500);
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="flex flex-col gap-0">
        <Loading isLoading={loadingPage} />
        <SpeechRecognition />
        <VisiMisiComponent />
      </div>
    </>
  );
}
