import { useParams } from "react-router-dom";
import { dataOpini, dataOpiniEn } from "../contents/informasi/opini";
import DetailOpini from "../components/Informasi/Opini/DetailOpini/DetailOpini";
import { useEffect, useState } from "react";
import getLanguage from "../hooks/getLanguage";
import Loading from "../components/Loading";
export default function HalamanOpini() {
  const lang = getLanguage();
  const { idOpini } = useParams();
  const [loadingPage, setLoadingPage] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoadingPage(false);
    }, 500);
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="flex flex-col gap-0 bg-stone-100">
        {/* Detail Berita */}
        <Loading isLoading={loadingPage} />
        <DetailOpini
          data={lang === "id" ? dataOpini[idOpini] : dataOpiniEn[idOpini]}
        />
      </div>
    </>
  );
}
