import { Link } from "react-router-dom";
import Clipboard from "../components/Icon/Clipboard";
import Lanjut from "../components/Icon/Lanjut";
import Breadcumb from "../components/Pengaduan/Breadcumb";
import People from "../components/Icon/People";
import Comment from "../components/Icon/Comment";
import { useEffect } from "react";

export default function Pengaduan() {
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
            <h1 className="text-maroon-light font-bold text-3xl">Pengaduan</h1>
            <p className="text-stone-900 text-xl mb-1">
              Layanan pengaduan ini memungkinkan warga DKI Jakarta untuk
              menyampaikan keluhan, laporan, dan masukan terkait KPU DKI
              Jakarta. KPU DKI Jakarta berkomitmen untuk menindaklanjuti setiap
              aduan guna meningkatkan kualitas dan integritas lembaga.
            </p>
          </div>
          {/* Menu */}
          <div className="w-full grid grid-cols-3 gap-6 py-2 justify-between items-center">
            {/* Pengajuan Keberatan Informasi */}
            <div className="bg-white p-8 flex flex-col gap-3 rounded-2xl shadow-xl">
              <div className="w-20 h-20 rounded-full bg-maroon-light flex flex-col justify-center items-center">
                <Clipboard className="w-12 h-12 text-white" />
              </div>
              <div className="w-full flex flex-col gap-1.5">
                <h1 className="text-2xl font-bold text-stone-900">
                  Pengaduan <br /> Masyarakat
                </h1>
                <p className="text-lg text-stone-700">
                  Pengajuan hanya dapat dilakukan jika sudah memiliki No.
                  Permohonan Pengajuan Aduan yang didapatkan dari Formulir
                  Permohonan Pengajuan Aduan.
                </p>
              </div>
              <Link
                to="/id/pengaduan/dumas"
                className="mt-6 flex flex-row items-center w-fit group"
              >
                <p className="text-maroon-light text-lg font-semibold group-hover:text-maroon">
                  Dumas KPU DKI Jakarta
                </p>
                <Lanjut className="w-6 h-6 text-maroon-light group-hover:text-maroon ms-2" />
              </Link>
            </div>
            {/* Whistleblowing System */}
            <div className="bg-white p-8 flex flex-col gap-3 rounded-2xl shadow-xl">
              <div className="w-20 h-20 rounded-full bg-maroon-light flex flex-col justify-center items-center">
                <People className="w-12 h-12 text-white" />
              </div>
              <div className="w-full flex flex-col gap-1.5">
                <h1 className="text-2xl font-bold text-stone-900">
                  Wistleblowing <br /> System
                </h1>
                <p className="text-lg text-stone-700">
                  Pengajuan laporan pelanggaran/kecurangan yang dilakukan oleh
                  Pegawai KPU Provinsi DKI Jakarta (komisioner, PNS dan non
                  PNS).
                </p>
              </div>
              <button className="mt-6 flex flex-row items-center w-fit group">
                <p className="text-maroon-light text-lg font-semibold group-hover:text-maroon">
                  Whistleblowing KPU DKI Jakarta
                </p>
                <Lanjut className="w-6 h-6 text-maroon-light group-hover:text-maroon ms-2" />
              </button>
            </div>
            {/* Lapor go id */}
            <div className="bg-white p-8 flex flex-col gap-3 rounded-2xl shadow-xl">
              <div className="w-20 h-20 rounded-full bg-maroon-light flex flex-col justify-center items-center">
                <Comment className="w-12 h-12 text-white" />
              </div>
              <div className="w-full flex flex-col gap-1.5">
                <h1 className="text-2xl font-bold text-stone-900">
                  Layanan <br /> Lapor.go.id
                </h1>
                <p className="text-lg text-stone-700">
                  Layanan pengaduan, aspirasi, permintaan informasi yang
                  dikelola oleh Kantor Staf Presiden Republik Indonesia.
                </p>
              </div>
              <Link
                // Open New Tab
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    "https://www.lapor.go.id/",
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
                className="mt-6 flex flex-row items-center w-fit group"
              >
                <p className="text-maroon-light text-lg font-semibold group-hover:text-maroon">
                  Lapor.go.id
                </p>
                <Lanjut className="w-6 h-6 text-maroon-light group-hover:text-maroon ms-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
