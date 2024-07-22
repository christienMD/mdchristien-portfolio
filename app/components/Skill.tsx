import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { StaticImageData } from "next/image";


export interface SkillType {
  _id: string;
  image: StaticImageData;
  progress: number;
  title: string;
}

interface Props {
  directionLeft?: boolean;
  skill: SkillType;
}

const Skill = ({ directionLeft, skill }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{
          x: directionLeft ? -100 : 100,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ amount: 0.2 }}
        className="rounded-full border border-black/50 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 filter group-hover:grayscale transition duration ease-in-out"
      >
        <Image
          alt=""
          fill
          src={skill.image}
          className="object-cover rounded-full"
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
        <div className="absolute opacity-0 group-hover:opacity-70 transition duration-300 ease-in-out group-hover:bg-white w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full z-0">
          <div className="flex items-center justify-center h-full">
            <p className="text-2xl font-bold text-black opacity-100">
              {skill.progress}%
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skill;
