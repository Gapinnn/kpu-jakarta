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

  return (
    <div className="w-full bg-white rounded-2xl shadow-xl px-4 py-8 flex flex-col items-center gap-2">
      <h1 className="text-2xl mb-6 font-bold text-stone-900">
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
              className={`w-8 h-8 ${
                activeStep >= 1 ? "text-maroon-light" : "text-stone-600"
              }`}
            />
          </span>
          <h2
            className={`text-xl font-bold text-center w-max shrink-0 ${
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
              className={`w-8 h-8 ${
                activeStep >= 2 ? "text-maroon-light" : "text-stone-600"
              }`}
            />
          </span>
          <h2
            className={`text-xl font-bold text-center w-max shrink-0 ${
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
              className={`w-8 h-8 ${
                activeStep >= 3 ? "text-maroon-light" : "text-stone-600"
              }`}
            />
          </span>
          <h2
            className={`text-xl font-bold text-center w-max shrink-0 ${
              activeStep >= 3 ? "text-maroon-light" : "text-stone-600"
            }`}
          >
            Formulir
          </h2>
        </li>
      </ol>

      {/* Konten Satu */}
      {activeStep === 1 && (
        <div className="w-full px-16 py-4">
          <ol
            type="1"
            className="flex flex-col gap-2 list-decimal text-justify text-xl"
          >
            <li>
              <p>
                Pemohon dapat mengajukan keberatan secara tertulis kepada
                Pejabat PPID di Lingkungan Sekretariat KPU Provinsi DKI Jakarta
                paling lambat 30 (tiga puluh) hari kerja setelah ditemukannya
                alasan sebagai berikut:
              </p>
              <ol className="flex flex-col gap-1 pl-6 list-disc text-justify text-xl">
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
              <ol className="flex flex-col gap-1 pl-6 list-disc text-justify text-xl">
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
        <div className="w-full px-16 py-4">
          <ol
            type="1"
            className="flex flex-col gap-2 list-decimal text-justify text-xl"
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
              <ol className="flex flex-col gap-1 pl-6 list-disc text-justify text-xl">
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
        <div className="w-full px-16 py-4 flex flex-col gap-4">
          <div className="w-full bg-maroon-light bg-blend-lighten bg-opacity-20 px-4 py-2 rounded-lg flex items-center">
            <p className="text-xl text-maroon-light font-semibold">
              Pastikan anda telah memahami Mekanisme Pengajuan dan Penanganan
              Pengajuan sebelum Pengisian Formulir
            </p>
          </div>
          <p className="text-xl text-stone-900">
            Anda dapat melakukan pengisian formulir laporan Aduan Masyarakat
            dengan melakukan pengunduhan file berikut
          </p>
          <button
            onClick={handleUnduhFormulir}
            className="w-max flex items-center bg-stone-100 border-2 border-maroon-light text-maroon-light px-9 py-1.5 rounded-full text-base font-semibold group hover:bg-maroon-light hover:bg-opacity-80 hover:border-2 hover:border-maroon-light hover:text-stone-100"
          >
            <FileDownload className="w-5 h-5 me-2" />
            <p>Formulir Laporan Aduan Masyarakat</p>
          </button>
        </div>
      )}
    </div>
  );
}
