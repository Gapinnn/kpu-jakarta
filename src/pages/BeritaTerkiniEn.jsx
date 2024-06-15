import { useEffect } from "react";
import BeritaNow from "../components/Informasi/Berita/BeritaNow";

export default function BeritaTerkiniEn() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="flex flex-col gap-0">
        <BeritaNow />
      </div>
    </>
  );
}
