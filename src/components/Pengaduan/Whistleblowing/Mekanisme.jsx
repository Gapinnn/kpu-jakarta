import FileDownload from "../../Icon/FileDownload";
import One from "../../Icon/Number/One";
import Three from "../../Icon/Number/Three";
import Two from "../../Icon/Number/Two";
import { useState } from "react";

export default function Mekanisme() {
  const [activeStep, setActiveStep] = useState(1);
  const handleUnduhFormulir = () => {
    const link = document.createElement("a");
    link.href = "/file/FormulirWhistleblowing.pdf";
    link.download = "FormulirWhistleblowing.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleUnduhTataCara = () => {
    const link = document.createElement("a");
    link.href = "/images/TataCaraLaporWhistleblowing.png";
    link.download = "TataCaraLaporWhistleblowing.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleUnduhTim = () => {
    const link = document.createElement("a");
    link.href = "/file/TimWhistleblowing.pdf";
    link.download = "TimWhistleblowing.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full bg-white rounded-2xl shadow-xl px-4 py-8 flex flex-col items-center gap-2">
      <h1 className="text-2xl mb-6 font-bold text-stone-900">
        Mekanisme Whistleblowing
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
                Pelapor dapat mengajukan keberatan secara tertulis kepada Atasan
                PPID di Lingkungan Sekretariat KPU Provinsi DKI Jakarta paling
                lambat 30 (tiga puluh) hari kerja setelah ditemukannya dugaan
                terjadinya suatu pelanggaran yang dilakukan oleh Pegawai
                (Komisioner, PNS dan non-PNS) KPU Provinsi DKI Jakarta dengan
                kesalahan sebagai berikut:
              </p>
              <ol className="flex flex-col gap-1 pl-6 list-disc text-justify text-xl">
                <li>Pelanggaran kode etik</li>
                <li>Benturan kepentingan</li>
                <li>Perbuatan melanggar hukum lainnya</li>
              </ol>
            </li>
            <li>
              Laporan dapat disampaikan melalui sarana yang terdapat informasi
              kontak
            </li>
            <li>
              KPU Provinsi DKI Jakarta sangat menghargai informasi yang Pelapor
              laporkan dan berkomitmen untuk menindaklanjuti. Jadi, kerahasiaan
              identitas Pelapor sebagai whistleblower akan diutamakan dan dijaga
              agar tetap rahasia
            </li>
            <li>
              KPU Provinsi DKI Jakarta melindungi kerahasiaan Pelapor, sesuai
              undang-undang pasal 13 tahun 2006 tentang perlindungan saksi dan
              korban
            </li>
            <li>
              Pengajuan aduan dapat disampaikan secara langsung atau melalui
              surat kepada Sekretariat Komisi Pemilihan Umum Provinsi DKI
              Jakarta dengan{" "}
              <b>alamat Jl. Salemba Raya No.15 Paseban, Senen Jakarta Pusat</b>{" "}
              , melalui <b>email hupmaskpudki@gmail.com</b>, melalui{" "}
              <b>SMS/WA (+62)812 9142 1021</b>, atau melalui{" "}
              <b>telepon (+62)21 3908701</b>
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
                Laporan whistleblowing akan ditindaklanjuti oleh Pejabat di
                Lingkungan KPU Provinsi DKI Jakarta paling lambat 30 (tiga
                puluh) hari kerja setelah laporan whistleblowing diterima
              </p>
            </li>
            <li>
              Dalam menindaklanjuti laporan whistleblowing, Pelapor diharapkan
              melakukan pengecekan secara berkala terhadap komunikasi yang
              mungkin akan dilakukan oleh Pejabat KPU DKI Jakarta
            </li>
            <li>
              <p>
                Pelapor Keberatan bersedia untuk ditanya lebih lanjut terkait
                laporan whistleblowing yang memuat:
              </p>
              <ol className="flex flex-col gap-1 pl-6 list-disc text-justify text-xl">
                <li>Nama Terlapor;</li>
                <li>Jabatan Terlapor;</li>
                <li>Hal yang dilaporkan;</li>
                <li>Bukti (bisa dijelaskan langsung dan/atau dilampirkan);</li>
              </ol>
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
              Pengajuan sebelum Pelaporan Whistleblowing
            </p>
          </div>
          <p className="text-xl text-stone-900">
            Anda dapat melakukan pelaporan whistleblowing dengan melakukan
            pengunduhan file berikut
          </p>
          <button
            onClick={handleUnduhFormulir}
            className="w-max flex items-center bg-stone-100 border-2 border-maroon-light text-maroon-light px-9 py-1.5 rounded-full text-base font-semibold group hover:bg-maroon-light hover:bg-opacity-80 hover:border-2 hover:border-maroon-light hover:text-stone-100"
          >
            <FileDownload className="w-5 h-5 me-2" />
            <p>Formulir Whistleblowing</p>
          </button>
          <p className="text-xl text-stone-900">
            Adapun beberapa dokumen berikut yang dapat membantu anda dalam
            melakukan pelaporan whistleblowing
          </p>
          <button
            onClick={handleUnduhTataCara}
            className="w-max flex items-center bg-stone-100 border-2 border-maroon-light text-maroon-light px-9 py-1.5 rounded-full text-base font-semibold group hover:bg-maroon-light hover:bg-opacity-80 hover:border-2 hover:border-maroon-light hover:text-stone-100"
          >
            <FileDownload className="w-5 h-5 me-2" />
            <p>Tata Cara Lapor Whistleblowing</p>
          </button>
          <button
            onClick={handleUnduhTim}
            className="w-max flex items-center bg-stone-100 border-2 border-maroon-light text-maroon-light px-9 py-1.5 rounded-full text-base font-semibold group hover:bg-maroon-light hover:bg-opacity-80 hover:border-2 hover:border-maroon-light hover:text-stone-100"
          >
            <FileDownload className="w-5 h-5 me-2" />
            <p>Tim Whistleblowing</p>
          </button>
        </div>
      )}
    </div>
  );
}
