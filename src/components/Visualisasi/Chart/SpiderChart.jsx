import { useCallback, useEffect } from "react";
import * as d3 from "d3";
import { jsPDF } from "jspdf";
import Download from "../../Icon/Download";
import FileSvg from "../../Icon/FileSvg";
import FilePng from "../../Icon/FilePng";
import FilePdf from "../../Icon/FilePdf";
import UpArrow from "../../Icon/UpArrow";

export default function SpiderChart({
  title,
  data,
  keys,
  warna,
  dataName,
  selectedData,
  variabelAll,
  checkboxLabels,
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

    // Penyamaan Format Data

    const label = keys;
    const hexColor = warna;
    const color = d3.scaleOrdinal().range(hexColor);

    // Responsive Width
    const containerWidth = document.querySelector(`#${title}`).clientWidth;

    const margin = {
      top: containerWidth > 1080 ? 50 : containerWidth > 640 ? 40 : 30,
      right: containerWidth > 1080 ? 60 : containerWidth > 640 ? 50 : 30,
      bottom: containerWidth > 1080 ? 70 : containerWidth > 640 ? 50 : 40,
      left: containerWidth > 1080 ? 60 : containerWidth > 640 ? 50 : 30,
    };

    const width = containerWidth - margin.left - margin.right;
    const widthFix = width > 480 ? 480 : width;
    const height = widthFix; // Adjust height calculation

    const config = {
      w: widthFix, //Lebar Lingkaran
      h: height, //Tinggi Lingkaran
      margin: margin, //Margin SVG
      levels: 5, //Jumlah Data Tampil
      maxValue: 1, //Max Nilai
      labelFactor: containerWidth > 640 ? 1.15 : 1.05, //Seberapa jauh dari radius lingkaran luar label harus ditempatkan
      wrapWidth: 60, //Jumlah piksel setelah mana label perlu diberi baris baru
      opacityArea: 0.35, //Tingkat transparansi area blob
      dotRadius: 4, //Ukuran titik lingkaran berwarna pada setiap blob
      opacityCircles: 0.1, //Tingkat transparansi lingkaran pada setiap blob
      strokeWidth: 2, //Lebar garis tepi di sekitar setiap blob
      roundStrokes: true, //Jika true, area dan garis tepi akan mengikuti jalur melingkar (cardinal-closed)
      color: color, //Fungsi warna
    };

    // Apabila data lebih kecil dari batas nilai, ubah data menjadi batas nilai
    var maxValue = Math.max(
      config.maxValue,
      d3.max(data, function (i) {
        return d3.max(
          i.map(function (o) {
            return o.value;
          })
        );
      })
    );

    //Nama dari setiap sumbu/statistik
    var allAxis = data[0].map(function (i) {
        return i.axis;
      }),
      //Jumlah sumbu yang berbeda
      total = allAxis.length,
      //Radius lingkaran terluar
      radius = Math.min(config.w / 2, config.h / 2),
      //Lebar dalam radian dari setiap "irisan"
      angleSlice = (Math.PI * 2) / total;

    //Skala untuk radius
    var rScale = d3.scaleLinear().range([0, radius]).domain([0, maxValue]);

    // BUAT CONTAINER SVG
    // Inisiasi SVG
    var svg = d3
      .select(`#${title}`)
      .append("svg")
      .attr("width", widthFix + config.margin.left + config.margin.right)
      .attr("height", height + config.margin.top + config.margin.bottom)
      .attr("class", "radar" + `${title} mx-auto`);

    //Tambahkan Elemen g
    var g = svg
      .append("g")
      .attr(
        "transform",
        "translate(" +
          (config.w / 2 + config.margin.left) +
          "," +
          (config.h / 2 + config.margin.top) +
          ")"
      );

    // // BUAT FILTER UNTUK GLOW LINE
    // //Garis luar/tepian glow
    // var filter = g.append("defs").append("filter").attr("id", "glow"),
    //   feGaussianBlur = filter
    //     .append("feGaussianBlur")
    //     .attr("stdDeviation", "2.5")
    //     .attr("result", "coloredBlur"),
    //   feMerge = filter.append("feMerge"),
    //   feMergeNode_1 = feMerge.append("feMergeNode").attr("in", "coloredBlur"),
    //   feMergeNode_2 = feMerge.append("feMergeNode").attr("in", "SourceGraphic");

    // TAMBAHKAN GRID LINGKARAN (CIRCULAR)
    //Wrapper Grid & Axes
    var axisGrid = g.append("g").attr("class", "axisWrapper");

    //Warna Latar Belakang Lingkaran
    axisGrid
      .selectAll(".levels")
      .data(d3.range(1, config.levels + 1).reverse())
      .enter()
      .append("circle")
      .attr("class", "gridCircle")
      .attr("r", function (d) {
        return (radius / config.levels) * d;
      })
      .style("fill", "#CDCDCD")
      .style("stroke", "#CDCDCD")
      .style("fill-opacity", config.opacityCircles)
      .style("filter", "url(#glow)");

    // TAMBAHKAN SUMBU VERTIKAL (LEGENDA)
    //Legenda/Text Vertikal Penanda Besaran Nilai
    axisGrid
      .selectAll(".axisLabel")
      .data(d3.range(1, config.levels + 1).reverse())
      .enter()
      .append("text")
      .attr("class", "axisLabel")
      .attr("x", 4)
      .attr("y", function (d) {
        return (-d * radius) / config.levels;
      })
      .attr("dy", "0.4em")
      .style(
        "font-size",
        containerWidth > 1080 ? "15px" : containerWidth > 640 ? "12px" : "10px"
      )
      .attr("fill", "#737373")
      .text(function (d) {
        return (maxValue * d) / config.levels;
      });

    //Garis Lurus Vertikal ke Atas (Legenda)
    var axis = axisGrid
      .selectAll(".axis")
      .data(allAxis)
      .enter()
      .append("g")
      .attr("class", "axis");

    axis
      .append("line")
      .attr("x1", 0)
      .attr("y1", 0)
      .attr("x2", function (d, i) {
        return rScale(maxValue * 1) * Math.cos(angleSlice * i - Math.PI / 2);
      })
      .attr("y2", function (d, i) {
        return rScale(maxValue * 1) * Math.sin(angleSlice * i - Math.PI / 2);
      })
      .attr("class", "line")
      .style("stroke", "white")
      .style(
        "stroke-width",
        containerWidth > 1080 ? "3px" : containerWidth > 640 ? "2.5px" : "2px"
      );

    //Masukkan Label Legenda
    axis
      .append("text")
      .attr("class", "legend")
      .style(
        "font-size",
        containerWidth > 1080 ? "13px" : containerWidth > 640 ? "11px" : "9px"
      )
      .style("font-family", "Poppins")
      .style("font-weight", "medium")
      .attr("text-anchor", "middle")
      .attr("dy", "0.35em")
      .attr("x", function (d, i) {
        return (
          rScale(maxValue * config.labelFactor) *
          Math.cos(angleSlice * i - Math.PI / 2)
        );
      })
      .attr("y", function (d, i) {
        return (
          rScale(maxValue * config.labelFactor) *
          Math.sin(angleSlice * i - Math.PI / 2)
        );
      })
      .text(function (d) {
        return d;
      })
      .call(wrap, config.wrapWidth);

    // TAMBAHKAN RADAR AREA (BLOBS)
    var radarLine = d3
      .lineRadial()
      .curve(d3.curveBasisClosed)
      .radius(function (d) {
        return rScale(d.value);
      })
      .angle(function (d, i) {
        return i * angleSlice;
      });

    //Apakah Garis Lurus atau Melingkar/Membelok
    if (config.roundStrokes) {
      radarLine.curve(d3.curveCardinalClosed);
    }

    //Wrapper untuk BLOBS
    var blobWrapper = g
      .selectAll(".radarWrapper")
      .data(data)
      .enter()
      .append("g")
      .attr("class", "radarWrapper");

    //Latar Belakang Area BLOBS & Set BLOBS
    blobWrapper
      .append("path")
      .attr("class", "radarArea")
      .attr("d", function (d) {
        return radarLine(d);
      })
      .style("fill", function (d, i) {
        return config.color(i);
      })
      .style("fill-opacity", config.opacityArea)
      .on("mouseover", function () {
        //Dim all blobs
        d3.selectAll(".radarArea")
          .transition()
          .duration(200)
          .style("fill-opacity", 0.1);
        //Bring back the hovered over blob
        d3.select(this).transition().duration(200).style("fill-opacity", 0.7);
      })
      .on("mouseout", function () {
        //Bring back all blobs
        d3.selectAll(".radarArea")
          .transition()
          .duration(200)
          .style("fill-opacity", config.opacityArea);
      });

    //Tambahkan Outline pada BLOBs
    blobWrapper
      .append("path")
      .attr("class", "radarStroke")
      .attr("d", function (d) {
        console.log("spider", d);
        return radarLine(d);
      })
      .style("stroke-width", config.strokeWidth + "px")
      .style("stroke", function (d, i) {
        return config.color(i);
      })
      .style("fill", "none")
      .style("filter", "url(#glow)");

    //Masukkan BLOBS pada Lingkaran Spider
    blobWrapper
      .selectAll(".radarCircle")
      .data(function (d) {
        return d;
      })
      .enter()
      .append("circle")
      .attr("class", "radarCircle")
      .attr("r", config.dotRadius)
      .attr("cx", function (d, i) {
        return rScale(d.value) * Math.cos(angleSlice * i - Math.PI / 2);
      })
      .attr("cy", function (d, i) {
        return rScale(d.value) * Math.sin(angleSlice * i - Math.PI / 2);
      })
      .style("fill", function (d, i, j) {
        return config.color(j);
      })
      .style("fill-opacity", 0.8);

    // BUAT TOOLTIP
    //Wrapper Tooltip
    var blobCircleWrapper = g
      .selectAll(".radarCircleWrapper")
      .data(data)
      .enter()
      .append("g")
      .attr("class", "radarCircleWrapper");

    //Masukkan Tooltip
    blobCircleWrapper
      .selectAll(".radarInvisibleCircle")
      .data(function (d) {
        return d;
      })
      .enter()
      .append("circle")
      .attr("class", "radarInvisibleCircle")
      .attr("r", config.dotRadius * 1.5)
      .attr("cx", function (d, i) {
        return rScale(d.value) * Math.cos(angleSlice * i - Math.PI / 2);
      })
      .attr("cy", function (d, i) {
        return rScale(d.value) * Math.sin(angleSlice * i - Math.PI / 2);
      })
      .style("fill", "none")
      .style("pointer-events", "all")
      .on("mouseover", function (event, d) {
        var newX = event.pageX;
        var newY = event.pageY;
        let tooltipHtml = `<strong>Indikator ${
          d.axis
        }</strong><br/><i>Kategori ${
          label[d.group]
        }</i><br/><span style="color:${hexColor[d.group]};">&#9632;</span> ${
          d.value
        }`;
        tooltip
          .html(tooltipHtml)
          .style("opacity", 0.9)
          .style("left", `${newX}px`)
          .style("top", `${newY - 100}px`);
      })
      .on("mouseout", function () {
        tooltip.transition().duration(200).style("opacity", 0);
      });

    //Tampilkan Tooltip
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
        .style("border-radius", "5px");
    }

    // HAHA HIHI

    const svgWidth = svg.node().getBBox().width;

    // TAMBAH LEGENDA
    const legend = svg
      .append("g")
      .attr("font-size", 12)
      .attr("font-weight", "bold")
      .attr("text-anchor", "start") // Align text to the start
      .selectAll("g")
      .data(label)
      .enter()
      .append("g")
      .attr(
        "transform",
        (d, i) =>
          `translate(${svgWidth / 2 - 1 * 100 + i * 120}, ${
            containerWidth > 1080 ? 730 : containerWidth > 640 ? 700 : 680
          })`
      ); // Center the legend horizontally

    legend
      .append("rect")
      .attr("x", 0) // Adjust the position of the rectangle
      .attr("width", 26)
      .attr("height", 26)
      .attr("fill", (d, i) => color(i)) // Use the color function to assign colors
      .attr("fill-opacity", 0.5) // Add fill-opacity
      .attr("stroke", (d, i) => color(i)) // Use the color function for the stroke color
      .attr("stroke-width", "4px"); // Add stroke width

    legend
      .append("text")
      .attr("x", 32) // Adjust the position of the text
      .attr("y", 13) // Vertically align the text to the center of the rectangle
      .attr("dy", "0.3em")
      .text((d) => d)
      .style("font-family", "Poppins")
      .attr("fill", "#333");

    // FUNGSI WRAP
    function wrap(text, width) {
      text.each(function () {
        var text = d3.select(this),
          words = text.text().split(/\s+/).reverse(),
          word,
          line = [],
          lineNumber = 0,
          lineHeight = 1.4, // ems
          y = text.attr("y"),
          x = text.attr("x"),
          dy = parseFloat(text.attr("dy")),
          tspan = text
            .text(null)
            .append("tspan")
            .attr("x", x)
            .attr("y", y)
            .attr("dy", dy + "em");

        while ((word = words.pop())) {
          line.push(word);
          tspan.text(line.join(" "));
          if (tspan.node().getComputedTextLength() > width) {
            line.pop();
            tspan.text(line.join(" "));
            line = [word];
            tspan = text
              .append("tspan")
              .attr("x", x)
              .attr("y", y)
              .attr("dy", ++lineNumber * lineHeight + dy + "em")
              .text(word);
          }
        }
      });
    } //wrap
  }, [title, data, keys, warna]);

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
    const svgElement = document.querySelector(`#${title} svg`);
    const svgString = new XMLSerializer().serializeToString(svgElement);
    const svgBlob = new Blob([svgString], {
      type: "image/svg+xml;charset=utf-8",
    });
    const url = URL.createObjectURL(svgBlob);

    const image = new Image();
    image.src = url;

    image.onload = () => {
      const canvas = document.createElement("canvas");
      const scaleFactor = 8; // Faktor resolusi yang lebih tinggi (contoh: 2 untuk 2x lebih besar)
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
    const svgElement = document.querySelector(`#${title} svg`);
    const svgString = new XMLSerializer().serializeToString(svgElement);
    const svgBlob = new Blob([svgString], {
      type: "image/svg+xml;charset=utf-8",
    });
    const url = URL.createObjectURL(svgBlob);

    const image = new Image();
    image.src = url;

    image.onload = () => {
      const canvas = document.createElement("canvas");
      const scaleFactor = 4; // Faktor resolusi yang lebih tinggi (contoh: 2 untuk 2x lebih besar)
      canvas.width = image.width * scaleFactor;
      canvas.height = image.height * scaleFactor;
      const context = canvas.getContext("2d");

      // Aktifkan anti-aliasing
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = "high";

      // Gambar ulang dengan faktor resolusi yang lebih tinggi
      context.drawImage(image, 0, 0, canvas.width, canvas.height);

      // Konversi ke PDF
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
      <div className="relative inline-flex justify-between gap-2 md:gap-3 p-1.5 md:p-3 lg:p-3 py-1 md:py-1.5 rounded-2xl w-fit md:max-w-[20rem] lg:max-w-[22rem] group hover:bg-stone-100 md:hover:w-[20rem] lg:hover:w-[22rem] hover:border-b-0 hover:rounded-b-none border-maroon-light border-[2.5px] items-center font-medium px-3 lg:px-4 text-gray-900 cursor-pointer">
        <div className="inline-flex items-center text-maroon-light text-sm md:text-base">
          {dataName}
        </div>
        <UpArrow
          className={`w-6 h-6 md:w-7 md:h-7 text-maroon-light transition-transform duration-500 rotate-0 group-hover:rotate-180`}
        />
        <div
          className={`absolute top-[0.95rem] md:top-[1.5rem] lg:top-[1.5rem] -left-[2.5px] lg:-left-[2px] z-20 my-4 md:w-[20rem] lg:w-[22rem] text-base list-none bg-stone-100 divide-y divide-stone-100 rounded-b-2xl border-maroon-light border-[2.5px] border-t-[2.5px] border-t-stone-400 shadow-lg
                transition-transform duration-500 transform opacity-0 pointer-events-none translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto`}
        >
          <ul className="pt-0.5 pb-1 md:py-2 font-medium" role="none">
            {variabelAll.map((variabel) => (
              <li
                className={`${variabel.name === dataName ? "hidden" : ""}`}
                key={variabel.name}
                onClick={() => changeDataName(variabel.name)}
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
      {/* Konten Utama */}
      <div className="w-full flex relative">
        {/* Download Button */}
        <div
          className={`w-8 h-8 z-20 lg:w-9 lg:h-9 absolute top-0 right-0 rounded-full flex justify-center items-center bg-maroon-light hover:bg-maroon group ${
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
        <div
          id={title}
          className="relative flex-col h-full w-full mx-auto"
        ></div>
      </div>
      {/* Checkbox Filter */}
      <div className="w-full flex mt-1.5 md:mt-2.5 lg:mt-0 items-center justify-center">
        <div className="md:w-32 lg:w-40">
          <div className="flex items-center justify-center">
            <input
              id={`${title}-${checkboxLabels[0]}`}
              type="checkbox"
              checked={selectedData.group1}
              onChange={() => changeSelectedData("group1")}
              className="w-7 h-7 bg-maroon-light border-maroon rounded focus:ring-maroon accent-maroon-light"
            />
            <label
              htmlFor={`${title}-${checkboxLabels[0]}`}
              className="w-full ml-2 text-md font-medium text-maroon-light"
            >
              {checkboxLabels[0]}
            </label>
          </div>
        </div>
        <div className="md:w-32 lg:w-40">
          <div className="flex items-center justify-center">
            <input
              id={`${title}-${checkboxLabels[1]}`}
              type="checkbox"
              checked={selectedData.group2}
              onChange={() => changeSelectedData("group2")}
              className="w-7 h-7 bg-maroon-light border-maroon rounded focus:ring-maroon accent-maroon-light"
            />
            <label
              htmlFor={`${title}-${checkboxLabels[1]}`}
              className="w-full ml-2 text-sm md:text-base font-medium text-maroon-light"
            >
              {checkboxLabels[1]}
            </label>
          </div>
        </div>
        <div className="md:w-32 lg:w-40">
          <div className="flex items-center justify-center">
            <input
              id={`${title}-${checkboxLabels[2]}`}
              type="checkbox"
              checked={selectedData.group3}
              onChange={() => changeSelectedData("group3")}
              className="w-7 h-7 bg-maroon-light border-maroon rounded focus:ring-maroon accent-maroon-light"
            />
            <label
              htmlFor={`${title}-${checkboxLabels[2]}`}
              className="w-full ml-2 text-sm md:text-base font-medium text-maroon-light"
            >
              {checkboxLabels[2]}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
