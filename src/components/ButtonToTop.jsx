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
      className={`z-30 fixed w-16 h-16 bottom-8 right-8 rounded-full bg-gold opacity-60 hover:opacity-100 flex justify-center items-center ${
        visible ? "visible" : "invisible"
      }`}
    >
      <ScrollTop className="w-14 h-14 text-maroon-light" />
    </button>
  );
}
