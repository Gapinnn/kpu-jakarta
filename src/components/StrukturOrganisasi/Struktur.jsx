import Breadcumb from "./Breadcumb";
import getLanguage from "../../hooks/getLanguage";

const Struktur = () => {
  const lang = getLanguage();
  return (
    <div className="flex flex-col w-full bg-stone-100 relative">
      <div className="w-full flex flex-col gap-0 absolute bottom-0">
        <div className="bg-maroon-light bg-opacity-85 w-full h-52 rounded-t-full"></div>
        <div className="bg-maroon-light bg-opacity-85 w-full h-8"></div>
      </div>

      <div className="lg:container mx-auto pt-4 lg:pt-8 pb-8 lg:pb-12 px-4 md:px-8 lg:px-2 flex flex-col justify-center">
        {/* Breadcrumb */}
        <Breadcumb />
        {/* Judul Halaman */}
        <h1 className="text-maroon-light font-bold text-xl md:text-2xl lg:text-3xl mb-2 lg:mb-6 mt-2 lg:mt-4">
          
          {
            lang == "id"
              ?"Struktur Organisasi KPU Provinsi DKI Jakarta"
              :"DKI Jakarta Provincial KPU Organizational Structure"
          }
        </h1>
        {/* Konten */}
        <div className="w-full z-20 flex flex-col justify-center mx-auto py-2 md:py-4 lg:py-8 px-2 md:px-4 lg:px-10 bg-white shadow-2xl rounded-2xl">
          <img
            src={"/images/struktur-kpu.png"}
            alt="Struktur Organisasi"
            className="mx-auto w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Struktur;
