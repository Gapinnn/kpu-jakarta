import Breadcumb from "../Sejarah/Breadcumb";
import { dataSejarah } from "../../contents/sejarah";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sejarah = () => {
  const [tabActive, setTabActive] = useState(0);
  return (
    <div className="flex flex-col w-full bg-stone-100">
      <div className="container mx-auto pt-8 pb-12 px-2 flex flex-col justify-center">
        {/* Breadcumb */}
        <Breadcumb />
        {/* Judul Halaman */}
        <div className="flex flex-col gap-2 my-4">
          <h1 className="text-maroon-light font-bold text-3xl">
            Sejarah Pemilu
          </h1>
          <p className="text-stone-900 text-xl mb-1">
            Sejarah Pemilu ini menyajikan gambaran lengkap mengenai perjalanan
            sejarah pemilihan umum di Indonesia, khususnya di wilayah DKI
            Jakarta. Disusun oleh KPU DKI Jakarta, publikasi ini bertujuan untuk
            memberikan pemahaman yang mendalam mengenai perkembangan demokrasi,
            perubahan sistem pemilu, dan pencapaian penting dalam setiap periode
            pemilihan umum.
          </p>
        </div>
        {/* Perbesar max-w ke 7xl */}
        <div className="w-full z-20 flex flex-col justify-center mx-auto py-8 px-10 bg-white shadow-2xl rounded-2xl">
          <div className="flex">
            <div className="w-1/4 p-2 pr-4 rounded-lg">
              <ul className="flex flex-col justify-between gap-2">
                {dataSejarah.map((election, index) => (
                  <button
                    key={index}
                    onClick={() => setTabActive(index)}
                    className={`py-1 px-2 rounded-lg text-center text-lg h-12 flex items-center justify-center w-full ${
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
            <div className="w-3/4 border-l-2 border-gold border-opacity-50 pl-4">
              <h2 className="text-maroon-light text-2xl font-bold">
                {dataSejarah[tabActive].name}
              </h2>
              <h3 className="text-xl text-stone-800 font-semibold mb-4">
                {dataSejarah[tabActive].title}
              </h3>
              <div className="flex">
                <img
                  src={dataSejarah[tabActive].imgSrc}
                  alt="Pemilu 1955"
                  className="w-1/4 rounded-lg shadow-md" // Ubah ukuran gambar ke w-1/4 untuk proporsi lebih besar
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
