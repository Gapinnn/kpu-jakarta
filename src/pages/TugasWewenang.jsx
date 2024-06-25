import { useEffect, useState } from "react";
import TugasWewenangComponent from "../components/TugasWewenang/TugasWewenang";
import Loading from "../components/Loading";

export default function TugasWewenang() {
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
      <TugasWewenangComponent />
    </>
  );
}
