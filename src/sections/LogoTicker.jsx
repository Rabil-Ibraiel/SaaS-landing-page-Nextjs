"use client";

import acmeLogo from "../assets/logo-acme.png";
import quantumLogo from "../assets/logo-quantum.png";
import echoLogo from "../assets/logo-echo.png";
import celestialLogo from "../assets/logo-celestial.png";
import pulseLogo from "../assets/logo-pulse.png";
import apexLogo from "../assets/logo-apex.png";
import Image from "next/image";
import { motion } from "framer-motion";

const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden mask-image">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{ translateX: "-50%" }}
            transition={{
              duration: 5,
              repeatType: "loop",
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Image className="logo-ticker" src={acmeLogo} alt="acme logo" />
            <Image
              className="logo-ticker"
              src={quantumLogo}
              alt="quantum logo"
            />
            <Image className="logo-ticker" src={echoLogo} alt="echo logo" />
            <Image
              className="logo-ticker"
              src={celestialLogo}
              alt="celestial logo"
            />
            <Image className="logo-ticker" src={pulseLogo} alt="pulse logo" />
            <Image className="logo-ticker" src={apexLogo} alt="apex logo" />

            {/* For Animation */}

            <Image className="logo-ticker" src={acmeLogo} alt="acme logo" />
            <Image
              className="logo-ticker"
              src={quantumLogo}
              alt="quantum logo"
            />
            <Image className="logo-ticker" src={echoLogo} alt="echo logo" />
            <Image
              className="logo-ticker"
              src={celestialLogo}
              alt="celestial logo"
            />
            <Image className="logo-ticker" src={pulseLogo} alt="pulse logo" />
            <Image className="logo-ticker" src={apexLogo} alt="apex logo" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
