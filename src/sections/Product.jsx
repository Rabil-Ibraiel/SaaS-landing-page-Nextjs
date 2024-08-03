"use client";

import Image from "next/image";
import product from "../assets/product-image.png";
import pyramid from "../assets/pyramid.png";
import tube from "../assets/tube.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Product = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotation = useTransform(scrollYProgress, [0, 1], [-10, 20]);
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={ref}
      className="bg-gradient-to-b from-[#ffffff] to-[#d2dcff] h-fit pt-8 pb-20 md:pt-5 md:pb-10 overflow-x-clip"
    >
      <div className="container">
        <div className="flex items-center justify-between flex-col">
          <div className="flex flex-col items-center text-center w-fit md:w-[700px]">
            <span className="feature">Boost your productivity</span>
            <h1 className="title">A more effective way to track progress</h1>
            <p className="description">
              Celebrate the joy of accomplishment with an app designed to track
              your progress and motivate your efforts.
            </p>
          </div>

          <div className="relative">
            <Image src={product} alt="" />

            <motion.img
              style={{ rotate: rotation }}
              src={pyramid.src}
              alt="Pyramid"
              className="hidden md:block absolute -top-32 -right-36"
              width={262}
              height={262}
            />
            <motion.img
              style={{ translateY: translateY }}
              src={tube.src}
              alt="Tube"
              className="hidden md:block absolute bottom-24 -left-36"
              height={248}
              width={248}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
