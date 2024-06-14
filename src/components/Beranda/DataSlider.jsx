import Slider from "react-slick";
import { dataCard } from "../../contents/hero";
import PrevArrow from "../Icon/PrevArrow";
import IconTemplate from "../Icon/IconTemplate";

export default function DataSlider() {
  function PrevArroww(props) {
    const { onClick } = props;
    return (
      <div
        className="w-9 h-9 md:w-11 md:h-11 lg:w-14 lg:h-14 bg-gold rounded-full flex justify-center items-center"
        onClick={onClick}
      >
        <PrevArrow
          className={
            "w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 group-hover:scale-110"
          }
        />
      </div>
    );
  }

  function NextArroww(props) {
    const { onClick } = props;
    return (
      <div
        className=" w-9 h-9 md:w-11 md:h-11 lg:w-14 lg:h-14 bg-gold rounded-full flex justify-center items-center"
        onClick={onClick}
      >
        <PrevArrow
          className={
            "w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 group-hover:scale-110 rotate-180 -translate-x-2.5"
          }
        />
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
    responsive: [
      {
        breakpoint: 1640,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div id="dataSlider">
      <div className="w-[80%] lg:w-[85%] h-fit slider-container mx-auto z-20 mt-0 lg:mt-4">
        <Slider
          {...settings}
          className="pb-2 flex justify-center items-center gap-3"
        >
          {dataCard.map((data, index) => (
            <div key={index} className="w-12 p-2 z-20">
              <div className="w-full h-[14rem] md:h-[15.5rem] lg:h-[17.5rem] relative rounded-2xl md:rounded-3xl overflow-hidden bg-gold-neutral pt-6 flex flex-col items-center justify-end z-20">
                <div className="w-[5.5rem] h-[5.5rem] md:w-28 md:h-28 flex justify-center items-center absolute top-[0.8rem] md:top-[0.9rem] lg:top-[1rem] bg-maroon-light bg-opacity-30 rounded-2xl">
                  <IconTemplate icon={data.icon} />
                </div>
                <div className="flex flex-col items-center w-full px-2 pt-16 lg:pt-8 pb-4 rounded-t-[2rem] bg-gold">
                  <h2 className="text-2xl lg:text-3xl font-semibold text-maroon-light leading-none">
                    {data.name}
                  </h2>
                  <h1 className="text-4xl lg:text-5xl font-extrabold text-maroon-light mt-2 lg:mt-2 leading-none">
                    {data.value}
                  </h1>
                  <h3 className="text-xl lg:text-2xl text-maroon-light mt-3 lg:mt-4 leading-none">
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
