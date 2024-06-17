import ArrowDown from "../../Icon/ArrowDown";
import FileDownload from "../../Icon/FileDownload";
import One from "../../Icon/Number/One";
import Three from "../../Icon/Number/Three";
import Two from "../../Icon/Number/Two";
import { useState } from "react";
import Breadcumb from "./Breadcumb";
import getLanguage from "../../../hooks/getLanguage";

export default function Mekanisme() {
  const lang = getLanguage();
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
    <div className="lg:container mx-auto pt-4 lg:pt-8 pb-8 lg:pb-12 px-4 md:px-8 lg:px-2 flex flex-col justify-center">
      {/* Breadcumb */}
      <Breadcumb />
      {/* Judul Halaman */}
      <div className="flex flex-col gap-0 lg:gap-2 my-0 mb-1 lg:mb-4">
        <h1 className="text-maroon-light font-bold text-xl md:text-2xl lg:text-3xl mb-2 lg:mb-0 mt-2 lg:mt-4">
          Whistleblowing System
        </h1>
        <p className="text-justify text-stone-900 text-base md:text-lg xl:text-xl mb-1">
          {lang === "id" ?
              "Sistem Whistleblowing KPU Provinsi DKI Jakarta adalah platform yang disediakan KPU Provinsi DKI Jakarta bagi Anda yang ingin melaporkan dugaan terjadinya suatu pelanggaran yang dilakukan oleh Pegawai (Komisioner, PNS, dan non-PNS) KPU Provinsi DKI Jakarta. Melalui sistem ini, masyarakat dapat menyampaikan kesalahan dan kekurangan pegawai di lingkungan KPU DKI Jakarta."
              :
              "The Whistleblowing System of KPU DKI Jakarta Province is a platform provided by KPU DKI Jakarta Province for those who wish to report allegations of misconduct committed by employees (Commissioners, civil servants, and non-civil servants) of KPU DKI Jakarta Province. Through this system, the public can report errors and deficiencies of employees within the KPU DKI Jakarta."
          }
        </p>
      </div>
      {/* Mekanisme */}
      <div className="overflow-hidden w-full bg-white rounded-2xl shadow-xl px-2 md:px-4 lg:px-4 py-4 md:py-6 lg:py-8 flex flex-col items-center gap-1 lg:gap-2">
        <h1 className="text-lg md:text-xl lg:text-2xl mb-5 lg:mb-6 font-bold text-stone-900">
          {lang === "id" ? "Mekanisme Whistleblowing" : "Whistleblowing Mechanism"}
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
              {lang === "id" ? "Mekanisme Pengajuan" : "Submission Mechanism"}
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
              {lang === "id" ? "Penanganan Pengajuan" : "Handling of Submissions"}
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
              {lang === "id" ? "Formulir" : "Form"}
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
              {lang === "id" ? "Mekanisme Pengajuan" : "Submission Mechanism"}
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
              {lang === "id" ? "Penanganan Pengajuan" : "Handling of Submissions"}
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
              {lang === "id" ? "Formulir" : "Form"}
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
                  {lang === "id" ?
                      "Pelapor dapat mengajukan keberatan secara tertulis kepada Atasan PPID di Lingkungan Sekretariat KPU Provinsi DKI Jakarta paling lambat 30 (tiga puluh) hari kerja setelah ditemukannya dugaan terjadinya suatu pelanggaran yang dilakukan oleh Pegawai (Komisioner, PNS dan non-PNS) KPU Provinsi DKI Jakarta dengan kesalahan sebagai berikut:"
                      :
                      "Reporters may file objections in writing to the PPID Supervisor at the Secretariat of the KPU DKI Jakarta Province no later than 30 (thirty) working days after allegations of misconduct are discovered involving employees (Commissioners, civil servants, and non-civil servants) of the KPU DKI Jakarta Province with the following errors:"
                  }
                </p>
                <ol className="flex flex-col gap-1 pl-6 list-disc text-sm md:text-base lg:text-lg">
                  <li>{lang === "id" ? "Pelanggaran kode etik" : "Violation of the code of ethics"}</li>
                  <li>{lang === "id" ? "Benturan kepentingan" : "Conflict of interest"}</li>
                  <li>{lang === "id" ? "Perbuatan melanggar hukum lainnya" : "Other illegal acts"}</li>
                </ol>
              </li>
              <li>
                {lang === "id" ?
                    "Laporan dapat disampaikan melalui sarana yang terdapat informasi kontak."
                    :
                    "Reports can be submitted through channels with contact information."
                }
              </li>
              <li>
                {lang === "id" ?
                    "KPU Provinsi DKI Jakarta sangat menghargai informasi yang Pelapor laporkan dan berkomitmen untuk menindaklanjuti. Jadi, kerahasiaan identitas Pelapor sebagai whistleblower akan diutamakan dan dijaga agar tetap rahasia."
                    :
                    "The DKI Jakarta Provincial KPU highly values the information reported by the complainant and is committed to follow up on it. Therefore, the confidentiality of the complainant's identity as a whistleblower will be prioritized and safeguarded to remain confidential."
                }
              </li>
              <li>
                {lang === "id" ?
                    "KPU Provinsi DKI Jakarta melindungi kerahasiaan Pelapor, sesuai undang-undang pasal 13 tahun 2006 tentang perlindungan saksi dan korban."
                    :
                    "The DKI Jakarta Provincial KPU protects the confidentiality of the complainant, in accordance with Law No. 13 of 2006 concerning witness and victim protection."
                }
              </li>
              <li>
                {lang === "id" ?
                    "Pengajuan aduan dapat disampaikan secara langsung atau melalui surat kepada Sekretariat Komisi Pemilihan Umum Provinsi DKI Jakarta dengan"
                    :
                    "Complaints can be submitted directly or by mail to the Secretariat of the Election Commission of DKI Jakarta Province with"
                }
                {" "}
                <b>
                {lang === "id" ? "alamat" : "address"} Jl. Salemba Raya No.15 Paseban, Senen Jakarta Pusat
                </b>{" "}
                , {lang === "id" ? "melalui" : "via"} <b>email hupmaskpudki@gmail.com</b>, {lang === "id" ? "melalui" : "via"}{" "}
                <b>SMS/WA (+62)812 9142 1021</b>, {lang === "id" ? "atau melalui" : "or through"}{" "}
                <b>{lang === "id" ? "telepon" : "phone"} (+62)21 3908701</b>
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
                  {lang === "id" ?
                      "Laporan whistleblowing akan ditindaklanjuti oleh Pejabat di Lingkungan KPU Provinsi DKI Jakarta paling lambat 30 (tiga puluh) hari kerja setelah laporan whistleblowing diterima."
                      :
                      "Whistleblowing reports will be followed up by the Officer at the Secretariat of the KPU DKI Jakarta Province no later than 30 (thirty) working days after the whistleblowing report is received."
                  }
                </p>
              </li>
              <li>
                {lang === "id" ?
                    "Dalam menindaklanjuti laporan whistleblowing, Pelapor diharapkan melakukan pengecekan secara berkala terhadap komunikasi yang mungkin akan dilakukan oleh Pejabat KPU DKI Jakarta."
                    :
                    "In following up on whistleblowing reports, the reporter is expected to regularly check for any communications that may be made by the officials of KPU DKI Jakarta."
                }
              </li>
              <li>
                <p>
                  {lang === "id" ?
                      "Pelapor Keberatan bersedia untuk ditanya lebih lanjut terkait laporan whistleblowing yang memuat:"
                      :
                      "The objecting reporter is willing to be further questioned regarding the whistleblowing report that includes:"
                  }
                </p>
                <ol className="flex flex-col gap-1 pl-6 list-disc text-sm md:text-base lg:text-lg">
                  <li>{lang === "id" ? "Nama Terlapor;" : "Name of the Reported Person;" }</li>
                  <li>{lang === "id" ? "Jabatan Terlapor;" : "Position of the Reported Person;"}</li>
                  <li>{lang === "id" ? "Hal yang dilaporkan;" : "Reported Issue/Concern;"}</li>
                  <li>
                    {lang === "id" ? "Bukti (bisa dijelaskan langsung dan/atau dilampirkan);" : "Evidence (can be described directly and/or attached);" }
                  </li>
                </ol>
              </li>
            </ol>
          </div>
        )}

        {/* Konten Tiga */}
        {activeStep === 3 && (
          <div className="w-full px-1 lg:px-16 py-4 flex flex-col gap-2 lg:gap-4">
            <div className="w-full bg-maroon-light bg-blend-lighten bg-opacity-20 px-2 lg:px-4 py-2 rounded-lg flex items-center">
              <p className="text-sm md:text-base lg:text-lg text-center text-maroon-light font-semibold">
                {lang === "id" ?
                    "Pastikan anda telah memahami Mekanisme Pengajuan dan Penanganan Pengajuan sebelum Pelaporan Whistleblowing."
                    :
                    "Make sure you understand the Submission Mechanism and Handling of Submissions before Whistleblowing Reporting."
                }
              </p>
            </div>
            <p className="text-sm md:text-base lg:text-lg text-stone-900">
              {lang === "id" ?
                  "Anda dapat melakukan pelaporan whistleblowing dengan melakukan pengunduhan file berikut."
                  :
                  "You can report whistleblowing by downloading the following file."
              }
            </p>
            <button
              onClick={handleUnduhFormulir}
              className="w-max text-sm md:text-base flex items-center bg-stone-100 border-2 border-maroon-light text-maroon-light px-4 lg:px-8 py-1.5 rounded-full font-semibold group hover:bg-maroon-light hover:bg-opacity-80 hover:border-2 hover:border-maroon-light hover:text-stone-100"
            >
              <FileDownload className="w-5 h-5 me-2" />
              <p>{lang === "id" ? "Formulir Whistleblowing" : "Whistleblowing Form"}</p>
            </button>
            <p className="text-sm md:text-base lg:text-lg text-stone-900">
              {lang === "id" ?
                  "Adapun beberapa dokumen berikut yang dapat membantu anda dalam melakukan pelaporan whistleblowing."
                  :
                  "The following documents can assist you in making whistleblowing reports."
              }
            </p>
            <button
              onClick={handleUnduhTataCara}
              className="w-max flex items-center bg-stone-100 border-2 border-maroon-light text-maroon-light px-4 lg:px-8 py-1.5 rounded-full text-sm md:text-base font-semibold group hover:bg-maroon-light hover:bg-opacity-80 hover:border-2 hover:border-maroon-light hover:text-stone-100"
            >
              <FileDownload className="w-5 h-5 me-2" />
              <p>{lang === "id" ? "Tata Cara Lapor Whistleblowing" : "Whistleblowing Reporting Procedure"}</p>
            </button>
            <button
              onClick={handleUnduhTim}
              className="w-max flex items-center bg-stone-100 border-2 border-maroon-light text-maroon-light px-4 lg:px-8 py-1.5 rounded-full text-sm md:text-base font-semibold group hover:bg-maroon-light hover:bg-opacity-80 hover:border-2 hover:border-maroon-light hover:text-stone-100"
            >
              <FileDownload className="w-5 h-5 me-2" />
              <p>{lang === "id" ? "Tim Whistleblowing" : "Whistleblowing Team"}</p>
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
            {lang === "id" ? "Sebelumnya" : "Previously"}
          </button>
          <button
            onClick={handleNext}
            className={`flex flex-row w-max mt-4 py-1 px-3 text-sm md:text-base lg:text-lg font-medium rounded-lg border-2  ${
              activeStep === 3
                ? "bg-stone-200 text-stone-700"
                : "bg-maroon-light text-white"
            }`}
          >
            {lang === "id" ? "Selanjutnya" : "Next"}
            <ArrowDown
              className={`w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 -rotate-90 -me-3 ${
                activeStep === 3 ? "text-stone-700" : "text-white"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
