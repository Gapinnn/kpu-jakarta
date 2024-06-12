import { useEffect } from "react";
import Breadcumb from "../components/Pengaduan/Dumas/Breadcumb";
import Mekanisme from "../components/Pengaduan/Dumas/Mekanisme";

export default function Dumas() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="flex flex-col gap-0 bg-stone-100">
        <div className="container mx-auto pt-8 pb-12 px-2 flex flex-col justify-center">
          {/* Breadcumb */}
          <Breadcumb />
          {/* Judul Halaman */}
          <div className="flex flex-col gap-2 my-4">
            <h1 className="text-maroon-light font-bold text-3xl">
              Aduan Masyarakat
            </h1>
            <p className="text-stone-900 text-xl mb-1">
              Sistem Pengelolaan Aduan Masyarakat KPU Provinsi DKI Jakarta
              adalah platform yang disediakan oleh KPU Provinsi DKI Jakarta bagi
              masyarakat untuk melaporkan segala bentuk pelanggaran atau masalah
              terkait pelaksanaan pemilu. Melalui sistem ini, masyarakat dapat
              menyampaikan keluhan, masukan, dan saran untuk memastikan
              transparansi dan integritas lembaga dan program kerja KPU DKI
              Jakarta.
            </p>
          </div>
          {/* Mekanisme */}
          <Mekanisme />
        </div>
      </div>
    </>
  );
}
