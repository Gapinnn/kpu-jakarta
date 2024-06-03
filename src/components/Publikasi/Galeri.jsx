import React, { useState } from "react";

export default function Galeri() {
  const [activeTab, setActiveTab] = useState("foto");
  const data = [
    {
      title: "KPU Ucapkan Terima Kasih Atas Kinerja PPK dan PPS",
      date: "02 Februari 2024",
      imgSrc: "/images/galeri1.png",
    },
    {
      title: "KPU Ucapkan Terima Kasih Atas Kinerja PPK dan PPS",
      date: "02 Februari 2024",
      imgSrc: "/images/galeri1.png",
    },
    {
      title: "KPU Ucapkan Terima Kasih Atas Kinerja PPK dan PPS",
      date: "02 Februari 2024",
      imgSrc: "/images/galeri1.png",
    },
    {
      title: "KPU Ucapkan Terima Kasih Atas Kinerja PPK dan PPS",
      date: "02 Februari 2024",
      imgSrc: "/images/galeri1.png",
    },
    {
      title: "KPU Ucapkan Terima Kasih Atas Kinerja PPK dan PPS",
      date: "02 Februari 2024",
      imgSrc: "/images/galeri1.png",
    },
    {
      title: "KPU Ucapkan Terima Kasih Atas Kinerja PPK dan PPS",
      date: "02 Februari 2024",
      imgSrc: "/images/galeri1.png",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="container mx-auto">
        <h1 className="text-red-900 text-3xl font-bold mb-8">Galeri</h1>
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
                    className="text-red-900 underline mt-2"
                  >
                    Unduh Foto
                  </a>
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
    </div>
  );
}
