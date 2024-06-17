import Slider from "react-slick";
import NextArrow from "../../Icon/NextArrow";
import PrevArrow from "../../Icon/PrevArrow";
import Calendar from "../../Icon/Calendar";
import Tag from "../../Icon/Tag";
import { dataGaleriVideo } from "../../../contents/galeri";
import FileVideo from "../../Icon/FileVideo";
import getLanguage from "../../../hooks/getLanguage";

export default function GaleriVideo() {
  const lang = getLanguage();
  const handleUnduh = (filepath) => {
    const fileName = filepath.split("/").pop().split(".").shift();
    const link = document.createElement("a");
    link.href = filepath;
    link.download = fileName + ".mp4";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const Card = ({ title, date, imageSrc, size, tags, filepath }) => (
    <div className="p-1 lg:p-2">
      <div className="bg-white shadow-md rounded-lg flex flex-col gap-0">
        <div className="flex w-full h-[10rem] md:h-[12rem] lg:h-[14rem] relative border-2 border-maroon-light rounded-t-xl overflow-hidden">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover object-top rounded-t-lg "
          />
          <div className="w-fit bg-maroon-light absolute bottom-0 left-0 ">
            <p className="text-gold text-sm md:text-base font-semibold px-3 py-1.5 rounded-lg">
            {
                      lang == "id"
                        ?"VIDEO"
                        :"VIDEO"
                    }
            </p>
          </div>
        </div>
        <div className="px-2 lg:px-4 pt-1 pb-2">
          <div className="flex items-center text-stone-500 text-sm md:text-base mb-1">
            <span className="mr-4 flex items-center">
              <Calendar className="w-[1.15rem] h-[1.15rem] md:w-[1.35rem] md:h-[1.35rem] mr-1.5 text-stone-500" />
              {date}
            </span>
          </div>
          <h2 className="text-maroon-light text-base md:text-lg font-bold leading-tight">
            {title}
          </h2>
          <div className="flex gap-1 md:gap-1.5 w-full mt-2">
            <div className="bg-stone-200 py-0.5 px-2 flex justify-center items-center rounded-xl hover:bg-stone-500 group">
              <FileVideo className="w-3 h-3 text-stone-500 group-hover:text-stone-100" />
              <p className="text-stone-500 text-xs ms-1 font-semibold group-hover:text-stone-100">
                {size}
              </p>
            </div>
            {tags.map((tag) => (
              <div
                key={tag}
                className="bg-stone-200 py-0.5 px-2 flex justify-center items-center rounded-xl hover:bg-stone-500 group"
              >
                <Tag className="w-3 h-3 text-stone-500 group-hover:text-stone-100" />
                <p className="text-stone-500 text-xs ms-1 font-semibold group-hover:text-stone-100">
                  {tag}
                </p>
              </div>
            ))}
          </div>
          <button
            onClick={() => handleUnduh(filepath)}
            className="mt-2 w-full flex justify-center items-center bg-maroon-light border-maroon-light text-stone-100 px-9 py-1.5 rounded-full text-base font-semibold group hover:bg-stone-100 hover:text-maroon-light hover:border"
          >
            <FileVideo className="w-4 h-4 me-2" />
            <p className="text-sm">{
                lang == "id"
                  ?"Unduh Video"
                  :"Download Videos"
              }</p>
          </button>
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
          slidesToShow: 2, // 2 kolom
          slidesToScroll: 1,
          slidesPerRow: 2, // 2 baris
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1, // 1 kolom
          slidesToScroll: 1,
          slidesPerRow: 2, // 2 baris
        },
      },
    ],
  };

  return (
    <div className="flex flex-col bg-stone-100 rounded-2xl">
      <div className="py-4 flex flex-col gap-1">
        <h1 className="text-maroon-light text-lg md:text-xl lg:text-2xl font-bold">
        {
                lang == "id"
                  ?"Album Video"
                  :"Video album"
              }
        </h1>
        <p className="text-justify text-stone-900 text-sm md:text-base lg:text-lg">
         
          {
                lang == "id"
                  ?" Album video ini menyajikan rangkaian video dokumenter dari berbagai kegiatan dan acara yang diadakan oleh KPU DKI Jakarta, memberikan gambaran dinamis tentang proses pemilu dan partisipasi masyarakat dalam pemilihan umum."
                  :"This video album presents a series of documentary videos from various activities and events held by the DKI Jakarta KPU, providing a dynamic overview of the electoral process and public participation in the general election."
              }
        </p>
      </div>
      <div className="mx-auto shadow-xl p-1 md:p-2 py-2 md:py-3 lg:py-4 pb-10 md:pb-12 lg:pb-12 border border-gold rounded-2xl grid grid-cols-1 ">
        <div id="bahanSosialisasiSlider">
          <div className="w-full h-fit slider-container mx-auto">
            <Slider {...settings} className="flex justify-center items-center">
              {dataGaleriVideo.map((item, index) => (
                <Card
                  key={index}
                  title={item.title}
                  date={item.date}
                  views={item.views}
                  imageSrc={item.imgSrc}
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
