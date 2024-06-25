import { useEffect, useState } from "react";
import TupoksiComponent from "../components/TugasPokok/Tupoksi";
import Loading from "../components/Loading";

export default function Tupoksi() {
  const [loadingPage, setLoadingPage] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoadingPage(false);
    }, 500);
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Loading isLoading={loadingPage} />
      <TupoksiComponent />
    </>
  );
}
