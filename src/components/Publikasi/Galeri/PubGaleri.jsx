import { useState } from "react";
import Breadcumb from "./Breadcumb";
import Images from "../../Icon/Images";
import Videos from "../../Icon/Videos";
import GaleriFoto from "./GaleriFoto";
import GaleriVideo from "./GaleriVideo";
import getLanguage from "../../../hooks/getLanguage";

export default function PubGaleri() {
  const lang = getLanguage();
  const [tabActive, setTabctive] = useState(0);
  return (
    <div className="lg:container mx-auto pt-4 lg:pt-8 pb-8 lg:pb-12 px-4 md:px-8 lg:px-2 flex flex-col justify-center">
      {/* Breadcumb */}
      <Breadcumb />
      {/* Judul Halaman */}
      <div className="flex flex-col gap-0 lg:gap-2 my-0 mb-1 lg:mb-4">
        <h1 className="text-maroon-light font-bold text-xl md:text-2xl lg:text-3xl mb-2 lg:mb-0 mt-2 lg:mt-4">
          
          {
                lang == "id"
                  ?"Galeri Foto/Video"
                  :"Photo/Video Gallery"
              }
        </h1>
        <p className="text-justify text-stone-900 text-base md:text-lg lg:text-xl mb-2 lg:mb-1">
          
          {
                lang == "id"
                  ?"Galeri ini menampilkan koleksi foto dan video dari berbagai kegiatan yang diselenggarakan oleh KPU DKI Jakarta, termasuk pencalonan, kampanye, pemungutan suara, dan penghitungan suara. Galeri ini bertujuan untuk mendokumentasikan dan membagikan momen-momen penting dalam perjalanan demokrasi di DKI Jakarta. Galeri ini dibagi menjadi dua kategori berdasarkan jenis/tipe konten, yaitu:"
                  :"This gallery displays a collection of photos and videos from various activities organized by the DKI Jakarta KPU, including nominations, campaigning, voting, and vote counting. This gallery aims to document and share important moments in the journey of democracy in DKI Jakarta. This gallery is divided into: two categories based on the type/type of content, namely:"
              }
        </p>
        {/* list */}
        <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
          <h1 className="bg-maroon-light rounded-lg text-gold text-sm md:text-base lg:text-lg w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-center font-bold">
            1
          </h1>
          <h1 className="text-stone-900 font-semibold text-base md:text-lg lg:text-xl">

            {
                lang == "id"
                  ?"Album Foto"
                  :"Photo album"
              }
          </h1>
        </div>
        <div className="flex items-center gap-2 md:gap-3 lg:gap-4 mt-1 md:mt-1.5 lg:mt-0">
          <h1 className="bg-maroon-light rounded-lg text-gold text-sm md:text-base lg:text-lg w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-center font-bold">
            2
          </h1>
          <h1 className="text-stone-900 font-semibold text-base md:text-lg lg:text-xl">
          {
                lang == "id"
                  ?"Album Video"
                  :"Video album"
              }
          </h1>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b-2 border-stone-400 mt-2 md:mt-2.5 lg:mt-0">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-stone-500 ">
          <li className="me-2">
            <div
              onClick={() => setTabctive(0)}
              className={`inline-flex items-center justify-center p-2 md:p-3 lg:p-4 rounded-t-lg hover:text-stone-600 group ${
                tabActive !== 0
                  ? "border-b-[3px] border-transparent hover:border-stone-400"
                  : "border-b-4 border-maroon-light"
              }`}
            >
              <Images
                className={`w-6 h-6 md:w-7 md:h-7 me-1.5 md:me-2 ${
                  tabActive !== 0
                    ? "text-stone-400 group-hover:text-stone-500"
                    : "text-maroon-light"
                }`}
              />
              <p
                className={`text-base md:text-lg cursor-pointer ${
                  tabActive !== 0
                    ? "text-stone-600 group-hover:text-stone-900"
                    : "text-maroon-light"
                }`}
              >
                {
                lang == "id"
                  ?"Album Foto"
                  :"Photo album"
              }
              </p>
            </div>
          </li>
          <li className="me-2">
            <div
              onClick={() => setTabctive(1)}
              className={`inline-flex items-center justify-center p-2 md:p-3 lg:p-4 rounded-t-lg hover:text-stone-600 group ${
                tabActive !== 1
                  ? "border-b-[3px] border-transparent hover:border-stone-400"
                  : "border-b-4 border-maroon-light"
              }`}
            >
              <Videos
                className={`w-6 h-6 me-1.5 md:w-7 md:h-7 md:me-2 ${
                  tabActive !== 1
                    ? "text-stone-400 group-hover:text-stone-500"
                    : "text-maroon-light"
                }`}
              />
              <p
                className={`text-base md:text-lg cursor-pointer ${
                  tabActive !== 1
                    ? "text-stone-600 group-hover:text-stone-900"
                    : "text-maroon-light"
                }`}
              >
                 {
                lang == "id"
                  ?"Album Video"
                  :"Video album"
              }
              </p>
            </div>
          </li>
        </ul>
      </div>

      {/* Album Foto */}
      {tabActive === 0 && <GaleriFoto />}

      {/* Album Video */}
      {tabActive === 1 && <GaleriVideo />}
    </div>
  );
}
