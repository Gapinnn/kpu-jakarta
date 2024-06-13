import { useState } from "react";
import ScrollTop from "./Icon/ScrollTop";

export default function ButtonToTop() {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 400) {
      setVisible(true);
    } else if (scrolled <= 400) {
      setVisible(false);
    }
  };

  window.addEventListener("scroll", toggleVisible);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`z-30 fixed w-12 h-12 md:w-16 md:h-16 bottom-6 md:bottom-8 right-6 md:right-8 rounded-full bg-gold opacity-60 hover:opacity-100 flex justify-center items-center ${
        visible ? "visible" : "invisible"
      }`}
    >
      <ScrollTop className="w-11 md:w-14 h-11 md:h-14 text-maroon-light" />
    </button>
  );
}
