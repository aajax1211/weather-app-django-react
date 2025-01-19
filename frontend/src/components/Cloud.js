import React from "react";
import cloudSvg from "../styles/cloud.svg";
import {motion} from 'framer-motion';


export default function Cloud() {
    return (
        <motion.img
          src={cloudSvg}
          alt="Cloud"
          className="cloud"
          initial={{ x: "100vw", y: "30vh" }}
      animate={{ x: "50vw", y: "40vh" }}
      transition={{
        duration: 3,
        ease: "easeInOut",
      }}
        />
      );
}
