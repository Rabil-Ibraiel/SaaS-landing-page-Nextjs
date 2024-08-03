"use client";

import { FaArrowRight } from "react-icons/fa";
import cogImage from "../assets/cog.png";
import cylinder from "../assets/cylinder.png";
import noodle from "../assets/noodle.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const transition = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <main
      ref={ref}
      className="bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,_#183EC2,_#EAEEFE)] pt-8 pb-20 md:pt-5 md:pb-10 overflow-x-clip
    "
    >
      <div className="container">
        <div className="md:flex items-center gap-8 md:gap-20 lg:gap-36">
          <div className="w-fit md:w-[468px] ">
            <span className="feature">Version 2.0 is here</span>
            <h1 className="title">Pathway to productivity</h1>
            <p className="description">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes.
            </p>

            <div className="flex gap-1 items-center mt-8">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text gap-1">
                Learn More <FaArrowRight className="text-sm" />
              </button>
            </div>
          </div>

          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              animate={{ translateY: [-30, 30] }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
              src={cogImage.src}
              alt="Cog"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0 -translate-y-[30px]"
            />
            <motion.img
              style={{ translateY: transition }}
              initial={{ translateY: 2.75 }}
              src={cylinder.src}
              width={220}
              height={220}
              alt="cylinder"
              className="hidden md:block absolute z-20 -top-8 -left-20 "
            />

            <motion.img
              style={{ translateY: transition }}
              initial={{ translateY: 2.75 }}
              src={noodle.src}
              width={220}
              height={220}
              alt="noodle"
              className="hidden lg:block absolute z-20 top-[524px] left-[448px] rotate-[30deg]"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
