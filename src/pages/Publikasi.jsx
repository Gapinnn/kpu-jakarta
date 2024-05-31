import BahanSosialisasi from "../components/Publikasi/BahanSosialisasi";
import BukuPedoman from "../components/Publikasi/BukuPedoman";
import Modul from "../components/Publikasi/Modul";
import Galeri from "../components/Publikasi/Galeri";

export default function Publikasi() {
  return (
    <>
      <div className="flex flex-col gap-0">
        <BahanSosialisasi />
        <BukuPedoman />
        <Modul />
        <Galeri />
      </div>
    </>
  );
}
