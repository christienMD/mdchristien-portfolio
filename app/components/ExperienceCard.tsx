"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import CompanyLogo from "./CompanyLogo";
import { ComponentType } from "react";
import { SkillType } from "./Skill";

export interface Experience {
  company: string;
  jobTitle: string;
  companyImage: StaticImageData | null;
  dateStarted: Date;
  dateEnded: Date;
  points: string[];
  isCurrentlyWorkingHere: boolean;
  technologies: StaticImageData[];
}

interface Props {
  experience: Experience;
}

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className="mt-32 flex flex-col items-center rounded-lg gap-3 flex-shrink-0 w-[400px] md:w-[450px] xl:w-[600px] snap-center bg-[#292929] p-7 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative rounded-full h-[80px] w-[80px] xl:h-[100px] xl:w-[100px] object-center mx-auto"
      >
        {experience.companyImage ? (
          <Image
            alt="Experience Card Company Image"
            src={experience.companyImage}
            fill
            className="object-cover object-center rounded-full"
            sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
        ) : (
          <CompanyLogo name={experience.company} />
        )}
      </motion.div>

      <div className="px-0 md:px-5">
        <h4 className="text-lg font-extralight">{experience.jobTitle}</h4>
        <p className="font-semibold text-base mt-1">{experience.company}</p>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map((technology, index) => (
            <Image
              width={25}
              height={25}
              key={index}
              src={technology}
              alt="technologies"
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {experience.dateStarted.toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : experience.dateEnded.toDateString()}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-sm max-h-40 overflow-y-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 pl-4 pr-4">
          {experience.points.map((point, index) => (
            <li
              key={index}
              className="text-sm display-list-item"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
