import { useEffect, useState } from "react";
import PubDokumen from "../components/Publikasi/Dokumen/PubDokumen";
import Loading from "../components/Loading";

export default function PublikasiDokumen() {
  const [loadingPage, setLoadingPage] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoadingPage(false);
    }, 500);
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="flex flex-col gap-0 bg-stone-100">
        <Loading isLoading={loadingPage} />
        <PubDokumen />
      </div>
    </>
  );
}
