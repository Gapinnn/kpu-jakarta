import Slider from "react-slick";
import { dataInfo } from "../../contents/hero";
import NextArrow from "../Icon/NextArrow";
import PrevArrow from "../Icon/PrevArrow";

export default function InfoSlider() {
  function PrevArroww(props) {
    const { onClick } = props;
    return (
      <div
        className="w-fit rounded-full flex justify-center items-center"
        onClick={onClick}
      >
        <PrevArrow className={"w-16 h-16"} />
      </div>
    );
  }

  function NextArroww(props) {
    const { onClick } = props;
    return (
      <div
        className="rounded-full flex justify-center items-center"
        onClick={onClick}
      >
        <NextArrow className={"w-16 h-16"} />
      </div>
    );
  }

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
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
    <div id="infoSlider">
      <div className="w-3/4 h-fit slider-container mx-auto z-20 mt-8 pb-12">
        <Slider {...settings} className="flex justify-center items-center">
          {dataInfo.map((data, index) => (
            <div key={index} className="p-2 z-20">
              <img
                src={`/images/${data.file}`}
                alt={data.keterangan}
                className="w-full object-cover rounded-lg"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
