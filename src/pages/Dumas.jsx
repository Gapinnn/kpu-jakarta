import { useEffect, useState } from "react";
import Mekanisme from "../components/Pengaduan/Dumas/Mekanisme";
import Loading from "../components/Loading";

export default function Dumas() {
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
        <Mekanisme />
      </div>
    </>
  );
}
