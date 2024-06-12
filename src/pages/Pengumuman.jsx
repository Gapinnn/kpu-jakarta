import { useEffect } from "react";
import Announcement from "../components/Informasi/Pengumuman/Announcement";

export default function Pengumuman() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="flex flex-col gap-0">
        <Announcement />
      </div>
    </>
  );
}
