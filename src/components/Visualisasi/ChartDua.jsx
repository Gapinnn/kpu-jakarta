import LayoutVis from "./LayoutVis";
import GroupBarChart from "./Chart/GroupBarChart";
import { groupBarChart2 } from "../../contents/visualisasi";

export default function ChartDua() {
  return (
    <LayoutVis title="Jumlah Pemilih Tetap Berdasarkan Jenis Kelamin dan Kota di Provinsi DKI Jakarta">
      <GroupBarChart
        data={groupBarChart2}
        title="groupbarchart-2"
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
