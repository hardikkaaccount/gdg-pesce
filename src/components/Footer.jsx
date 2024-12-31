import React, { useState } from "react";
import { LOGO2 } from "../assets";
import Typewriter from "react-ts-typewriter";
import { Link } from "react-router-dom";
import {
  BsTwitter,
  BsInstagram,
  BsLinkedin,
  BsFacebook,
} from "react-icons/bs";

const Footer = () => {
  const [active, setActive] = useState("");

  return (
    <div className="bg-black-200 sm:px-16 px-6 sm:py-12 py-10 min-h-[250px] mt-20">
      {/* Social Media Links */}
      <div className="flex justify-center gap-6 mt-8">
        <Link target="_blank" to="https://www.linkedin.com/in/hardik-jain/">
          <BsLinkedin
            size={30}
            className="hover:text-[#0e76a8] hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100"
          />
        </Link>

        <Link target="_blank" to="https://twitter.com/hardik_jain">
          <BsTwitter
            size={30}
            className="hover:text-[#1DA1F2] hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100"
          />
        </Link>

        <Link target="_blank" to="https://www.instagram.com/hardik_jain/">
          <BsInstagram
            size={30}
            className="hover:text-[#E1306C] hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100"
          />
        </Link>

        <Link target="_blank" to="https://www.facebook.com/hardik.jain">
          <BsFacebook
            size={30}
            className="hover:text-[#1877F2] hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100"
          />
        </Link>
      </div>

      {/* Logo and Copyright Section */}
      <div className="flex justify-center items-center mt-8">
        <Link
          to="/"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={LOGO2} alt="logo" className="w-28 h-28 object-contain" />
        </Link>
        <p className="text-secondary text-[17px] leading-[30px] text-center select-none mt-4 sm:mt-0">
          {new Date().getFullYear()} &copy; Created by Hardik Jain.
        </p>
      </div>

      {/* Typewriter Animation */}
      <div className="w-full h-auto flex justify-center text-purple-500 font-bold self-start text-2xl mt-5">
        <Typewriter
          text={["Thank's for visiting!", "GDG on Campus PESCE"]}
          loop
          speed={100}
          cursor={false}
        />
      </div>
    </div>
  );
};

export default Footer;
