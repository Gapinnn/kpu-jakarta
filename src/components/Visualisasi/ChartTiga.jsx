import LayoutVis from "./LayoutVis";
import {
  groupStackedBarChart1,
  listDaerahGroupStackedBarChart1,
} from "../../contents/visualisasi";
import GroupStackedBarChart from "./Chart/GroupStackedBarChart";
import { useState, useCallback, useEffect } from "react";

export default function ChartTiga() {
  const [data, setData] = useState(groupStackedBarChart1[0].data.data);
  const [labels, setLabels] = useState(groupStackedBarChart1[0].data.labels);
  const [indikators, setIndikators] = useState(
    groupStackedBarChart1[0].data.indikators
  );
  const [categories, setCategories] = useState(
    groupStackedBarChart1[0].data.categories
  );
  const [colors, setColors] = useState(groupStackedBarChart1[0].data.colors);
  const [colors2, setColors2] = useState(groupStackedBarChart1[0].data.colors2);
  const [daerahName, setDaerahName] = useState("DKI Jakarta");
  const [indexDaerah, setIndexDaerah] = useState(0);
  const [selectedKategori, setSelectedKategori] = useState({
    group1: true,
    group2: true,
  });
  const [indexSelectedKategori, setIndexSelectedKategori] = useState([0, 1]);

  const changeDaerahName = (value) => {
    changeSelectedKategori("all");
    setDaerahName(value);
  };

  const changeDaerah = useCallback((daerahName) => {
    switch (daerahName) {
      case "DKI Jakarta":
        return 0;
      case "Jakarta Pusat":
        return 1;
      case "Jakarta Selatan":
        return 2;
      case "Jakarta Barat":
        return 3;
      case "Jakarta Utara":
        return 4;
      case "Jakarta Timur":
        return 5;
      case "Kepulauan Seribu":
        return 6;
      default:
        return 0;
    }
  }, []);

  const changeSelectedKategori = (value) => {
    switch (value) {
      case "group1":
        setSelectedKategori((prevState) => ({
          ...prevState,
          group1: !prevState.group1,
        }));
        setIndexSelectedKategori((prevState) => {
          if (prevState.includes(0)) {
            return prevState.filter((item) => item !== 0).sort();
          } else {
            return [...prevState, 0].sort();
          }
        });
        break;
      case "group2":
        setSelectedKategori((prevState) => ({
          ...prevState,
          group2: !prevState.group2,
        }));
        setIndexSelectedKategori((prevState) => {
          if (prevState.includes(1)) {
            return prevState.filter((item) => item !== 1).sort();
          } else {
            return [...prevState, 1].sort();
          }
        });
        break;
      case "all":
        setSelectedKategori({
          group1: true,
          group2: true,
        });
        setIndexSelectedKategori([0, 1]);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setIndexDaerah(changeDaerah(daerahName));
  }, [daerahName, changeDaerah]);

  useEffect(() => {
    const newData = [];
    const newCategories = [];
    indexSelectedKategori.forEach((index) => {
      newData.push(groupStackedBarChart1[indexDaerah].data.data[index]);
      newCategories.push(
        groupStackedBarChart1[indexDaerah].data.categories[index]
      );
    });
    setData(newData);
    setCategories(newCategories);
  }, [indexSelectedKategori, indexDaerah]);

  return (
    <LayoutVis
      title={`${groupStackedBarChart1[indexDaerah].data.title} di ${groupStackedBarChart1[indexDaerah].region}`}
    >
      <div className="w-full flex flex-col lg:flex-row gap-6">
        <GroupStackedBarChart
          title="group-stacked-bar-chart-1"
          data={data}
          labels={labels}
          indikators={indikators}
          categories={categories}
          colors={colors}
          colors2={colors2}
          daerahName={daerahName}
          daerahAll={listDaerahGroupStackedBarChart1}
          selectedKategori={selectedKategori}
          changeDaerahName={changeDaerahName}
          changeSelectedKategori={changeSelectedKategori}
          className="mx-auto flex lg:basis-[35%] xl:basis-2/3"
        />
        <div className="w-full flex lg:basis-[65%] xl:basis-1/3 gap-2 flex-col">
          <h2 className="text-xl text-maroon-light font-bold text-center mt-2">
            Interpretasi
          </h2>
          <div className="w-full my-1 h-0.5 bg-maroon-light bg-opacity-50"></div>
          <p className="text-black text-md">
            {groupStackedBarChart1[indexDaerah].data.interpretasi}
          </p>
        </div>
      </div>
    </LayoutVis>
  );
}
