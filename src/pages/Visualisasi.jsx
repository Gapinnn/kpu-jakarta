import Breadcumb from "../components/Visualisasi/Breadcumb";
import ChartDua from "../components/Visualisasi/ChartDua";
import ChartSatu from "../components/Visualisasi/ChartSatu";
import ChartTiga from "../components/Visualisasi/ChartTiga";

export default function Visualisasi() {
  return (
    <>
      <div className="flex flex-col w-full bg-stone-100">
        <div className="container mx-auto pt-8 pb-12 px-2 flex flex-col justify-center">
          {/* Breadcumb */}
          <Breadcumb />
          {/* Judul Halaman */}
          <div className="flex flex-col gap-2 mb-6 mt-4">
            <h1 className="text-maroon-light font-bold text-3xl">
              Visualisasi Data KPU DKI Jakarta
            </h1>
            <p className="text-stone-900 text-xl">
              Bentuk visualisasi data-data pemilihan umum KPU DKI Jakarta yang
              disajikan dengan menggunakan ilustrasi grafik disertai
              interpretasi teks.
            </p>
          </div>

          {/* Subjudul Halaman */}
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl text-maroon-light font-bold">
              Visualisasi Karakteristik Pemilih Pemilu
            </h1>
            <p className="text-stone-900 text-lg">
              Visualisasi ini menampilkan berbagai demografi dan karakteristik
              sosial ekonomi pemilih yang berpartisipasi dalam Pemilu 2024,
              termasuk usia, jenis kelamin, pendidikan, dan pekerjaan.
            </p>
          </div>
          {/* Grafik */}
          <div className="grid grid-cols-1 justify-center gap-4 mb-12">
            <ChartSatu />
          </div>

          {/* Subjudul Halaman */}
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl text-maroon-light font-bold">
              Visualisasi Indikator Pemilu
            </h1>
            <p className="text-stone-900 text-lg">
              Visualisasi ini menunjukkan berbagai indikator yang mempengaruhi
              Pemilu 2024, seperti partisipasi pemilih, jumlah kandidat, dan
              tingkat kampanye di berbagai wilayah.
            </p>
          </div>
          {/* Grafik */}
          <div className="grid grid-cols-1 mb-12 justify-center gap-4">
            <ChartDua />
          </div>

          {/* Subjudul Halaman */}
          <div className="flex flex-col gap-1">
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
        </div>
      </div>
    </>
  );
}
