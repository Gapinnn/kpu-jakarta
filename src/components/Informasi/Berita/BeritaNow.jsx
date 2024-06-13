import { Link, useSearchParams } from "react-router-dom";
import Calendar from "../../Icon/Calendar";
import Tag from "../../Icon/Tag";
import ArrowDown from "../../Icon/ArrowDown";
import EyeView from "../../Icon/EyeView";
import { listTahun, listKategori } from "../../../contents/filter";
import { useEffect, useRef, useState } from "react";
import { dataBerita } from "../../../contents/informasi/berita";
import Breadcumb from "./Breadcumb";
import Clear from "../../Icon/Clear";
import getLanguage from "../../../hooks/getLanguage";

const NewsItem = ({
  id,
  image,
  date,
  title,
  views,
  description,
  tags,
  lang,
}) => (
  <Link
    to={`/${lang}/informasi/berita/${id}`}
    className="flex flex-col md:flex-row items-start p-3 lg:p-4 border-b border-gray-200 bg-white rounded-lg shadow-md mb-2"
  >
    <img
      className="w-full md:w-64 object-cover rounded-lg mb-2 md:mb-0"
      src={image}
      alt={title}
    />
    <div className="md:ml-2 lg:ml-3 flex-1">
      {/* Tags */}
      <div className="text-gray-500 text-base mb-1 flex items-center gap-1 lg:gap-2">
        <div className="bg-stone-200 py-1 px-2 flex justify-center items-center rounded-xl hover:bg-stone-500 group">
          <Calendar className="w-4 h-4 md:w-5 md:h-5 text-stone-600 group-hover:text-stone-100" />
          <p className="text-stone-600 text-xs md:text-sm ms-1 font-semibold group-hover:text-stone-100">
            {date}
          </p>
        </div>
        <div className="bg-stone-200 py-1 px-2 flex justify-center items-center rounded-xl hover:bg-stone-500 group">
          <EyeView className="w-4 h-4 md:w-5 md:h-5 text-stone-600 group-hover:text-stone-100" />
          <p className="text-stone-600 text-xs md:text-sm ms-1 font-semibold group-hover:text-stone-100">
            {views} baca
          </p>
        </div>
        {tags.map((tag, i) => (
          <div
            key={i}
            className="bg-stone-200 py-1 px-2 flex justify-center items-center rounded-xl hover:bg-stone-500 group"
          >
            <Tag className="w-3 h-3 md:w-4 md:h-4 text-stone-600 group-hover:text-stone-100" />
            <p className="text-stone-600 text-xs md:text-sm ms-1 font-semibold group-hover:text-stone-100">
              {tag}
            </p>
          </div>
        ))}
      </div>
      <h3 className="text-xl w-full font-bold text-gray-900">{title}</h3>
      <p className="text-gray-800 text-lg mt-1 leading-snug">{description}</p>
      <Link
        to={`/${lang}/informasi/berita/${id}`}
        className="flex flex-row items-center w-fit group"
      >
        <p className="text-maroon-light text-sm font-semibold group-hover:text-maroon">
          Selengkapnya
        </p>
      </Link>
    </div>
  </Link>
);

