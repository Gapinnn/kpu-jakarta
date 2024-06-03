const Struktur = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full bg-maroon h-40 flex items-center justify-center"></div>
      <div className="relative -mt-20 bg-white shadow-md rounded-2xl overflow-hidden w-full max-w-6xl p-4 mb-20">
        <div className="p-6">
          <h2 className="text-maroon text-3xl font-bold mb-4">
            STRUKTUR ORGANISASI
          </h2>
          <img
            src={"/images/struktur-kpu.png"}
            alt="Struktur Organisasi"
            className="text-center w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Struktur;
