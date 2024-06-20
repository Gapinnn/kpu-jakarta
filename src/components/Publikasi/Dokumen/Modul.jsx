import Slider from "react-slick";
import NextArrow from "../../Icon/NextArrow";
import PrevArrow from "../../Icon/PrevArrow";
import Calendar from "../../Icon/Calendar";
import FileDoc from "../../Icon/FileDoc";
import Tag from "../../Icon/Tag";
import FIleOpen from "../../Icon/FIleOpen";
import FileDownload from "../../Icon/FileDownload";
import { dataModul } from "../../../contents/modul";
import getLanguage from "../../../hooks/getLanguage";

export default function Modul() {
  const lang = getLanguage();
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
    imageSrc,
    description,
    size,
    tags,
    filepath,
  }) => (
    <div className="p-2 flex">
      {/* Hp */}
      <div className="p-2 bg-white shadow-md rounded-lg flex md:hidden flex-col gap-0">
        <div className="flex h-[18rem] md:w-1/3 lg:md-1/4 relative">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover rounded-lg "
          />
          <div className="w-fit bg-maroon-light absolute bottom-0 left-0 rounded-r-md rounded-bl-md">
            <p className="text-gold text-sm px-2 py-1 rounded-lg">{
                lang == "id"
                  ?"MODUL"
                  :"MODULE"
              }</p>
          </div>
        </div>
        <div className="p-1 md:p-1.5 lg:p-4 md:w-2/3 lg:w-3/4 flex flex-col md:gap-0.5 lg:gap-0 justify-between">
          <div className="w-full flex flex-col gap-1">
            <div>
              <div className="flex items-center text-stone-500 text-base mb-0 lg:mb-1">
                <span className="md:mr-2 lg:mr-4 flex items-center">
                  <Calendar className="w-[1.1rem] h-[1.1rem] lg:w-[1.35rem] lg:h-[1.35rem] mr-1 mt-1 text-stone-500" />
                  {date}
                </span>
              </div>
              <h2 className="text-base md:text-lg lg:text-xl font-bold mb-0 lg:mb-2 leading-snug lg:leading-tight">
                {title}
              </h2>
              <p className="text-stone-700 text-pretty text-sm lg:text-base lg:leading-snug mb-0">
                {description}
              </p>
            </div>
            <div className="flex gap-1 w-full md:mt-1 lg:mt-2">
              {tags.map((tag) => (
                <div
                  key={tag}
                  className="flex-1 bg-stone-200 py-1 px-2 flex justify-center items-center rounded-xl hover:bg-stone-500 group"
                >
                  <Tag className="w-4 h-4 text-stone-500 group-hover:text-stone-100" />
                  <p className="text-stone-500 text-xs ms-1 font-semibold group-hover:text-stone-100">
                    {tag}
                  </p>
                </div>
              ))}
            </div>
            <div className="bg-stone-200 py-1 px-2 flex justify-center items-center rounded-xl hover:bg-stone-500 group">
              <FileDoc className="w-4 h-4 text-stone-500 group-hover:text-stone-100" />
              <p className="text-stone-500 text-xs ms-1 font-semibold group-hover:text-stone-100">
                {size}
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-between gap-2 mt-2">
            <button
              onClick={() => handleBaca(filepath)}
              className="flex flex-1 items-center bg-stone-100 border-2 border-maroon-light text-maroon-light justify-center py-0.5 md:py-1 lg:py-1.5 rounded-full md:text-sm lg:text-base font-semibold group hover:bg-maroon-light hover:bg-opacity-80 hover:border-2 hover:border-maroon-light hover:text-stone-100"
            >
              <FIleOpen className="w-4 h-4 md:w-4 md:h-4 lg:w-5 lg:h-5 me-1" />
              <p>
                {
                  lang == "id"
                    ?"Buka"
                    :"Open"
                }
</p>
            </button>
            <button
              onClick={() => handleUnduh(filepath)}
              className="flex flex-1 items-center bg-stone-100 border-2 border-maroon-light text-maroon-light justify-center py-0.5 md:py-1 lg:py-1.5 rounded-full md:text-sm lg:text-base font-semibold group hover:bg-maroon-light hover:bg-opacity-80 hover:border-2 hover:border-maroon-light hover:text-stone-100"
            >
              <FileDownload className="w-4 h-4 md:w-4 md:h-4 lg:w-5 lg:h-5 me-1" />
              <p>{
                  lang == "id"
                    ?"Unduh"
                    :"Download"
                }</p>
            </button>
          </div>
        </div>
      </div>
      {/* Non HP */}
      <div className="hidden md:flex p-1 lg:p-2 bg-white shadow-md rounded-lg flex-row gap-0 lg:gap-2">
        <div className="flex h-fit md:w-1/3 lg:md-1/4 relative">
          <img src={imageSrc} alt={title} className="w-full rounded-lg " />
          <div className="w-fit bg-maroon-light absolute bottom-0 left-0 rounded-r-md rounded-bl-md">
            <p className="text-gold text-xs md:text-sm px-2 py-1 rounded-lg">
            {
                lang == "id"
                  ?"MODUL"
                  :"MODULE"
              }
            </p>
          </div>
        </div>
        <div className="p-1 md:p-1.5 lg:p-4 md:w-2/3 lg:w-3/4 flex flex-col md:gap-0.5 lg:gap-0 justify-between">
          <div className="w-full flex flex-col gap-0">
            <div>
              <div className="flex items-center text-stone-500 text-base mb-0.5 lg:mb-1">
                <span className="md:mr-2 lg:mr-4 flex items-center">
                  <Calendar className="md:w-[1.15rem] md:h-[1.15rem] lg:w-[1.35rem] lg:h-[1.35rem] mr-1.5 text-stone-500" />
                  {date}
                </span>
              </div>
              <h2 className="md:text-lg lg:text-xl font-bold md:mb-1 lg:mb-2 leading-snug lg:leading-tight">
                {title}
              </h2>
              <p className="text-stone-700 md:text-sm lg:text-base lg:leading-snug">
                {description}
              </p>
            </div>
            <div className="flex gap-1.5 w-full md:mt-1 lg:mt-2">
              <div className="bg-stone-200 py-1 px-2 flex justify-center items-center rounded-xl hover:bg-stone-500 group">
                <FileDoc className="w-4 h-4 text-stone-500 group-hover:text-stone-100" />
                <p className="text-stone-500 text-xs ms-1 font-semibold group-hover:text-stone-100">
                  {size}
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
          </div>
          <div className="hidden md:flex md:mt-2 lg:mt-4 gap-2">
            <button
              onClick={() => handleBaca(filepath)}
              className="flex items-center bg-stone-100 border-2 border-maroon-light text-maroon-light px-9 md:py-1 lg:py-1.5 rounded-full md:text-sm lg:text-base font-semibold group hover:bg-maroon-light hover:bg-opacity-80 hover:border-2 hover:border-maroon-light hover:text-stone-100"
            >
              <FIleOpen className="md:w-4 md:h-4 lg:w-5 lg:h-5 me-2" />
              <p>{
                  lang == "id"
                    ?"Buka"
                    :"Open"
                }</p>
            </button>
            <button
              onClick={() => handleUnduh(filepath)}
              className="flex items-center bg-stone-100 border-2 border-maroon-light text-maroon-light px-9 md:py-1 lg:py-1.5 rounded-full md:text-sm lg:text-base font-semibold group hover:bg-maroon-light hover:bg-opacity-80 hover:border-2 hover:border-maroon-light hover:text-stone-100"
            >
              <FileDownload className="md:w-4 md:h-4 lg:w-5 lg:h-5 me-2" />
              <p>{
                  lang == "id"
                    ?"Unduh"
                    :"Download"
                }</p>
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
        className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full flex justify-center items-center group hover:bg-stone-200"
        onClick={onClick}
      >
        <PrevArrow
          className={
            "w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 group-hover:scale-110 translate-x-2"
          }
        />
      </div>
    );
  }

  function NextArroww(props) {
    const { onClick } = props;
    return (
      <div
        className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full flex justify-center items-center group hover:bg-stone-200"
        onClick={onClick}
      >
        <NextArrow
          className={
            "w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 group-hover:scale-110 translate-x-0 "
          }
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1, // 2 kolom
          slidesToScroll: 1,
          slidesPerRow: 2, // 2 baris
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1, // 1 kolom
          slidesToScroll: 1,
          slidesPerRow: 1, // 2 baris
        },
      },
    ],
  };

  return (
    <div className="flex flex-col bg-stone-100 rounded-2xl">
      <div className="py-2 md:py-3 lg:py-4 flex flex-col gap-1">
        <h1 className="text-maroon-light text-lg md:text-xl lg:text-2xl font-bold">
        {
                lang == "id"
                  ?"MODUL"
                  :"MODULE"
              }
        </h1>
        <p className="text-justify text-stone-900 text-sm md:text-base lg:text-lg">
        {
                lang == "id"
                  ?"Publikasi ini disusun berdasarkan materi-materi yang digunakan dalam kegiatan sosialisasi pemilu yang diselenggarakan oleh KPU DKI Jakarta, bertujuan untuk meningkatkan kesadaran dan partisipasi masyarakat dalam proses pemilihan umum."
                  :"This publication is prepared based on the materials used in election outreach activities organized by the DKI Jakarta KPU, aims to increase public awareness and participation in the general election process."
              }
        </p>
      </div>
      <div className="mx-auto shadow-xl p-1 md:p-2 py-1 md:py-3 lg:py-4 pb-10 md:pb-12 lg:pb-12 border border-gold rounded-2xl grid grid-cols-1 ">
        <div id="bahanSosialisasiSlider">
          <div className="w-full h-fit slider-container mx-auto">
            <Slider {...settings} className="flex justify-center items-center">
              {dataModul.map((item, index) => (
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
