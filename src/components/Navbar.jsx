import React from "react";
import { BiHomeSmile, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatHeart } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-[75vw] overflow-hidden z-1000">
      <div className="container mx-auto">
        <div className="w-full bg-black/20 h-[64px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50">
          <Link
            to="home"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BiHomeSmile />
          </Link>

          <Link
            to="skills"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BsClipboardData />
          </Link>

          <Link
            to="projects"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BsBriefcase />
          </Link>

          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BsChatHeart />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
