import { Link } from "react-router-dom";
import Logo from "./Logo/Logo";
import { menuId, menuEn } from "../contents/header/";
import { useCallback, useEffect, useRef, useState } from "react";
import UpArrow from "./Icon/UpArrow";
import DropArrow from "./Icon/DropArrow";
import getLanguage from "../hooks/getLanguage";
import getPath from "../hooks/getPath";
import Hamburger from "./Icon/Hamburger";
import Cancel from "./Icon/Cancel";
import ArrowDown from "./Icon/ArrowDown";

const Header = () => {
  const urlPath = getPath();
  const lang = getLanguage();

  const menu = lang === "id" ? menuId : menuEn;
  const [hoverMenu, setHoverMenu] = useState("default");
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const [showInfo, setShowInfo] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [showAccordion, setShowAccordion] = useState({
    ["Tentang Kami"]: false,
    Informasi: false,
    Statistik: false,
    Publikasi: false,
    bahasa: false,
  });

  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (buttonRef.current && buttonRef.current.contains(event.target)) {
      return;
    }
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  };

  const changeShowAccordion = useCallback((menu) => {
    setShowAccordion((prev) => ({ ...prev, [menu]: !prev[menu] }));
  }, []);

  const changeHoverMenu = useCallback((menu) => {
    setHoverMenu(menu.name);
  }, []);

  const resetHoverMenu = useCallback(() => {
    setHoverMenu("default");
  }, []);

  const showInfoHandler = () => {
    setShowInfo(!showInfo);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full flex flex-col sticky top-0 z-30 shadow-xl">
      <div className="w-full px-[3%] flex justify-between bg-maroon-light">
        <Logo></Logo>
        {/* Hamburger Hp/Tablet */}
        <nav className="flex lg:hidden justify-center items-center">
          <button
            ref={buttonRef}
            className="flex items-center justify-center w-fit h-auto"
            onClick={() => setShowMenu(!showMenu)}
            type="button"
          >
            <Cancel
              className={`z-20 w-8 h-8 md:w-10 md:h-10 text-white py-1 text-lg hover:text-stone-200 transition-transform duration-300 ${
                showMenu ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
              }`}
            />
            <Hamburger
              className={`absolute w-8 h-8 md:w-10 md:h-10 text-white py-1 text-lg hover:text-stone-200 transition-transform duration-300 ${
                showMenu ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"
              }`}
            />
          </button>
        </nav>
        {/* Menu Laptop */}
        <nav className="hidden lg:flex space-x-10 items-center">
          {menu.map((item) => (
            <div key={item.name} className="relative flex justify-center">
              <Link
                to={item.branch ? "#" : item.path}
                onMouseOver={() => changeHoverMenu(item)}
                onMouseLeave={resetHoverMenu}
                className={`text-stone-100 py-1 text-lg hover:text-stone-200
            relative flex justify-center font-semibold group `}
              >
                <div
                  className={`flex justify-center after:opacity-0 after:absolute 
            after:-bottom-2 after:bg-stone-100 after:w-2/3 after:h-[3px] after:transition-transform 
            after:duration-500 group-hover:after:scale-x-100 group-hover:after:opacity-100 ${
              urlPath == item.path
                ? "text-stone-100 after:scale-x-100 after:opacity-100"
                : ""
            }`}
                >
                  {item.name}
                </div>
                {item.branch && (
                  <UpArrow
                    className={`mt-1 w-6 h-6 transition-transform duration-500 ${
                      hoverMenu === item.name ? "rotate-180" : "rotate-0"
                    }`}
                  />
                )}
                {item.branch && (
                  <div
                    className={`absolute top-[2rem] pt-2 px-2 w-max text-base list-none bg-stone-100 divide-y divide-stone-100 rounded-lg shadow-lg
                transition-transform duration-500 transform  ${
                  hoverMenu === item.name
                    ? "opacity-100 translate-y-0 z-50 pointer-events-auto"
                    : "opacity-0 -translate-y-6 -z-20 pointer-events-none"
                }`}
                  >
                    <ul className="py-2 font-medium" role="none">
                      {item.submenu.map((subitem) => {
                        return (
                          <Link
                            key={subitem.name}
                            to={subitem.path}
                            className="block px-4 py-2 hover:bg-stone-300 rounded-lg"
                          >
                            <div className="inline-flex items-center text-maroon-light text-lg">
                              {subitem.name}
                            </div>
                          </Link>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </Link>
            </div>
          ))}
          <div className="relative flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              onClick={() => {
                return;
              }}
              className="inline-flex items-center font-medium justify-center px-4 py-2 text-gray-900 rounded-lg cursor-pointer hover:bg-maroon"
            >
              {lang === "id" ? (
                <div className="inline-flex items-center text-stone-100 text-lg">
                  <img
                    src="/images/indonesia.png"
                    alt="Indonesia"
                    className="w-6 h-6 rounded-full mr-2 border-2 border-stone-100"
                  />
                  Indonesia
                </div>
              ) : (
                <div className="inline-flex items-center text-stone-100 text-lg">
                  <img
                    src="/images/english.png"
                    alt="English"
                    className="w-6 h-6 rounded-full mr-2"
                  />
                  English
                </div>
              )}
            </button>
            <div
              className={`absolute -bottom-[9.5rem] z-50 my-4 w-max text-base list-none bg-stone-100 divide-y divide-stone-100 rounded-lg shadow-lg
                transition-transform duration-500 transform ${
                  languageDropdown
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-6"
                }`}
            >
              <ul className="py-2 font-medium" role="none">
                <li onClick={() => setLanguageDropdown(!languageDropdown)}>
                  <Link
                    to="/id"
                    className="block px-4 py-2 hover:bg-stone-300 rounded-lg"
                  >
                    <div className="inline-flex items-center text-maroon-light text-lg">
                      <img
                        src="/images/indonesia.png"
                        alt="Indonesia"
                        className="w-6 h-6 rounded-full mr-2 border-2 border-maroon-light"
                      />
                      Indonesia
                    </div>
                  </Link>
                </li>
                <li onClick={() => setLanguageDropdown(!languageDropdown)}>
                  <Link
                    to="/en"
                    className="block px-4 py-2 hover:bg-stone-300 text-maroon-light rounded-lg"
                  >
                    <div className="inline-flex items-center text-maroon-light text-lg">
                      <img
                        src="/images/english.png"
                        alt="English"
                        className="w-6 h-6 rounded-full mr-2 border-2 border-maroon-light"
                      />
                      English
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {/* Menu Hp/Tablet */}
      {showMenu && (
        <div
          className={`absolute top-16 w-full z-20 min-h-screen bg-black bg-opacity-70`}
        >
          <div
            ref={dropdownRef}
            className={`bg-white rounded-b-xl shadow-lg w-full min-h-fit max-h-[100vh] overflow-y-auto p-8 flex flex-col gap-6 justify-center items-start transition-all duration-1000`}
          >
            {menu.map((item) => (
              <div className="w-full flex flex-col gap-4" key={item.name}>
                <div
                  onClick={() => changeShowAccordion(item.name)}
                  className="flex w-full"
                >
                  <Link
                    to={item.branch ? "#" : item.path}
                    onClick={() => {
                      if (item.branch) return;
                      setShowMenu(false);
                    }}
                    className={`w-full flex items-center justify-between text-stone-900 py-1 font-bold text-base md:text-lg group `}
                  >
                    <p className="flex">{item.name}</p>
                    {item.branch && (
                      <ArrowDown
                        className={`flex w-6 h-6 text-stone-900 transition-transform duration-300`}
                      />
                    )}
                  </Link>
                </div>
                {showAccordion[item.name] && item.branch && (
                  <div className="w-full flex flex-col gap-3">
                    {item.submenu.map((subitem) => (
                      <div key={subitem.name}>
                        <Link
                          onClick={() => setShowMenu(false)}
                          to={subitem.path}
                          className="block px-4 py-1 hover:bg-stone-300 rounded-lg"
                        >
                          <p className="inline-flex items-center text-stone-800 font-semibold text-base md:text-lg">
                            {subitem.name}
                          </p>
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {/* <div className="w-full flex flex-col gap-4">
              <div
                onClick={() => changeShowAccordion("bahasa")}
                className="flex w-full"
              >
                <Link
                  className={`w-full flex items-center justify-between text-stone-900 py-1 font-bold text-base md:text-lg group `}
                >
                  <p className="flex">Bahasa</p>
                  <ArrowDown
                    className={`flex w-6 h-6 text-stone-900 transition-transform duration-300 ${
                      showAccordion.bahasa ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </Link>
              </div>
              {showAccordion.bahasa && (
                <div className="w-full flex flex-col gap-3">
                  <div
                    onClick={() => {
                      setLanguageDropdown(!languageDropdown);
                      setShowMenu(false);
                    }}
                  >
                    <Link
                      to="/id"
                      className="block px-2 py-1 hover:bg-stone-300 rounded-lg"
                    >
                      <div className="inline-flex items-center text-stone-900 font-semibold text-base md:text-lg gap-1">
                        <img
                          src="/images/indonesia.png"
                          alt="Indonesia"
                          className="w-8 h-6 mr-2 shadow-xl border"
                        />
                        Indonesia
                      </div>
                    </Link>
                  </div>
                  <div
                    onClick={() => {
                      setLanguageDropdown(!languageDropdown);
                      setShowMenu(false);
                    }}
                  >
                    <Link
                      to="/en"
                      className="block px-2 py-1 hover:bg-stone-300 text-stone-900 font-semibold rounded-lg"
                    >
                      <div className="inline-flex items-center text-stone-900 font-semibold text-base md:text-lg gap-1">
                        <img
                          src="/images/english.png"
                          alt="English"
                          className="w-8 h-6 mr-2 shadow-xl border"
                        />
                        English
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div> */}
          </div>
        </div>
      )}
      {/* Info */}
      <div
        className={`relative w-full flex space-x-2 md:space-x-4 lg:space-x-24 bg-maroon px-2 lg:px-4 transition-transform duration-600 ${
          !showInfo
            ? " h-2 py-1.5 lg:py-2 justify-end"
            : " h-fit justify-center py-2 lg:py-3 "
        }`}
      >
        <div
          onClick={showInfoHandler}
          className={`absolute z-10 top-2 lg:top-4 flex justify-center items-center w-9 lg:w-10 h-5 lg:h-6 me-[5%] md:me-[8%] lg:me-[10%] rounded-b-full bg-maroon transition-transform duration-300 ${
            !showInfo
              ? " opacity-100 translate-y-0"
              : " opacity-0 -translate-y-8"
          }`}
        >
          <DropArrow
            className={`w-7 lg:w-8 h-7 lg:h-8 mb-1 text-stone-100 transition-transform duration-200`}
          />
        </div>
        <p
          className={`text-sm md:text-base lg:text-xl font-bold text-stone-100 transition-transform duration-300 ${
            showInfo ? " opacity-100" : " opacity-0"
          }`}
        >
          {lang === "id"
            ? "Catat Tanggal (26 - 27 November 2024) Pilkada DKI Jakarta : Pemilihan Gubernur dan DPRD Provinsi DKI Jakarta!"
            : "Save the Date (November 26-27, 2024) Jakarta Regional Election: Election of the Governor and Provincial DPRD of DKI Jakarta!"}
        </p>
        <div
          onClick={showInfoHandler}
          className={`w-7 md:-translate-x-1.5 lg:translate-x-0 lg:w-8 h-7 lg:h-8 bg-stone-100 self-center flex justify-center items-center transition-transform duration-300 ${
            showInfo ? " opacity-100 scale-100" : " opacity-0 scale-0"
          }`}
        >
          <Cancel className="w-6 h-5 lg:h-6 text-maroon-light" />
        </div>
      </div>
    </header>
  );
};

export default Header;
