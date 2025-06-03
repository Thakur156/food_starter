"use client";

import { Navlinks } from "@/constant/constant";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { MdDeliveryDining } from "react-icons/md";

type props = {
  openNav: () => void;
};
const Navbar = ({ openNav }: props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return (
    <div
      className={`transition-all ${
        navBg ? "bg-white shadow-md" : "fixed"
      } duration-200 h-[12vh] z-[100] fixed w-full`}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* LOGO */}

        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-blue-950 rounded-full flex items-center justify-center  flex-col">
            <MdDeliveryDining className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-xl hidden sm:block md:text-2xl text-black font-bold">
            Foodie
          </h1>
        </div>

        {/* NavLink  */}
        <div className="hidden lg:flex items-center space-x-10">
          {Navlinks.map((nav) => (
            <Link
              key={nav.id}
              href={nav.url}
              className="txt-black hover:text-green-700 font-bold transition-all duration-200"
            >
              {nav.label}
            </Link>
          ))}
        </div>

        {/* Buttons  */}
        <div className="flex items-center space-x-4 ">
          {/* Join Now button  */}
          <button className="bg-blue-950 px-8 py-2.5 text-white font-bold rounded-lg hover:bg-black transition-all duration-300 cursor-pointer">
            Join Now
          </button>
          {/* Theme Toggler  */}
          {/* Menu Icon  */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-blue-950 lg:hidden "
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
