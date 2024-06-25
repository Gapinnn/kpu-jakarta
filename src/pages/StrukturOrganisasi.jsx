import { useEffect, useState } from "react";
import Struktur from "../components/StrukturOrganisasi/Struktur";
import Loading from "../components/Loading";

export default function StrukturOrganisasi() {
  const [loadingPage, setLoadingPage] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoadingPage(false);
    }, 500);
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="flex flex-col gap-0 m-0 p-0">
        <Loading isLoading={loadingPage} />
        <Struktur />
      </div>
    </>
  );
}
