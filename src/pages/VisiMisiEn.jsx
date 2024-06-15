import { useEffect } from "react";
import VisiMisiComponent from "../components/VisiMisi/VisiMisi";

export default function VisiMisiEn() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="flex flex-col gap-0">
        <VisiMisiComponent />
      </div>
    </>
  );
}
