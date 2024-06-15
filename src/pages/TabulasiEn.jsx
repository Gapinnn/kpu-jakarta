import { useEffect } from "react";
import TabulasiComponent from "../components/Tabulasi/TabulasiComponent";

export default function Tabulasi() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="flex flex-col w-full bg-stone-100">
        <TabulasiComponent />
      </div>
    </>
  );
}
