const NewsDetail = () => {
  return (
    <div className="flex-1 bg-white p-6 shadow-md rounded-lg">
      <img
        className="w-full h-96 object-cover rounded-lg"
        src="/images/info-dua.png"
        alt="News"
      />
      <h2 className="text-2xl font-bold text-gray-900 mt-3">
        KPU DKI Jakarta Buka Pendaftaran PPK Untuk Pilkada
      </h2>

      <div className="text-gray-500 text-sm my-2 flex items-center">
        <span className="mr-4">
          <i className="far fa-calendar-alt mr-1"></i>
          02 Februari 2024
        </span>
        <span>
          <i className="far fa-eye mr-1"></i>
          444
        </span>
      </div>
      <p className="text-gray-700 text-base mt-3">
        Berikut kami sampaikan Pengumuman Penyerahan Dokumen Syarat Dukungan
        Bakal Pasangan Calon Perseorangan Pemilihan Gubernur dan Wakil
        Gubernur...
      </p>
    </div>
  );
};

const NewsRelated = () => {
  const relatedNewsItems = [
    {
      id: 1,
      title: "KPU DKI Jakarta Buka Pendaftaran PPK Untuk Pilkada",
      date: "02 Feb 2024",
      image: "/images/info-dua.png",
    },
    {
      id: 2,
      title: "KPU DKI Jakarta Buka Pendaftaran PPK Untuk Pilkada",
      date: "02 Feb 2024",
      image: "/images/info-dua.png",
    },
    {
      id: 3,
      title: "KPU DKI Jakarta Buka Pendaftaran PPK Untuk Pilkada",
      date: "02 Feb 2024",
      image: "/images/info-dua.png",
    },
    {
      id: 4,
      title: "KPU DKI Jakarta Buka Pendaftaran PPK Untuk Pilkada",
      date: "02 Feb 2024",
      image: "/images/info-dua.png",
    },
    {
      id: 5,
      title: "KPU DKI Jakarta Buka Pendaftaran PPK Untuk Pilkada",
      date: "02 Feb 2024",
      image: "/images/info-dua.png",
    },
  ];

  return (
    <div className="lg:w-1/3 shadow-md rounded-lg mt-8 lg:mt-0">
      <h2 className="bg-maroon text-white text-2xl font-bold p-6 rounded-lg">
        Berita Terkait
      </h2>
      <div className="">
        {relatedNewsItems.map((item) => (
          <div key={item.id} className="flex items-start p-4">
            <img
              className="w-24 h-16 object-cover rounded-lg"
              src={item.image}
              alt="Related Berita"
            />
            <div className="ml-4">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function DetailBerita() {
  return (
    <div className="container mx-auto p-4 lg:p-8">
      <h1 className="text-3xl font-bold text-maroon mb-8">Berita Terkini</h1>
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        <div className="flex-1">
          <NewsDetail />
        </div>
        <NewsRelated />
      </div>
    </div>
  );
}
