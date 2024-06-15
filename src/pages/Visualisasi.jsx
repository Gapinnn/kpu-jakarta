import { useEffect } from "react";
import VisualisasiComponent from "../components/Visualisasi/VisualisasiComponent";

export default function Visualisasi() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="flex flex-col w-full bg-stone-100">
        <VisualisasiComponent />
      </div>
    </>
  );
}
