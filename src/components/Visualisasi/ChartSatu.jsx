import LayoutVis from "./LayoutVis";
import GroupBarChart from "./Chart/GroupBarChart";
import {
  groupBarChart1,
  listVariabelGroupBarChart1,
} from "../../contents/visualisasi";
import { useCallback, useState, useEffect } from "react";

export default function ChartSatu() {
  const [data, setData] = useState(groupBarChart1[0].data);
  const [warna, setWarna] = useState(groupBarChart1[0].warna);
  const [label, setLabel] = useState(groupBarChart1[0].label);
  const [dataName, setDataName] = useState("Jumlah Pemilih Tetap");
  const [indexData, setIndexData] = useState(0);
  const [selectedData, setSelectedData] = useState({
    group1: true,
    group2: true,
  });
  const [indexSelectedData, setIndexSelectedData] = useState([0, 1]);

  const changeDataName = (value) => {
    changeSelectedData("all");
    setDataName(value);
  };

  const changeData = useCallback((dataName) => {
    switch (dataName) {
      case "Jumlah Pemilih Tetap":
        return 0;
      case "Jumlah Pemilih Tetap Baru":
        return 1;
      case "Jumlah Tempat Pemungutan Suara":
        return 2;
      default:
        return 0;
    }
  }, []);

  const changeSelectedData = (value) => {
    switch (value) {
      case "group1":
        setSelectedData((prevState) => ({
          ...prevState,
          group1: !prevState.group1,
        }));
        setIndexSelectedData((prevState) => {
          if (prevState.includes(0)) {
            return prevState.filter((item) => item !== 0).sort();
          } else {
            return [...prevState, 0].sort();
          }
        });
        break;
      case "group2":
        setSelectedData((prevState) => ({
          ...prevState,
          group2: !prevState.group2,
        }));
        setIndexSelectedData((prevState) => {
          if (prevState.includes(1)) {
            return prevState.filter((item) => item !== 1).sort();
          } else {
            return [...prevState, 1].sort();
          }
        });
        break;
      case "all":
        setSelectedData(() => ({
          group1: true,
          group2: true,
        }));
        setIndexSelectedData([0, 1]);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setIndexData(changeData(dataName));
  }, [dataName, changeData]);

  useEffect(() => {
    let newData = [];
    let newWarna = [];
    let newLabel = [];
    indexSelectedData.forEach((index) => {
      newWarna.push(groupBarChart1[indexData].warna[index]);
      newLabel.push(groupBarChart1[indexData].label[index]);
      newData.push(groupBarChart1[indexData].data[index]);
    });
    setData(newData);
    setWarna(newWarna);
    setLabel(newLabel);
  }, [indexSelectedData, indexData]);

  return (
    <LayoutVis title={groupBarChart1[indexData].title}>
      <div className="w-full flex flex-col lg:flex-row gap-6">
        <GroupBarChart
          data={data}
          keys={label}
          warna={warna}
          dataName={dataName}
          variabelAll={listVariabelGroupBarChart1}
          selectedData={selectedData}
          changeDataName={changeDataName}
          changeSelectedData={changeSelectedData}
          title="groupbarchart-1"
          className="mx-auto flex lg:basis-[35%] xl:basis-2/3"
        />
        <div className="w-full flex lg:basis-[65%] xl:basis-1/3 gap-2 flex-col">
          <h2 className="text-xl text-maroon-light font-bold text-center mt-2">
            Interpretasi
          </h2>
          <div className="w-full my-1 h-0.5 bg-maroon-light bg-opacity-50"></div>
          <p className="text-black text-md">
            {groupBarChart1[indexData].interpretasi}
          </p>
        </div>
      </div>
    </LayoutVis>
  );
}
