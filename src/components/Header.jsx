import { Link } from "react-router-dom";
import Logo from "./Logo/Logo";
import { menuId, menuEn } from "../contents/header/";
import { useCallback, useState } from "react";

const Header = () => {
  const url = window.location.href;
  const link = url.split("5173");
  console.log(link[1]);
  const path = link[1].split("/");
  const menu = link[1].match(/^\/id/) !== null ? menuId : menuEn;

  const [languageDropdown, setLanguageDropdown] = useState(false);

  return (
    <header className="sticky top-0 w-full px-[3%] flex justify-between bg-white shadow-md z-30">
      <Logo></Logo>
      <nav className="hidden lg:flex space-x-10 items-center">
        {menu.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`text-maroon-light text-lg hover:text-maroon 
            relative flex justify-center font-semibold after:opacity-0 after:absolute 
            after:-bottom-2 after:bg-maroon-light after:w-2/3 after:h-[3px] after:transition-transform 
            after:duration-500 hover:after:scale-x-100 hover:after:opacity-100 ${
              link[1] == item.path
                ? "text-maroon after:scale-x-100 after:opacity-100"
                : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
        <div className="relative flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            onClick={() => setLanguageDropdown(!languageDropdown)}
            className="inline-flex items-center font-medium justify-center px-4 py-2 text-gray-900 rounded-lg cursor-pointer hover:bg-stone-200"
          >
            {link[1].match(/^\/id/) !== null ? (
              <div className="inline-flex items-center text-maroon-light text-lg">
                <img
                  src="/images/indonesia.png"
                  alt="Indonesia"
                  className="w-6 h-6 rounded-full mr-2 border-2 border-maroon-light"
                />
                Indonesia
              </div>
            ) : (
              <div className="inline-flex items-center text-maroon-light text-lg">
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
    </header>
  );
};

export default Header;