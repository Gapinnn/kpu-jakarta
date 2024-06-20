import { useParams } from "react-router-dom";
import { dataOpini, dataOpiniEn } from "../contents/informasi/opini";
import DetailOpini from "../components/Informasi/Opini/DetailOpini/DetailOpini";
import { useEffect } from "react";
import getLanguage from "../hooks/getLanguage";
export default function HalamanOpini() {
  const lang = getLanguage();
  const { idOpini } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="flex flex-col gap-0 bg-stone-100">
        {/* Detail Berita */}
        <DetailOpini
          data={lang === "id" ? dataOpini[idOpini] : dataOpiniEn[idOpini]}
        />
      </div>
    </>
  );
}
