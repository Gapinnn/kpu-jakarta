import { Link } from "react-router-dom";
import Calendar from "../Icon/Calendar";
import Tag from "../Icon/Tag";
import ArrowDown from "../Icon/ArrowDown";
import { listTahun, listKategori } from "../../contents/filter";
import { useEffect, useRef, useState } from "react";

const NewsItem = ({ image, date, title, description }) => (
  <div className="flex flex-col md:flex-row items-center p-4 border-b border-gray-200 bg-white rounded-lg shadow-md mb-2">
    <img
      className="w-full md:w-64 object-cover rounded-lg mb-2 md:mb-0"
      src={image}
      alt={title}
    />
    <div className="md:ml-3 flex-1">
      <div className="text-gray-500 text-base mb-1 flex items-center gap-2">
        <div className="bg-stone-200 py-1 px-2 flex justify-center items-center rounded-xl hover:bg-stone-500 group">
          <Calendar className="w-5 h-5 text-stone-600 group-hover:text-stone-100" />
          <p className="text-stone-600 text-sm ms-1 font-semibold group-hover:text-stone-100">
            {date}
          </p>
        </div>
        <div className="bg-stone-200 py-1 px-2 flex justify-center items-center rounded-xl hover:bg-stone-500 group">
          <Tag className="w-4 h-4 text-stone-600 group-hover:text-stone-100" />
          <p className="text-stone-600 text-sm ms-1 font-semibold group-hover:text-stone-100">
            Kategori
          </p>
        </div>
      </div>
      <h3 className="text-xl w-full font-bold text-gray-900">{title}</h3>
      <p className="text-gray-800 text-lg mt-1 leading-tight">{description}</p>
      <Link to="#" className="flex flex-row items-center w-fit group">
        <p className="text-maroon-light text-sm font-semibold group-hover:text-maroon">
          Selengkapnya
        </p>
      </Link>
    </div>
  </div>
);

