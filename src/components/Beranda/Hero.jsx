import SearchBar from "./SearchBar";
import DataSlider from "./DataSlider";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function Hero() {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['"Pemilihan Umum Sebagai Sarana Integrasi Bangsa"'], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 0,
      typeSpeed: 40,
      backSpeed: 20,
      backDelay: 5000,
      loop: true,
      showCursor: true,
      cursorChar: "!",
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="relative w-full h-fit m-0 p-0">
      <img src="/images/hero.png" alt="Hero KPU" className="w-full" />
      <div className="absolute top-44 w-full flex justify-center">
        <div className="w-full flex flex-col gap-14">
          <div className="flex flex-col w-fit self-center gap-2">
            <div className="flex flex-col gap-2">
              <h1 className="text-stone-100 text-center mx-auto font-extrabold text-6xl">
                Pemilihan Umum DKI Jakarta 2024
              </h1>
              <h1
                ref={el}
                className="text-stone-100 italic text-center mx-auto font-extrabold text-4xl"
              ></h1>
            </div>
            <SearchBar />
          </div>
          <DataSlider />
        </div>
      </div>
    </div>
  );
}
