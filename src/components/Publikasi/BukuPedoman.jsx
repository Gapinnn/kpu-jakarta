export default function BukuPedoman() {
  const Card = ({ title, date, views, imageSrc, description }) => (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col md:flex-row">
      <img src={imageSrc} alt={title} className="w-full md:w-1/4 rounded-lg" />
      <div className="p-4 md:w-3/4 flex flex-col justify-between">
        <div>
          <div className="flex items-center text-gray-500 text-sm mb-1">
            <span className="mr-4">
              <i className="far fa-calendar-alt mr-1"></i>
              {date}
            </span>
            <span>
              <i className="far fa-eye mr-1"></i>
              {views}
            </span>
          </div>
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-700 text-sm">{description}</p>
        </div>
        <div className="mt-4 flex justify-between">
          <button className="bg-red-900 text-white px-8 py-2 rounded-full w-60 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
            Baca
          </button>
          <button className="bg-yellow-500 text-white px-8 py-2 rounded-full w-60 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50">
            Unduh
          </button>
        </div>
      </div>
    </div>
  );

  const data = [
    {
      title: "Bahan Sosialisasi Pemilihan Serentak 2020",
      date: "02 Februari 2024",
      views: 444,
      imageSrc: "/images/sop-sps.png",
      description:
        "Berikut kami sampaikan Pengumuman Penyerahan Dokumen Syarat Dukungan Bakal Pasangan Calon Perseorangan Pemilihan Gubernur dan Wakil Gubernur DKI.",
    },
    {
      title: "Bahan Sosialisasi Pemilihan Serentak 2020",
      date: "02 Februari 2024",
      views: 444,
      imageSrc: "/images/sop-sps.png",
      description:
        "Berikut kami sampaikan Pengumuman Penyerahan Dokumen Syarat Dukungan Bakal Pasangan Calon Perseorangan Pemilihan Gubernur dan Wakil Gubernur DKI.",
    },
    {
      title: "Bahan Sosialisasi Pemilihan Serentak 2020",
      date: "02 Februari 2024",
      views: 444,
      imageSrc: "/images/sop-sps.png",
      description:
        "Berikut kami sampaikan Pengumuman Penyerahan Dokumen Syarat Dukungan Bakal Pasangan Calon Perseorangan Pemilihan Gubernur dan Wakil Gubernur DKI.",
    },
    {
      title: "Bahan Sosialisasi Pemilihan Serentak 2020",
      date: "02 Februari 2024",
      views: 444,
      imageSrc: "/images/sop-sps.png",
      description:
        "Berikut kami sampaikan Pengumuman Penyerahan Dokumen Syarat Dukungan Bakal Pasangan Calon Perseorangan Pemilihan Gubernur dan Wakil Gubernur DKI.",
    },
  ];

  return (
    <div className="p-8 mt-8 bg-stone-100 rounded-2xl shadow-xl mx-auto z-20">
      <h1 className="text-maroon-light text-3xl font-bold mb-8">
        Buku Pedoman
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {data.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            date={item.date}
            views={item.views}
            imageSrc={item.imageSrc}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
