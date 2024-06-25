import { useParams } from "react-router-dom";
import {
  dataPengumuman,
  dataPengumumanEn,
} from "../contents/informasi/pengumuman";
import DetailPengumuman from "../components/Informasi/Pengumuman/DetailPengumuman/DetailPengumuman";
import { useEffect, useState } from "react";
import getLanguage from "../hooks/getLanguage";
import Loading from "../components/Loading";

export default function HalamanPengumuman() {
  const lang = getLanguage();
  const { idPengumuman } = useParams();
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
        <DetailPengumuman
          data={
            lang === "id"
              ? dataPengumuman[idPengumuman]
              : dataPengumumanEn[idPengumuman]
          }
        />
      </div>
    </>
  );
}
