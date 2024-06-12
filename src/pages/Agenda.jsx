import Breadcumb from "../components/Informasi/Agenda/Breadcumb";
import Kalendar from "../components/Informasi/Agenda/Kalendar";

export default function Agenda() {
  return (
    <>
      <div className="flex flex-col gap-0 bg-stone-100">
        <div className="container mx-auto pt-8 pb-12 px-2 flex flex-col justify-center">
          {/* Breadcumb */}
          <Breadcumb />
          {/* Judul Halaman */}
          <div className="flex flex-col gap-2 my-4">
            <h1 className="text-maroon-light font-bold text-3xl">Agenda</h1>
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