const NewsPage = () => {
  const newsItems = [
    {
      id: 1,
      image: "/images/info-dua.png",
      date: "12 Februari 2024",
      title: "KPU DKI Jakarta Buka Pendaftaran PPK Untuk Pilkada",
      description:
        "Jakarta - Komisi Pemilihan Umum (KPU) Provinsi DKI Jakarta akan merekrut calon anggota Panitia Pemilihan Kecamatan (PPK) untuk Pilkada serentak 2024 yang akan digelar pada 27 November 2024 mendatang. ",
    },
    {
      id: 2,
      image: "/images/info-dua.png",
      date: "12 Februari 2024",
      title: "KPU DKI Jakarta Buka Pendaftaran PPK Untuk Pilkada",
      description:
        "Jakarta - Komisi Pemilihan Umum (KPU) Provinsi DKI Jakarta akan merekrut calon anggota Panitia Pemilihan Kecamatan (PPK) untuk Pilkada serentak 2024 yang akan digelar pada 27 November 2024 mendatang. ",
    },
    {
      id: 3,
      image: "/images/info-dua.png",
      date: "12 Februari 2024",
      title: "KPU DKI Jakarta Buka Pendaftaran PPK Untuk Pilkada",
      description:
        "Jakarta - Komisi Pemilihan Umum (KPU) Provinsi DKI Jakarta akan merekrut calon anggota Panitia Pemilihan Kecamatan (PPK) untuk Pilkada serentak 2024 yang akan digelar pada 27 November 2024 mendatang. ",
    },
    {
      id: 4,
      image: "/images/info-dua.png",
      date: "12 Februari 2024",
      title: "KPU DKI Jakarta Buka Pendaftaran PPK Untuk Pilkada",
      description:
        "Jakarta - Komisi Pemilihan Umum (KPU) Provinsi DKI Jakarta akan merekrut calon anggota Panitia Pemilihan Kecamatan (PPK) untuk Pilkada serentak 2024 yang akan digelar pada 27 November 2024 mendatang. ",
    },
    {
      id: 5,
      image: "/images/info-dua.png",
      date: "12 Februari 2024",
      title: "KPU DKI Jakarta Buka Pendaftaran PPK Untuk Pilkada",
      description:
        "Jakarta - Komisi Pemilihan Umum (KPU) Provinsi DKI Jakarta akan merekrut calon anggota Panitia Pemilihan Kecamatan (PPK) untuk Pilkada serentak 2024 yang akan digelar pada 27 November 2024 mendatang. ",
    },
    {
      id: 6,
      image: "/images/info-dua.png",
      date: "12 Februari 2024",
      title: "KPU DKI Jakarta Buka Pendaftaran PPK Untuk Pilkada",
      description:
        "Jakarta - Komisi Pemilihan Umum (KPU) Provinsi DKI Jakarta akan merekrut calon anggota Panitia Pemilihan Kecamatan (PPK) untuk Pilkada serentak 2024 yang akan digelar pada 27 November 2024 mendatang. ",
    },
    {
      id: 7,
      image: "/images/info-dua.png",
      date: "12 Februari 2024",
      title: "KPU DKI Jakarta Buka Pendaftaran PPK Untuk Pilkada",
      description:
        "Jakarta - Komisi Pemilihan Umum (KPU) Provinsi DKI Jakarta akan merekrut calon anggota Panitia Pemilihan Kecamatan (PPK) untuk Pilkada serentak 2024 yang akan digelar pada 27 November 2024 mendatang. ",
    },
    {
      id: 8,
      image: "/images/info-dua.png",
      date: "12 Februari 2024",
      title: "KPU DKI Jakarta Buka Pendaftaran PPK Untuk Pilkada",
      description:
        "Jakarta - Komisi Pemilihan Umum (KPU) Provinsi DKI Jakarta akan merekrut calon anggota Panitia Pemilihan Kecamatan (PPK) untuk Pilkada serentak 2024 yang akan digelar pada 27 November 2024 mendatang. ",
    },
    {
      id: 9,
      image: "/images/info-dua.png",
      date: "12 Februari 2024",
      title: "KPU DKI Jakarta Buka Pendaftaran PPK Untuk Pilkada",
      description:
        "Jakarta - Komisi Pemilihan Umum (KPU) Provinsi DKI Jakarta akan merekrut calon anggota Panitia Pemilihan Kecamatan (PPK) untuk Pilkada serentak 2024 yang akan digelar pada 27 November 2024 mendatang. ",
    },
    {
      id: 10,
      image: "/images/info-dua.png",
      date: "12 Februari 2024",
      title: "KPU DKI Jakarta Buka Pendaftaran PPK Untuk Pilkada",
      description:
        "Jakarta - Komisi Pemilihan Umum (KPU) Provinsi DKI Jakarta akan merekrut calon anggota Panitia Pemilihan Kecamatan (PPK) untuk Pilkada serentak 2024 yang akan digelar pada 27 November 2024 mendatang. ",
    },
  ];

  const [showDropdownTahun, setShowDropdownTahun] = useState(false);
  const [showDropdownKategori, setShowDropdownKategori] = useState(false);
  const [dataTahun, setDataTahun] = useState(listTahun);
  const [dataKategori, setDataKategori] = useState(listKategori);
  const [searchTahun, setSearchTahun] = useState("");
  const [searchKategori, setSearchKategori] = useState("");

  const tahunRef = useRef(null);
  const kategoriRef = useRef(null);
  const dropdownTahunRef = useRef(null);
  const dropdownKategoriRef = useRef(null);

  const handleSearchTahun = (e) => {
    setSearchTahun(e.target.value);
    const filteredTahun = listTahun.filter((item) =>
      item.label.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setDataTahun(filteredTahun);
  };

  const handleSearchKategori = (e) => {
    setSearchKategori(e.target.value);
    const filteredKategori = listKategori.filter((item) =>
      item.label.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setDataKategori(filteredKategori);
  };

  const changeTahun = (value) => {
    setSearchTahun(value);
    setShowDropdownTahun(false);
  };

  const changeKategori = (value) => {
    setSearchKategori(value);
    setShowDropdownKategori(false);
  };

  const handleClickOutside = (event) => {
    if (
      dropdownTahunRef.current &&
      tahunRef.current &&
      !dropdownTahunRef.current.contains(event.target) &&
      !tahunRef.current.contains(event.target)
    ) {
      setShowDropdownTahun(false);
    }

    if (
      dropdownKategoriRef.current &&
      kategoriRef.current &&
      !dropdownKategoriRef.current.contains(event.target) &&
      !kategoriRef.current.contains(event.target)
    ) {
      setShowDropdownKategori(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col w-full bg-stone-100">
      <div className="container mx-auto pt-8 pb-12 px-2 flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-maroon mb-4">Berita</h1>
        <div className="text-gray-800 mb-4">
          Berita terkait kegiatan statistik dan kegiatan lainnya yang
          diselenggarakan oleh Badan Pusat Statistik.
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/4 lg:pr-4 mb-4 lg:mb-0">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Filter Berita
            </h2>
            <div className="p-3 bg-white rounded-lg shadow-md">
              <div className="mb-3">
                <h5 className="text-lg font-semibold text-gray-900 mb-1">
                  Kata Kunci
                </h5>
                <input
                  type="text"
                  placeholder="Masukkan kata kunci..."
                  className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-1 focus:ring-maroon-light focus:border-maroon-light focus:outline-none font-medium"
                />
              </div>
              {/* Dropdown & Search Filter Tahun */}
              <div className="mb-3 relative">
                <h5 className="text-lg font-semibold text-gray-900 mb-1">
                  Tahun Berita
                </h5>
                <div ref={tahunRef} className="relative group w-full">
                  <input
                    onFocus={() => setShowDropdownTahun(true)}
                    onChange={handleSearchTahun}
                    value={searchTahun}
                    type="text"
                    id="simple-search"
                    className="border group border-gray-300 focus:placeholder:text-gray-700 rounded-lg focus:ring-1 focus:ring-maroon-light focus:border-maroon-light focus:outline-none font-medium block w-full pe-10 p-2.5  "
                    placeholder="Pilih Tahun"
                  />
                  <div className="absolute inset-y-0 end-0 flex gap-1 items-center pe-1.5 cursor-default">
                    <div className="flex w-0.5 h-3/4 bg-gray-200"></div>
                    <ArrowDown
                      onClick={() => setShowDropdownTahun(!showDropdownTahun)}
                      className="w-6 h-6 text-gray-400 hover:text-gray-800 group-focus-within:text-gray-800"
                    />
                  </div>
                </div>
                {showDropdownTahun && (
                  <div
                    ref={dropdownTahunRef}
                    className={`absolute top-[5rem] border-2 py-2 px-2 w-full text-base list-none bg-white divide-y divide-white rounded-lg
                transition-transform duration-500 transform opacity-100 translate-y-0 z-20 pointer-events-auto`}
                  >
                    <ul
                      className="dropdown-scroll font-medium h-fit max-h-48 overflow-y-scroll"
                      role="none"
                    >
                      {dataTahun.map((item) => (
                        <li
                          onClick={() => changeTahun(item.label)}
                          key={item.label}
                          value={item.value}
                          className={`block px-2 py-1 rounded-lg cursor-pointer hover:bg-gray-300`}
                        >
                          <div className="inline-flex items-center text-stone-700 text-lg">
                            {item.label}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              {/* Dropdown & Search Filter Kategori */}
              <div className="mb-3 relative">
                <h5 className="text-lg font-semibold text-gray-900 mb-1">
                  Kategori Berita
                </h5>
                <div ref={kategoriRef} className="relative group w-full">
                  <input
                    onFocus={() => setShowDropdownKategori(true)}
                    onChange={handleSearchKategori}
                    value={searchKategori}
                    type="text"
                    id="simple-search"
                    className="border group border-gray-300 focus:placeholder:text-gray-700 rounded-lg focus:ring-1 focus:ring-maroon-light focus:border-maroon-light focus:outline-none font-medium block w-full pe-10 p-2.5  "
                    placeholder="Pilih Kategori"
                  />
                  <div className="absolute inset-y-0 end-0 flex gap-1 items-center pe-1.5 cursor-default">
                    <div className="flex w-0.5 h-3/4 bg-gray-200"></div>
                    <ArrowDown
                      onClick={() =>
                        setShowDropdownKategori(!showDropdownKategori)
                      }
                      className="w-6 h-6 text-gray-400 hover:text-gray-800 group-focus-within:text-gray-800"
                    />
                  </div>
                </div>
                {showDropdownKategori && (
                  <div
                    ref={dropdownKategoriRef}
                    className={`absolute top-[5rem] border-2 py-2 px-2 w-full text-base list-none bg-white divide-y divide-white rounded-lg
                transition-transform duration-500 transform opacity-100 translate-y-0 z-20 pointer-events-auto`}
                  >
                    <ul
                      className="dropdown-scroll font-medium h-fit max-h-40 overflow-y-scroll"
                      role="none"
                    >
                      {dataKategori.map((item) => (
                        <li
                          onClick={() => changeKategori(item.label)}
                          key={item.label}
                          value={item.value}
                          className={`block px-2 py-1 rounded-lg cursor-pointer hover:bg-gray-300`}
                        >
                          <div className="inline-flex items-center text-stone-700 text-lg">
                            {item.label}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <button className="w-full mt-4 py-2 bg-maroon-light text-white rounded-lg">
                Tampilkan
              </button>
            </div>
          </div>

          <div className="w-full">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-800 pt-2">
                Menampilkan 1-10 dari 485 Berita
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

export default function BeritaNow() {
  return (
    <div>
      <NewsPage />
    </div>
  );
}
