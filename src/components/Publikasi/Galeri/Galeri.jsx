import { useState } from "react";
import Calendar from "../../Icon/Calendar";
import FileImage from "../../Icon/FileImage";
import EyeView from "../../Icon/EyeView";
import Tag from "../../Icon/Tag";

export default function Galeri() {
  const [activeTab, setActiveTab] = useState("foto");

  const handleUnduh = (filepath) => {
    const fileName = filepath.split("/").pop().split(".").shift();
    const link = document.createElement("a");
    link.href = filepath;
    link.download = fileName + ".jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const data = [
    {
      title: "KPU Ucapkan Terima Kasih Atas Kinerja PPK dan PPS",
      date: "10 Oktober 2024",
      imgSrc: "/images/GaleriFoto1.png",
      filepath: "/images/GaleriFoto1.png",
      views: 666,
      size: "1.5 MB",
      tags: ["Pemilu 2020", "Arsip"],
    },
    {
      title: "KPU Ucapkan Terima Kasih Atas Kinerja PPK dan PPS",
      date: "10 Oktober 2024",
      imgSrc: "/images/GaleriFoto1.png",
      filepath: "/images/GaleriFoto1.png",
      views: 666,
      size: "1.5 MB",
      tags: ["Pemilu 2020", "Arsip"],
    },
    {
      title: "KPU Ucapkan Terima Kasih Atas Kinerja PPK dan PPS",
      date: "10 Oktober 2024",
      imgSrc: "/images/GaleriFoto1.png",
      filepath: "/images/GaleriFoto1.png",
      views: 666,
      size: "1.5 MB",
      tags: ["Pemilu 2020", "Arsip"],
    },
    {
      title: "KPU Ucapkan Terima Kasih Atas Kinerja PPK dan PPS",
      date: "10 Oktober 2024",
      imgSrc: "/images/GaleriFoto1.png",
      filepath: "/images/GaleriFoto1.png",
      views: 666,
      size: "1.5 MB",
      tags: ["Pemilu 2020", "Arsip"],
    },
    {
      title: "KPU Ucapkan Terima Kasih Atas Kinerja PPK dan PPS",
      date: "10 Oktober 2024",
      imgSrc: "/images/GaleriFoto1.png",
      filepath: "/images/GaleriFoto1.png",
      views: 666,
      size: "1.5 MB",
      tags: ["Pemilu 2020", "Arsip"],
    },
    {
      title: "KPU Ucapkan Terima Kasih Atas Kinerja PPK dan PPS",
      date: "10 Oktober 2024",
      imgSrc: "/images/GaleriFoto1.png",
      filepath: "/images/GaleriFoto1.png",
      views: 666,
      size: "1.5 MB",
      tags: ["Pemilu 2020", "Arsip"],
    },
    {
      title: "KPU Ucapkan Terima Kasih Atas Kinerja PPK dan PPS",
      date: "10 Oktober 2024",
      imgSrc: "/images/GaleriFoto1.png",
      filepath: "/images/GaleriFoto1.png",
      views: 666,
      size: "1.5 MB",
      tags: ["Pemilu 2020", "Arsip"],
    },
    {
      title: "KPU Ucapkan Terima Kasih Atas Kinerja PPK dan PPS",
      date: "10 Oktober 2024",
      imgSrc: "/images/GaleriFoto1.png",
      filepath: "/images/GaleriFoto1.png",
      views: 666,
      size: "1.5 MB",
      tags: ["Pemilu 2020", "Arsip"],
    },
  ];

  return (
    <div className="p-8 bg-stone-100 rounded-2xl shadow-xl w-full mx-auto z-20">
      <h1 className="text-maroon-light text-3xl font-bold mb-8">Galeri</h1>
      <div className="mb-4 flex">
        <button
          onClick={() => setActiveTab("foto")}
          className={`px-4 py-2 rounded-lg w-32 ${
            activeTab === "foto"
              ? "bg-red-900 text-gold font-bold"
              : "bg-white text-maroon font-bold"
          }`}
        >
          Foto
        </button>
        <button
          onClick={() => setActiveTab("video")}
          className={`px-4 py-2 rounded-lg w-32 ${
            activeTab === "video"
              ? "bg-red-900 text-gold font-bold"
              : "bg-white text-maroon font-bold"
          }`}
        >
          Video
        </button>
      </div>
      {activeTab === "foto" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div key={index} className="p-2">
              <div className="bg-white shadow-md rounded-lg flex flex-col gap-0">
                <div className="flex w-full relative">
                  <img
                    src={item.imgSrc}
                    alt={item.title}
                    className="w-full rounded-lg "
                  />
                  <div className="w-fit bg-maroon-light absolute bottom-0 left-0 rounded-r-md rounded-bl-md">
                    <p className="text-gold text-base font-semibold px-3 py-1.5 rounded-lg">
                      GAMBAR
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center text-stone-500 text-base mb-1">
                    <span className="mr-4 flex items-center">
                      <Calendar className="w-[1.35rem] h-[1.35rem] mr-1.5 text-stone-500" />
                      {item.date}
                    </span>
                  </div>
                  <h2 className="text-maroon-light font-bold leading-tight">
                    {item.title}
                  </h2>
                  <div className="flex gap-1.5 w-full mt-2">
                    <div className="bg-stone-200 py-0.5 px-2 flex justify-center items-center rounded-xl hover:bg-stone-500 group">
                      <FileImage className="w-3 h-3 text-stone-500 group-hover:text-stone-100" />
                      <p className="text-stone-500 text-xs ms-1 font-semibold group-hover:text-stone-100">
                        {item.size}
                      </p>
                    </div>
                    <div className="bg-stone-200 py-0.5 px-2 flex justify-center items-center rounded-xl hover:bg-stone-500 group">
                      <EyeView className="w-3 h-3 text-stone-500 group-hover:text-stone-100" />
                      <p className="text-stone-500 text-xs ms-1 font-semibold group-hover:text-stone-100">
                        {item.views}
                      </p>
                    </div>
                    {item.tags.map((tag) => (
                      <div
                        key={tag}
                        className="bg-stone-200 py-0.5 px-2 flex justify-center items-center rounded-xl hover:bg-stone-500 group"
                      >
                        <Tag className="w-3 h-3 text-stone-500 group-hover:text-stone-100" />
                        <p className="text-stone-500 text-xs ms-1 font-semibold group-hover:text-stone-100">
                          {tag}
                        </p>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => handleUnduh(item.filepath)}
                    className="mt-2 w-full flex justify-center items-center bg-maroon-light border-maroon-light text-stone-100 px-9 py-1.5 rounded-full text-base font-semibold group hover:bg-stone-100 hover:border-maroon-light hover:text-stone-100"
                  >
                    <FileImage className="w-4 h-4 me-2" />
                    <p className="text-sm">Unduh Foto</p>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {activeTab === "video" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg">
              <img
                src={item.imgSrc}
                alt={item.title}
                className="rounded-lg w-full"
              />
              <div className="p-4">
                <h2 className="text-maroon font-bold mt-0 mb-0">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-500 mt-2">{item.date}</p>
                <a
                  href={item.imgSrc}
                  download
                  className="text-maroon underline mt-2"
                >
                  Unduh Video
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
