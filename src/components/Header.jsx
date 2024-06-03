import { Link } from "react-router-dom";
import Logo from "./Logo/Logo";
import { menuId, menuEn } from "../contents/header/";
import { useCallback, useState } from "react";
import UpArrow from "./Icon/UpArrow";
import DropArrow from "./Icon/DropArrow";
import Cancel from "./Icon/Cancel";

const Header = () => {
  const url = window.location.href;
  const link = url.split("5173");
  console.log(link[1]);
  // const path = link[1].split("/");
  const menu = link[1].match(/^\/id/) !== null ? menuId : menuEn;
  const [hoverMenu, setHoverMenu] = useState("default");

  const [languageDropdown, setLanguageDropdown] = useState(false);
  const [showInfo, setShowInfo] = useState(true);

  const changeHoverMenu = useCallback((menu) => {
    setHoverMenu(menu.name);
  }, []);

  const resetHoverMenu = useCallback(() => {
    setHoverMenu("default");
  }, []);

  const showInfoHandler = () => {
    setShowInfo(!showInfo);
  };

  return (
    <header className="w-full flex flex-col sticky top-0 z-30 shadow-xl">
      <div className="w-full px-[3%] flex justify-between bg-maroon-light">
        <Logo></Logo>
        <nav className="hidden lg:flex space-x-10 items-center">
          {menu.map((item) => (
            <div key={item.name} className="relative flex justify-center">
              <Link
                to={item.path}
                onMouseOver={() => changeHoverMenu(item)}
                onMouseLeave={resetHoverMenu}
                className={`text-stone-100 text-lg hover:text-stone-200
            relative flex justify-center font-semibold group `}
              >
                <div
                  className={`flex justify-center after:opacity-0 after:absolute 
            after:-bottom-2 after:bg-stone-100 after:w-2/3 after:h-[3px] after:transition-transform 
            after:duration-500 group-hover:after:scale-x-100 group-hover:after:opacity-100 ${
              link[1] == item.path
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
              onClick={() => setLanguageDropdown(!languageDropdown)}
              className="inline-flex items-center font-medium justify-center px-4 py-2 text-gray-900 rounded-lg cursor-pointer hover:bg-maroon"
            >
              {link[1].match(/^\/id/) !== null ? (
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
      <div
        className={`relative w-full flex  space-x-24 bg-maroon px-4 transition-transform duration-600 ${
          !showInfo ? " h-2 py-2 justify-end" : " h-fit justify-center py-3 "
        }`}
      >
        <div
          onClick={showInfoHandler}
          className={`absolute z-10 top-4 flex justify-center items-center w-10 h-6 me-[10%] rounded-b-full bg-maroon transition-transform duration-300 ${
            !showInfo
              ? " opacity-100 translate-y-0"
              : " opacity-0 -translate-y-8"
          }`}
        >
          <DropArrow
            className={`w-8 h-8 mb-1 text-stone-100 transition-transform duration-200`}
          />
        </div>
        <p
          className={`text-xl font-bold text-stone-100 transition-transform duration-300 ${
            showInfo ? " opacity-100" : " opacity-0"
          }`}
        >
          Catat Tanggal (26 - 27 November 2024) Pilkada DKI Jakarta : Pemilihan
          Umum Gubernur dan DPRD Provinsi DKI Jakarta!
        </p>
        <div
          onClick={showInfoHandler}
          className={`w-8 h-8 bg-stone-100 flex justify-center items-center transition-transform duration-300 ${
            showInfo ? " opacity-100 scale-100" : " opacity-0 scale-0"
          }`}
        >
          <Cancel className="w-6 h-6 text-maroon-light" />
        </div>
      </div>
    </header>
  );
};

export default Header;
