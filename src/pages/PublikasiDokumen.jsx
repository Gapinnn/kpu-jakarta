import { Link } from "react-router-dom";
import BahanSosialisasi from "../components/Publikasi/BahanSosialisasi";
import BukuPedoman from "../components/Publikasi/BukuPedoman";
import Modul from "../components/Publikasi/Modul";

export default function PublikasiDokumen() {
  return (
    <>
      <div className="flex flex-col gap-0 bg-stone-200 relative">
        <div className="w-full rounded-xl flex flex-col gap-0 absolute bottom-0">
          <div className="bg-maroon-light bg-opacity-85 w-full h-52 rounded-t-full"></div>
          <div className="bg-maroon-light bg-opacity-85 w-full h-8"></div>
        </div>
        <div className="container mx-auto py-10 px-2 flex flex-col justify-center">
          {/* Breadcumb */}
          <nav
            className="w-fit flex px-5 py-3 mb-2 text-stone-900 border border-gray-200 rounded-xl bg-stone-100 shadow-xl"
            aria-label="Breadcrumb"
          >
            <ol className="inline-flex items-center space-x-1 rtl:space-x-reverse">
              <Link to={"/id"} className="inline-flex items-center">
                <div className="inline-flex items-center text-lg font-medium text-maroon-light hover:text-maroon">
                  <svg
                    className="w-5 h-5 me-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#660300"
                    stroke="#660300"
                    viewBox="0 0 20 20"
                  >
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                  </svg>
                  Beranda
                </div>
              </Link>
              <Link to={"/id/publikasi/dokumen"}>
                <div className="flex items-center">
                  <svg
                    className="rtl:rotate-180 block w-3.5 h-3.5 mx-1.5 text-maroon-light "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <p className="text-lg text-maroon-light font-medium">
                    Publikasi
                  </p>
                </div>
              </Link>
              {/* Current Page */}
              <Link>
                <div className="flex items-center">
                  <svg
                    className="rtl:rotate-180 block w-3.5 h-3.5 mx-1.5 text-gray-900"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <p className="text-lg text-gray-900 font-medium">Dokumen</p>
                </div>
              </Link>
            </ol>
          </nav>
          <BahanSosialisasi />
          <BukuPedoman />
          <Modul />
        </div>
      </div>
    </>
  );
}
