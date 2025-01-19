import React, { useState, useEffect } from "react";
import Sun from "./components/Sun";
import Cloud from "./components/Cloud";
import { motion } from "framer-motion";
import sunSvg from "./styles/sun.svg";
import cloudSvg from "./styles/cloud.svg";

function App() {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimationComplete(true), 3000); // Matches animation duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`app ${animationComplete ? "show" : ""}`}>
      {/* Sun and Cloud Components */}
      {!animationComplete && (
        <>
          <Sun />
          <Cloud />
        </>
      )}

      {/* Final Logo Animation */}
      <motion.div
        className="logo"
        initial={{ scale: 1, x: "50vw", y: "40vh", opacity: 0 }}
        animate={{
          x: "5vw",
          y: "5vh",
          scale: 0.3,
          opacity: animationComplete ? 1 : 0,
        }}
        transition={{
          delay: 3,
          duration: 2,
          ease: "easeInOut",
        }}
      >
        <img src={sunSvg} alt="Sun Logo" className="mini-sun" />
        <img src={cloudSvg} alt="Cloud Logo" className="mini-cloud" />
      </motion.div>

      {/* Content Section */}
      {animationComplete && (
        <div className="content">
          <h1>Weather App</h1>
          {/* Add your weather app content here */}
        </div>
      )}
    </div>
  );
}

export default App;
