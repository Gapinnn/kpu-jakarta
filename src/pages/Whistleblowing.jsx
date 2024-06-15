import { useEffect } from "react";
import Mekanisme from "../components/Pengaduan/Whistleblowing/Mekanisme";

export default function Whistleblowing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="flex flex-col gap-0 bg-stone-100">
        <Mekanisme />
      </div>
    </>
  );
}
