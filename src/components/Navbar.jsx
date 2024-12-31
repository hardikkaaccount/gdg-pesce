import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LOGO2 } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const currentPath = location.pathname;

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);  // Dependency on `location` means it will run on route change

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", title: "Home", path: "/" },
    { id: "community", title: "Community", path: "/community" },
    { id: "team", title: "Team", path: "/team" },
    { id: "about", title: "About Us", path: "/about" },
    { id: "contact", title: "Contact Us", path: "/contact" },
  ];

  return (
    <div>
      {/* Navbar */}
      <nav
        className={`${
          scrolled ? "backdrop-blur-sm" : "bg-transparent"
        } w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-300 ease-in-out`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center"
            onClick={() => window.scrollTo(0, 0)}  // Ensure scrolling to top when clicking logo
          >
            <img src={LOGO2} alt="logo" className="h-12 object-contain" />
            <p className="text-white text-[24px] font-bold cursor-pointer ml-3">
              GDG on Campus PESCE
            </p>
          </Link>

          {/* Desktop Navigation */}
          <ul className="list-none hidden sm:flex flex-row items-center gap-10">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  currentPath === nav.path ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer transition-all duration-300 ease-in-out`}
              >
                <Link to={nav.path}>{nav.title}</Link>
              </li>
            ))}
          </ul>

          {/* Mobile Navigation (Hamburger Menu) */}
          <div className="sm:hidden flex flex-1 justify-end items-center">
            {/* Hamburger Icon (3 lines) */}
            <div onClick={() => setToggle(!toggle)} className="flex flex-col justify-center items-center space-y-2 cursor-pointer">
              <div
                className={`w-6 h-1 bg-white transition-all duration-300 ${toggle ? 'rotate-45 translate-y-2' : ''}`}
              ></div>
              <div
                className={`w-6 h-1 bg-white transition-all duration-300 ${toggle ? 'opacity-0' : ''}`}
              ></div>
              <div
                className={`w-6 h-1 bg-white transition-all duration-300 ${toggle ? '-rotate-45 -translate-y-2' : ''}`}
              ></div>
            </div>

            {/* Mobile Dropdown Menu with a darker background */}
            <div
              className={`${
                !toggle ? "hidden" : "block"
              } p-6 bg-black bg-opacity-95 absolute top-[80px] right-0 mx-4 my-2 min-w-[140px] z-50 rounded-xl transition-all duration-300 ease-in-out`} 
            >
              <ul className="list-none flex flex-col gap-4">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`${
                      currentPath === nav.path ? "text-white" : "text-secondary"
                    } text-[16px] font-medium cursor-pointer transition-all duration-300 ease-in-out`}
                    onClick={() => setToggle(false)}
                  >
                    <Link to={nav.path}>{nav.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className={`hero ${toggle ? "mt-[250px]" : ""}`}>
        {/* Hero content goes here */}
      </div>
    </div>
  );
};

export default Navbar;
