import Breadcumb from "../Sejarah/Breadcumb";
import { dataSejarah } from "../../contents/sejarah";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sejarah = () => {
  const [tabActive, setTabActive] = useState(0);
  return (
    <div className="flex flex-col w-full bg-stone-100">
      <div className="lg:container mx-auto pt-4 lg:pt-8 pb-8 lg:pb-12 px-4 md:px-8 lg:px-2 flex flex-col justify-center">
        {/* Breadcumb */}
        <Breadcumb />
        {/* Judul Halaman */}
        <h1 className="text-maroon-light font-bold text-xl md:text-2xl lg:text-3xl mb-2 lg:mb-6 mt-2 lg:mt-4">
          Sejarah Pemilu di Indonesia
        </h1>
        {/* Konten */}
        <div className="w-full z-20 flex flex-col justify-center mx-auto py-4 lg:py-8 px-2 lg:px-10 bg-white shadow-2xl rounded-2xl">
          <div className="flex flex-col gap-2 lg:gap-0 lg:flex-row">
            {/* Tab Tahun */}
            <div className="w-full lg:w-1/4 pt-0 p-2 lg:pt-2 lg:pr-4 rounded-lg">
              <ul className="flex flex-col justify-between gap-1 md:gap-2">
                {dataSejarah.map((election, index) => (
                  <button
                    key={index}
                    onClick={() => setTabActive(index)}
                    className={`py-1 px-2 rounded-lg text-center text-base md:text-lg h-12 flex items-center justify-center w-full ${
                      tabActive === index
                        ? "bg-maroon-light text-white font-bold"
                        : "bg-white text-maroon-light hover:bg-maroon-light hover:text-white hover:font-bold"
                    }`}
                  >
                    {election.name}
                  </button>
                ))}
              </ul>
            </div>
            {/* Konten Sejarah */}
            <div className="w-full lg:w-3/4 border-t-2 lg:border-t-0 lg:border-l-2 border-gold border-opacity-50 pt-4 lg:pl-4">
              <h2 className="text-maroon-light text-xl px-2 md:text-2xl lg:text-2xl font-bold">
                {dataSejarah[tabActive].name}
              </h2>
              <h3 className="text-lg md:text-xl px-2 text-stone-800 font-semibold mb-2">
                {dataSejarah[tabActive].title}
              </h3>
              {/* Isi Sejarah */}
              {/* Versi Non Laptop */}
              <div className="w-full block lg:hidden">
                <img
                  src={dataSejarah[tabActive].imgSrc}
                  alt="Pemilu 1955"
                  className="float-left w-1/3 md:w-[40%] mt-1 ml-2 mr-4 h-fit rounded-lg shadow-md" // Ubah ukuran gambar ke w-1/4 untuk proporsi lebih besar
                />
                <p className="text-justify text-sm md:text-base px-2">
                  <span>{dataSejarah[tabActive].deskripsi}</span>
                </p>
                <div className="w-full pt-4 pb-1 px-1 lg:hidden">
                  <Link
                    to="#"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(
                        dataSejarah[tabActive].url,
                        "_blank",
                        "noopener,noreferrer"
                      );
                    }}
                    className="w-full text-sm md:text-base mt-1 md:mt-2 py-1.5 px-4 md:px-6 font-semibold bg-maroon-light text-white rounded-lg border-2 border-maroon-light hover:bg-white hover:text-maroon-light"
                  >
                    Selengkapnya
                  </Link>
                </div>
              </div>
              {/* Versi Laptop */}
              <div className="hidden lg:flex">
                <img
                  src={dataSejarah[tabActive].imgSrc}
                  alt="Pemilu 1955"
                  className="w-1/4 h-fit rounded-lg shadow-md" // Ubah ukuran gambar ke w-1/4 untuk proporsi lebih besar
                />
                <p className="flex flex-col text-justify pl-4 pr-8">
                  <span>{dataSejarah[tabActive].deskripsi}</span>
                  <Link
                    to="#"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(
                        dataSejarah[tabActive].url,
                        "_blank",
                        "noopener,noreferrer"
                      );
                    }}
                    className="w-max mt-2 py-1.5 px-4 font-semibold bg-maroon-light text-white rounded-lg border-2 border-maroon-light hover:bg-white hover:text-maroon-light"
                  >
                    Selengkapnya
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sejarah;
