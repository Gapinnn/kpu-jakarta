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
    <div className="lg:container mx-auto pt-4 lg:pt-8 pb-8 lg:pb-12 px-4 md:px-8 lg:px-2 flex flex-col justify-center">
      {/* Breadcumb */}
      <Breadcumb />
      {/* Judul Halaman */}
      <div className="flex flex-col gap-0 lg:gap-2 my-0 mb-1 lg:mb-4">
        <h1 className="text-maroon-light font-bold text-xl md:text-2xl lg:text-3xl mb-2 lg:mb-0 mt-2 lg:mt-4">
          {lang === "id" ? "Aduan Masyarakat" : "Public Complaints"}
        </h1>
        <p className="text-justify text-stone-900 text-base md:text-lg lg:text-xl mb-1">
          {lang === "id" ?
              "Sistem Pengelolaan Aduan Masyarakat KPU Provinsi DKI Jakarta adalah platform yang disediakan oleh KPU Provinsi DKI Jakarta bagi masyarakat untuk melaporkan segala bentuk pelanggaran atau masalah terkait pelaksanaan pemilu. Melalui sistem ini, masyarakat dapat menyampaikan keluhan, masukan, dan saran untuk memastikan transparansi dan integritas lembaga dan program kerja KPU DKI Jakarta."
              :
              "The Public Complaints Management System of KPU DKI Jakarta Province is a platform provided by the KPU DKI Jakarta Province for the public to report any violations or issues related to the implementation of elections. Through this system, the public can provide complaints, feedback, and suggestions to ensure transparency and integrity of the institution and the work programs of KPU DKI Jakarta."
          }
        </p>
      </div>
      {/* Mekanisme */}
      <div className="overflow-hidden w-full bg-white rounded-2xl shadow-xl px-2 md:px-4 lg:px-4 py-4 md:py-6 lg:py-8 flex flex-col items-center gap-1 lg:gap-2">
        <h1 className="text-lg md:text-xl lg:text-2xl mb-5 lg:mb-6 font-bold text-stone-900">
          {lang === "id" ? "Mekanisme Aduan Masyarakat" : "Public Complaints Mechanism"}
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
                      "Pemohon dapat mengajukan keberatan secara tertulis kepada Pejabat PPID di Lingkungan Sekretariat KPU Provinsi DKI Jakarta paling lambat 30 (tiga puluh) hari kerja setelah ditemukannya alasan sebagai berikut:"
                      :
                      "Applicants may submit objections in writing to the Public Information Officer (Pejabat PPID) at the Secretariat of the Regional KPU DKI Jakarta Province no later than 30 (thirty) working days after the reasons are found as follows:"
                  }
                </p>
                <ol className="flex flex-col gap-1 pl-6 list-disc text-sm md:text-base lg:text-lg">
                  <li>
                    {lang === "id" ?
                      "pelanggaran prosedur dalam pelaksanaan program kerja;"
                      :
                      "procedural violations in the implementation of work programs;"
                    }
                  </li>
                  <li>
                    {lang === "id" ?
                        "tidak dilaksanakannya program kerja yang telah dijadwalkan;"
                        :
                        "non-implementation of scheduled work programs;"
                    }
                  </li>
                  <li>
                    {lang === "id" ?
                        "ketidaksesuaian antara program kerja yang dilaksanakan dengan yang telah direncanakan;"
                        :
                        "discrepancy between implemented work programs and those planned;"
                    }
                  </li>
                  <li>
                    {lang === "id" ?
                        "tidak ditanggapinya laporan atau aduan terkait program kerja;"
                        :
                        "non-response to reports or complaints related to work programs;"
                    }
                  </li>
                  <li>
                    {lang === "id" ?
                        "ketidaktransparanan dalam penggunaan anggaran program kerja;"
                        :
                        "lack of transparency in the use of work program budget;"
                    }
                  </li>
                  <li>
                    {lang === "id" ?
                        "pengenaan biaya yang tidak wajar dalam pelaksanaan program kerja; dan/atau"
                        :
                        "imposition of unreasonable costs in the implementation of work programs; and/or"
                    }
                  </li>
                  <li>
                  {lang === "id" ?
                      "keterlambatan dalam pelaksanaan program kerja melebihi waktu yang telah ditetapkan dalam peraturan."
                      :
                      "delay in the implementation of work programs exceeding the time stipulated in regulations."
                  }
                  </li>
                </ol>
              </li>
              <li>
                {lang === "id" ?
                    "Dalam mengajukan keberatan, pemohon wajib menyertakan identitas pemohon yang sah sebagaimana syarat dalam pengajuan aduan."
                    :
                    "In filing an objection, the applicant must include valid identification as required in the complaint submission."
                }
              </li>
              <li>
                <p>
                  {lang === "id" ?
                      "Pemohon Keberatan harus menyertakan dokumen sebagai berikut:"
                      :
                      "Applicants filing objections must include the following documents:"
                  }
                </p>
                <ol className="flex flex-col gap-1 pl-6 list-disc text-sm md:text-base lg:text-lg">
                  <li>{lang === "id" ? "Nama Pelapor (sesuai KTP/SIM);" : "Name of the Reporter (as per ID Card/Driver's License);"}</li>
                  <li>{lang === "id" ? "Alamat sesuai KTP/SIM;" : "Address as per ID Card/Driver's License;"}</li>
                  <li>{lang === "id" ? "Nama/Kegiatan Terlapor;" : "Name/Activity of the Reported Person/Entity;"}</li>
                  <li>{lang === "id" ? "Hal yang dilaporkan;" : "Reported Issue/Concern;"}</li>
                  <li>
                    {lang === "id" ? "Bukti (bisa dijelaskan langsung dan/atau dilampirkan);" : "Evidence (can be described directly and/or attached);" }
                  </li>
                  <li>
                    {lang === "id" ? 
                      "Tanda tangan pelapor (sesuai tanggal/bulan/tahun) tidak dilaksanakannya program kerja yang telah dijadwalkan;" 
                      : 
                      "Signature of the reporter (according to date/month/year) non-implementation of scheduled work programs;"
                    }
                  </li>
                </ol>
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
                {lang === "id" ? "atau melalui" : "or through"} <b>email hupmaskpudki@gmail.com</b>
              </li>
              <li>
                {lang === "id" ? 
                  "Tim Sekretariat PPID KPU DKI Jakarta wajib memberikan salinan laporan aduan masyarakat disertai nomor registrasi pengaduan kepada Pemohon yang mengajukan keberatan." 
                  : 
                  "The Secretariat Team of PPID KPU DKI Jakarta is required to provide a copy of the public complaint report along with the complaint registration number to the Applicant filing an objection."
                }
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
                      "Laporan aduan masyarakat akan ditindaklanjuti oleh Pejabat PPID di Lingkungan Sekretariat KPU Provinsi DKI Jakarta paling lambat 30 (tiga puluh) hari kerja setelah laporan aduan masyarakat diterima" 
                      : 
                      "Public complaint reports will be followed up by the PPID Officer at the Secretariat of KPU DKI Jakarta Province no later than 30 (thirty) working days after the public complaint report is received"
                  }
                </p>
              </li>
              <li>
                {lang === "id" ? 
                    "Dalam menindaklanjuti laporan, pemohon diharapkan melakukan pengecekan secara berkala terhadap komunikasi yang mungkin akan dilakukan oleh Tim Sekretariat PPID KPU DKI Jakarta" 
                    : 
                    "In following up on the report, the applicant is expected to regularly check for any communication that may be made by the Secretariat Team of PPID KPU DKI Jakarta"
                }
              </li>
              <li>
                <p>
                  {lang === "id" ? 
                      "Pemohon Keberatan bersedia untuk ditanya lebih lanjut terkait laporan yang memuat:" 
                      : 
                      "The Applicant filing objections is willing to be further questioned regarding the report containing:"
                  }
                </p>
                <ol className="flex flex-col gap-1 pl-6 list-disc text-sm md:text-base lg:text-lg">
                  <li>{lang === "id" ? "Nama/Kegiatan Terlapor;" : "Name/Activity of the Reported Person/Entity;"}</li>
                  <li>{lang === "id" ? "Hal Yang dilaporkan;" : "Reported Issue/Concern;"}</li>
                  <li>{lang === "id" ? "Bukti (bisa dijelaskan langsung dan/ dilampirkan);" : "Evidence (can be described directly and/or attached);"}</li>
                </ol>
              </li>
              <li>
                {lang === "id" ? 
                    "Tim Sekretariat PPID KPU DKI Jakarta wajib memberikan salinan tanda terima pengajuan keberatan kepada Pemohon yang mengajukan keberatan." 
                    : 
                    "The Secretariat Team of PPID KPU DKI Jakarta is required to provide a copy of the receipt of objection submission to the Applicant filing an objection."
                }
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
                    "Pastikan anda telah memahami Mekanisme Pengajuan dan Penanganan Pengajuan sebelum Pengisian Formulir" 
                    : 
                    "Ensure that you understand the Submission Mechanism and Handling of Submissions before filling out the form"
                }
              </p>
            </div>
            <p className="text-sm md:text-base lg:text-lg text-stone-900">
              {lang === "id" ? 
                  "Anda dapat melakukan pengisian formulir laporan Aduan Masyarakat dengan melakukan pengunduhan file berikut" 
                  : 
                  "You can fill out the Public Complaint Form by downloading the following file"
              }
            </p>
            <button
              onClick={handleUnduhFormulir}
              className="w-max text-sm md:text-base flex items-center bg-stone-100 border-2 border-maroon-light text-maroon-light px-4 lg:px-8 py-1.5 rounded-full font-semibold group hover:bg-maroon-light hover:bg-opacity-80 hover:border-2 hover:border-maroon-light hover:text-stone-100"
            >
              <FileDownload className="w-5 h-5 me-2" />
              <p>{lang === "id" ? "Formulir Laporan Aduan Masyarakat" : "Public Complaint Form"}</p>
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
