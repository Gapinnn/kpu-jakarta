import LayoutVis from "./LayoutVis";
import {
  spiderChart1,
  spiderChart1En,
  listVariabelSpiderChart1,
  listVariabelSpiderChart1En,
} from "../../contents/visualisasi";
import SpiderChart from "./Chart/SpiderChart";
import { useState, useCallback, useEffect } from "react";
import getLanguage from "../../hooks/getLanguage";

export default function ChartDua() {
  const lang = getLanguage();
  const spiderChart = lang === "id" ? spiderChart1 : spiderChart1En;
  const [data, setData] = useState(spiderChart[0].data);
  const [warna, setWarna] = useState(spiderChart[0].warna);
  const [label, setLabel] = useState(spiderChart[0].label);
  const [dataName, setDataName] = useState(
    lang === "id"
      ? "Indikator Pemilu - Jenis Kelamin"
      : "Election Indicator - Gender"
  );
  const [indexData, setIndexData] = useState(0);
  const [selectedData, setSelectedData] = useState({
    group1: true,
    group2: true,
    group3: true,
  });
  const [indexSelectedData, setIndexSelectedData] = useState([0, 1, 2]);
  const checkboxLabels = spiderChart[0].label;

  const changeDataName = (value) => {
    changeSelectedData("all");
    setDataName(value);
  };

  const changeData = useCallback((dataName) => {
    switch (dataName) {
      case lang === "id"
        ? "Indikator Pemilu - Jenis Kelamin"
        : "Election Indicator - Gender":
        return 0;
      case lang === "id"
        ? "Indikator Pemilu - Usia"
        : "Election Indicator - Age":
        return 1;
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
      case "group3":
        setSelectedData((prevState) => ({
          ...prevState,
          group3: !prevState.group3,
        }));
        setIndexSelectedData((prevState) => {
          if (prevState.includes(2)) {
            return prevState.filter((item) => item !== 2).sort();
          } else {
            return [...prevState, 2].sort();
          }
        });
        break;
      case "all":
        setSelectedData(() => ({
          group1: true,
          group2: true,
          group3: true,
        }));
        setIndexSelectedData([0, 1, 2]);
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
      newData.push(spiderChart[indexData].data[index]);
      newWarna.push(spiderChart[indexData].warna[index]);
      newLabel.push(spiderChart[indexData].label[index]);
    });
    setData(newData);
    setWarna(newWarna);
    setLabel(newLabel);
  }, [indexSelectedData, indexData]);

  useEffect(() => {
    console.log("listVariabelSpiderChart1:", listVariabelSpiderChart1);
  }, []);

  return (
    <LayoutVis title={spiderChart[indexData].title}>
      <div className="w-full flex flex-col lg:flex-row gap-6">
        <SpiderChart
          data={data}
          keys={label}
          warna={warna}
          dataName={dataName}
          variabelAll={
            lang === "id"
              ? listVariabelSpiderChart1
              : listVariabelSpiderChart1En
          }
          selectedData={selectedData}
          checkboxLabels={checkboxLabels}
          changeDataName={changeDataName}
          changeSelectedData={changeSelectedData}
          title="spiderchart-1"
          className="mx-auto flex lg:basis-[35%] xl:basis-1/2"
        />
        <div className="w-full flex px-1 pb-2 md:px-2 md:pb-4 lg:pb-0 lg:px-0 lg:basis-[65%] xl:basis-1/3 gap-1 lg:gap-2 flex-col">
          <h2 className="text-base md:text-lg lg:text-xl text-maroon-light font-bold text-center mt-2">
            {lang === "id" ? "Interpretasi" : "Interpretation"}
          </h2>
          <div className="w-full my-1 h-0.5 bg-maroon-light bg-opacity-50"></div>
          <p className="text-black text-justify text-sm md:text-base">
            {spiderChart[indexData].interpretasi}
          </p>
        </div>
      </div>
    </LayoutVis>
  );
}
