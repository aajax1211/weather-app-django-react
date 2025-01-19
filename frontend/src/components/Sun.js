import React from "react";
import sunSvg from "../styles/sun.svg";
import {motion} from 'framer-motion';

export default function Sun() {
    return (
        <motion.img
      src={sunSvg}
      alt="Sun"
      className="sun"
      initial={{ x: "-100vw", y: "20vh" }}
      animate={{ x: "50vw", y: "40vh" }}
      transition={{
        duration: 3,
        ease: "easeInOut",
      }}
    />
  );
}
