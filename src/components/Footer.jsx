import { menu } from "../contents/header";
import { tentang, tautan } from "../contents/footer";
import { Link } from "react-router-dom";
import Facebook from "./Logo/Facebook";
import Instagram from "./Logo/Instagram";
import Youtube from "./Logo/Youtube";
import Twitter from "./Logo/Twitter";
import Linkedln from "./Logo/Linkedln";
import Maps from "./Logo/Maps";

const Footer = () => {
  return (
    <footer className="bg-maroon px-[3%] py-8">
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between py-4 mx-12 border-b-2 border-gold z-30 relative">
        <div className="flex flex-col lg:items-start items-center gap-4 z-30">
          <div className="flex gap-3">
            <img src="./images/kpu.png" alt="Logo KPU" className="w-20" />
            <p className="flex flex-col justify-center space-y-0.5">
              <p className="m-0 p-0 text-4xl text-white font-extrabold">KPU</p>
              <p className="text-3xl font-semibold text-white">
                Provinsi DKI Jakarta
              </p>
            </p>
          </div>
          <p className="text-stone-300 text-justify">
            Jl. Salemba Raya No.15, RT.1/RW.3, <br />
            Paseban, Kec. Senen, Kota Jakarta Pusat, <br />
            Daerah Khusus Ibukota Jakarta 10440
          </p>
          <p className="text-stone-300 text-justify">
            Telp: (021) 3508158
            <br />
            Fax: (622) 3923219
            <br />
            Email: hupmaskpudki@gmail.com
          </p>
        </div>
        <div className="mt-8 md:mt-0 mb-2 lg:flex lg:flex-row lg:items-start lg:justify-between gap-16 z-30">
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-xl font-bold text-stone-100">Tentang Kami</h3>
            {tentang.map((item) => (
              <Link
                to={item.path}
                key={item.name}
                className="text-stone-300 hover:text-stone-100"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col items-center gap-4 mt-8 md:mt-0">
            <h3 className="text-xl font-bold text-stone-100">Tautan Lain</h3>
            {tautan.map((item) => (
              <Link
                to={item.href}
                key={item.nLinkme}
                className="text-stone-300 hover:text-stone-100"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="absolute w-1/2 left-0 bottom-0 -z-0">
          <img
            src="./images/siluet-black.svg"
            alt="Logo KPU"
            className="w-full"
          />
        </div>
        <div className="absolute w-1/2 right-0 bottom-0 -z-0">
          <img
            src="./images/siluet-black.svg"
            alt="Logo KPU"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:justify-between pt-4 gap-4 mx-12 z-20">
        <p className="text-stone-300 z-30">
          &copy;2024 Kelompok 5 3SI2 Politeknik Statistika STIS
        </p>
        <div className="flex gap-4 z-30">
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
