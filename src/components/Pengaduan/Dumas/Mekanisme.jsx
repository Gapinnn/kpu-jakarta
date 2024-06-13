import ArrowDown from "../../Icon/ArrowDown";
import FileDownload from "../../Icon/FileDownload";
import One from "../../Icon/Number/One";
import Three from "../../Icon/Number/Three";
import Two from "../../Icon/Number/Two";
import { useState } from "react";

export default function Mekanisme() {
  const [activeStep, setActiveStep] = useState(1);
  const handleUnduhFormulir = () => {
    const link = document.createElement("a");
    link.href = "/file/FormulirLaporanAduanMasyarakat.pdf";
    link.download = "FormulirLaporanAduanMasyarakat.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleNext = () => {
    if (activeStep < 3) {
      setActiveStep(activeStep + 1);
    }
  };

  const handlePrev = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    }
  };

  return (
    <div className="overflow-hidden w-full bg-white rounded-2xl shadow-xl px-2 md:px-4 lg:px-4 py-4 md:py-6 lg:py-8 flex flex-col items-center gap-1 lg:gap-2">
      <h1 className="text-lg md:text-xl lg:text-2xl mb-5 lg:mb-6 font-bold text-stone-900">
        Mekanisme Aduan Masyarakat
      </h1>
      {/* Horizontal Stepper */}
      <ol className="hidden py-4 pb-2 lg:flex items-center justify-between mx-auto gap-2 w-full xl:w-4/5">
        <li
          onClick={() => setActiveStep(1)}
          className={`flex w-full items-center space-x-2 cursor-pointer ${
            activeStep >= 1 ? "text-maroon-light" : "text-stone-600"
          }`}
        >
          <span
            className={`flex items-center justify-center w-10 h-10 rounded-full shrink-0 ${
              activeStep >= 1 ? "bg-gold" : "bg-stone-300"
            }`}
          >
            <One
              className={`w-6 h-6 md:w-8 md:h-8 ${
                activeStep >= 1 ? "text-maroon-light" : "text-stone-600"
              }`}
            />
          </span>
          <h2
            className={`text-base md:text-lg font-bold text-center w-max shrink-0 ${
              activeStep >= 1 ? "text-maroon-light" : "text-stone-600"
            }`}
          >
            Mekanisme Pengajuan
          </h2>
          <div
            className={`w-full h-1 border-2 border-opacity-50 ${
              activeStep >= 2 ? "border-gold" : "border-stone-400"
            }`}
          ></div>
        </li>
        <li
          onClick={() => setActiveStep(2)}
          className={`flex w-max items-center space-x-2 cursor-pointer ${
            activeStep >= 2 ? "text-maroon-light" : "text-stone-600"
          }`}
        >
          <span
            className={`flex items-center justify-center w-10 h-10 rounded-full shrink-0 ${
              activeStep >= 2 ? "bg-gold" : "bg-stone-300"
            }`}
          >
            <Two
              className={`w-6 h-6 md:w-8 md:h-8 ${
                activeStep >= 2 ? "text-maroon-light" : "text-stone-600"
              }`}
            />
          </span>
          <h2
            className={`text-base md:text-lg font-bold text-center w-max shrink-0 ${
              activeStep >= 2 ? "text-maroon-light" : "text-stone-600"
            }`}
          >
            Penanganan Pengajuan
          </h2>
        </li>
        <li
          onClick={() => setActiveStep(3)}
          className="flex w-full items-center text-stone-600 space-x-2 cursor-pointer"
        >
          <div
            className={`w-full h-1 border-2 border-opacity-50 ${
              activeStep >= 3 ? "border-gold" : "border-stone-400"
            }`}
          ></div>
          <span
            className={`flex items-center justify-center w-10 h-10 rounded-full shrink-0 ${
              activeStep >= 3 ? "bg-gold" : "bg-stone-300"
            }`}
          >
            <Three
              className={`w-6 h-6 md:w-8 md:h-8 ${
                activeStep >= 3 ? "text-maroon-light" : "text-stone-600"
              }`}
            />
          </span>
          <h2
            className={`text-base md:text-lg font-bold text-center w-max shrink-0 ${
              activeStep >= 3 ? "text-maroon-light" : "text-stone-600"
            }`}
          >
            Formulir
          </h2>
        </li>
      </ol>

      {/* Vertikal Stepper */}
      <ol className="relative lg:hidden text-gray-500 border-s-2 border-gold mb-2">
        <li
          onClick={() => setActiveStep(1)}
          className="mb-6 md:mb-10 ms-6 flex items-center"
        >
          <span
            className={`absolute flex items-center justify-center w-7 h-7 md:w-9 md:h-9 rounded-full -start-3.5 md:-start-[1.25rem] ${
              activeStep >= 1 ? "bg-gold" : "bg-stone-300"
            }`}
          >
            <One
              className={`w-6 h-6 md:w-8 md:h-8 ${
                activeStep >= 1 ? "text-maroon-light" : "text-stone-600"
              }`}
            />
          </span>
          <h2
            className={`text-base md:text-lg font-bold text-center w-max shrink-0 ${
              activeStep >= 1 ? "text-maroon-light" : "text-stone-600"
            }`}
          >
            Mekanisme Pengajuan
          </h2>
        </li>
        <li
          onClick={() => setActiveStep(2)}
          className="mb-6 md:mb-10 ms-6 flex items-center"
        >
          <span
            className={`absolute flex items-center justify-center w-7 h-7 md:w-9 md:h-9 rounded-full -start-3.5 md:-start-[1.25rem] ${
              activeStep >= 2 ? "bg-gold" : "bg-stone-300"
            }`}
          >
            <Two
              className={`w-6 h-6 md:w-8 md:h-8 ${
                activeStep >= 2 ? "text-maroon-light" : "text-stone-600"
              }`}
            />
          </span>
          <h2
            className={`text-base md:text-lg font-bold text-center w-max shrink-0 ${
              activeStep >= 2 ? "text-maroon-light" : "text-stone-600"
            }`}
          >
            Penanganan Pengajuan
          </h2>
        </li>
        <li
          onClick={() => setActiveStep(3)}
          className="ms-6  flex items-center"
        >
          <span
            className={`absolute flex items-center justify-center w-7 h-7 md:w-9 md:h-9 rounded-full -start-3.5 md:-start-[1.25rem] ${
              activeStep >= 3 ? "bg-gold" : "bg-stone-300"
            }`}
          >
            <Three
              className={`w-6 h-6 md:w-8 md:h-8 ${
                activeStep >= 3 ? "text-maroon-light" : "text-stone-600"
              }`}
            />
          </span>
          <h2
            className={`text-base md:text-lg font-bold text-center w-max shrink-0 ${
              activeStep >= 3 ? "text-maroon-light" : "text-stone-600"
            }`}
          >
            Formulir
          </h2>
        </li>
      </ol>

      {/* Konten Satu */}
      {activeStep === 1 && (
        <div className="w-full px-5 md:px-8 pr-3 lg:pr-0 lg:px-16 py-4">
          <ol
            type="1"
            className="flex flex-col gap-2 list-decimal text-sm md:text-base lg:text-lg"
          >
            <li>
              <p>
                Pemohon dapat mengajukan keberatan secara tertulis kepada
                Pejabat PPID di Lingkungan Sekretariat KPU Provinsi DKI Jakarta
                paling lambat 30 (tiga puluh) hari kerja setelah ditemukannya
                alasan sebagai berikut:
              </p>
              <ol className="flex flex-col gap-1 pl-6 list-disc text-sm md:text-base lg:text-lg">
                <li>pelanggaran prosedur dalam pelaksanaan program kerja;</li>
                <li>
                  tidak dilaksanakannya program kerja yang telah dijadwalkan;
                </li>
                <li>
                  ketidaksesuaian antara program kerja yang dilaksanakan dengan
                  yang telah direncanakan;
                </li>
                <li>
                  tidak ditanggapinya laporan atau aduan terkait program kerja;
                </li>
                <li>
                  ketidaktransparanan dalam penggunaan anggaran program kerja;
                </li>
                <li>
                  pengenaan biaya yang tidak wajar dalam pelaksanaan program
                  kerja; dan/atau
                </li>
                <li>
                  keterlambatan dalam pelaksanaan program kerja melebihi waktu
                  yang telah ditetapkan dalam peraturan.
                </li>
              </ol>
            </li>
            <li>
              Dalam mengajukan keberatan, pemohon wajib menyertakan identitas
              pemohon yang sah sebagaimana syarat dalam pengajuan aduan
            </li>
            <li>
              <p>
                Pemohon Keberatan harus menyertakan dokumen sebagai berikut:
              </p>
              <ol className="flex flex-col gap-1 pl-6 list-disc text-sm md:text-base lg:text-lg">
                <li>Nama Pelapor (sesuai KTP/SIM);</li>
                <li>Alamat sesuai KTP/SIM;</li>
                <li>Nama/Kegiatan Terlapor;</li>
                <li>Hal yang dilaporkan;</li>
                <li>Bukti (bisa dijelaskan langsung dan/atau dilampirkan);</li>
                <li>
                  Tanda tangan pelapor (sesuai tanggal/bulan/tahun) tidak
                  dilaksanakannya program kerja yang telah dijadwalkan;
                </li>
              </ol>
            </li>
            <li>
              Pengajuan aduan dapat disampaikan secara langsung atau melalui
              surat kepada Sekretariat Komisi Pemilihan Umum Provinsi DKI
              Jakarta dengan{" "}
              <b>alamat Jl. Salemba Raya No.15 Paseban, Senen Jakarta Pusat</b>{" "}
              atau melalui <b>email hupmaskpudki@gmail.com</b>
            </li>
            <li>
              Tim Sekretariat PPID KPU DKI Jakarta wajib memberikan salinan
              laporan aduan masyarakat disertai nomor registrasi pengaduan
              kepada Pemohon yang mengajukan keberatan.
            </li>
          </ol>
        </div>
      )}

      {/* Konten Dua */}
      {activeStep === 2 && (
        <div className="w-full px-5 md:px-8 pr-3 lg:pr-0 lg:px-16 py-4">
          <ol
            type="1"
            className="flex flex-col gap-2 list-decimal text-sm md:text-base lg:text-lg"
          >
            <li>
              <p>
                Laporan aduan masyarakat akan ditindaklanjuti oleh Pejabat PPID
                di Lingkungan Sekretariat KPU Provinsi DKI Jakarta paling lambat
                30 (tiga puluh) hari kerja setelah laporan aduan masyarakay
                diterima
              </p>
            </li>
            <li>
              Dalam menindaklanjuti laporan, pemohon diharapkan melakukan
              pengecekan secara berkala terhadap komunikasi yang mungkin akan
              dilakukan oleh Tim Sekretariat PPID KPU DKI Jakarta
            </li>
            <li>
              <p>
                Pemohon Keberatan bersedia untuk ditanya lebih lanjut terkait
                laporan yang memuat:
              </p>
              <ol className="flex flex-col gap-1 pl-6 list-disc text-sm md:text-base lg:text-lg">
                <li>Nama/Kegiatan Terlapor;</li>
                <li>Hal Yang dilaporkan;</li>
                <li>Bukti (bisa dijelaskan langsung dan/ dilampirkan);</li>
              </ol>
            </li>
            <li>
              Tim Sekretariat PPID KPU DKI Jakarta wajib memberikan salinan
              tanda terima pengajuan keberatan kepada Pemohon yang mengajukan
              keberatan.
            </li>
          </ol>
        </div>
      )}

      {/* Konten Tiga */}
      {activeStep === 3 && (
        <div className="w-full px-1 lg:px-16 py-4 flex flex-col gap-2 lg:gap-4">
          <div className="w-full bg-maroon-light bg-blend-lighten bg-opacity-20 px-2 lg:px-4 py-2 rounded-lg flex items-center">
            <p className="text-sm md:text-base lg:text-lg text-center text-maroon-light font-semibold">
              Pastikan anda telah memahami Mekanisme Pengajuan dan Penanganan
              Pengajuan sebelum Pengisian Formulir
            </p>
          </div>
          <p className="text-sm md:text-base lg:text-lg text-stone-900">
            Anda dapat melakukan pengisian formulir laporan Aduan Masyarakat
            dengan melakukan pengunduhan file berikut
          </p>
          <button
            onClick={handleUnduhFormulir}
            className="w-max text-sm md:text-base flex items-center bg-stone-100 border-2 border-maroon-light text-maroon-light px-4 lg:px-8 py-1.5 rounded-full font-semibold group hover:bg-maroon-light hover:bg-opacity-80 hover:border-2 hover:border-maroon-light hover:text-stone-100"
          >
            <FileDownload className="w-5 h-5 me-2" />
            <p>Formulir Laporan Aduan Masyarakat</p>
          </button>
        </div>
      )}

      {/* Button Navigasi */}
      <div className="flex w-full justify-between lg:hidden">
        <button
          onClick={handlePrev}
          className={`flex flex-row w-max mt-4 py-1 px-3 text-sm md:text-base lg:text-lg font-medium rounded-lg border-2  ${
            activeStep === 1
              ? "bg-stone-200 text-stone-700"
              : "bg-maroon-light text-white"
          }`}
        >
          <ArrowDown
            className={`w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rotate-90 -ms-3 ${
              activeStep === 1 ? "text-stone-700" : "text-white"
            }`}
          />
          Sebelumnya
        </button>
        <button
          onClick={handleNext}
          className={`flex flex-row w-max mt-4 py-1 px-3 text-sm md:text-base lg:text-lg font-medium rounded-lg border-2  ${
            activeStep === 3
              ? "bg-stone-200 text-stone-700"
              : "bg-maroon-light text-white"
          }`}
        >
          Selanjutnya
          <ArrowDown
            className={`w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 -rotate-90 -me-3 ${
              activeStep === 3 ? "text-stone-700" : "text-white"
            }`}
          />
        </button>
      </div>
    </div>
  );
}
