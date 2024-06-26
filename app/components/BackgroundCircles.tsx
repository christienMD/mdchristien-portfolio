"use client";
import { motion } from "framer-motion";

const BackgroundCircles = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#333333] rounded-full h-[150px] w-[150px] mt-48 animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-[250px] w-[250px] mt-48 opacity-30" />
      <div className="absolute border border-[#333333] rounded-full h-[450px] w-[450px] mt-48 opacity-25" />
      <div className="absolute border border-[#F7AB0A] rounded-full opacity-20 h-[600px] w-[600px] mt-48 animate-pulse" />
      <div className="absolute border border-[#333333] rounded-full h-[750px] w-[750px] mt-48" />
      <div />
    </motion.div>
  );
};

export default BackgroundCircles;
