"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "@/typings";
import { fetchSkills } from "../utils/fetchSkills";

const Skills = () => {
  const [skills, setSkills] = useState<SkillType[]>([]);

  useEffect(() => {
    const getSkills = async () => {
      const fetchedSkills = await fetchSkills();
      setSkills(fetchedSkills);
    };

    getSkills();
  }, []);

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

      <div className="grid grid-cols-4 gap-5">
        {skills.slice(0 , skills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}

        {skills.slice(skills.length/2 , skills.length).map((skill) => (
          <Skill key={skill._id} skill={skill} directionLeft/>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
