import { useEffect } from "react";
import Opinion from "../components/Informasi/Opini/Opinion";

export default function BeritaOpiniEn() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="flex flex-col gap-0">
        <Opinion />
      </div>
    </>
  );
}
