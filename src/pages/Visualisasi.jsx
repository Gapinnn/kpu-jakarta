import { useEffect, useState } from "react";
import VisualisasiComponent from "../components/Visualisasi/VisualisasiComponent";
import Loading from "../components/Loading";

export default function Visualisasi() {
  const [loadingPage, setLoadingPage] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoadingPage(false);
    }, 500);
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="flex flex-col w-full bg-stone-100">
        <Loading isLoading={loadingPage} />
        <VisualisasiComponent />
      </div>
    </>
  );
}
