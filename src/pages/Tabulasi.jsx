import Breadcumb from "../components/Tabulasi/Breadcumb";
import TabulasiSatu from "../components/Tabulasi/TabulasiSatu";

export default function Tabulasi() {
  return (
    <>
      <div className="flex flex-col w-full bg-stone-100">
        <div className="container mx-auto pt-8 pb-12 px-2 flex flex-col justify-center">
          {/* Breadcumb */}
          <Breadcumb />
          {/* Judul Halaman */}
          <div className="flex flex-col gap-2 mb-6 mt-4">
            <h1 className="text-maroon-light font-bold text-3xl">
              Tabulasi Data KPU DKI Jakarta
            </h1>
            <p className="text-stone-900 text-xl">
              Tabulasi data-data pemilihan umum KPU DKI Jakarta yang disajikan
              dalam bentuk tabel untuk dapat dimanfaatkan masyarakat. Tabel yang
              disediakan juga meliputi tabel yang ada dalam publikasi Statistik
              Indonesia.
            </p>
          </div>

          {/* Subjudul Halaman */}
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl text-maroon-light font-bold">
              Tabulasi Karakteristik Pemilih Pemilu
            </h1>
            <p className="text-stone-900 text-lg">
              Tabel-tabel ini menampilkan berbagai demografi dan karakteristik
              sosial ekonomi pemilih yang berpartisipasi dalam Pemilu 2024,
              termasuk usia, jenis kelamin, pendidikan, dan pekerjaan.
            </p>
          </div>
          {/* Tabulasi Satu */}
          <TabulasiSatu />
        </div>
      </div>
    </>
  );
}
