import { useEffect, useState } from "react";
import Announcement from "../components/Informasi/Pengumuman/Announcement";
import Loading from "../components/Loading";

export default function Pengumuman() {
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
        <Announcement />
      </div>
    </>
  );
}
