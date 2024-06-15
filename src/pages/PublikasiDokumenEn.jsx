import { useEffect } from "react";
import PubDokumen from "../components/Publikasi/Dokumen/PubDokumen";

export default function PublikasiDokumenEn() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="flex flex-col gap-0 bg-stone-100">
        <PubDokumen />
      </div>
    </>
  );
}
