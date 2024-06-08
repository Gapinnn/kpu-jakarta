import Breadcumb from "./Breadcumb";

const Struktur = () => {
  return (
    <div className="flex flex-col w-full bg-stone-100 relative">
      <div className="w-full flex flex-col gap-0 absolute bottom-0">
        <div className="bg-maroon-light bg-opacity-85 w-full h-52 rounded-t-full"></div>
        <div className="bg-maroon-light bg-opacity-85 w-full h-8"></div>
      </div>

      <div className="container mx-auto pt-8 pb-12 px-2 md:px-2 flex flex-col justify-center">
        {/* Breadcrumb */}
        <Breadcumb />
        {/* Judul Halaman */}
        <h1 className="text-maroon-light font-bold text-3xl mb-6 mt-4">
          Struktur Organisasi KPU Provinsi DKI Jakarta
        </h1>
        {/* Konten */}
        <div className="w-full z-20 flex flex-col justify-center mx-auto py-8 px-10 md:px-10 bg-white shadow-2xl rounded-2xl">
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
