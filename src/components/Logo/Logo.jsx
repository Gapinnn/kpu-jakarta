import { Link } from "react-router-dom";
import getLanguage from "../../hooks/getLanguage";
const Logo = () => {
  const lang = getLanguage();

  return (
    <Link to={`/${lang}`} className="flex gap-2.5 py-2">
      <img src="/images/kpu.png" alt="Logo KPU" className="w-[3.75rem]" />
      <div className="flex flex-col justify-center gap-1">
        <p className="m-0 p-0 text-3xl font-extrabold leading-none text-stone-100">
          K<span className="text-stone-100">P</span>U
        </p>
        <div>
          <p className="text-xs text-stone-100">Komisi Pemilihan Umum</p>
          <p className="text-xs text-stone-100">Provinsi DKI Jakarta</p>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
