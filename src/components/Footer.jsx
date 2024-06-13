import { tentang, tautan } from "../contents/footer";
import { Link } from "react-router-dom";
import Facebook from "./Logo/Facebook";
import Instagram from "./Logo/Instagram";
import Youtube from "./Logo/Youtube";
import Twitter from "./Logo/Twitter";
import Maps from "./Logo/Maps";

const Footer = () => {
  const handleTautanLain = (e, url) => {
    e.preventDefault();
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <footer className="bg-maroon w-full px-[5%] py-8">
      <div className="flex w-full flex-col lg:flex-row items-start lg:justify-between py-2 lg:py-4 lg:mx-0 border-b-2 border-gold z-20 relative">
        <div className="flex w-full flex-col items-start gap-2 lg:gap-4 z-20 mx-4 lg:mx-0">
          <div className="flex gap-3 mb-6 lg:mb-0">
            <img
              src="/images/kpu.png"
              alt="Logo KPU"
              className="w-14 lg:w-20"
            />
            <p className="flex flex-col justify-center space-y-0.5">
              <p className="m-0 p-0 text-2xl md:text-3xl lg:text-4xl text-white font-extrabold">
                KPU
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-white">
                Provinsi DKI Jakarta
              </p>
            </p>
          </div>
          <p className="text-sm md:text-base text-stone-300 text-start lg:text-justify">
            Jl. Salemba Raya No.15, RT.1/RW.3, <br />
            Paseban, Kec. Senen, Kota Jakarta Pusat, <br />
            Daerah Khusus Ibukota Jakarta 10440
          </p>
          <p className="text-sm md:text-base text-stone-300 text-start lg:text-justify">
            Telp: (021) 3508158
            <br />
            Fax: (622) 3923219
            <br />
            Email: hupmaskpudki@gmail.com
          </p>
        </div>
        <div className="mt-4 mb-2 flex flex-col items-start mx-4 md:grid md:grid-cols-2 md:mt-4 lg:mt-8 lg:mx-0 lg:flex lg:flex-row lg:items-start lg:justify-between gap-4 lg:gap-16 z-20">
          <div className="flex flex-col items-start lg:items-center gap-2 lg:gap-4">
            <h3 className="text-base md:text-lg lg:text-xl font-bold text-stone-100">
              Tentang Kami
            </h3>
            {tentang.map((item) => (
              <Link
                to={item.path}
                key={item.name}
                className="text-sm md:text-base text-stone-300 hover:text-stone-100"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col items-start lg:items-center gap-2 lg:gap-4 mt-2 lg:mt-0">
            <h3 className="text-base md:text-lg lg:text-xl font-bold text-stone-100">
              Tautan Lain
            </h3>
            {tautan.map((item) => (
              <Link
                to={"#"}
                onClick={(e) => handleTautanLain(e, item.href)}
                key={item.name}
                className="text-sm md:text-base text-stone-300 hover:text-stone-100"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="absolute hidden lg:flex w-1/2 left-0 bottom-0 -z-0">
          <img
            src="/images/siluet-black.svg"
            alt="Logo KPU"
            className="w-full"
          />
        </div>
        <div className="absolute hidden lg:flex w-1/2 right-0 bottom-0 -z-0">
          <img
            src="/images/siluet-black.svg"
            alt="Logo KPU"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:justify-between pt-3 lg:pt-4 gap-3 lg:gap-4 mx-4 lg:mx-12 z-20">
        <p className="text-sm md:text-base text-stone-300 z-20">
          &copy;2024 Kelompok 5 3SI2 Politeknik Statistika STIS
        </p>
        <div className="flex gap-4 z-20">
          <Link
            to={"https://www.facebook.com/KPUProvinsiDKIJakarta/"}
            className="transition-transform duration-500 hover:-translate-y-2"
          >
            <Facebook />
          </Link>
          <Link
            to={"https://www.instagram.com/kpu_dki/"}
            className="transition-transform duration-500 hover:-translate-y-2"
          >
            <Instagram />
          </Link>
          <Link
            to={"https://x.com/kpu_dki"}
            className="transition-transform duration-500 hover:-translate-y-2"
          >
            <Twitter />
          </Link>
          <Link
            to={"https://www.youtube.com/channel/UCbbj_uExhCS4mi7U72kwgLA"}
            className="transition-transform duration-500 hover:-translate-y-2"
          >
            <Youtube />
          </Link>
          <Link
            to={"https://maps.app.goo.gl/eDUfsFpV378GAcvx8"}
            className="transition-transform duration-500 hover:-translate-y-2"
          >
            <Maps />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
