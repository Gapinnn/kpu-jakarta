import { useState } from "react";
import Breadcumb from "./Breadcumb";
import Sosialisasi from "../../Icon/Sosialisasi";
import Pedoman from "../../Icon/Pedoman";
import Modull from "../../Icon/Modull";
import BahanSosialisasi from "./BahanSosialisasi";
import BukuPedoman from "./BukuPedoman";
import Modul from "./Modul";

export default function PubDokumen() {
  const [tabActive, setTabctive] = useState(0);
  return (
    <div className="lg:container mx-auto pt-4 lg:pt-8 pb-8 lg:pb-12 px-4 md:px-8 lg:px-2 flex flex-col justify-center">
      {/* Breadcumb */}
      <Breadcumb />
      {/* Judul Halaman */}
      <div className="flex flex-col gap-0 lg:gap-2 my-0 mb-1 lg:mb-4">
        <h1 className="text-maroon-light font-bold text-xl md:text-2xl lg:text-3xl mb-2 lg:mb-0 mt-2 lg:mt-4">
          Dokumen
        </h1>
        <p className="text-justify text-stone-900 text-base md:text-lg lg:text-xl mb-2 lg:mb-1">
          Publikasi ini mencakup berbagai dokumen resmi yang dihasilkan oleh KPU
          DKI Jakarta. Dokumen-dokumen ini disusun untuk mendukung
          profesionalitas, transparansi, dan akuntabilitas dalam proses
          pemilihan umum. Publikasi dokumen ini dibagi menjadi tiga kategori
          berdasarkan fungsi dan tujuan dokumen, yaitu:
        </p>
        {/* list */}
        <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
          <h1 className="bg-maroon-light rounded-lg text-gold text-sm md:text-base lg:text-lg w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-center font-bold">
            1
          </h1>
          <h1 className="text-stone-900 font-semibold text-base md:text-lg lg:text-xl">
            Bahan Sosialisasi
          </h1>
        </div>
        <div className="flex items-center gap-2 md:gap-3 lg:gap-4 mt-1 md:mt-1.5 lg:mt-0">
          <h1 className="bg-maroon-light rounded-lg text-gold text-sm md:text-base lg:text-lg w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-center font-bold">
            2
          </h1>
          <h1 className="text-stone-900 font-semibold text-base md:text-lg lg:text-xl">
            Buku Pedoman
          </h1>
        </div>
        <div className="flex items-center gap-2 md:gap-3 lg:gap-4 mt-1 md:mt-1.5 lg:mt-0">
          <h1 className="bg-maroon-light rounded-lg text-gold text-sm md:text-base lg:text-lg w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-center font-bold">
            3
          </h1>
          <h1 className="text-stone-900 font-semibold text-base md:text-lg lg:text-xl">
            Modul
          </h1>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b-2 border-stone-400 mt-2 md:mt-2.5 lg:mt-0">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-stone-500 ">
          <li className="me-2">
            <div
              onClick={() => setTabctive(0)}
              className={`inline-flex items-center justify-center p-2 md:p-3 lg:p-4 rounded-t-lg hover:text-stone-600 group ${
                tabActive !== 0
                  ? "border-b-[3px] border-transparent hover:border-stone-400"
                  : "border-b-4 border-maroon-light"
              }`}
            >
              <Sosialisasi
                className={`w-6 h-6 md:w-7 md:h-7 me-1.5 md:me-2 ${
                  tabActive !== 0
                    ? "text-stone-400 group-hover:text-stone-500"
                    : "text-maroon-light"
                }`}
              />
              <p
                className={`text-base md:text-lg cursor-pointer ${
                  tabActive !== 0
                    ? "text-stone-600 group-hover:text-stone-900"
                    : "text-maroon-light"
                }`}
              >
                {window.innerWidth > 768 ? "Bahan Sosialisasi" : "Sosialisasi"}
              </p>
            </div>
          </li>
          <li className="me-2">
            <div
              onClick={() => setTabctive(1)}
              className={`inline-flex items-center justify-center p-2 md:p-3 lg:p-4 rounded-t-lg hover:text-stone-600 group ${
                tabActive !== 1
                  ? "border-b-[3px] border-transparent hover:border-stone-400"
                  : "border-b-4 border-maroon-light"
              }`}
            >
              <Pedoman
                className={`w-6 h-6 md:w-7 md:h-7 me-1.5 md:me-2 ${
                  tabActive !== 1
                    ? "text-stone-400 group-hover:text-stone-500"
                    : "text-maroon-light"
                }`}
              />
              <p
                className={`text-base md:text-lg cursor-pointer ${
                  tabActive !== 1
                    ? "text-stone-600 group-hover:text-stone-900"
                    : "text-maroon-light"
                }`}
              >
                {window.innerWidth > 768 ? "Buku Pedoman" : "Pedoman"}
              </p>
            </div>
          </li>
          <li className="me-2">
            <div
              onClick={() => setTabctive(2)}
              className={`inline-flex items-center justify-center p-2 md:p-3 lg:p-4 rounded-t-lg hover:text-stone-600 group ${
                tabActive !== 2
                  ? "border-b-[3px] border-transparent hover:border-stone-400"
                  : "border-b-4 border-maroon-light"
              }`}
            >
              <Modull
                className={`w-6 h-6 md:w-7 md:h-7 me-1.5 md:me-2 ${
                  tabActive !== 2
                    ? "text-stone-400 group-hover:text-stone-500"
                    : "text-maroon-light"
                }`}
              />
              <p
                className={`text-base md:text-lg cursor-pointer ${
                  tabActive !== 2
                    ? "text-stone-600 group-hover:text-stone-900"
                    : "text-maroon-light"
                }`}
              >
                Modul
              </p>
            </div>
          </li>
        </ul>
      </div>

      {/* Bahan Sosialisasi */}
      {tabActive === 0 && <BahanSosialisasi />}

      {/* Buku Pedoman */}
      {tabActive === 1 && <BukuPedoman />}

      {/* Modul */}
      {tabActive === 2 && <Modul />}
    </div>
  );
}
