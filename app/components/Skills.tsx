"use client";

import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

interface Props {}

const Skills = ({}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex items-center relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-8 mx-auto"
    >
      <h1 className="absolute top-[72px] md:top-16 uppercase tracking-[20px] text-gray-500 text-[22px]">
        Skills
      </h1>

      <h3 className="absolute top-28 md:top-[85px] uppercase tracking-[3px] text-gray-500 text-sm">
        hover over a skill for currency proficiency
      </h3>

      <div className="grid grid-cols-4 gap-5 ">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  );
};

export default Skills;
