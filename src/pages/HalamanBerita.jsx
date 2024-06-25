import { useParams } from "react-router-dom";
import DetailBerita from "../components/Informasi/Berita/DetailBerita/DetailBerita";
import { dataBerita, dataBeritaEn } from "../contents/informasi/berita";
import { useEffect, useState } from "react";
import getLanguage from "../hooks/getLanguage";
import Loading from "../components/Loading";

export default function HalamanBerita() {
  const lang = getLanguage();
  const { idBerita } = useParams();
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
        {/* Detail Berita */}
        <Loading isLoading={loadingPage} />
        <DetailBerita
          data={lang === "id" ? dataBerita[idBerita] : dataBeritaEn[idBerita]}
        />
      </div>
    </>
  );
}
