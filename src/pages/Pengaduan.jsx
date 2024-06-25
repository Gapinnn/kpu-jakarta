import { useEffect, useState } from "react";
import PengaduanComponent from "../components/Pengaduan/PengaduanComponent";
import Loading from "../components/Loading";

export default function Pengaduan() {
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
        <Loading isLoading={loadingPage} />
        <PengaduanComponent />
      </div>
    </>
  );
}
