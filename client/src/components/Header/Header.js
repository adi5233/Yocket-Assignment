import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-l from-green-400 via-green-500 to-green-600  shadow-md fixed top-0 w-full z-10">
      <header className="p-4 flex justify-between items-center">
        <div className="flex justify-between items-center align-middle lg:mr-20">
          <Link to="/">
            <h1 className="font-bold text-lg sm:text-xl md:text-2xl mx-5 flex flex-wrap">
              <span className="text-white mr-1">Urban</span>
              <span className="text-slate-800"> EscapeHunt</span>
            </h1>
          </Link>
        </div>

        <div
          className={`hidden z-10 md:block lg:flex  ${
            isMenuOpen ? "" : "hidden"
          }`}
        >
          <NavLink
            to="/"
            className="w-24 font-bold text-white"
            activeClassName="text-pink-500"
          >
            Home
          </NavLink>
          <NavLink
            to="/dashboard"
            className="w-24 mr-5 font-bold text-white"
            activeClassName="text-pink-500"
          >
            Dashboard
          </NavLink>
        </div>

        <div className="lg:hidden">
          <button className="flex items-center p-3" onClick={toggleMenu}>
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
      </header>

      <div className={`relative z-50 ${isMenuOpen ? "" : "hidden"}`}>
        <div className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8 ">
            <button onClick={toggleMenu}>
              <svg
                className="h-6 w-6 cursor-pointer absolute right-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div id="mobile-menu" className="">
            <div className="w-full p-4 hover:bg-green-300 ">
              <NavLink to="/" activeClassName="text-pink-500">
                Home
              </NavLink>
            </div>
            <div className="w-full p-4 hover:bg-green-300 ">
              <NavLink to="/dashboard" activeClassName="text-pink-500">
                Dashboard
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
