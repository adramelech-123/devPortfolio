"use client"
import Link from "next/link";
import { navLinks } from "@/constants";
import Image from "next/image";
import { useState } from "react"
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <nav className="bg-white/30 backdrop-blur-md p-6 flex items-center z-[10]">
      {/* Desktop Navigation */}
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <Image
            src={"/profile.jpg"}
            height={50}
            width={50}
            className="rounded-full"

          />
        </div>

        {/* Desktop Menu */}

        <ul className="hidden sm:flex gap-8">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className="text-lg font-semibold text-black hover:text-purple-700"
            >
              <Link href={`/${link.href}`}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex flex-col items-end ">
        {/* Toggle */}
        <div>
          {!toggle ? (
            <HiMenuAlt3
              className="h-[28px] w-[28px] text-purplePrimary cursor-pointer"
              onClick={() => setToggle((prev) => !prev)}
            />
          ) : (
            <IoMdClose
              className="h-[28px] w-[28px] text-purplePrimary cursor-pointer"
              onClick={() => setToggle((prev) => !prev)}
            />
          )}
        </div>

        {/* Toggle Menu */}
        <div
          className={`${
            toggle ? "flex" : "hidden"
          }  py-6 px-8 bg-purplePrimary rounded-lg absolute top-20 right-10 ring-1 ring-white`}
        >
          <ul className="flex flex-col ">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="text-lg font-semibold text-white hover:text-purple-400"
              >
                <Link href={`/${link.href}`}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
