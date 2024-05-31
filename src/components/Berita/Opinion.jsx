const NewsItem = ({ image, date, views, title, description }) => (
  <div className="flex items-start p-4 border-b border-gray-200">
    <img
      className="w-48 h-32 object-cover rounded-lg"
      src={image}
      alt={title}
    />
    <div className="ml-4 flex-1">
      <div className="text-gray-500 text-sm mb-1 flex items-center">
        <span className="mr-4">
          <i className="far fa-calendar-alt mr-1"></i>
          {date}
        </span>
        <span>
          <i className="far fa-eye mr-1"></i>
          {views}
        </span>
      </div>
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <p className="text-gray-700 text-base mt-2">{description}</p>
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
      views: "444",
      title: "KPU DKI Jakarta Buka Pendaftaran PPK Untuk Pilkada",
      description:
        "Jakarta - Komisi Pemilihan Umum (KPU) Provinsi DKI Jakarta akan merekrut calon anggota Panitia Pemilihan Kecamatan (PPK) untuk Pilkada serentak 202...",
    },
    {
      id: 2,
      image: "/images/info-dua.png",
      date: "02 Feb 2024",
      views: "444",
      title: "KPU DKI Jakarta Buka Pendaftaran PPK Untuk Pilkada",
      description:
        "Jakarta - Komisi Pemilihan Umum (KPU) Provinsi DKI Jakarta akan merekrut calon anggota Panitia Pemilihan Kecamatan (PPK) untuk Pilkada serentak 202...",
    },
    {
      id: 3,
      image: "/images/info-dua.png",
      date: "02 Feb 2024",
      views: "444",
      title: "KPU DKI Jakarta Buka Pendaftaran PPK Untuk Pilkada",
      description:
        "Jakarta - Komisi Pemilihan Umum (KPU) Provinsi DKI Jakarta akan merekrut calon anggota Panitia Pemilihan Kecamatan (PPK) untuk Pilkada serentak 202...",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-maroon mb-4 mt-2 ml-4">Opini</h1>
      <div className="flex items-center justify-between mb-4 ml-4">
        <div className="flex items-center space-x-4">
          <span className="text-gray-700">Tampilkan berdasarkan</span>
          <select className="bg-white border border-maroon text-maroon py-2 px-4 rounded-lg">
            <option>Semua</option>
            <option>2022</option>
            <option>2021</option>
            <option>2020</option>
          </select>
          <select className="bg-white border border-maroon text-maroon py-2 px-4 rounded-lg">
            <option>Terbaru</option>
            <option>Terpopuler</option>
          </select>
        </div>
      </div>
      {newsItems.map((item) => (
        <NewsItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default function Opinion() {
  return (
    <div>
      <NewsPage />
    </div>
  );
}
