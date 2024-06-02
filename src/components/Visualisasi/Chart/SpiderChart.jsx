import { useCallback, useEffect } from "react";
import * as d3 from "d3";
import { jsPDF } from "jspdf";
import Download from "../../Icon/Download";
import FileSvg from "../../Icon/FileSvg";
import FilePng from "../../Icon/FilePng";
import FilePdf from "../../Icon/FilePdf";

export default function SpiderChart({ title, data }) {
  const createChart = useCallback(() => {
    d3.select(`#${title}`).selectAll("*").remove();

    const label = ["Orang Tua", "Gen Z Anak", "Gen Z Dewasa"];
    const hexColor = ["#FFC837", "#6497B1", "#FA8295"];
    const color = d3.scaleOrdinal().range(hexColor);

    // Responsive Width
    const containerWidth = document.querySelector(`#${title}`).clientWidth;

    const margin = {
      top: containerWidth > 1080 ? 100 : containerWidth > 640 ? 80 : 30,
      right: containerWidth > 1080 ? 120 : containerWidth > 640 ? 120 : 30,
      bottom: containerWidth > 1080 ? 140 : containerWidth > 640 ? 100 : 50,
      left: containerWidth > 1080 ? 120 : containerWidth > 640 ? 120 : 30,
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

    // BUAT FILTER UNTUK GLOW LINE
    //Garis luar/tepian glow
    var filter = g.append("defs").append("filter").attr("id", "glow"),
      feGaussianBlur = filter
        .append("feGaussianBlur")
        .attr("stdDeviation", "2.5")
        .attr("result", "coloredBlur"),
      feMerge = filter.append("feMerge"),
      feMergeNode_1 = feMerge.append("feMergeNode").attr("in", "coloredBlur"),
      feMergeNode_2 = feMerge.append("feMergeNode").attr("in", "SourceGraphic");

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
        console.log(d.group);
        console.log(hexColor[d.group]);
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
          .style("left", `${newX + 10}px`)
          .style("top", `${newY - 28}px`);
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
          `translate(${svgWidth / 2 - 1 * 120 + i * 120}, ${
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
    const canvas = svgElement.createElement("canvas");
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
    return () => {
      window.removeEventListener("resize", createChart);
      d3.select(`#${title}`).selectAll("*").remove();
      d3.select(`.tooltip${title}`).remove();
    };
  }, [createChart, title]);

  return (
    <div className="flex-col h-full w-full relative">
      <div className="w-9 h-9 z-20 absolute top-0 right-0 rounded-full flex justify-center items-center bg-maroon-light hover:bg-maroon group">
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
      <div id={title} className="relative flex-col h-full w-full mx-auto"></div>
    </div>
  );
}
