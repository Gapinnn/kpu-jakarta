import { useParams } from "react-router-dom";
import {
  dataPengumuman,
  dataPengumumanEn,
} from "../contents/informasi/pengumuman";
import DetailPengumuman from "../components/Informasi/Pengumuman/DetailPengumuman/DetailPengumuman";
import { useEffect } from "react";
import getLanguage from "../hooks/getLanguage";

export default function HalamanPengumuman() {
  const lang = getLanguage();
  const { idPengumuman } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="flex flex-col gap-0 bg-stone-100">
        {/* Detail Berita */}
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
