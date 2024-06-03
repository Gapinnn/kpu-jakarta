import LayoutVis from "./LayoutVis";
import { spiderChart1 } from "../../contents/visualisasi";
import SpiderChart from "./Chart/SpiderChart";

export default function ChartTiga() {
  return (
    <LayoutVis title="Nilai Indikator Pelaksanaan Pemilihan Umum 2024 di Provinsi DKI Jakarta">
      <SpiderChart
        data={spiderChart1}
        title="spiderchart-1"
        className="mx-auto"
      />
      <h2 className="text-xl text-maroon-light font-bold text-center mt-2">
        Interpretasi
      </h2>
      <div className="w-full my-1 h-0.5 bg-maroon-light bg-opacity-50"></div>
      <p className="text-black">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ea eum
        fuga officia possimus illo cum fugiat quis? Eligendi reiciendis
        molestias vero fugit provident praesentium eius atque sit dignissimos
        numquam non ipsa consequatur tenetur adipisci ullam minus porro hic,
        aliquid saepe. Reiciendis repellat maxime adipisci dicta aliquam,
        expedita corrupti excepturi doloribus tempora rerum placeat aperiam
        tenetur soluta. Sed, ab laborum!
      </p>
    </LayoutVis>
  );
}
