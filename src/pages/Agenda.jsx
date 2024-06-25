import { useEffect, useState } from "react";
import Kalendar from "../components/Informasi/Agenda/Kalendar";
import Loading from "../components/Loading";

export default function Agenda() {
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
        <Kalendar />
      </div>
    </>
  );
}
