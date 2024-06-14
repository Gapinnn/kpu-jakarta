import { useState, useEffect } from "react";
import Slider from "react-slick";
import { dataInfo } from "../../contents/hero";
import NextArrow from "../Icon/NextArrow";
import PrevArrow from "../Icon/PrevArrow";

export default function InfoSlider() {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);

  useEffect(() => {
    if (loadedCount === dataInfo.length) {
      setImagesLoaded(true);
    }
  }, [loadedCount]);

  const handleImageLoad = () => {
    setLoadedCount((prevCount) => prevCount + 1);
  };

  function PrevArroww(props) {
    const { onClick } = props;
    return (
      <div
        className="w-fit rounded-full flex justify-center items-center"
        onClick={onClick}
      >
        <PrevArrow className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16" />
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
        <NextArrow className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16" />
      </div>
    );
  }

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <NextArroww />,
    prevArrow: <PrevArroww />,
    appendDots: (dots) => (
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
          slidesToShow: 1,
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
    <div id="infoSlider">
      <div className="w-full lg:w-3/4 lg:h-fit lg:mx-auto mt-4 md:mt-6 lg:mt-8 pb-8 md:pb-10 lg:pb-12">
        {imagesLoaded ? (
          <Slider {...settings} className="flex justify-center items-center">
            {dataInfo.map((data, index) => (
              <div key={index} className="p-0 md:p-2 z-20">
                <img
                  src={`/images/${data.file}`}
                  alt={data.keterangan}
                  className="w-full object-cover rounded-lg m-0 p-0"
                />
              </div>
            ))}
          </Slider>
        ) : (
          <div className="flex justify-center items-center">
            Loading...
            {dataInfo.map((data, index) => (
              <img
                key={index}
                src={`/images/${data.file}`}
                alt={data.keterangan}
                className="hidden"
                onLoad={handleImageLoad}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
