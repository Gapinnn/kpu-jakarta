import { useState, useEffect } from "react";
import UpArrow from "../Icon/UpArrow";
import {
  pilihanDataTabulasi3,
  pilihanDataTabulasi3En,
  kategoriTabulasi3,
  allDataTabulasi3,
  allDataTabulasi3En,
} from "../../contents/tabulasi";
import getLanguage from "../../hooks/getLanguage";

export default function TabulasiTiga() {
  const lang = getLanguage();
  const allDataTabulasi = lang === "id" ? allDataTabulasi3 : allDataTabulasi3En;
  const [indexData, setIndexData] = useState(0);
  const [dataName, setDataName] = useState(
    lang === "id" ? "Persebaran - Pendidikan" : "Distribution - Education"
  );
  const [selectedData, setSelectedData] = useState(allDataTabulasi[indexData]);

  useEffect(() => {
    setSelectedData(allDataTabulasi[indexData]);
  }, [indexData]);

  return (
    <div className="flex flex-col py-2 md:py-3 lg:py-4">
      {/* Dropdown */}
      <div className="relative inline-flex justify-between gap-1.5 md:gap-3 p-1.5 md:p-2 lg:p-3 py-1 md:py-1.5 rounded-2xl w-fit max-w-[18rem] group hover:bg-stone-100 hover:w-[18rem] hover:border-b-0 hover:rounded-b-none border-maroon-light border-[2.5px] items-center font-medium px-3 lg:px-4 text-gray-900 cursor-pointer">
        <div className="inline-flex items-center text-maroon-light text-sm md:text-base">
          {dataName}
        </div>
        <UpArrow
          className={`w-6 h-6 md:w-7 md:h-7 text-maroon-light transition-transform duration-500 rotate-0 group-hover:rotate-180`}
        />
        <div
          className={`absolute top-[0.95rem] md:top-[1.5rem] lg:top-[2rem] -left-[2.5px] lg:-left-[2px] z-20 my-4 w-[18rem] text-base list-none bg-stone-100 divide-y divide-stone-100 rounded-b-2xl border-maroon-light border-[2.5px] border-t-[2.5px] border-t-stone-400 shadow-lg
                transition-transform duration-500 transform opacity-0 pointer-events-none translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto`}
        >
          <ul className="pt-0.5 pb-1 md:py-2 font-medium" role="none">
            {lang === "id" &&
              pilihanDataTabulasi3.map((variabel) => (
                <li
                  className={`${variabel.name === dataName ? "hidden" : ""}`}
                  key={variabel.name}
                  onClick={() => {
                    setDataName(variabel.name);
                    setIndexData(variabel.value);
                  }}
                >
                  <div className="cursor-pointer flex w-full gap-1 px-3 lg:px-4 py-1.5 md:py-2 hover:bg-stone-300 text-maroon-light rounded-lg">
                    <div className="inline-flex items-center text-maroon-light text-sm md:text-base font-semibold">
                      {variabel.name}
                    </div>
                  </div>
                </li>
              ))}
            {lang === "en" &&
              pilihanDataTabulasi3En.map((variabel) => (
                <li
                  className={`${variabel.name === dataName ? "hidden" : ""}`}
                  key={variabel.name}
                  onClick={() => {
                    setDataName(variabel.name);
                    setIndexData(variabel.value);
                  }}
                >
                  <div className="cursor-pointer flex w-full gap-1 px-3 lg:px-4 py-1.5 md:py-2 hover:bg-stone-300 text-maroon-light rounded-lg">
                    <div className="inline-flex items-center text-maroon-light text-sm md:text-base font-semibold">
                      {variabel.name}
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
      {/* Judul Tabel */}
      <h3 className="text-maroon-light text-center text-base md:text-lg lg:text-xl font-bold mb-2 md:mb-3 lg:mb-4 mt-2 lg:mt-0">
        {selectedData.title}
      </h3>
      {/* Tabel */}
      <div className="overflow-x-auto mb-4 max-w-[370px] md:max-w-[680px] lg:max-w-max mx-auto">
        <table className="lg:mx-auto w-full border rounded-xl bg-white border-separate">
          <thead>
            <tr className="bg-gold">
              <th
                className="px-4 md:px-5 lg:px-6 py-2 md:py-2.5 lg:py-3 text-sm md:text-base text-center font-bold uppercase text-stone-900 border"
                rowSpan="2"
              >
                {lang === "id" ? "Kategori Frekuensi" : "Frequency Categories"}
              </th>
              {kategoriTabulasi3.map((item) => (
                <th
                  key={item.name}
                  className="px-4 md:px-5 lg:px-6 py-2 lg:py-3 text-sm md:text-base text-center font-bold uppercase text-stone-900 border"
                  colSpan="2"
                >
                  {item.name}
                </th>
              ))}
            </tr>
            <tr className="bg-gold-neutral">
              {kategoriTabulasi3.map((item) => (
                <>
                  <th
                    key={item.name}
                    className="px-2 md:px-4 lg:px-6 text-sm md:text-base text-center font-bold uppercase text-stone-900 border"
                  >
                    {allDataTabulasi[indexData].column[0]}
                  </th>
                  <th
                    key={item.name}
                    className="px-2 md:px-4 lg:px-6 text-sm md:text-base text-center font-bold uppercase text-stone-900 border"
                  >
                    {allDataTabulasi[indexData].column[1]}
                  </th>
                </>
              ))}
            </tr>
          </thead>
          <tbody>
            {selectedData.label.map((item, index) => (
              <tr
                key={index}
                className={`border text-sm md:text-base ${
                  index % 2 === 0 ? "bg-gray-200" : "bg-white"
                }`}
              >
                <td className="py-1 px-2 font-semibold border">{item}</td>
                <td key={item.label} className="text-center py-1 px-2 border">
                  {Math.floor(Math.random() * (3500000 - 500000 + 1)) + 500000}
                </td>
                <td key={item.label} className="text-center py-1 px-2 border">
                  {Math.floor(Math.random() * (3500000 - 500000 + 1)) + 500000}
                </td>
                <td key={item.label} className="text-center py-1 px-2 border">
                  {Math.floor(Math.random() * (3500000 - 500000 + 1)) + 500000}
                </td>
                <td key={item.label} className="text-center py-1 px-2 border">
                  {Math.floor(Math.random() * (3500000 - 500000 + 1)) + 500000}
                </td>
                <td key={item.label} className="text-center py-1 px-2 border">
                  {Math.floor(Math.random() * (3500000 - 500000 + 1)) + 500000}
                </td>
                <td key={item.label} className="text-center py-1 px-2 border">
                  {Math.floor(Math.random() * (3500000 - 500000 + 1)) + 500000}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Interpretasi */}
      <div className=" mb-4 mx-auto">
        <h3 className="text-maroon-light text-center text-base md:text-lg lg:text-xl font-bold">
          {lang === "id" ? "Interpretasi" : "Interpretation"}
        </h3>
        <p className="text-justify mt-1">{selectedData.interpretasi}</p>
      </div>
    </div>
  );
}
