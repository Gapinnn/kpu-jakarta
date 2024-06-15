import { useEffect } from "react";
import PubGaleri from "../components/Publikasi/Galeri/PubGaleri";

export default function PublikasiGaleri() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="flex flex-col gap-0 bg-stone-100">
        <PubGaleri />
      </div>
    </>
  );
}
