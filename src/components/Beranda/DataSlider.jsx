import Slider from "react-slick";
import { dataCard } from "../../contents/hero";
import PrevArrow from "../Icon/PrevArrow";
import NextArrow from "../Icon/NextArrow";
import IconTemplate from "../Icon/IconTemplate";

export default function DataSlider() {
  function PrevArroww(props) {
    const { onClick } = props;
    return (
      <div
        className=" w-10 h-10 bg-gold rounded-full flex justify-center items-center"
        onClick={onClick}
      >
        <PrevArrow />
      </div>
    );
  }

  function NextArroww(props) {
    const { onClick } = props;
    return (
      <div
        className=" w-10 h-10 bg-gold rounded-full flex justify-center items-center"
        onClick={onClick}
      >
        <NextArrow />
      </div>
    );
  }

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
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
      <div className="w-5 h-5 rounded-full bg-gold bg-opacity-60 hover:scale-110 hover:bg-opacity-100"></div>
    ),
  };
  return (
    <div id="dataSlider">
      <div className="w-[85%] h-fit slider-container mx-auto z-20 mt-4">
        <Slider
          {...settings}
          className="pb-2 flex justify-center items-center gap-3"
        >
          {dataCard.map((data, index) => (
            <div key={index} className="w-12 p-2 z-20">
              <div className="w-full h-[17.5rem] relative rounded-3xl overflow-hidden bg-gold-neutral pt-6 flex flex-col items-center justify-end z-20">
                <div className="absolute top-[1rem] bg-maroon-light bg-opacity-30 rounded-2xl">
                  <IconTemplate icon={data.icon} />
                </div>
                <div className="flex flex-col w-full px-2 pt-8 pb-4 items-center rounded-t-[2rem] bg-gold">
                  <h2 className="text-3xl font-medium text-maroon-light">
                    {data.name}
                  </h2>
                  <h1 className="text-6xl font-extrabold text-maroon-light mt-2">
                    {data.value}
                  </h1>
                  <h3 className="text-2xl text-maroon-light mt-4">
                    {data.detail}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <style></style>
    </div>
  );
}
