import { useEffect, useState } from "react";
import PubGaleri from "../components/Publikasi/Galeri/PubGaleri";
import Loading from "../components/Loading";

export default function PublikasiGaleri() {
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
        <PubGaleri />
      </div>
    </>
  );
}
