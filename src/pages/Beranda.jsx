import DataSlider from "../components/Beranda/DataSlider";
import Hero from "../components/Beranda/Hero";
import InfoTerkini from "../components/Beranda/InfoTerkini";
import KontenVideo from "../components/Beranda/KontenVideo";
import Timeline from "../components/Beranda/Timeline";

export default function Beranda() {
  return (
    <>
      <div className="flex flex-col gap-0">
        <Hero />
        <Timeline />
        <InfoTerkini />
        <KontenVideo />
      </div>
    </>
  );
}