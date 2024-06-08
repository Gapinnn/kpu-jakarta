import { useState, useEffect } from "react";
import UpArrow from "../Icon/UpArrow";
import {
  pilihanDataTabulasi1,
  kategoriTabulasi1,
  allDataTabulasi1,
} from "../../contents/tabulasi";

export default function TabulasiSatu() {
  const [indexData, setIndexData] = useState(0);
  const [dataName, setDataName] = useState("Pendidikan Pemilih");
  const [selectedData, setSelectedData] = useState(allDataTabulasi1[indexData]);

  console.log(selectedData);
  console.log(selectedData.data);

  useEffect(() => {
    setSelectedData(allDataTabulasi1[indexData]);
  }, [indexData]);

  return (
    <div className="flex-col h-full w-full">
      {/* Dropdown */}
      <div className="relative inline-flex justify-between gap-3 p-3 py-1.5 rounded-3xl max-w-[21rem] group hover:bg-stone-100 hover:w-[21rem] hover:border-b-0 hover:rounded-b-none border-maroon-light border-[2.5px] items-center font-medium px-4 text-gray-900 cursor-pointer">
        <div className="inline-flex items-center text-maroon-light text-md">
          {dataName}
        </div>
        <UpArrow
          className={`w-7 h-7 text-maroon-light transition-transform duration-500 rotate-0 group-hover:rotate-180`}
        />
        <div
          className={`absolute top-[1.5rem] -left-[2px] z-20 my-4 w-[21rem] text-base list-none bg-stone-100 divide-y divide-stone-100 rounded-b-2xl border-maroon-light border-[2.5px] border-t-[2.5px] border-t-stone-400 shadow-lg
                transition-transform duration-500 transform opacity-0 pointer-events-none translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto`}
        >
          <ul className="py-2 font-medium" role="none">
            {pilihanDataTabulasi1.map((variabel) => (
              <li
                className={`${variabel.name === dataName ? "hidden" : ""}`}
                key={variabel.name}
                onClick={() => {
                  setDataName(variabel.name);
                  setIndexData(variabel.value);
                }}
              >
                <div className="cursor-pointer flex w-full gap-1 px-4 py-2 hover:bg-stone-300 text-maroon-light rounded-lg">
                  <div className="inline-flex items-center text-maroon-light text-md font-semibold">
                    {variabel.name}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Judul Tabel */}
      <h3 className="text-maroon-light mx-auto text-center text-xl font-bold my-6">
        {selectedData.title}
      </h3>
      {/* Tabel */}
      <div className="overflow-x-scroll md:overflow-hidden">
        <table className="mx-auto border  rounded-xl bg-white border-separate">
          <thead className="bg-gold">
            <tr>
              <th className="px-6 py-3 text-center font-bold uppercase text-stone-900 border">
                Kategori Frekuensi
              </th>
              {kategoriTabulasi1.map((item) => (
                <th
                  key={item.name}
                  className="px-6 py-3 text-center font-bold uppercase text-stone-900 border"
                >
                  {item.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {selectedData.data[0].map((item, index) => (
              <tr
                key={index}
                className={`border ${
                  index % 2 === 0 ? "bg-gray-200" : "bg-white"
                }`}
              >
                <td className="py-1 px-2 font-semibold border">{item.label}</td>
                {selectedData.label.map((label, index2) => (
                  <td key={label} className="text-center py-1 px-2 border">
                    {selectedData.data[index2][index].value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
