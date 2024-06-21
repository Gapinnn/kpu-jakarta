import { useState } from "react";
import Breadcumb from "./Breadcumb";
import Table from "../Icon/Table";
import TabulasiSatu from "./TabulasiSatu";
import TabulasiDua from "./TabulasiDua";
import TabulasiTiga from "./TabulasiTiga";
import getLanguage from "../../hooks/getLanguage";

export default function TabulasiComponent() {
  const lang = getLanguage();
  const [tabActive, setTabctive] = useState(0);
  return (
    <div className="lg:container mx-auto pt-4 lg:pt-8 pb-8 lg:pb-12 px-4 md:px-8 lg:px-2 flex flex-col justify-center">
      {/* Breadcumb */}
      <Breadcumb />
      {/* Judul Halaman */}
      <div className="flex flex-col gap-0 lg:gap-2 my-0 mb-1 lg:mb-4">
        <h1 className="text-maroon-light font-bold text-xl md:text-2xl lg:text-3xl mb-2 lg:mb-0 mt-2 lg:mt-4">
          {lang === "id"
            ? "Tabulasi Data KPU Provinsi DKI Jakarta"
            : "Data Tabulation of KPU DKI Jakarta Province"}
        </h1>
        <p className="text-justify text-stone-900 text-base md:text-lg lg:text-xl mb-2 lg:mb-1">
          {lang === "id"
            ? "Tabulasi data-data pemilihan umum KPU DKI Jakarta yang disajikan dalam bentuk tabel untuk dapat dimanfaatkan masyarakat. Tabel yang disediakan juga meliputi tabel yang ada dalam publikasi Statistik Indonesia. Tabulasi data ini dibagi menjadi tiga bagian berdasarkan data yang disajikan, yaitu:"
            : "Tabulation of electoral data from KPU DKI Jakarta presented in table format for public use. The tables provided also include those found in Indonesia's Statistical Publications. This data tabulation is divided into three sections based on the presented data:"}
        </p>
        {/* list */}
        <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
          <h1 className="bg-maroon-light rounded-lg text-gold text-sm md:text-base lg:text-lg w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-center font-bold">
            1
          </h1>
          <h1 className="text-stone-900 font-semibold text-base md:text-lg lg:text-xl">
            {lang === "id"
              ? "Tabulasi Karakteristik Pemilih Pemilu"
              : "Tabulation of Voter Characteristics in Elections"}
          </h1>
        </div>
        <div className="flex items-center gap-2 md:gap-3 lg:gap-4 mt-1 md:mt-1.5 lg:mt-0">
          <h1 className="bg-maroon-light rounded-lg text-gold text-sm md:text-base lg:text-lg w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-center font-bold">
            2
          </h1>
          <h1 className="text-stone-900 font-semibold text-base md:text-lg lg:text-xl">
            {lang === "id"
              ? "Tabulasi Indikator Pemilu"
              : "Tabulation of Election Indicators"}
          </h1>
        </div>
        <div className="flex items-center gap-2 md:gap-3 lg:gap-4 mt-1 md:mt-1.5 lg:mt-0">
          <h1 className="bg-maroon-light rounded-lg text-gold text-sm md:text-base lg:text-lg w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-center font-bold">
            3
          </h1>
          <h1 className="text-stone-900 font-semibold text-base md:text-lg lg:text-xl">
            {lang === "id"
              ? "Tabulasi Persebaran Pilihan Pemilu"
              : "Tabulation of Election Vote Distribution"}
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
              <Table
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
                  ? lang === "id"
                    ? "Karakteristik Pemilih Pemilu"
                    : "Characteristics of Election Voters"
                  : lang === "id"
                  ? "Karakteristik"
                  : "Characteristics"}
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
              <Table
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
                {window.innerWidth > 768
                  ? lang === "id"
                    ? "Indikator Pemilu"
                    : "Election Indicators"
                  : lang === "id"
                  ? "Indikator"
                  : "Indicators"}
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
              <Table
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
                  ? lang === "id"
                    ? "Persebaran Pemilih Pemilu"
                    : "Distribution of Election Voters"
                  : lang === "id"
                  ? "Persebaran"
                  : "Distribution"}
              </p>
            </div>
          </li>
        </ul>
      </div>

      {/* Karakteristik Pemilih Pemilu */}
      {tabActive === 0 && (
        <div>
          {/* Subjudul Halaman */}
          <div className="flex flex-col gap-1 pt-4">
            <h1 className="text-lg md:text-xl lg:text-2xl text-maroon-light font-bold">
              {lang === "id"
                ? "Tabulasi Karakteristik Pemilih Pemilu"
                : "Tabulation of Election Voter Characteristics"}
            </h1>
            <p className="text-stone-900 text-sm md:text-base lg:text-lg text-justify">
              {lang === "id"
                ? "Tabel-tabel ini menampilkan berbagai demografi dan karakteristik sosial ekonomi pemilih yang berpartisipasi dalam Pemilu 2024, termasuk usia, jenis kelamin, pendidikan, dan pekerjaan."
                : "These tables display various demographic and socio-economic characteristics of voters participating in the 2024 Elections, including age, gender, education, and occupation."}
            </p>
          </div>
          {/* Tabulasi Satu */}
          <TabulasiSatu />
        </div>
      )}

      {/* Indikator Pemilu */}
      {tabActive === 1 && (
        <div>
          {/* Subjudul Halaman */}
          <div className="flex flex-col gap-1 pt-4">
            <h1 className="text-lg md:text-xl lg:text-2xl text-maroon-light font-bold">
              {lang === "id"
                ? "Tabulasi Indikator Pemilu"
                : "Tabulation of Election Indicators"}
            </h1>
            <p className="text-stone-900 text-sm md:text-base lg:text-lg text-justify">
              {lang === "id"
                ? "Tabel-tabel ini menunjukkan berbagai indikator yang mempengaruhi Pemilu 2024, seperti partisipasi pemilih, jumlah kandidat, dan tingkat kampanye di berbagai wilayah."
                : "These tables show various indicators affecting the 2024 Elections, such as voter turnout, number of candidates, and campaign intensity across different regions."}
            </p>
          </div>
          {/* Tabulasi Dua */}
          <TabulasiDua />
        </div>
      )}

      {/* Persebaran Pilihan Pemilu */}
      {tabActive === 2 && (
        <div>
          {/* Subjudul Halaman */}
          <div className="flex flex-col gap-1 pt-4">
            <h1 className="text-lg md:text-xl lg:text-2xl text-maroon-light font-bold">
              {lang === "id"
                ? "Tabulasi Persebaran Pilihan Pemilu"
                : "Tabulation of Election Vote Distribution"}
            </h1>
            <p className="text-stone-900 text-sm md:text-base lg:text-lg text-justify">
              {lang === "id"
                ? "Tabel-tabel ini menggambarkan distribusi pilihan pemilih dalam Pemilu 2019 di seluruh wilayah, menyoroti pola suara yang mendukung berbagai partai politik dan kandidat."
                : "These tables depict the distribution of voter preferences in the 2019 Elections across all regions, highlighting voting patterns that support various political parties and candidates."}
            </p>
          </div>
          {/* Tabulasi Tiga */}
          <TabulasiTiga />
        </div>
      )}
    </div>
  );
}
