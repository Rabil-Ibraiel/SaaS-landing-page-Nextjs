"use client";

import Image from "next/image";
import logo from "../assets/logosaas.png";
import { BsTwitterX } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import {motion} from 'framer-motion'

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-8 pb-20 md:pt-5 md:pb-10 font-light">
      <div className="container">
        <div className="flex flex-col items-center gap-6">
          <motion.img src={logo.src} animate={{backgroundPositionX: '-200%'}} transition={{repeat: Infinity, repeatType: 'loop', duration: 3, ease: 'linear'}} alt="LOGO" width={60} height={60} className="text-effect bg-600 backdrop-blur-3xl p-1 rounded-2xl"/>
          <ul className="flex flex-col md:flex-row items-center gap-8">
            <Link href={"/"}>About</Link>
            <Link href={"/"}>Features</Link>
            <Link href={"/"}>Customers</Link>
            <Link href={"/"}>Pricing</Link>
            <Link href={"/"}>Help</Link>
            <Link href={"/"}>Careers</Link>
          </ul>

          <div className="text-lg flex items-center gap-8">
            <BsTwitterX className="cursor-pointer" />
            <BsInstagram className="cursor-pointer" />
            <BsLinkedin className="cursor-pointer" />
            <BsPinterest className="cursor-pointer" />
            <BsYoutube className="cursor-pointer" />
          </div>

          <p className="font-extralight">
            &copy; 2024 Your Company, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