const NewsPage = () => {
  const lang = getLanguage();
  const [searchParams, setSearchParams] = useSearchParams();

  const [listBerita, setListBerita] = useState(dataBerita);
  const [showDropdownTahun, setShowDropdownTahun] = useState(false);
  const [showDropdownKategori, setShowDropdownKategori] = useState(false);
  const [dataTahun, setDataTahun] = useState(listTahun);
  const [dataKategori, setDataKategori] = useState(listKategori);
  const [searchTahun, setSearchTahun] = useState(
    searchParams.get("tahun") || ""
  );
  const [searchKategori, setSearchKategori] = useState(
    searchParams.get("kategori") || ""
  );
  const [kataKunci, setKataKunci] = useState(searchParams.get("keyword") || "");
  const [page, setPage] = useState(1);
  const firstIndex = (page - 1) * 5;
  const lastIndex = page * 5 > listBerita.length ? listBerita.length : page * 5;

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

  const handleTampilkan = () => {
    setPage(1);
    const dataFilter = dataBerita.filter((item) => {
      if (searchTahun !== "" && searchKategori !== "") {
        return item.year === searchTahun && item.tags.includes(searchKategori);
      } else if (searchTahun !== "") {
        return item.year === searchTahun;
      } else if (searchKategori !== "") {
        return item.tags.includes(searchKategori);
      } else {
        return item;
      }
    });
    const dataSearch =
      dataFilter.length > 0
        ? dataFilter.filter((item) => {
            if (kataKunci !== "") {
              return (
                item.title.toLowerCase().includes(kataKunci.toLowerCase()) ||
                item.description.toLowerCase().includes(kataKunci.toLowerCase())
              );
            } else {
              return item;
            }
          })
        : [];
    setListBerita(dataSearch);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleTampilkan();
    }
  };

  const updateURL = () => {
    const queryParams = {};
    if (kataKunci) queryParams.keyword = kataKunci;
    if (searchTahun) queryParams.tahun = searchTahun;
    if (searchKategori) queryParams.kategori = searchKategori;
    queryParams.page = page;
    setSearchParams(queryParams);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    updateURL();
  }, [page]);

  return (
    <div className="flex flex-col w-full bg-stone-100">
      <div className="lg:container mx-auto pt-4 lg:pt-8 pb-8 lg:pb-12 px-4 md:px-8 lg:px-2 flex flex-col justify-center">
        {/* Breadcumb */}
        <Breadcumb />
        {/* Judul Halaman */}
        <div className="flex flex-col gap-0 lg:gap-2 my-0 lg:my-4 mb-1 lg:mb-0">
          <h1 className="text-maroon-light font-bold text-2xl lg:text-3xl mb-2 lg:mb-6 mt-2 lg:mt-4">
            Berita KPU Provinsi DKI Jakarta
          </h1>
          <p className="text-stone-900 text-xl mb-1">
            Berita ini menyajikan informasi terkini mengenai berbagai kegiatan
            dan perkembangan terkait pemilihan umum yang diselenggarakan oleh
            KPU DKI Jakarta, termasuk laporan acara, laporan program kerja dan
            lain-lain.
          </p>
        </div>
        {/* Konten Utama */}
        <div className="flex flex-col mt-3 lg:mt-0 lg:flex-row">
          {/* Filter Berita */}
          <div className="w-full lg:w-1/4 lg:pr-4 mb-4 lg:mb-0">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 lg:mb-4">
              Filter Berita
            </h2>
            <div className="p-2 md:px-6 md:py-3 lg:p-3 bg-white rounded-lg shadow-md">
              <div className="mb-3">
                <h5 className="text-lg font-semibold text-gray-900 mb-1">
                  Kata Kunci
                </h5>
                <input
                  value={kataKunci}
                  onChange={(e) => setKataKunci(e.target.value)}
                  onKeyDown={handleKeyDown}
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
                    onKeyDown={handleKeyDown}
                    value={searchTahun}
                    type="text"
                    id="simple-search"
                    className="border group border-gray-300 focus:placeholder:text-gray-700 rounded-lg focus:ring-1 focus:ring-maroon-light focus:border-maroon-light focus:outline-none font-medium block w-full pe-10 p-2.5  "
                    placeholder="Pilih Tahun"
                  />
                  <div className="absolute inset-y-0 end-0 flex gap-1 items-center pe-1.5 cursor-default">
                    {searchTahun !== "" && (
                      <Clear
                        onClick={() => setSearchTahun("")}
                        className="w-6 h-6 text-gray-400 hover:text-gray-800 group-focus-within:text-gray-800"
                      />
                    )}
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
                    onKeyDown={handleKeyDown}
                    value={searchKategori}
                    type="text"
                    id="simple-search"
                    className="border group border-gray-300 focus:placeholder:text-gray-700 rounded-lg focus:ring-1 focus:ring-maroon-light focus:border-maroon-light focus:outline-none font-medium block w-full pe-10 p-2.5  "
                    placeholder="Pilih Kategori"
                  />
                  <div className="absolute inset-y-0 end-0 flex gap-1 items-center pe-1.5 cursor-default">
                    {searchKategori !== "" && (
                      <Clear
                        onClick={() => setSearchKategori("")}
                        className="w-6 h-6 text-gray-400 hover:text-gray-800 group-focus-within:text-gray-800"
                      />
                    )}
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
              <button
                onClick={() => handleTampilkan()}
                className="w-full mt-4 py-1 text-lg font-semibold bg-maroon-light text-white rounded-lg border-2 border-maroon-light hover:bg-white hover:text-maroon-light"
              >
                Tampilkan
              </button>
            </div>
          </div>
          {/* List Berita */}
          <div className="w-full">
            <div className="flex items-center justify-between mb-2 lg:mb-4">
              <span className="text-gray-800 font-semibold pt-2">
                {`Menampilkan ${firstIndex + 1}-${lastIndex} dari ${
                  dataBerita.length
                } Berita`}
              </span>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {listBerita.length > 0 ? (
                listBerita
                  .slice(firstIndex, lastIndex)
                  .map((item) => (
                    <NewsItem key={item.id} lang={lang} {...item} />
                  ))
              ) : (
                <div className="bg-white rounded-2xl shadow-lg flex h-64 flex-col gap-0 justify-center items-center">
                  <h3 className="text-xl text-center font-semibold text-stone-800">
                    Berita KPU DKI Jakarta Tidak Tersedia
                  </h3>
                  <p className="text-lg text-center text-stone-700">
                    Silakan Coba Kata Kunci atau Filter Lainnya
                  </p>
                </div>
              )}
            </div>
            {/* Pagination */}
            <nav className="w-full flex justify-center mx-auto mt-4">
              <ul className="flex items-center -space-x-px h-10 text-base">
                <button
                  onClick={() => {
                    if (page > 1) {
                      setPage(page - 1);
                      window.scrollTo(0, 0);
                    }
                  }}
                  disabled={page === 1}
                >
                  <div
                    className={`flex items-center justify-center px-4 h-10 ms-0 leading-snug text-gray-500 bg-white border border-e-0 border-gray-400 rounded-s-lg ${
                      page === 1
                        ? "cursor-not-allowed"
                        : "cursor-pointer hover:bg-gray-100 hover:text-gray-700"
                    }`}
                  >
                    <span className="sr-only">Previous</span>
                    <svg
                      className="w-4 h-4 text-maroon-light rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 1 1 5l4 4"
                      />
                    </svg>
                  </div>
                </button>
                {Array.from({ length: Math.ceil(listBerita.length / 5) }).map(
                  (_, i) => (
                    <li
                      onClick={() => {
                        setPage(i + 1);
                        window.scrollTo(0, 0);
                      }}
                      key={i}
                    >
                      <div
                        className={`flex cursor-pointer items-center justify-center px-4 h-10 text-lg font-semibold border border-gray-400 ${
                          i + 1 === page
                            ? "bg-maroon-light text-white"
                            : "text-gray-600 bg-white hover:bg-gray-100 hover:text-gray-700"
                        }`}
                      >
                        {i + 1}
                      </div>
                    </li>
                  )
                )}
                <button
                  onClick={() => {
                    if (page < Math.ceil(listBerita.length / 5)) {
                      setPage(page + 1);
                      window.scrollTo(0, 0);
                    }
                  }}
                  disabled={
                    page === Math.ceil(listBerita.length / 5) ||
                    listBerita.length === 0
                  }
                >
                  <div
                    className={`flex items-center justify-center px-4 h-10 leading-snug text-gray-500 bg-white border border-gray-400 rounded-e-lg ${
                      page === Math.ceil(listBerita.length / 5) ||
                      listBerita.length === 0
                        ? "cursor-not-allowed"
                        : "cursor-pointer hover:bg-gray-100 hover:text-gray-700"
                    }`}
                  >
                    <span className="sr-only">Next</span>
                    <svg
                      className="w-4 h-4 text-maroon-light rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                  </div>
                </button>
              </ul>
            </nav>
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
