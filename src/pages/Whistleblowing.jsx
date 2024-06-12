import { useEffect } from "react";
import Breadcumb from "../components/Pengaduan/Whistleblowing/Breadcumb";
import Mekanisme from "../components/Pengaduan/Whistleblowing/Mekanisme";

export default function Whistleblowing() {
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
              Whistleblowing System
            </h1>
            <p className="text-stone-900 text-xl mb-1">
              Sistem Whistleblowing KPU Provinsi DKI Jakarta adalah platform
              yang disediakan KPU ProvinsiDKI Jakarta bagi Anda yang ingin
              melaporkan dugaan terjadinya suatu pelanggaran yang dilakukan oleh
              Pegawai (Komisioner, PNS, dan non-PNS) KPU Provinsi DKI Jakarta.
              Melalui sistem ini, masyarakat dapat menyampaikan kesalahan dan
              kekurangan pegawai di lingkungan KPU DKI Jakarta.
            </p>
          </div>
          {/* Mekanisme */}
          <Mekanisme />
        </div>
      </div>
    </>
  );
}
