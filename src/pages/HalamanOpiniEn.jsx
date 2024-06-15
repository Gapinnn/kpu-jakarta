import { useParams } from "react-router-dom";
import { dataOpini } from "../contents/informasi/opini";
import DetailOpini from "../components/Informasi/Opini/DetailOpini/DetailOpini";
import { useEffect } from "react";
export default function HalamanOpiniEn() {
  const { idOpini } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="flex flex-col gap-0 bg-stone-100">
        {/* Detail Berita */}
        <DetailOpini data={dataOpini[idOpini]} />
      </div>
    </>
  );
}
