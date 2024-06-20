import LayoutVis from "./LayoutVis";
import GroupBarChart from "./Chart/GroupBarChart";
import {
  groupBarChart1,
  groupBarChart1En,
  listVariabelGroupBarChart1,
  listVariabelGroupBarChart1En,
} from "../../contents/visualisasi";
import { useCallback, useState, useEffect } from "react";
import getLanguage from "../../hooks/getLanguage";

export default function ChartSatu() {
  const lang = getLanguage();
  const groupBarChart = lang === "id" ? groupBarChart1 : groupBarChart1En;
  const [data, setData] = useState(groupBarChart[0].data);
  const [warna, setWarna] = useState(groupBarChart[0].warna);
  const [label, setLabel] = useState(groupBarChart[0].label);
  const [dataName, setDataName] = useState(
    lang === "id" ? "Jumlah Pemilih" : "Total Voters"
  );
  const [indexData, setIndexData] = useState(0);
  const [selectedData, setSelectedData] = useState({
    group1: true,
    group2: true,
  });
  const [indexSelectedData, setIndexSelectedData] = useState([0, 1]);
  const checkboxLabels = groupBarChart[0].label;

  const changeDataName = (value) => {
    changeSelectedData("all");
    setDataName(value);
  };

  const changeData = useCallback((dataName) => {
    switch (dataName) {
      case lang === "id" ? "Jumlah Pemilih Tetap" : "Permanent Voters":
        return 1;
      case lang === "id" ? "Jumlah Pemilih Baru" : "New Voters":
        return 2;
      case lang === "id" ? "Jumlah Pemilih" : "Total Voters":
        return 0;
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
    // Function to update region names based on screen width
    const updateRegionNames = () => {
      if (window.innerWidth < 760) {
        groupBarChart.forEach((chart) => {
          chart.data.forEach((dataSet) => {
            dataSet.forEach((item) => {
              switch (item.region) {
                case "Jakarta Barat":
                  item.region = "Jakbar";
                  break;
                case "Jakarta Pusat":
                  item.region = "Jakpus";
                  break;
                case "Jakarta Selatan":
                  item.region = "Jaksel";
                  break;
                case "Jakarta Timur":
                  item.region = "Jaktim";
                  break;
                case "Jakarta Utara":
                  item.region = "Jakut";
                  break;
                case "Kepulauan Seribu":
                  item.region = "K.Seribu";
                  break;
                default:
                  break;
              }
            });
          });
        });
      } else {
        groupBarChart.forEach((chart) => {
          chart.data.forEach((dataSet) => {
            dataSet.forEach((item) => {
              switch (item.region) {
                case "Jakbar":
                  item.region = "Jakarta Barat";
                  break;
                case "Jakpus":
                  item.region = "Jakarta Pusat";
                  break;
                case "Jaksel":
                  item.region = "Jakarta Selatan";
                  break;
                case "Jaktim":
                  item.region = "Jakarta Timur";
                  break;
                case "Jakut":
                  item.region = "Jakarta Utara";
                  break;
                case "K.Seribu":
                  item.region = "Kepulauan Seribu";
                  break;
                default:
                  break;
              }
            });
          });
        });
      }
    };

    updateRegionNames();
    window.addEventListener("resize", updateRegionNames);

    return () => {
      window.removeEventListener("resize", updateRegionNames);
    };
  }, []);

  useEffect(() => {
    setIndexData(changeData(dataName));
  }, [dataName, changeData]);

  useEffect(() => {
    let newData = [];
    let newWarna = [];
    let newLabel = [];
    indexSelectedData.forEach((index) => {
      newWarna.push(groupBarChart[indexData].warna[index]);
      newLabel.push(groupBarChart[indexData].label[index]);
      newData.push(groupBarChart[indexData].data[index]);
    });
    setData(newData);
    setWarna(newWarna);
    setLabel(newLabel);
  }, [indexSelectedData, indexData]);

  return (
    <LayoutVis title={groupBarChart[indexData].title}>
      <div className="w-full flex flex-col lg:flex-row gap-2 md:gap-4 lg:gap-6">
        <GroupBarChart
          data={data}
          keys={label}
          warna={warna}
          dataName={dataName}
          variabelAll={
            lang === "id"
              ? listVariabelGroupBarChart1
              : listVariabelGroupBarChart1En
          }
          selectedData={selectedData}
          checkboxLabels={checkboxLabels}
          changeDataName={changeDataName}
          changeSelectedData={changeSelectedData}
          title="groupbarchart-1"
          className="mx-auto flex lg:basis-[35%] xl:basis-2/3"
        />
        <div className="w-full flex px-1 pb-2 md:px-2 md:pb-4 lg:pb-0 lg:px-0 lg:basis-[65%] xl:basis-1/3 gap-1 lg:gap-2 flex-col">
          <h2 className="text-base md:text-lg lg:text-xl text-maroon-light font-bold text-center mt-2">
            {lang === "id" ? "Interpretasi" : "Interpretation"}
          </h2>
          <div className="w-full my-1 h-0.5 bg-maroon-light bg-opacity-50"></div>
          <p className="text-black text-justify text-sm md:text-base">
            {groupBarChart[indexData].interpretasi}
          </p>
        </div>
      </div>
    </LayoutVis>
  );
}
