const NewsItem = ({ image, date, title, description }) => (
  <div className="flex flex-col md:flex-row items-start p-3 border-b border-gray-200 bg-white rounded-lg shadow-md mb-2">
    <img
      className="w-full md:w-48 h-32 object-cover rounded-lg mb-2 md:mb-0"
      src={image}
      alt={title}
    />
    <div className="md:ml-3 flex-1">
      <div className="text-gray-500 text-sm mb-1 flex items-center">
        <span className="mr-2">
          <i className="far fa-calendar-alt mr-1"></i>
          {date}
        </span>
      </div>
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <p className="text-gray-800 text-base mt-1">{description}</p>
      <a href="#" className="text-maroon mt-1 block">
        Baca Selengkapnya
      </a>
    </div>
  </div>
);

const NewsPage = () => {
  const newsItems = [
    {
      id: 1,
      image: "/images/info-dua.png",
      date: "02 Feb 2024",
      title: "KPU DKI Jakarta Buka Pendaftaran PPK Untuk Pilkada",
      description:
        "Jakarta - Komisi Pemilihan Umum (KPU) Provinsi DKI Jakarta akan merekrut calon anggota Panitia Pemilihan Kecamatan (PPK) untuk Pilkada serentak 202...",
    },
    {
      id: 2,
      image: "/images/info-dua.png",
      date: "02 Feb 2024",
      title: "KPU DKI Jakarta Buka Pendaftaran PPK Untuk Pilkada",
      description:
        "Jakarta - Komisi Pemilihan Umum (KPU) Provinsi DKI Jakarta akan merekrut calon anggota Panitia Pemilihan Kecamatan (PPK) untuk Pilkada serentak 202...",
    },
    {
      id: 3,
      image: "/images/info-dua.png",
      date: "02 Feb 2024",
      title: "KPU DKI Jakarta Buka Pendaftaran PPK Untuk Pilkada",
      description:
        "Jakarta - Komisi Pemilihan Umum (KPU) Provinsi DKI Jakarta akan merekrut calon anggota Panitia Pemilihan Kecamatan (PPK) untuk Pilkada serentak 202...",
    },
  ];

  return (
    <div className="bg-stone-200 min-h-screen">
      <div className="mx-4 md:mx-8 lg:mx-16 xl:mx-32 py-8">
        <h1 className="text-3xl font-bold text-maroon mb-4">Opini</h1>
        <div className="text-gray-800 mb-4">
          Opini terkait kegiatan statistik dan kegiatan lainnya yang
          diselenggarakan oleh Badan Pusat Statistik.
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/4 lg:pr-4 mb-4 lg:mb-0">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Filter Opini
            </h2>
            <div className="p-3 bg-white rounded-lg shadow-md">
              <div className="mb-3">
                <h5 className="text-lg font-bold text-gray-900 mb-1">
                  Kata Kunci
                </h5>
                <input
                  type="text"
                  placeholder="Masukkan kata kunci..."
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-3">
                <h5 className="text-lg font-bold text-gray-900 mb-1">
                  Kategori Opini
                </h5>
                <select className="w-full p-2 border border-gray-300 rounded-lg">
                  <option>Pilih Kategori</option>
                  <option>Kategori 1</option>
                  <option>Kategori 2</option>
                </select>
              </div>
              <button className="w-full py-2 bg-maroon text-white rounded-lg">
                Tampilkan
              </button>
            </div>
          </div>

          <div className="w-full lg:w-3/4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-800">
                Menampilkan 1-10 dari 485 Opini
              </span>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {newsItems.map((item) => (
                <NewsItem key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Opini() {
  return (
    <div>
      <NewsPage />
    </div>
  );
}
