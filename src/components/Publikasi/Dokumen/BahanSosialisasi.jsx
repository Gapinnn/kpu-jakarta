import Slider from "react-slick";
import NextArrow from "../../Icon/NextArrow";
import PrevArrow from "../../Icon/PrevArrow";
import Calendar from "../../Icon/Calendar";
import FileDoc from "../../Icon/FileDoc";
import EyeView from "../../Icon/EyeView";
import Tag from "../../Icon/Tag";
import FIleOpen from "../../Icon/FIleOpen";
import FileDownload from "../../Icon/FileDownload";
import { dataBahanSosilisasi } from "../../../contents/sosialisasi";

export default function BahanSosialisasi() {
  const handleBaca = (filepath) => {
    const pdfViewerUrl = `/pdf-viewer?pdfUrl=${encodeURIComponent(filepath)}`;
    window.open(pdfViewerUrl, "_blank");
  };

  const handleUnduh = (filepath) => {
    const fileName = filepath.split("/").pop().split(".").shift();
    const link = document.createElement("a");
    link.href = filepath;
    link.download = fileName + ".pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const Card = ({
    title,
    date,
    views,
    imageSrc,
    description,
    size,
    tags,
    filepath,
  }) => (
    <div className="p-2 flex">
      <div className="p-2 bg-white shadow-md rounded-lg flex flex-row gap-2">
        <div className="flex md:w-1/4 relative">
          <img src={imageSrc} alt={title} className="w-full rounded-lg " />
          <div className="w-fit bg-maroon-light absolute bottom-0 left-0 rounded-r-md rounded-bl-md">
            <p className="text-gold text-sm px-2 py-1 rounded-lg">
              BAHAN SOSIALISASI
            </p>
          </div>
        </div>
        <div className="p-4 md:w-3/4 flex flex-col justify-between">
          <div>
            <div className="flex items-center text-stone-500 text-base mb-1">
              <span className="mr-4 flex items-center">
                <Calendar className="w-[1.35rem] h-[1.35rem] mr-1.5 text-stone-500" />
                {date}
              </span>
            </div>
            <h2 className="text-xl font-bold mb-2 leading-snug lg:leading-tight">
              {title}
            </h2>
            <p className="text-stone-700 leading-tight">{description}</p>
          </div>
          <div className="flex gap-1.5 w-full mt-2">
            <div className="bg-stone-200 py-1 px-2 flex justify-center items-center rounded-xl hover:bg-stone-500 group">
              <FileDoc className="w-4 h-4 text-stone-500 group-hover:text-stone-100" />
              <p className="text-stone-500 text-xs ms-1 font-semibold group-hover:text-stone-100">
                {size}
              </p>
            </div>
            <div className="bg-stone-200 py-1 px-2 flex justify-center items-center rounded-xl hover:bg-stone-500 group">
              <EyeView className="w-4 h-4 text-stone-500 group-hover:text-stone-100" />
              <p className="text-stone-500 text-xs ms-1 font-semibold group-hover:text-stone-100">
                {views}
              </p>
            </div>
            {tags.map((tag) => (
              <div
                key={tag}
                className="bg-stone-200 py-1 px-2 flex justify-center items-center rounded-xl hover:bg-stone-500 group"
              >
                <Tag className="w-4 h-4 text-stone-500 group-hover:text-stone-100" />
                <p className="text-stone-500 text-xs ms-1 font-semibold group-hover:text-stone-100">
                  {tag}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-4 flex gap-2">
            <button
              onClick={() => handleBaca(filepath)}
              className="flex items-center bg-stone-100 border-2 border-maroon-light text-maroon-light px-9 py-1.5 rounded-full text-base font-semibold group hover:bg-maroon-light hover:bg-opacity-80 hover:border-2 hover:border-maroon-light hover:text-stone-100"
            >
              <FIleOpen className="w-5 h-5 me-2" />
              <p>Buka</p>
            </button>
            <button
              onClick={() => handleUnduh(filepath)}
              className="flex items-center bg-stone-100 border-2 border-maroon-light text-maroon-light px-9 py-1.5 rounded-full text-base font-semibold group hover:bg-maroon-light hover:bg-opacity-80 hover:border-2 hover:border-maroon-light hover:text-stone-100"
            >
              <FileDownload className="w-5 h-5 me-2" />
              <p>Unduh</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  function PrevArroww(props) {
    const { onClick } = props;
    return (
      <div
        className="w-16 h-16 rounded-full flex justify-center items-center group hover:bg-stone-200"
        onClick={onClick}
      >
        <PrevArrow
          className={"w-14 h-14 group-hover:scale-110 translate-x-2"}
        />
      </div>
    );
  }

  function NextArroww(props) {
    const { onClick } = props;
    return (
      <div
        className="w-16 h-16 rounded-full flex justify-center items-center group hover:bg-stone-200"
        onClick={onClick}
      >
        <NextArrow
          className={"w-14 h-14 group-hover:scale-110 translate-x-0 "}
        />
      </div>
    );
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // 2 baris
    slidesToScroll: 1,
    slidesPerRow: 2, // 2 kolom
    nextArrow: <NextArroww />,
    prevArrow: <PrevArroww />,
    appendDots: (
      dots // Atur List DOT
    ) => (
      <div className="flex justify-center items-center w-full rounded-lg">
        <ul className="flex gap-2 justify-center"> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-5 h-5 rounded-full bg-maroon-light bg-opacity-60 hover:scale-110 hover:bg-opacity-100"></div>
    ),
  };

  return (
    <div className="flex flex-col bg-stone-100 rounded-2xl">
      <div className="py-4 flex flex-col gap-1">
        <h1 className="text-maroon-light text-2xl font-bold">
          Bahan Sosialisasi
        </h1>
        <p className="text-stone-900 text-lg">
          Publikasi ini disusun berdasarkan materi-materi yang digunakan dalam
          kegiatan sosialisasi pemilu yang diselenggarakan oleh KPU DKI Jakarta,
          bertujuan untuk meningkatkan kesadaran dan partisipasi masyarakat
          dalam proses pemilihan umum.
        </p>
      </div>
      <div className="mx-auto shadow-xl p-2 py-4 pb-12 border border-gold rounded-2xl grid grid-cols-1 ">
        <div id="bahanSosialisasiSlider">
          <div className="w-full h-fit slider-container mx-auto">
            <Slider {...settings} className="flex justify-center items-center">
              {dataBahanSosilisasi.map((item, index) => (
                <Card
                  key={index}
                  title={item.title}
                  date={item.date}
                  views={item.views}
                  imageSrc={item.imageSrc}
                  description={item.description}
                  size={item.size}
                  tags={item.tags}
                  filepath={item.filepath}
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
