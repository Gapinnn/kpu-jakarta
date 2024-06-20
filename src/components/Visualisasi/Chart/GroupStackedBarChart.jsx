import { useCallback, useEffect } from "react";
import * as d3 from "d3";
import { jsPDF } from "jspdf";
import Download from "../../Icon/Download";
import FileSvg from "../../Icon/FileSvg";
import FilePng from "../../Icon/FilePng";
import FilePdf from "../../Icon/FilePdf";
import UpArrow from "../../Icon/UpArrow";
import getLanguage from "../../../hooks/getLanguage";

export default function GroupStackedBarChart({
  title,
  data,
  labels,
  indikators,
  colors,
  colors2,
  categories,
  daerahName,
  selectedKategori,
  daerahAll,
  checkboxLabels,
  changeDaerahName,
  changeSelectedKategori,
}) {
  const createChart = useCallback(() => {
    const lang = getLanguage();
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

    const margin = {
      top: 35 + 45 * categories.length,
      right: 25,
      bottom: 50,
      left: 25,
    };
    const containerWidth = document.querySelector(`#${title}`).clientWidth;
    let width = containerWidth - margin.left - margin.right;
    width = width > 1080 ? 1080 : width;
    let height = (window.innerWidth < 1024 ? 0.7 : 0.5) * width;

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
    const color = d3.scaleOrdinal().range(colors);
    const color2 = d3.scaleOrdinal().range(colors2);

    const flattenedData = [];

    categories.forEach((subLabel, labelIndex) => {
      data[labelIndex].forEach((d, groupIndex) => {
        // Data Keterangan Umum
        const dataEntry = {
          key: labelIndex,
          group: d.label,
          label: categories[labelIndex],
        };
        // Detail Data (Value)
        indikators.forEach((indikator, i) => {
          const groupClass =
            categories[labelIndex] == (lang === "id" ? "Laki-Laki" : "Male")
              ? "Laki"
              : "Perempuan";
          dataEntry[indikator] = {
            value: data[labelIndex][groupIndex][`value${i + 1}`],
            percentage: data[labelIndex][groupIndex][`percentage${i + 1}`],
            class: `title-${title}-group-${groupClass}-indikator-${i + 1}`,
          };
        });
        flattenedData.push(dataEntry);
      });
    });

    console.log("flattenedData Stacked", flattenedData);

    x0.domain(flattenedData.map((d) => d.group));
    x1.domain(flattenedData.map((d) => d.label)).rangeRound([
      0,
      x0.bandwidth(),
    ]);
    y.domain([
      0,
      d3.max(
        flattenedData,
        (d) =>
          d[indikators[0]].percentage +
          d[indikators[1]].percentage +
          d[indikators[2]].percentage +
          d[indikators[3]].percentage +
          d[indikators[4]].percentage
      ),
    ]).nice();

    // Buat Stack
    const stack = d3
      .stack()
      .keys(indikators)
      .value((d, key) => d[key].percentage)
      .order(d3.stackOrderNone)
      .offset(d3.stackOffsetNone);

    // Tambahkan Keterangan Nama Bagian pada Stacked Bar Chart
    const layers = stack(flattenedData).map((layer, i) =>
      layer.map((segment) => ({
        ...segment,
        label: indikators[i],
      }))
    );
    console.log("layers stacked", layers);

    // Inisialisasi Tooltip
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

    // Drawing the bars
    svg
      .selectAll(".serie")
      .data(layers)
      .enter()
      .append("g")
      .attr("class", "serie")
      .attr("fill", (d, i) => {
        console.log("fill", d);
        return color(i);
      })
      .selectAll("rect")
      .data((d) => d)
      .enter()
      .append("rect")
      .attr("class", (d) => `${d.data[d.label].class}`)
      .attr("x", (d) => x0(d.data.group) + x1(d.data.label))
      .attr("y", height)
      .attr("height", 0)
      .attr("width", x1.bandwidth())
      .style("cursor", "default")
      .on("mouseover", function (event, d) {
        const findColor = (className) => {
          switch (className) {
            case `title-group-stacked-bar-chart-1-group-Laki-indikator-1`:
              return "#2787a2";
            case `title-group-stacked-bar-chart-1-group-Laki-indikator-2`:
              return "#37a6c0";
            case `title-group-stacked-bar-chart-1-group-Laki-indikator-3`:
              return "#5cbdd4";
            case `title-group-stacked-bar-chart-1-group-Laki-indikator-4`:
              return "#83cde0";
            case `title-group-stacked-bar-chart-1-group-Laki-indikator-5`:
              return "#c6e7f1";
            case `title-group-stacked-bar-chart-1-group-Perempuan-indikator-1`:
              return "#d93f57";
            case `title-group-stacked-bar-chart-1-group-Perempuan-indikator-2`:
              return "#e84b5c";
            case `title-group-stacked-bar-chart-1-group-Perempuan-indikator-3`:
              return "#f27a83";
            case `title-group-stacked-bar-chart-1-group-Perempuan-indikator-4`:
              return "#f7aaae";
            case `title-group-stacked-bar-chart-1-group-Perempuan-indikator-5`:
              return "#fbd0d2";
          }
        };
        const fillColor = findColor(d.data[d.label].class);
        tooltip
          .html(
            `<strong style="font-size: 17px;">${d.label}</strong><br/>${
              d.data.label
            }<br/>${
              d.data.group
            }</br><span style="color:${fillColor};">&#9632;</span> ${
              d.data[d.label].value
            } (${d[1] - d[0]}%)`
          )
          .style("opacity", 0.9)
          .style("left", `${event.pageX}px`)
          .style("top", `${event.pageY - 125}px`)
          .style("cursor", "default");
      })
      .on("mousemove", function (event) {
        tooltip
          .style("left", `${event.pageX}px`)
          .style("top", `${event.pageY - 125}px`)
          .style("cursor", "default");
      })
      .on("mouseout", function () {
        tooltip.style("opacity", 0);
      })
      .transition()
      .duration(800)
      .delay((d, i) => i * 100)
      .attr("y", (d) => y(d[1]))
      .attr("height", (d) => y(d[0]) - y(d[1]));

    // Tambahkan text label nilai di dalam bar chart
    svg
      .selectAll(".serie")
      .selectAll("rect")
      .each(function (d, i) {
        const midValue = (y(d[0]) + y(d[1])) / 2;
        const barHeight = y(d[0]) - y(d[1]);
        if (barHeight > 20) {
          // Adjust this value for smaller bars if necessary
          svg
            .append("text")
            .attr("x", x0(d.data.group) + x1(d.data.label) + x1.bandwidth() / 2)
            .attr("y", midValue - 100)
            .attr("text-anchor", "middle")
            .attr("dominant-baseline", "middle")
            .attr("font-size", "13px")
            .attr("fill", "black")
            .style("cursor", "default")
            .style("opacity", 0)
            .text(d[1] - d[0])
            .transition()
            .duration(800)
            .delay(i * 100) // Use index i to create a sequential delay
            .style("opacity", 1)
            .attr("y", midValue);
        }
      });

    // Tambahkan X Axis
    // Menentukan posisi x0 dan x1
    const categoryWidth = x0.bandwidth();

    svg
      .append("g")
      .attr("class", "axis")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x0).tickSize(0))
      .selectAll("text")
      .attr("display", "none");

    labels.forEach((category) => {
      svg
        .append("text")
        .attr("x", x0(category) + categoryWidth / 2)
        .attr("y", height + 20)
        .attr("text-anchor", "middle")
        .text(category)
        .attr("font-size", "14px")
        .attr("font-weight", "bold");
    });

    const svgWidth = svg.node().getBoundingClientRect().width;
    let legendY = margin.top * -1 + 15;

    if (categories.includes(lang === "id" ? "Laki-Laki" : "Male")) {
      // LEGENDA LAKI-LAKI
      svg
        .append("text")
        .attr("x", svgWidth / 2)
        .attr("y", legendY)
        .attr("text-anchor", "middle")
        .attr(
          "font-size",
          window.innerWidth < 768 ? 11 : window.innerWidth < 1024 ? 13 : 15
        )
        .attr("font-weight", "bold")
        .text(lang === "id" ? "Laki-Laki" : "Male");

      legendY += 5;

      const rWidth =
        window.innerWidth < 768 ? 55 : window.innerWidth < 1024 ? 130 : 160;
      const legend = svg
        .append("g")
        .attr(
          "font-size",
          window.innerWidth < 768 ? 9 : window.innerWidth < 1024 ? 11 : 13
        )
        .attr("font-weight", "bold")
        .attr("text-anchor", "start")
        .selectAll("g")
        .data(indikators)
        .enter()
        .append("g")
        .attr(
          "transform",
          (d, i) =>
            `translate(${
              svgWidth / 2 - (indikators.length / 2) * rWidth + i * rWidth
            },${legendY})`
        );

      legend
        .append("rect")
        .attr("x", 0)
        .attr(
          "width",
          window.innerWidth < 768 ? 18 : window.innerWidth < 1024 ? 20 : 26
        )
        .attr(
          "height",
          window.innerWidth < 768 ? 18 : window.innerWidth < 1024 ? 20 : 26
        )
        .attr("fill", color);

      legend
        .append("text")
        .attr(
          "x",
          window.innerWidth < 768 ? 22 : window.innerWidth < 1024 ? 25 : 32
        )
        .attr("y", 13)
        .attr("dy", window.innerWidth < 1024 ? "0rem" : "0.25rem")
        .text((d) => d);

      legendY +=
        window.innerWidth < 768 ? 32 : window.innerWidth < 1024 ? 44 : 50;

      if (categories.includes(lang === "id" ? "Perempuan" : "Female")) {
        // LEGENDA PEREMPUAN
        svg
          .append("text")
          .attr("x", svgWidth / 2)
          .attr("y", legendY)
          .attr("text-anchor", "middle")
          .attr(
            "font-size",
            window.innerWidth < 768 ? 11 : window.innerWidth < 1024 ? 13 : 15
          )
          .attr("font-weight", "bold")
          .text(lang === "id" ? "Perempuan" : "Female");

        const rWidth =
          window.innerWidth < 768 ? 55 : window.innerWidth < 1024 ? 130 : 160;
        legendY += 5;

        const legend = svg
          .append("g")
          .attr(
            "font-size",
            window.innerWidth < 768 ? 9 : window.innerWidth < 1024 ? 11 : 13
          )
          .attr("font-weight", "bold")
          .attr("text-anchor", "start")
          .selectAll("g")
          .data(indikators)
          .enter()
          .append("g")
          .attr(
            "transform",
            (d, i) =>
              `translate(${
                svgWidth / 2 - (indikators.length / 2) * rWidth + i * rWidth
              },${legendY})`
          );

        legend
          .append("rect")
          .attr("x", 0)
          .attr(
            "width",
            window.innerWidth < 768 ? 18 : window.innerWidth < 1024 ? 20 : 26
          )
          .attr(
            "height",
            window.innerWidth < 768 ? 18 : window.innerWidth < 1024 ? 20 : 26
          )
          .attr("fill", color2);

        legend
          .append("text")
          .attr(
            "x",
            window.innerWidth < 768 ? 22 : window.innerWidth < 1024 ? 25 : 32
          )
          .attr("y", 13)
          .attr("dy", window.innerWidth < 1024 ? "0rem" : "0.25rem")
          .text((d) => d);
      }
    }

    // ATUR WARNA FILL MANUAL
    let elements;
    elements = document.querySelectorAll(
      ".title-group-stacked-bar-chart-1-group-Laki-indikator-1"
    );
    elements.forEach((element) => {
      element.setAttribute("fill", "#2787a2");
    });

    elements = document.querySelectorAll(
      ".title-group-stacked-bar-chart-1-group-Laki-indikator-2"
    );
    elements.forEach((element) => {
      element.setAttribute("fill", "#37a6c0");
    });

    elements = document.querySelectorAll(
      ".title-group-stacked-bar-chart-1-group-Laki-indikator-3"
    );
    elements.forEach((element) => {
      element.setAttribute("fill", "#5cbdd4");
    });

    elements = document.querySelectorAll(
      ".title-group-stacked-bar-chart-1-group-Laki-indikator-4"
    );
    elements.forEach((element) => {
      element.setAttribute("fill", "#83cde0");
    });

    elements = document.querySelectorAll(
      ".title-group-stacked-bar-chart-1-group-Laki-indikator-5"
    );
    elements.forEach((element) => {
      element.setAttribute("fill", "#c6e7f1");
    });

    elements = document.querySelectorAll(
      ".title-group-stacked-bar-chart-1-group-Perempuan-indikator-1"
    );
    elements.forEach((element) => {
      element.setAttribute("fill", "#d93f57");
    });

    elements = document.querySelectorAll(
      ".title-group-stacked-bar-chart-1-group-Perempuan-indikator-2"
    );
    elements.forEach((element) => {
      element.setAttribute("fill", "#e84b5c");
    });
    elements = document.querySelectorAll(
      ".title-group-stacked-bar-chart-1-group-Perempuan-indikator-3"
    );
    elements.forEach((element) => {
      element.setAttribute("fill", "#f27a83");
    });
    elements = document.querySelectorAll(
      ".title-group-stacked-bar-chart-1-group-Perempuan-indikator-4"
    );
    elements.forEach((element) => {
      element.setAttribute("fill", "#f7aaae");
    });
    elements = document.querySelectorAll(
      ".title-group-stacked-bar-chart-1-group-Perempuan-indikator-5"
    );
    elements.forEach((element) => {
      element.setAttribute("fill", "#fbd0d2");
    });
  }, [title, data, categories, colors, colors2, indikators, labels]);
  const downloadSVG = () => {
    const svgElement = document.querySelector(`#${title}`);
    const svgString = new XMLSerializer().serializeToString(svgElement);
    const blob = new Blob([svgString], {
      type: "image/svg+xml;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${title}.svg`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const downloadPNG = () => {
    const svgElement = document.querySelector(`#${title}`);
    const svgString = new XMLSerializer().serializeToString(svgElement);
    const svgBlob = new Blob([svgString], {
      type: "image/svg+xml;charset=utf-8",
    });
    const url = URL.createObjectURL(svgBlob);

    const image = new Image();
    image.src = url;

    image.onload = () => {
      const canvas = document.createElement("canvas");
      const scaleFactor = 12; // Faktor resolusi yang lebih tinggi (contoh: 2 untuk 2x lebih besar)
      canvas.width = image.width * scaleFactor;
      canvas.height = image.height * scaleFactor;
      const context = canvas.getContext("2d");

      // Aktifkan anti-aliasing
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = "high";

      // Gambar ulang dengan faktor resolusi yang lebih tinggi
      context.drawImage(image, 0, 0, canvas.width, canvas.height);

      // Konversi ke PNG dengan kualitas gambar yang lebih tinggi
      const pngDataUrl = canvas.toDataURL("image/png", 1.0); // Gunakan kualitas 1.0 untuk PNG terbaik
      const a = document.createElement("a");
      a.href = pngDataUrl;
      a.download = `${title}.png`;
      a.click();
      URL.revokeObjectURL(url);
    };
  };

  const downloadPDF = () => {
    const svgElement = document.querySelector(`#${title}`);
    const svgString = new XMLSerializer().serializeToString(svgElement);
    const svgBlob = new Blob([svgString], {
      type: "image/svg+xml;charset=utf-8",
    });
    const url = URL.createObjectURL(svgBlob);

    const image = new Image();
    image.src = url;

    image.onload = () => {
      const canvas = document.createElement("canvas");
      const scaleFactor = 8; // Faktor resolusi yang lebih tinggi (contoh: 8 untuk 8x lebih besar)
      canvas.width = image.width * scaleFactor;
      canvas.height = image.height * scaleFactor;
      const context = canvas.getContext("2d");

      // Aktifkan anti-aliasing
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = "high";

      // Gambar ulang dengan faktor resolusi yang lebih tinggi
      context.drawImage(image, 0, 0, canvas.width, canvas.height);

      // Konversi ke PDF dengan orientasi landscape
      const pdf = new jsPDF({
        orientation: "landscape", // Atur orientasi landscape
        unit: "pt", // Satuan ukuran (contoh: poin)
        format: [canvas.height, canvas.width], // Ukuran halaman sesuai dengan gambar yang dihasilkan
      });
      pdf.addImage(
        canvas.toDataURL("image/png"),
        "PNG",
        0,
        0,
        canvas.width,
        canvas.height
      );

      // Simpan PDF dengan nama file yang sesuai
      pdf.save(`${title}.pdf`);
      URL.revokeObjectURL(url);
    };
  };

  useEffect(() => {
    createChart();

    window.addEventListener("resize", createChart);
    return () => window.removeEventListener("resize", createChart);
  }, [createChart]);

  return (
    <div className="flex-col h-full w-full">
      {/* Dropdown */}
      <div className="relative inline-flex justify-between gap-2 md:gap-3 p-1.5 md:p-3 lg:p-3 py-1 md:py-1.5 rounded-2xl w-fit md:max-w-[13rem] lg:max-w-[18rem] group hover:bg-stone-100 md:hover:w-[13rem] lg:hover:w-[18rem] hover:border-b-0 hover:rounded-b-none border-maroon-light border-[2.5px] items-center font-medium px-3 lg:px-4 text-gray-900 cursor-pointer">
        <div className="inline-flex items-center text-maroon-light text-sm md:text-base">
          {daerahName}
        </div>
        <UpArrow
          className={`w-6 h-6 md:w-7 md:h-7 text-maroon-light transition-transform duration-500 rotate-0 group-hover:rotate-180`}
        />
        <div
          className={`absolute top-[0.95rem] md:top-[1.5rem] lg:top-[2rem] -left-[2.5px] lg:-left-[2px] z-20 my-4 md:w-[13rem] lg:w-[18rem] text-base list-none bg-stone-100 divide-y divide-stone-100 rounded-b-2xl border-maroon-light border-[2.5px] border-t-[2.5px] border-t-stone-400 shadow-lg
                transition-transform duration-500 transform opacity-0 pointer-events-none translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto`}
        >
          <ul className="pt-0.5 pb-1 md:py-2 font-medium" role="none">
            {daerahAll.map((daerah) => (
              <li
                className={`${daerah.name === daerahName ? "hidden" : ""}`}
                key={daerah.name}
                onClick={() => changeDaerahName(daerah.name)}
              >
                <div className="cursor-pointer flex w-full gap-1 px-3 lg:px-4 py-1.5 md:py-2 hover:bg-stone-300 text-maroon-light rounded-lg">
                  <div className="inline-flex items-center text-maroon-light text-sm md:text-base font-semibold">
                    {daerah.name}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Konten Utama */}
      <div className="w-full flex relative">
        {/* Download Button */}
        <div
          className={`w-8 h-8 -mt-8 lg:mt-0 lg:w-9 lg:h-9 absolute top-0 right-0 rounded-full flex justify-center items-center bg-maroon-light hover:bg-maroon group ${
            data.length === 0 ? "hidden" : ""
          }`}
        >
          <Download className="text-white w-5 h-5 md:w-6 md:h-6" />
          <div
            className={`absolute -bottom-[8rem] md:-bottom-[9rem] lg:-bottom-[9.5rem] right-0 z-50 my-2 md:my-3 lg:my-4 w-max text-base list-none bg-stone-100 divide-y divide-stone-100 rounded-lg shadow-lg
                transition-transform duration-500 transform opacity-0 pointer-events-none translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto`}
          >
            <ul className="py-1.5 lg:py-2 font-medium" role="none">
              <li>
                <div
                  onClick={downloadSVG}
                  className="cursor-pointer flex w-full justify-center gap-1 px-4 py-2 hover:bg-stone-300 text-maroon-light rounded-lg"
                >
                  <FileSvg className="text-maroon-light w-5 h-5 md:w-6 md:h-6" />
                  <div className="inline-flex items-center text-maroon-light text-sm md:text-base font-semibold">
                    SVG
                  </div>
                </div>
              </li>
              <li>
                <div
                  onClick={downloadPNG}
                  className="cursor-pointer flex w-full justify-center gap-1 px-4 py-2 hover:bg-stone-300 text-maroon-light rounded-lg"
                >
                  <FilePng className="text-maroon-light w-5 h-5 md:w-6 md:h-6" />
                  <div className="inline-flex items-center text-maroon-light text-sm md:text-base">
                    PNG
                  </div>
                </div>
              </li>
              <li>
                <div
                  onClick={downloadPDF}
                  className="cursor-pointer flex w-full justify-center gap-1 px-4 py-2 hover:bg-stone-300 text-maroon-light rounded-lg"
                >
                  <FilePdf className="text-maroon-light w-5 h-5 md:w-6 md:h-6" />
                  <div className="inline-flex items-center text-maroon-light text-sm md:text-base">
                    PDF
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* Chart */}
        <svg id={title} className="chart h-full w-full"></svg>
      </div>
      {/* Checkbox Filter */}
      <div className="w-full flex items-center justify-center">
        <div className="w-24 md:w-28 lg:w-40">
          <div className="flex items-center justify-center">
            <input
              id={`${title}-${checkboxLabels[0]}`}
              type="checkbox"
              checked={selectedKategori.group1}
              onChange={() => changeSelectedKategori("group1")}
              className="w-6 h-6 md:w-7 md:h-7 bg-maroon-light border-maroon rounded focus:ring-maroon accent-maroon-light"
            />
            <label
              htmlFor={`${title}-${checkboxLabels[0]}`}
              className="w-full ml-2 text-sm md:text-base font-medium text-maroon-light"
            >
              {checkboxLabels[0]}
            </label>
          </div>
        </div>
        <div className="w-24 md:w-28 lg:w-40">
          <div className="flex items-center justify-center">
            <input
              id={`${title}-${checkboxLabels[1]}`}
              type="checkbox"
              checked={selectedKategori.group2}
              onChange={() => changeSelectedKategori("group2")}
              className="w-6 h-6 md:w-7 md:h-7 bg-maroon-light border-maroon rounded focus:ring-maroon accent-maroon-light"
            />
            <label
              htmlFor={`${title}-${checkboxLabels[1]}`}
              className="w-full ml-2 text-sm md:text-base font-medium text-maroon-light"
            >
              {checkboxLabels[1]}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
