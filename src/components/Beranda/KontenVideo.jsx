import { useState, useEffect } from "react";
import YouTube from "react-youtube";

export default function KontenVideo() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(windowDimensions);

  const optVideoUtama = {
    height:
      windowDimensions.width < 768
        ? `${((windowDimensions.width - 55) * 630) / 1120}`
        : windowDimensions.width < 1024
        ? `${((windowDimensions.width - 100) * 630) / 1120}`
        : "630",
    width:
      windowDimensions.width < 768
        ? `${windowDimensions.width - 55}`
        : windowDimensions.width < 1024
        ? `${windowDimensions.width - 100}`
        : "1120",
    playerVars: {
      rel: 0,
      color: "#ffbf00",
    },
  };

  const optVideoSamping = {
    height:
      windowDimensions.width < 768
        ? `${(((windowDimensions.width - 90) / 3) * 180) / 320}`
        : windowDimensions.width < 1024
        ? `${(((windowDimensions.width - 150) / 3) * 180) / 320}`
        : "180",
    width:
      windowDimensions.width < 768
        ? `${(windowDimensions.width - 90) / 3}`
        : windowDimensions.width < 1024
        ? `${(windowDimensions.width - 150) / 3}`
        : "320",
    playerVars: {
      rel: 0,
      color: "#ffbf00",
    },
  };

  return (
    <div className="w-full bg-stone-100 p-2 py-4">
      <h1 className="text-maroon-light text-center mx-auto font-extrabold text-2xl md:text-3xl lg:text-4xl mt-4 md:mt-8 lg:mt-8">
        Konten Video
      </h1>
      <div className="flex flex-col items-center lg:flex-row justify-center w-full mt-4 md:mt-6 lg:mt-8 gap-2 md:gap-3 lg:gap-8 p-2">
        {/* Konten Video Utama */}
        <div className="w-fit">
          <div className="rounded-3xl overflow-hidden border-8 border-gold">
            <YouTube className="" videoId="kiE6xmFOMo0" opts={optVideoUtama} />
          </div>
        </div>
        {/* Konten Video Samping */}
        <div className="w-fit lg:w-fit flex flex-row gap-2 md:gap-4 lg:gap-0 lg:flex-col justify-center lg:justify-between items-center">
          <div className="rounded-xl overflow-hidden border-[6px] border-gold">
            <YouTube videoId="FaD-VDro_tM" opts={optVideoSamping} />
          </div>
          <div className="rounded-xl overflow-hidden border-[6px] border-gold">
            <YouTube videoId="e0LlHRPdb5Y" opts={optVideoSamping} />
          </div>
          <div className="rounded-xl overflow-hidden border-[6px] border-gold">
            <YouTube videoId="e31l06nhddg" opts={optVideoSamping} />
          </div>
        </div>
      </div>
    </div>
  );
}
