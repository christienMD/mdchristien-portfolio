"use client";

import React from "react";
import { motion } from "framer-motion";
import Skill, { SkillType } from "./Skill";
import css from "@/public/icons8-css-240.png";
import html from "@/public/icons8-html-96.png";
import react from "@/public/icons8-react-480.png";
import javascript from "@/public/icons8-javascript-96.png";
import nextjs from "@/public/icons8-nextjs-100.png";
import vscode from "@/public/icons8-visual-studio-100.png";
import firebase from "@/public/icons8-firebase-100.png";
import laravel from "@/public/icons8-laravel-100.png";
import php from "@/public/icons8-php-480.png";
import tailwind from "@/public/icons8-tailwindcss-100.png";
import mysql from "@/public/icons8-mysql-480.png";
import git from "@/public/icons8-git-94.png";
import ts from "@/public/icons8-typescript-96.png";

const skills: SkillType[] = [
  { _id: "1", image: css, progress: 80, title: "CSS" },
  { _id: "2", image: html, progress: 90, title: "HTML" },
  { _id: "3", image: react, progress: 75, title: "React" },
  { _id: "4", image: javascript, progress: 85, title: "JavaScript" },
  { _id: "5", image: nextjs, progress: 70, title: "Next.js" },
  { _id: "6", image: tailwind, progress: 75, title: "Tailwind css" },
  { _id: "7", image: ts, progress: 85, title: "TypeScript" },
  { _id: "8", image: firebase, progress: 65, title: "Firebase" },
  { _id: "9", image: laravel, progress: 60, title: "Laravel" },
  { _id: "10", image: php, progress: 70, title: "PHP" },
  { _id: "11", image: mysql, progress: 70, title: "MySql" },
  { _id: "12", image: git, progress: 70, title: "Git" },
];

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex items-center relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] p-2 xl:px-10 min-h-screen justify-center xl:space-y-8 mx-auto"
    >
      <h1 className="absolute top-[72px] md:top-16 uppercase tracking-[20px] text-gray-500 text-[22px]">
        Skills
      </h1>

      <h3 className="absolute top-28 md:top-[85px] uppercase tracking-[3px] text-gray-500 text-sm px-1">
        hover over a skill for currency proficiency
      </h3>

      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
        {skills.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}

        {skills.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill._id} skill={skill} directionLeft />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
