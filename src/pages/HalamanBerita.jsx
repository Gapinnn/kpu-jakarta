import { useParams } from "react-router-dom";
import DetailBerita from "../components/Informasi/Berita/DetailBerita/DetailBerita";
import { dataBerita, dataBeritaEn } from "../contents/informasi/berita";
import { useEffect } from "react";
import getLanguage from "../hooks/getLanguage";

export default function HalamanBerita() {
  const lang = getLanguage();
  const { idBerita } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="flex flex-col gap-0 bg-stone-100">
        {/* Detail Berita */}
        <DetailBerita
          data={lang === "id" ? dataBerita[idBerita] : dataBeritaEn[idBerita]}
        />
      </div>
    </>
  );
}
