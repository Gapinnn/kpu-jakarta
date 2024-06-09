const NewsItem = ({ image, date, title, description }) => (
  <div className="flex flex-col md:flex-row items-start p-4 border-b border-gray-200 bg-white rounded-lg shadow-md mb-4">
    <img
      className="w-full md:w-48 h-32 object-cover rounded-lg mb-4 md:mb-0"
      src={image}
      alt={title}
    />
    <div className="md:ml-4 flex-1">
      <div className="text-gray-500 text-sm mb-1 flex items-center">
        <span className="mr-4">
          <i className="far fa-calendar-alt mr-1"></i>
          {date}
        </span>
      </div>
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <p className="text-gray-800 text-base mt-2">{description}</p>
      <a href="#" className="text-maroon mt-2 block">
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
        <h1 className="text-3xl font-bold text-maroon mb-4">Pengumuman</h1>
        <div className="text-gray-800 mb-6">
          Berita terkait kegiatan statistik dan kegiatan lainnya yang
          diselenggarakan oleh Badan Pusat Statistik.
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/4 lg:pr-6 mb-6 lg:mb-0">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Filter Pengumuman
            </h2>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <div className="mb-4">
                <h5 className="text-lg font-bold text-gray-900 mb-2">
                  Kata Kunci
                </h5>
                <input
                  type="text"
                  placeholder="Masukkan kata kunci..."
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <h5 className="text-lg font-bold text-gray-900 mb-2">
                  Kategori Pengumuman
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
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-800">
                Menampilkan 1-10 dari 485 Pengumuman
              </span>
            </div>
            <div className="grid grid-cols-1 gap-4">
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

export default function Announcement() {
  return (
    <div>
      <NewsPage />
    </div>
  );
}
