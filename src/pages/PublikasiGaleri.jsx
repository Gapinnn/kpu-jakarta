import GaleriFoto from "../components/Publikasi/Galeri/GaleriFoto";
import GaleriVideo from "../components/Publikasi/Galeri/GaleriVideo";
import Breadcumb from "../components/Publikasi/Galeri/Breadcumb";
import { useEffect, useState } from "react";
import Images from "../components/Icon/Images";
import Videos from "../components/Icon/Videos";

export default function PublikasiGaleri() {
  const [tabActive, setTabctive] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="flex flex-col gap-0 bg-stone-100">
        <div className="container mx-auto pt-8 pb-12 px-2 flex flex-col justify-center">
          {/* Breadcumb */}
          <Breadcumb />
          {/* Judul Halaman */}
          <div className="flex flex-col gap-2 my-4">
            <h1 className="text-maroon-light font-bold text-3xl">
              Galeri Foto/Video
            </h1>
            <p className="text-stone-900 text-xl mb-1">
              Galeri ini menampilkan koleksi foto dan video dari berbagai
              kegiatan yang diselenggarakan oleh KPU DKI Jakarta, termasuk
              pencalonan, kampanye, pemungutan suara, dan penghitungan suara.
              Galeri ini bertujuan untuk mendokumentasikan dan membagikan
              momen-momen penting dalam perjalanan demokrasi di DKI Jakarta.
              Galeri ini dibagi menjadi dua kategori berdasarkan jenis/tipe
              konten, yaitu:
            </p>
            {/* list */}
            <div className="flex items-center gap-4">
              <h1 className="bg-maroon-light rounded-lg text-gold text-lg w-8 h-8 text-center font-bold">
                1
              </h1>
              <h1 className="text-stone-900 font-semibold text-xl">
                Album Foto
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <h1 className="bg-maroon-light rounded-lg text-gold text-lg w-8 h-8 text-center font-bold">
                2
              </h1>
              <h1 className="text-stone-900 font-semibold text-xl">
                Album Video
              </h1>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b-2 border-stone-400">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-stone-500 ">
              <li className="me-2">
                <div
                  onClick={() => setTabctive(0)}
                  className={`inline-flex items-center justify-center p-4 rounded-t-lg hover:text-stone-600 group ${
                    tabActive !== 0
                      ? "border-b-[3px] border-transparent hover:border-stone-400"
                      : "border-b-4 border-maroon-light"
                  }`}
                >
                  <Images
                    className={`w-7 h-7 me-2 ${
                      tabActive !== 0
                        ? "text-stone-400 group-hover:text-stone-500"
                        : "text-maroon-light"
                    }`}
                  />
                  <p
                    className={`text-lg cursor-pointer ${
                      tabActive !== 0
                        ? "text-stone-600 group-hover:text-stone-900"
                        : "text-maroon-light"
                    }`}
                  >
                    Album Foto
                  </p>
                </div>
              </li>
              <li className="me-2">
                <div
                  onClick={() => setTabctive(1)}
                  className={`inline-flex items-center justify-center p-4 rounded-t-lg hover:text-stone-600 group ${
                    tabActive !== 1
                      ? "border-b-[3px] border-transparent hover:border-stone-400"
                      : "border-b-4 border-maroon-light"
                  }`}
                >
                  <Videos
                    className={`w-7 h-7 me-2 ${
                      tabActive !== 1
                        ? "text-stone-400 group-hover:text-stone-500"
                        : "text-maroon-light"
                    }`}
                  />
                  <p
                    className={`text-lg cursor-pointer ${
                      tabActive !== 1
                        ? "text-stone-600 group-hover:text-stone-900"
                        : "text-maroon-light"
                    }`}
                  >
                    Album Video
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
      </div>
    </>
  );
}
