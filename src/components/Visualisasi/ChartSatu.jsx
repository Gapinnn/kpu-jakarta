import LayoutVis from "./LayoutVis";
import GroupBarChart from "./Chart/GroupBarChart";
import { groupBarChart1 } from "../../contents/visualisasi";

export default function ChartSatu() {
  return (
    <LayoutVis title={groupBarChart1[0].title}>
      <div className="w-full flex flex-col lg:flex-row gap-6">
        <GroupBarChart
          data={groupBarChart1[0].data}
          title="groupbarchart-1"
          className="mx-auto flex lg:basis-[35%] xl:basis-2/3"
        />
        <div className="w-full flex lg:basis-[65%] xl:basis-1/3 gap-2 flex-col">
          <h2 className="text-xl text-maroon-light font-bold text-center mt-2">
            Interpretasi
          </h2>
          <div className="w-full my-1 h-0.5 bg-maroon-light bg-opacity-50"></div>
          <p className="text-black text-md">{groupBarChart1[0].interpretasi}</p>
        </div>
      </div>
    </LayoutVis>
  );
}
