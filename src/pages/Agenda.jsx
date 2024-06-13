import { useEffect } from "react";
import Breadcumb from "../components/Informasi/Agenda/Breadcumb";
import Kalendar from "../components/Informasi/Agenda/Kalendar";

export default function Agenda() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="flex flex-col gap-0 bg-stone-100">
        <div className="lg:container mx-auto pt-4 lg:pt-8 pb-8 lg:pb-12 px-4 md:px-8 lg:px-2 flex flex-col justify-center">
          {/* Breadcumb */}
          <Breadcumb />
          {/* Judul Halaman */}
          <div className="flex flex-col gap-0 lg:gap-2 my-0 lg:my-4 mb-1 lg:mb-0">
            <h1 className="text-maroon-light font-bold text-2xl lg:text-3xl mb-2 lg:mb-6 mt-2 lg:mt-4">
              Agenda KPU Provinsi DKI Jakarta
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
          {/* Kalendar Agenda */}
          <Kalendar />
        </div>
      </div>
    </>
  );
}
