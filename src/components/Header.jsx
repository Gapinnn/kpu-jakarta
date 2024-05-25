import { Link } from "react-router-dom";
import Logo from "./Logo/Logo";
import { menu } from "../contents/header/";
import { useCallback, useState } from "react";

const Header = () => {
  const url = window.location.href;
  const link = url.split("5173");

  //   const [active, setActive] = useState();

  //   const linkMouseOver = useCallback(() => {});

  return (
    <header className="sticky top-0 w-full px-[3%] flex justify-between bg-white shadow-md">
      <Logo></Logo>
      <nav className="hidden lg:flex space-x-10 items-center">
        {menu.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={`text-maroon-light hover:text-maroon 
            relative flex justify-center font-semibold after:opacity-0 after:absolute 
            after:-bottom-2 after:bg-maroon-light after:w-2/3 after:h-[3px] after:transition-transform 
            after:duration-500 hover:after:scale-x-100 hover:after:opacity-100 ${
              link[1] == item.href
                ? "text-maroon after:scale-x-100 after:opacity-100"
                : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
