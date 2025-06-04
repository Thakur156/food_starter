import { Navlinks } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

type props = {
  shownav: boolean;
  closeNav: () => void;
};

const MobileNavbar = ({ shownav, closeNav }: props) => {
  // ✅ Fix the typo heree
  const navopen = shownav ? "translate-x-0" : "-translate-x-full";

  return (
    <div>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/70 z-[1002] w-full h-screen transition-opacity duration-500 ${
          shownav ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeNav}
      ></div>

      {/* Nav Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-[80%] sm:w-[60%] bg-blue-950 text-white z-[1050] transform transition-transform duration-500 ${navopen} flex flex-col justify-center space-y-6`}
      >
        {Navlinks.map((nav) => (
          <Link key={nav.id} href={nav.url}>
            <p className="text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">
              {nav.label}
            </p>
          </Link>
        ))}
        {/* Close Icon */}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default MobileNavbar;
