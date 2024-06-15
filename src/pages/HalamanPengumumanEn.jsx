import { useParams } from "react-router-dom";
import { dataPengumuman } from "../contents/informasi/pengumuman";
import DetailPengumuman from "../components/Informasi/Pengumuman/DetailPengumuman/DetailPengumuman";
import { useEffect } from "react";

export default function HalamanPengumumanEn() {
  const { idPengumuman } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="flex flex-col gap-0 bg-stone-100">
        {/* Detail Berita */}
        <DetailPengumuman data={dataPengumuman[idPengumuman]} />
      </div>
    </>
  );
}
