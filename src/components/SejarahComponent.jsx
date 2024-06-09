const Sejarah = () => {
  const elections = [
    "Pemilu 1955",
    "Pemilu 1971",
    "Pemilu 1977",
    "Pemilu 1999",
    "Pemilu 2004",
    "Pemilu 2009",
    "Pemilu 2014",
    "Pemilu 2019",
  ];

  return (
    <div className="container mx-auto pt-8 pb-12 px-2 flex flex-col justify-center">
      <div className="container mx-auto pt-8 pb-12 px-2 flex flex-col justify-center">
        <h1 className="text-maroon-light font-bold text-3xl mb-6 mt-4">
          Sejarah Pemilihan Umum KPU
        </h1>{" "}
        {/* Perbesar max-w ke 7xl */}
        <div className="w-full z-20 flex flex-col justify-center mx-auto py-8 px-10 bg-white shadow-2xl rounded-2xl">
          <div className="flex">
            <div className="w-1/4 bg-gray-200 p-2 rounded-lg">
              <ul className="space-y-2">
                {elections.map((election, index) => (
                  <button
                    key={index}
                    className="bg-maroon-light text-white p-2 rounded-lg text-center h-12 flex items-center justify-center w-full"
                  >
                    {election}
                  </button>
                ))}
              </ul>
            </div>
            <div className="w-3/4 pl-6">
              <h2 className="text-yellow-500 text-xl font-bold mb-2">
                Pemilu 1955
              </h2>
              <h3 className="text-xl font-bold mb-4">
                Sejarah Pemilihan Umum Tahun 1955
              </h3>
              <div className="flex">
                <img
                  src="/images/info-dua.png"
                  alt="Pemilu 1955"
                  className="w-1/4 mr-4 rounded-lg shadow-md" // Ubah ukuran gambar ke w-1/4 untuk proporsi lebih besar
                />
                <p>
                  Sistem Pemilu tahun 1955 adalah kombinasi antara sistem
                  distrik dan sistem perwakilan berimbang dengan ciri-ciri
                  sebagai berikut. Sistem Distrik, pertama wilayah negara dibagi
                  atas distrik-distrik pemilihan, yang didasari pada jumlah
                  penduduk, kedua jumlah anggota badan perwakilan rakyat
                  ditetapkan sama dengan jumlah distrik, ketiga tiap distrik
                  pemilihan , memilih seorang anggota badan perwakilan rakyat,
                  keempat pemilih, memilih orang atau calon yang diajukan
                  organisasi peserta Pemilu, kelima penetapan terpilih
                  berdasarkan suara terbanyak.
                </p>
              </div>
              <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-lg">
                Selengkapnya
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sejarah;
