import { useState } from "react";
import Breadcumb from "./Breadcumb";
import BarChart from "../Icon/BarChart";
import SpiderChart from "../Icon/SpiderChart";
import StackedBarChart from "../Icon/StackedBarChart";
import ChartSatu from "./ChartSatu";
import ChartDua from "./ChartDua";
import ChartTiga from "./ChartTiga";

export default function VisualisasiComponent() {
  const [tabActive, setTabctive] = useState(0);
  return (
    <div className="lg:container mx-auto pt-4 lg:pt-8 pb-8 lg:pb-12 px-4 md:px-8 lg:px-2 flex flex-col justify-center">
      {/* Breadcumb */}
      <Breadcumb />
      {/* Judul Halaman */}
      <div className="flex flex-col gap-0 lg:gap-2 my-0 mb-1 lg:mb-4">
        <h1 className="text-maroon-light font-bold text-xl md:text-2xl lg:text-3xl mb-2 lg:mb-0 mt-2 lg:mt-4">
          Visualisasi Data KPU Provinsi DKI Jakarta
        </h1>
        <p className="text-justify text-stone-900 text-base md:text-lg lg:text-xl mb-2 lg:mb-1">
          Bentuk visualisasi data-data pemilihan umum KPU DKI Jakarta yang
          disajikan dengan menggunakan ilustrasi grafik disertai interpretasi
          teks. Grafik yang disediakan juga meliputi tabel yang ada dalam
          publikasi Statistik Indonesia. Visualisasi ini dibagi menjadi tiga
          bagian berdasarkan data yang disajikan, yaitu:
        </p>
        {/* list */}
        <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
          <h1 className="bg-maroon-light rounded-lg text-gold text-sm md:text-base lg:text-lg w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-center font-bold">
            1
          </h1>
          <h1 className="text-stone-900 font-semibold text-base md:text-lg lg:text-xl">
            Visualisasi Karakteristik Pemilih Pemilu
          </h1>
        </div>
        <div className="flex items-center gap-2 md:gap-3 lg:gap-4 mt-1 md:mt-1.5 lg:mt-0">
          <h1 className="bg-maroon-light rounded-lg text-gold text-sm md:text-base lg:text-lg w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-center font-bold">
            2
          </h1>
          <h1 className="text-stone-900 font-semibold text-base md:text-lg lg:text-xl">
            Visualisasi Indikator Pemilu
          </h1>
        </div>
        <div className="flex items-center gap-2 md:gap-3 lg:gap-4 mt-1 md:mt-1.5 lg:mt-0">
          <h1 className="bg-maroon-light rounded-lg text-gold text-sm md:text-base lg:text-lg w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-center font-bold">
            3
          </h1>
          <h1 className="text-stone-900 font-semibold text-base md:text-lg lg:text-xl">
            Visualisasi Persebaran Pilihan Pemilu
          </h1>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b-2 border-stone-400 mt-2 md:mt-2.5 lg:mt-0">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-stone-500 ">
          <li className="me-1 lg:me-2">
            <div
              onClick={() => setTabctive(0)}
              className={`inline-flex items-center justify-center px-1 py-2 md:p-2 lg:p-4 rounded-t-lg hover:text-stone-600 group ${
                tabActive !== 0
                  ? "border-b-[3px] border-transparent hover:border-stone-400"
                  : "border-b-4 border-maroon-light"
              }`}
            >
              <BarChart
                className={`w-6 h-6 md:w-7 md:h-7 me-1 md:me-1.5 lg:me-2 ${
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
                {window.innerWidth > 768
                  ? "Karakteristik Pemilih Pemilu"
                  : "Karakteristik"}
              </p>
            </div>
          </li>
          <li className="me-1 lg:me-2">
            <div
              onClick={() => setTabctive(1)}
              className={`inline-flex items-center justify-center px-1 py-2 md:p-2 lg:p-4 rounded-t-lg hover:text-stone-600 group ${
                tabActive !== 1
                  ? "border-b-[3px] border-transparent hover:border-stone-400"
                  : "border-b-4 border-maroon-light"
              }`}
            >
              <SpiderChart
                className={`w-6 h-6 md:w-7 md:h-7 me-1 md:me-1.5 lg:me-2 ${
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
                {window.innerWidth > 768 ? "Indikator Pemilu" : "Indikator"}
              </p>
            </div>
          </li>
          <li className="me-1 lg:me-2">
            <div
              onClick={() => setTabctive(2)}
              className={`inline-flex items-center justify-center px-1 py-2 md:p-2 lg:p-4 rounded-t-lg hover:text-stone-600 group ${
                tabActive !== 2
                  ? "border-b-[3px] border-transparent hover:border-stone-400"
                  : "border-b-4 border-maroon-light"
              }`}
            >
              <StackedBarChart
                className={`w-6 h-6 md:w-7 md:h-7 me-1 md:me-1.5 lg:me-2 ${
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
                {window.innerWidth > 768
                  ? "Persebaran Pemilih Pemilu"
                  : "Persebaran"}
              </p>
            </div>
          </li>
        </ul>
      </div>

      {/* Karakteristik Pemilih Pemilu */}
      {tabActive === 0 && (
        <div>
          <div className="flex flex-col gap-1 pt-4">
            <h1 className="text-lg md:text-xl lg:text-2xl text-maroon-light font-bold">
              Visualisasi Karakteristik Pemilih Pemilu
            </h1>
            <p className="text-stone-900 text-sm md:text-base lg:text-lg">
              Visualisasi ini menampilkan berbagai demografi dan karakteristik
              sosial ekonomi pemilih yang berpartisipasi dalam Pemilu 2024,
              termasuk usia, jenis kelamin, pendidikan, dan pekerjaan.
            </p>
          </div>
          {/* Grafik */}
          <div className="grid grid-cols-1 justify-center gap-4 mt-1.5 md:mt-2.5 mb-12">
            <ChartSatu />
          </div>
        </div>
      )}

      {/* Indikator Pemilu */}
      {tabActive === 1 && (
        <div>
          <div className="flex flex-col gap-1 pt-4">
            <h1 className="text-lg md:text-xl lg:text-2xl text-maroon-light font-bold">
              Visualisasi Indikator Pemilu
            </h1>
            <p className="text-stone-900 text-sm md:text-base lg:text-lg">
              Visualisasi ini menunjukkan berbagai indikator yang mempengaruhi
              Pemilu 2024, seperti partisipasi pemilih, jumlah kandidat, dan
              tingkat kampanye di berbagai wilayah.
            </p>
          </div>
          {/* Grafik */}
          <div className="grid grid-cols-1 mb-12 justify-center gap-4 mt-1.5 md:mt-2.5">
            <ChartDua />
          </div>
        </div>
      )}

      {/* Persebaran Pilihan Pemilu */}
      {tabActive === 2 && (
        <div>
          <div className="flex flex-col gap-1 pt-4">
            <h1 className="text-lg md:text-xl lg:text-2xl text-maroon-light font-bold">
              Visualisasi Persebaran Pilihan Pemilu 2019
            </h1>
            <p className="text-stone-900 text-sm md:text-base lg:text-lg">
              Visualisasi ini menggambarkan distribusi pilihan pemilih dalam
              Pemilu 2019 di seluruh wilayah, menyoroti pola suara yang
              mendukung berbagai partai politik dan kandidat.
            </p>
          </div>
          {/* Grafik */}
          <div className="grid grid-cols-1 mb-12 justify-center gap-4 mt-1.5 md:mt-2.5">
            <ChartTiga />
          </div>
        </div>
      )}
    </div>
  );
}
