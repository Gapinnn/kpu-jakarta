import { useEffect, useState } from "react";
import BeritaNow from "../components/Informasi/Berita/BeritaNow";
import Loading from "../components/Loading";

export default function BeritaTerkini() {
  const [loadingPage, setLoadingPage] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoadingPage(false);
    }, 500);
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="flex flex-col gap-0">
        <Loading isLoading={loadingPage} />
        <BeritaNow />
      </div>
    </>
  );
}
