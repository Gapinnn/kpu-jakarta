import { useCallback, useEffect } from "react";
import * as d3 from "d3";
import { jsPDF } from "jspdf";
import Download from "../../Icon/Download";
import FileSvg from "../../Icon/FileSvg";
import FilePng from "../../Icon/FilePng";
import FilePdf from "../../Icon/FilePdf";
import UpArrow from "../../Icon/UpArrow";

export default function GroupBarChart({
  title,
  data,
  keys,
  warna,
  dataName,
  selectedData,
  variabelAll,
  changeDataName,
  changeSelectedData,
}) {
  const createChart = useCallback(() => {
    d3.select(`#${title}`).style("background-color", "transparent");
    d3.select(`#${title}`).selectAll("*").remove();

    if (data.length === 0) {
      d3.select(`#${title}`)
        .style("display", "flex")
        .style("justify-content", "center")
        .style("align-items", "center")
        .style("background-color", "rgb(214,211,209)")
        .style("border-radius", "24px")
        .append("text")
        .attr("x", "50%")
        .attr("y", "50%")
        .attr("text-anchor", "middle")
        .attr("dominant-baseline", "middle")
        .attr("class", " font-bold")
        .text("CENTANG MINIMAL SATU CHECKBOX DI BAWAH")
        .style("font-size", "2rem");
      return;
    }

    const margin = { top: 50, right: 25, bottom: 50, left: 25 };
    const containerWidth = document.querySelector(`#${title}`).clientWidth;
    let width = containerWidth - margin.left - margin.right;
    width = width > 1080 ? 1080 : width;
    let height = 0.55 * width;

    const svg = d3
      .select(`#${title}`)
      .attr(
        "viewBox",
        `0 0 ${containerWidth} ${height + margin.top + margin.bottom}`
      )
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const x0 = d3.scaleBand().rangeRound([0, width]).paddingInner(0.1);
    const x1 = d3.scaleBand().padding(0.05);
    const y = d3.scaleLinear().rangeRound([height, 0]);
    const color = d3.scaleOrdinal().range(warna);

    // Function to flatten the data
    const flattenData = (data, keys) => {
      const result = [];
      data[0].forEach((d, i) => {
        const item = { region: d.region };
        keys.forEach((key, k) => {
          item[key] = data[k][i].value;
        });
        result.push(item);
      });
      return result;
    };

    const flattenedData = flattenData(data, keys);

    x0.domain(flattenedData.map((d) => d.region));
    x1.domain(keys).rangeRound([0, x0.bandwidth()]);
    y.domain([
      0,
      d3.max(flattenedData, (d) => d3.max(keys, (key) => d[key])),
    ]).nice();

    svg
      .append("g")
      .selectAll("g")
      .data(flattenedData)
      .enter()
      .append("g")
      .attr("transform", (d) => `translate(${x0(d.region)},0)`)
      .selectAll("rect")
      .data((d) =>
        keys.map((key) => ({
          key,
          value: d[key],
          region: d.region,
        }))
      )
      .enter()
      .append("rect")
      .attr("x", (d) => x1(d.key))
      .attr("y", height)
      .attr("width", x1.bandwidth())
      .attr("height", 0)
      .attr("fill", (d) => color(d.key))
      .on("mouseover", function (event, d) {
        tooltip
          .html(
            `<strong>${d.region}</strong><br/>${
              d.key
            }<br/><span style="color:${color(d.key)};">&#9632;</span> ${
              d.value
            }`
          )
          .style("opacity", 0.9)
          .style("left", `${event.pageX + 10}px`)
          .style("top", `${event.pageY - 28}px`)
          .style("cursor", "pointer");
      })
      .on("mousemove", function (event) {
        tooltip
          .style("left", `${event.pageX + 10}px`)
          .style("top", `${event.pageY - 28}px`)
          .style("cursor", "pointer");
      })
      .on("mouseout", function () {
        tooltip.style("opacity", 0);
      })
      .transition()
      .duration(800)
      .delay((d, i) => i * 400)
      .attr("y", (d) => y(d.value))
      .attr("height", (d) => height - y(d.value));

    svg
      .append("g")
      .selectAll("g")
      .data(flattenedData)
      .enter()
      .append("g")
      .attr("transform", (d) => `translate(${x0(d.region)},0)`)
      .selectAll("text")
      .data((d) =>
        keys.map((key) => ({
          key,
          value: d[key],
          region: d.region,
        }))
      )
      .enter()
      .append("text")
      .attr("x", (d) => x1(d.key) + x1.bandwidth() / 2)
      .attr("y", (d) => y(d.value) - 50)
      .attr("text-anchor", "middle")
      .attr("fill", "black")
      .style("opacity", 0)
      .text((d) => d.value)
      .style("font-size", "12px")
      .transition()
      .duration(800)
      .delay((d, i) => i * 400)
      .style("opacity", 1)
      .attr("y", (d) => y(d.value) - 5);

    svg
      .append("g")
      .attr("class", "axis")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x0).tickSize(0))
      .selectAll("text")
      .attr("font-size", "12px")
      .attr("transform", "translate(0,4)")
      .attr("text-anchor", "center");

    const legend = svg
      .append("g")
      .attr("font-size", 12)
      .attr("font-weight", "bold")
      .attr("text-anchor", "start")
      .selectAll("g")
      .data(keys)
      .enter()
      .append("g")
      .attr(
        "transform",
        (d, i) => `translate(${(width / 8) * 3 + i * 96},-40)`
      );

    legend
      .append("rect")
      .attr("x", 0)
      .attr("width", 26)
      .attr("height", 26)
      .attr("fill", color);

    legend
      .append("text")
      .attr("x", 32)
      .attr("y", 13)
      .attr("dy", "0.3em")
      .text((d) => d);

    let tooltip = d3.select("body").select(`.tooltip${title}`);
    if (tooltip.empty()) {
      tooltip = d3
        .select("body")
        .append("div")
        .attr("class", `tooltip${title}`)
        .style("opacity", 0)
        .style("position", "absolute")
        .style("padding", "10px")
        .style("background", "#333")
        .style("color", "white")
        .style("border-radius", "5px")
        .style("cursor", "pointer");
    }
  }, [title, data, keys, warna]);

  const downloadSVG = async () => {
    // Ensure the state change is completed
    await changeSelectedData("all");

    const svgElement = document.querySelector(`#${title}`);

    if (svgElement) {
      const serializer = new XMLSerializer();
      const svgBlob = new Blob([serializer.serializeToString(svgElement)], {
        type: "image/svg+xml",
      });
      const url = URL.createObjectURL(svgBlob);

      const downloadLink = document.createElement("a");
      downloadLink.href = url;
      downloadLink.download = `${title}.svg`;

      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);

      URL.revokeObjectURL(url);
    } else {
      console.error("SVG element not found");
    }
  };

  const downloadPNG = () => {
    changeSelectedData("all");
    const svgElement = document.querySelector(`#${title}`);
    const serializer = new XMLSerializer();
    const svgStr = serializer.serializeToString(svgElement);
    const svgViewBox = svgElement.viewBox.baseVal;
    const canvas = svgElement.createElement("canvas");
    canvas.width = svgViewBox.width;
    canvas.height = svgViewBox.height;

    const ctx = canvas.getContext("2d");
    const DOMURL = window.URL || window.webkitURL || window;
    const img = new Image();

    const svgBlob = new Blob([svgStr], { type: "image/svg+xml;charset=utf-8" });
    const url = DOMURL.createObjectURL(svgBlob);

    img.onload = function () {
      // Isi latar belakang kanvas dengan warna putih
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // Gambar SVG pada kanvas
      ctx.drawImage(img, 0, 0, svgViewBox.width, svgViewBox.height);

      const imgURL = canvas.toDataURL("image/png");

      const downloadLink = svgElement.createElement("a");
      downloadLink.href = imgURL;
      downloadLink.download = `${title}`;
      svgElement.body.appendChild(downloadLink);
      downloadLink.click();
      svgElement.body.removeChild(downloadLink);
      DOMURL.revokeObjectURL(imgURL);
    };

    img.src = url;
  };

  const downloadPDF = () => {
    changeSelectedData("all");
    const svgElement = document.querySelector(`#${title}`);
    const serializer = new XMLSerializer();
    const svgStr = serializer.serializeToString(svgElement);

    // Tentukan ukuran kanvas berdasarkan ukuran SVG
    const svgViewBox = svgElement.viewBox.baseVal;
    const canvas = document.createElement("canvas");
    canvas.width = svgViewBox.width;
    canvas.height = svgViewBox.height;

    const ctx = canvas.getContext("2d");
    const DOMURL = window.URL || window.webkitURL || window;
    const img = new Image();

    const svgBlob = new Blob([svgStr], { type: "image/svg+xml;charset=utf-8" });
    const url = DOMURL.createObjectURL(svgBlob);

    img.onload = function () {
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [svgViewBox.width, svgViewBox.height],
      });

      pdf.addImage(imgData, "PNG", 0, 0, svgViewBox.width, svgViewBox.height);
      pdf.save(`${title}`);

      DOMURL.revokeObjectURL(imgData);
    };

    img.src = url;
  };

  useEffect(() => {
    createChart();

    window.addEventListener("resize", createChart);
    return () => window.removeEventListener("resize", createChart);
  }, [createChart]);

  return (
    <div className="flex-col h-full w-full">
      <div className="relative inline-flex justify-between gap-3 p-3 py-1.5 rounded-3xl max-w-[21rem] group hover:bg-stone-100 hover:w-[21rem] hover:border-b-0 hover:rounded-b-none border-maroon-light border-[2.5px] items-center font-medium px-4 text-gray-900 cursor-pointer">
        <div className="inline-flex items-center text-maroon-light text-md">
          {dataName}
        </div>
        <UpArrow
          className={`w-7 h-7 text-maroon-light transition-transform duration-500 rotate-0 group-hover:rotate-180`}
        />
        {/* Dropdown */}
        <div
          className={`absolute top-[1.5rem] -left-[2px] z-20 my-4 w-[21rem] text-base list-none bg-stone-100 divide-y divide-stone-100 rounded-b-2xl border-maroon-light border-[2.5px] border-t-[2.5px] border-t-stone-400 shadow-lg
                transition-transform duration-500 transform opacity-0 pointer-events-none translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto`}
        >
          <ul className="py-2 font-medium" role="none">
            {variabelAll.map((variabel) => (
              <li
                className={`${variabel.name === dataName ? "hidden" : ""}`}
                key={variabel.name}
                onClick={() => changeDataName(variabel.name)}
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
      <div className="w-full flex relative">
        <div
          className={`w-9 h-9 absolute top-0 right-0 rounded-full flex justify-center items-center bg-maroon-light hover:bg-maroon group ${
            data.length === 0 ? "hidden" : ""
          }`}
        >
          <Download className="text-white w-6 h-6" />
          <div
            className={`absolute -bottom-[9.5rem] right-0 z-50 my-4 w-max text-base list-none bg-stone-100 divide-y divide-stone-100 rounded-lg shadow-lg
                transition-transform duration-500 transform opacity-0 pointer-events-none translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto`}
          >
            <ul className="py-2 font-medium" role="none">
              <li>
                <div
                  onClick={downloadSVG}
                  className="cursor-pointer flex w-full justify-center gap-1 px-4 py-2 hover:bg-stone-300 text-maroon-light rounded-lg"
                >
                  <FileSvg className="text-maroon-light w-6 h-6" />
                  <div className="inline-flex items-center text-maroon-light text-md font-semibold">
                    SVG
                  </div>
                </div>
              </li>
              <li>
                <div
                  onClick={downloadPNG}
                  className="cursor-pointer flex w-full justify-center gap-1 px-4 py-2 hover:bg-stone-300 text-maroon-light rounded-lg"
                >
                  <FilePng className="text-maroon-light w-6 h-6" />
                  <div className="inline-flex items-center text-maroon-light text-md">
                    PNG
                  </div>
                </div>
              </li>
              <li>
                <div
                  onClick={downloadPDF}
                  className="cursor-pointer flex w-full justify-center gap-1 px-4 py-2 hover:bg-stone-300 text-maroon-light rounded-lg"
                >
                  <FilePdf className="text-maroon-light w-6 h-6" />
                  <div className="inline-flex items-center text-maroon-light text-md">
                    PDF
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <svg id={title} className="chart h-full w-full"></svg>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="w-40">
          <div className="flex items-center justify-center">
            <input
              id={`${title}-laki-laki`}
              type="checkbox"
              checked={selectedData.group1}
              onChange={() => changeSelectedData("group1")}
              className="w-7 h-7 bg-maroon-light border-maroon rounded focus:ring-maroon accent-maroon-light"
            />
            <label
              htmlFor={`${title}-laki-laki`}
              className="w-full ml-2 text-md font-medium text-maroon-light"
            >
              Laki-Laki
            </label>
          </div>
        </div>
        <div className="w-40">
          <div className="flex items-center justify-center">
            <input
              id={`${title}-perempuan`}
              type="checkbox"
              checked={selectedData.group2}
              onChange={() => changeSelectedData("group2")}
              className="w-7 h-7 bg-maroon-light border-maroon rounded focus:ring-maroon accent-maroon-light"
            />
            <label
              htmlFor={`${title}-perempuan`}
              className="w-full ml-2 text-md font-medium text-maroon-light"
            >
              Perempuan
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
