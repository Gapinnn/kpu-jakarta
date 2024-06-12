import BahanSosialisasi from "../components/Publikasi/Dokumen/BahanSosialisasi";
import BukuPedoman from "../components/Publikasi/Dokumen/BukuPedoman";
import Modul from "../components/Publikasi/Dokumen/Modul";
import Breadcumb from "../components/Publikasi/Dokumen/Breadcumb";
import { useState } from "react";
import Sosialisasi from "../components/Icon/Sosialisasi";
import Pedoman from "../components/Icon/Pedoman";
import Modull from "../components/Icon/Modull";

export default function PublikasiDokumen() {
  const [tabActive, setTabctive] = useState(0);
  return (
    <>
      <div className="flex flex-col gap-0 bg-stone-100">
        <div className="container mx-auto pt-8 pb-12 px-2 flex flex-col justify-center">
          {/* Breadcumb */}
          <Breadcumb />
          {/* Judul Halaman */}
          <div className="flex flex-col gap-2 my-4">
            <h1 className="text-maroon-light font-bold text-3xl">
              Publikasi Dokumen
            </h1>
            <p className="text-stone-900 text-xl mb-1">
              Publikasi ini mencakup berbagai dokumen resmi yang dihasilkan oleh
              KPU DKI Jakarta. Dokumen-dokumen ini disusun untuk mendukung
              profesionalitas, transparansi, dan akuntabilitas dalam proses
              pemilihan umum. Publikasi dokumen ini dibagi menjadi tiga kategori
              berdasarkan fungsi dan tujuan dokumen, yaitu:
            </p>
            {/* list */}
            <div className="flex items-center gap-4">
              <h1 className="bg-maroon-light rounded-lg text-gold text-lg w-8 h-8 text-center font-bold">
                1
              </h1>
              <h1 className="text-stone-900 font-semibold text-xl">
                Bahan Sosialisasi
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <h1 className="bg-maroon-light rounded-lg text-gold text-lg w-8 h-8 text-center font-bold">
                2
              </h1>
              <h1 className="text-stone-900 font-semibold text-xl">
                Buku Pedoman
              </h1>
            </div>
            <div className="flex items-center gap-4 mb-2">
              <h1 className="bg-maroon-light rounded-lg text-gold text-lg w-8 h-8 text-center font-bold">
                3
              </h1>
              <h1 className="text-stone-900 font-semibold text-xl">Modul</h1>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b-2 border-stone-400">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-stone-500 ">
              <li className="me-2">
                <div
                  onClick={() => setTabctive(0)}
                  className={`inline-flex items-center justify-center p-4 rounded-t-lg hover:text-stone-600 group ${
                    tabActive !== 0
                      ? "border-b-[3px] border-transparent hover:border-stone-400"
                      : "border-b-4 border-maroon-light"
                  }`}
                >
                  <Sosialisasi
                    className={`w-7 h-7 me-2 ${
                      tabActive !== 0
                        ? "text-stone-400 group-hover:text-stone-500"
                        : "text-maroon-light"
                    }`}
                  />
                  <p
                    className={`text-lg cursor-pointer ${
                      tabActive !== 0
                        ? "text-stone-600 group-hover:text-stone-900"
                        : "text-maroon-light"
                    }`}
                  >
                    Bahan Sosialisasi
                  </p>
                </div>
              </li>
              <li className="me-2">
                <div
                  onClick={() => setTabctive(1)}
                  className={`inline-flex items-center justify-center p-4 rounded-t-lg hover:text-stone-600 group ${
                    tabActive !== 1
                      ? "border-b-[3px] border-transparent hover:border-stone-400"
                      : "border-b-4 border-maroon-light"
                  }`}
                >
                  <Pedoman
                    className={`w-7 h-7 me-2 ${
                      tabActive !== 1
                        ? "text-stone-400 group-hover:text-stone-500"
                        : "text-maroon-light"
                    }`}
                  />
                  <p
                    className={`text-lg cursor-pointer ${
                      tabActive !== 1
                        ? "text-stone-600 group-hover:text-stone-900"
                        : "text-maroon-light"
                    }`}
                  >
                    Buku Pedoman
                  </p>
                </div>
              </li>
              <li className="me-2">
                <div
                  onClick={() => setTabctive(2)}
                  className={`inline-flex items-center justify-center p-4 rounded-t-lg hover:text-stone-600 group ${
                    tabActive !== 2
                      ? "border-b-[3px] border-transparent hover:border-stone-400"
                      : "border-b-4 border-maroon-light"
                  }`}
                >
                  <Modull
                    className={`w-7 h-7 me-2 ${
                      tabActive !== 2
                        ? "text-stone-400 group-hover:text-stone-500"
                        : "text-maroon-light"
                    }`}
                  />
                  <p
                    className={`text-lg cursor-pointer ${
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
      </div>
    </>
  );
}