import { useEffect } from "react";
import PengaduanComponent from "../components/Pengaduan/PengaduanComponent";

export default function PengaduanEn() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="flex flex-col gap-0 bg-stone-100">
        <PengaduanComponent />
      </div>
    </>
  );
}
