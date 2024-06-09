import BarChart from "../components/Icon/BarChart";
import SpiderChart from "../components/Icon/SpiderChart";
import StackedBarChart from "../components/Icon/StackedBarChart";
import Breadcumb from "../components/Visualisasi/Breadcumb";
import ChartDua from "../components/Visualisasi/ChartDua";
import ChartSatu from "../components/Visualisasi/ChartSatu";
import ChartTiga from "../components/Visualisasi/ChartTiga";
import { useState } from "react";

export default function Visualisasi() {
  const [tabActive, setTabctive] = useState(0);

  return (
    <>
      <div className="flex flex-col w-full bg-stone-100">
        <div className="container mx-auto pt-8 pb-12 px-2 flex flex-col justify-center">
          {/* Breadcumb */}
          <Breadcumb />
          {/* Judul Halaman */}
          <div className="flex flex-col gap-2 my-4">
            <h1 className="text-maroon-light font-bold text-3xl">
              Visualisasi Data KPU DKI Jakarta
            </h1>
            <p className="text-stone-900 text-xl mb-1">
              Bentuk visualisasi data-data pemilihan umum KPU DKI Jakarta yang
              disajikan dengan menggunakan ilustrasi grafik disertai
              interpretasi teks. Grafik yang disediakan juga meliputi tabel yang
              ada dalam publikasi Statistik Indonesia. Visualisasi ini dibagi
              menjadi tiga bagian berdasarkan data yang disajikan, yaitu:
            </p>
            {/* list */}
            <div className="flex items-center gap-4">
              <h1 className="bg-maroon-light rounded-lg text-gold text-lg w-8 h-8 text-center font-bold">
                1
              </h1>
              <h1 className="text-stone-900 font-semibold text-xl">
                Visualisasi Karakteristik Pemilih Pemilu
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <h1 className="bg-maroon-light rounded-lg text-gold text-lg w-8 h-8 text-center font-bold">
                2
              </h1>
              <h1 className="text-stone-900 font-semibold text-xl">
                Visualisasi Indikator Pemilu
              </h1>
            </div>
            <div className="flex items-center gap-4 mb-2">
              <h1 className="bg-maroon-light rounded-lg text-gold text-lg w-8 h-8 text-center font-bold">
                3
              </h1>
              <h1 className="text-stone-900 font-semibold text-xl">
                Visualisasi Persebaran Pilihan Pemilu
              </h1>
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
                  <BarChart
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
                    Karakteristik Pemilih Pemilu
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
                  <SpiderChart
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
                    Indikator Pemilu
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
                  <StackedBarChart
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
                    Persebaran Pilihan Pemilu
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Karakteristik Pemilih Pemilu */}
          {tabActive === 0 && (
            <>
              <div className="flex flex-col gap-1 pt-4">
                <h1 className="text-2xl text-maroon-light font-bold">
                  Visualisasi Karakteristik Pemilih Pemilu
                </h1>
                <p className="text-stone-900 text-lg">
                  Visualisasi ini menampilkan berbagai demografi dan
                  karakteristik sosial ekonomi pemilih yang berpartisipasi dalam
                  Pemilu 2024, termasuk usia, jenis kelamin, pendidikan, dan
                  pekerjaan.
                </p>
              </div>
              {/* Grafik */}
              <div className="grid grid-cols-1 justify-center gap-4 mb-12">
                <ChartSatu />
              </div>
            </>
          )}

          {/* Indikator Pemilu */}
          {tabActive === 1 && (
            <>
              <div className="flex flex-col gap-1 pt-4">
                <h1 className="text-2xl text-maroon-light font-bold">
                  Visualisasi Indikator Pemilu
                </h1>
                <p className="text-stone-900 text-lg">
                  Visualisasi ini menunjukkan berbagai indikator yang
                  mempengaruhi Pemilu 2024, seperti partisipasi pemilih, jumlah
                  kandidat, dan tingkat kampanye di berbagai wilayah.
                </p>
              </div>
              {/* Grafik */}
              <div className="grid grid-cols-1 mb-12 justify-center gap-4">
                <ChartDua />
              </div>
            </>
          )}

          {/* Persebaran Pilihan Pemilu */}
          {tabActive === 2 && (
            <>
              <div className="flex flex-col gap-1 pt-4">
                <h1 className="text-2xl text-maroon-light font-bold">
                  Visualisasi Persebaran Pilihan Pemilu 2019
                </h1>
                <p className="text-stone-900 text-lg">
                  Visualisasi ini menggambarkan distribusi pilihan pemilih dalam
                  Pemilu 2019 di seluruh wilayah, menyoroti pola suara yang
                  mendukung berbagai partai politik dan kandidat.
                </p>
              </div>
              {/* Grafik */}
              <div className="grid grid-cols-1 mb-12 justify-center gap-4">
                <ChartTiga />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
