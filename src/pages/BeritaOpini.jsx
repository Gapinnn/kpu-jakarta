import { useEffect, useState } from "react";
import Opinion from "../components/Informasi/Opini/Opinion";
import Loading from "../components/Loading";

export default function BeritaOpini() {
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
        <Opinion />
      </div>
    </>
  );
}
