import { useEffect, useState } from "react";
import SejarahComponent from "../components/Sejarah/SejarahComponent";
import Loading from "../components/Loading";

export default function Sejarah() {
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
        <SejarahComponent />
      </div>
    </>
  );
}
