import Breadcumb from "./Breadcumb";
import Clipboard from "../Icon/Clipboard";
import { Link } from "react-router-dom";
import Lanjut from "../Icon/Lanjut";
import People from "../Icon/People";
import Comment from "../Icon/Comment";
import getLanguage from "../../hooks/getLanguage";

export default function PengaduanComponent() {
  const lang = getLanguage();
  return (
    <div className="lg:container mx-auto pt-4 lg:pt-8 pb-8 lg:pb-12 px-4 md:px-8 lg:px-2 flex flex-col justify-center">
      {/* Breadcumb */}
      <Breadcumb />
      {/* Judul Halaman */}
      <div className="flex flex-col gap-0 lg:gap-2 my-0 mb-1 lg:mb-4">
        <h1 className="text-maroon-light font-bold text-xl md:text-2xl lg:text-3xl mb-2 lg:mb-0 mt-2 lg:mt-4">
        {lang === "id" ? "Pengaduan" : "Complaint"}
        </h1>
        <p className="text-justify text-stone-900 text-base md:text-lg lg:text-xl mb-1">
        {lang === "id" ? 
          "Layanan pengaduan ini memungkinkan warga DKI Jakarta untuk menyampaikan keluhan, laporan, dan masukan terkait KPU DKI Jakarta. KPU DKI Jakarta berkomitmen untuk menindaklanjuti setiap aduan guna meningkatkan kualitas dan integritas lembaga."
          : 
          "This complaint service allows residents of DKI Jakarta to submit complaints, reports, and feedback related to the KPU DKI Jakarta. KPU DKI Jakarta is committed to following up on every complaint in order to improve the quality and integrity of the institution."
        }
        </p>
      </div>
      {/* Menu */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 py-2 justify-between items-center">
        {/* Pengajuan Keberatan Informasi */}
        <div className="bg-white p-6 lg:p-8 flex flex-col gap-2 lg:gap-3 rounded-2xl shadow-xl">
          <div className="w-14 h-14 lg:w-20 lg:h-20 rounded-full bg-maroon-light flex flex-col justify-center items-center">
            <Clipboard className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
          </div>
          <div className="w-full flex flex-col gap-1.5">
            <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-stone-900">
            {lang === "id" ? "Pengaduan" : "Complaint"} <br className="hidden lg:flex" /> {lang === "id" ? "Masyarakat":"Community"}
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-stone-700">
            {lang === "id" ? 
                "Pengajuan laporan segala bentuk pelanggaran atau masalah terkait pelaksanaan program kerja KPU Provinsi DKI Jakarta." 
                : 
                "Submission of reports on any violations or issues related to the implementation of the work programs of KPU Province DKI Jakarta."
            }
            </p>
          </div>
          <Link
            to={lang === "id" ? "/id/pengaduan/dumas" :  "/en/pengaduan/dumas"}
            className="mt-3 md:mt-4 lg:mt-6 flex flex-row items-center w-fit group"
          >
            <p className="text-maroon-light text-sm md:text-base lg:text-lg font-semibold group-hover:text-maroon">
            {lang === "id" ? 
                "Dumas KPU DKI Jakarta" 
                : 
                "KPU DKI Jakarta Complaint Service"
            }
            </p>
            <Lanjut className="w-6 h-6 text-maroon-light group-hover:text-maroon ms-2" />
          </Link>
        </div>
        {/* Whistleblowing System */}
        <div className="bg-white p-6 lg:p-8 flex flex-col gap-2 lg:gap-3 rounded-2xl shadow-xl">
          <div className="w-14 h-14 lg:w-20 lg:h-20 rounded-full bg-maroon-light flex flex-col justify-center items-center">
            <People className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
          </div>
          <div className="w-full flex flex-col gap-1.5">
            <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-stone-900">
              Wistleblowing <br className="hidden lg:flex" /> System
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-stone-700">
            {lang === "id" ? 
                "Pengajuan laporan pelanggaran/kecurangan yang dilakukan oleh Pegawai (Komisioner, PNS, dan non-PNS) KPU Provinsi DKI Jakarta." 
                : 
                "Submission of reports on violations/fraud committed by employees (Commissioners, Civil Servants, and non-Civil Servants) of KPU Province DKI Jakarta."
            }
            </p>
          </div>
          <Link
            to={lang === "id" ? "/id/pengaduan/whistleblowing" :  "/en/pengaduan/whistleblowing"}
            className="mt-3 md:mt-4 lg:mt-6 flex flex-row items-center w-fit group"
          >
            <p className="text-maroon-light text-sm md:text-base lg:text-lg font-semibold group-hover:text-maroon">
              {lang === "id" ? "Whistleblowing KPU DKI Jakarta" : "Whistleblowing at KPU DKI Jakarta"}
            </p>
            <Lanjut className="w-6 h-6 text-maroon-light group-hover:text-maroon ms-2" />
          </Link>
        </div>
        {/* Lapor go id */}
        <div className="bg-white p-6 lg:p-8 flex flex-col gap-2 lg:gap-3 rounded-2xl shadow-xl">
          <div className="w-14 h-14 lg:w-20 lg:h-20 rounded-full bg-maroon-light flex flex-col justify-center items-center">
            <Comment className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
          </div>
          <div className="w-full flex flex-col gap-1.5">
            <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-stone-900">
            {lang === "id" ? "Layanan" : "Service"} <br className="hidden lg:flex" /> Lapor.go.id
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-stone-700">
            {lang === "id" ? 
                "Layanan pengaduan, aspirasi, permintaan informasi yang dikelola oleh Kantor Staf Presiden Republik Indonesia." 
                : 
                "Complaint, aspiration, and information request services managed by the Office of the Presidential Staff of the Republic of Indonesia."
            }
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
            className="mt-3 md:mt-4 lg:mt-6 flex flex-row items-center w-fit group"
          >
            <p className="text-maroon-light text-sm md:text-base lg:text-lg font-semibold group-hover:text-maroon">
              Lapor.go.id
            </p>
            <Lanjut className="w-6 h-6 text-maroon-light group-hover:text-maroon ms-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
