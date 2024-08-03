"use client";

import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import Logo from "../assets/logosaas.png";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky z-50 top-0 backdrop-blur-sm">
      <div className="flex justify-center items-center bg-black text-white py-3 gap-3">
        <p className="text-white/60 hidden md:block">
          Streamline your workflow and boost your productivity.
        </p>
        <div className="inline-flex items-center gap-1">
          <p>Get started for free</p>
          <FaArrowRightLong className="h-4 w-4" />
        </div>
      </div>

      <div className="py-4 select-none ">
        <div className="container">
          <div className="flex items-center justify-between">
            <Link href={"/"}>
              <Image src={Logo} alt="Logo" height={40} width={40} />
            </Link>

            {open ? (
              <IoClose
                className="text-4xl cursor-pointer md:hidden relative"
                onClick={() => setOpen(!open)}
              />
            ) : (
              <IoMenu
                className="text-4xl cursor-pointer md:hidden relative"
                onClick={() => setOpen(!open)}
              />
            )}

            <nav
              className={`${
                open
                  ? "absolute flex  top-24 right-8 rounded-s-3xl rounded-ee-3xl py-4 px-12 text-white md:text-black/60 bg-black md:bg-transparent overflow-hidden w-fit"
                  : "hidden md:flex md:text-black/60 "
              } flex-col md:flex-row gap-6 items-center md:static  `}
            >
              <Link href={"/"}>About</Link>
              <Link href={"/"}>Features</Link>
              <Link href={"/"}>Customers</Link>
              <Link href={"/"}>Updates</Link>
              <Link href={"/"}>Help</Link>
              <button className="btn btn-primary">get for free</button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
