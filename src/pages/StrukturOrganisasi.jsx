import { useEffect } from "react";
import Struktur from "../components/StrukturOrganisasi/Struktur";

export default function StrukturOrganisasi() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="flex flex-col gap-0 m-0 p-0">
        <Struktur />
      </div>
    </>
  );
}
