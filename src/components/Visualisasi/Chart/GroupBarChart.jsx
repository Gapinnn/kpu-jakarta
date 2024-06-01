import React, { useCallback, useEffect } from "react";
import * as d3 from "d3";
import { jsPDF } from "jspdf";
import Download from "../../Icon/Download";
import FileSvg from "../../Icon/FileSvg";
import FilePng from "../../Icon/FilePng";
import FilePdf from "../../Icon/FilePdf";

export default function GroupBarChart({ title, data }) {
  const createChart = useCallback(() => {
    d3.select(`#${title}`).selectAll("*").remove();

    const margin = { top: 50, right: 25, bottom: 50, left: 25 }; // Adjusted bottom margin
    const containerWidth = document.querySelector(`#${title}`).clientWidth;
    const width = containerWidth - margin.left - margin.right;
    const height = 0.7 * width; // Adjust height calculation

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
    const color = d3.scaleOrdinal().range(["#FFBF00", "#FFDC73"]);
    const keys = ["male", "female"];

    x0.domain(data.map((d) => d.region));
    x1.domain(keys).rangeRound([0, x0.bandwidth()]);
    y.domain([0, d3.max(data, (d) => d3.max(keys, (key) => d[key]))]).nice();

    svg
      .append("g")
      .selectAll("g")
      .data(data)
      .enter()
      .append("g")
      .attr("transform", (d) => `translate(${x0(d.region)},0)`)
      .selectAll("rect")
      .data((d) => keys.map((key) => ({ key, value: d[key] })))
      .enter()
      .append("rect")
      .attr("x", (d) => x1(d.key))
      .attr("y", (d) => y(d.value))
      .attr("width", x1.bandwidth())
      .attr("height", (d) => height - y(d.value))
      .attr("fill", (d) => color(d.key))
      .append("title")
      .text((d) => d.value);

    svg
      .selectAll(".label-male")
      .data(data)
      .enter()
      .append("text")
      .attr("class", "label-male")
      .attr("x", (d) => x0(d.region) + x0.bandwidth() / 3)
      .attr("y", (d) => y(d.male) - 10)
      .attr("text-anchor", "middle")
      .text((d) => d.male + "%")
      .attr("fill", "#000")
      .attr("font-family", "Poppins")
      .attr("font-size", "12px");

    svg
      .selectAll(".label-female")
      .data(data)
      .enter()
      .append("text")
      .attr("class", "label-female")
      .attr("x", (d) => x0(d.region) + x0.bandwidth() / 1.3)
      .attr("y", (d) => y(d.female) - 10)
      .attr("text-anchor", "middle")
      .text((d) => d.female + "%")
      .attr("fill", "#000")
      .attr("font-family", "Poppins")
      .attr("font-size", "12px");

    svg
      .append("g")
      .attr("class", "axis")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x0).tickSize(0))
      .selectAll("text")
      .attr("font-size", "12px")
      .attr("transform", "translate(0,4)") // Rotate labels to prevent overlap
      .attr("text-anchor", "center");

    const legend = svg
      .append("g")
      .attr("font-size", 12)
      .attr("font-weight", "bold")
      .attr("text-anchor", "start") // Align text to the start
      .selectAll("g")
      .data(["Laki-Laki", "Perempuan"])
      .enter()
      .append("g")
      .attr(
        "transform",
        (d, i) => `translate(${(width / 8) * 3 + i * 96},-40)`
      ); // Center the legend horizontally

    legend
      .append("rect")
      .attr("x", 0) // Adjust the position of the rectangle
      .attr("width", 26)
      .attr("height", 26)
      .attr("fill", color);

    legend
      .append("text")
      .attr("x", 32) // Adjust the position of the text
      .attr("y", 13) // Vertically align the text to the center of the rectangle
      .attr("dy", "0.3em")
      .text((d) => d);
  }, [title, data]);

  const downloadSVG = () => {
    const svgElement = document.querySelector(`#${title}`);
    const serializer = new XMLSerializer();
    const svgBlob = new Blob([serializer.serializeToString(svgElement)], {
      type: "image/svg+xml",
    });
    const url = URL.createObjectURL(svgBlob);
    const downloadLink = svgElement.createElement("a");
    downloadLink.href = url;
    downloadLink.download = `${title}.svg`;
    svgElement.body.appendChild(downloadLink);
    downloadLink.click();
    svgElement.body.removeChild(downloadLink);
  };

  const downloadPNG = () => {
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
    <div className="flex-col h-full w-full relative">
      <div className="w-9 h-9 absolute top-0 right-0 rounded-full flex justify-center items-center bg-maroon-light hover:bg-maroon group">
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
  );
}
