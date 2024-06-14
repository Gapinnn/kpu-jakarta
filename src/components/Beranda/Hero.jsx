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
    <div className="relative flex w-full h-fit m-0 p-0">
      {/* Hero Hp */}
      <img
        src="/images/hero.png"
        alt="Hero KPU"
        className="flex md:hidden h-[756px] w-full object-cover object-center m-0 p-0"
      />
      {/* Hero Hp */}
      <img
        src="/images/hero.png"
        alt="Hero KPU"
        className="hidden md:flex lg:hidden h-[900px] w-full object-cover object-center m-0 p-0"
      />
      {/* Hero Laptop */}
      <img
        src="/images/hero.png"
        alt="Hero KPU"
        className="hidden lg:flex w-full"
      />
      <div className="absolute top-36 md:top-44 lg:top-44 w-full flex justify-center">
        <div className="w-full flex flex-col gap-6 md:gap-10 lg:gap-14">
          <div className="flex flex-col w-fit self-center gap-2">
            <div className="flex flex-col gap-2 md:gap-3 lg:gap-2">
              <h1 className="text-stone-100 text-center mx-auto font-extrabold text-4xl md:text-5xl lg:text-6xl">
                Pemilihan Umum <br className="lg:hidden" /> DKI Jakarta 2024
              </h1>
              <h1
                ref={el}
                className="text-stone-100 italic text-center mx-auto font-extrabold text-2xl md:text-3xl lg:text-4xl px-2 md:px-16 lg:px-0"
              ></h1>
            </div>
            {/* <SearchBar /> */}
          </div>
          <DataSlider />
        </div>
      </div>
    </div>
  );
}
