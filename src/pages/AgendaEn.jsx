import { useEffect } from "react";
import Kalendar from "../components/Informasi/Agenda/Kalendar";

export default function AgendaEn() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="flex flex-col gap-0 bg-stone-100">
        <Kalendar />
      </div>
    </>
  );
}
