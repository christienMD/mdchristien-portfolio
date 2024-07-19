"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Experience } from "@/typings";
import { urlFor } from "@/sanity";
import CompanyLogo from "./CompanyLogo";

interface Props {
  experience: Experience;
}

const ExperienceCard = ({ experience }: Props) => {
  const imageUrl = experience.companyImage
    ? urlFor(experience.companyImage).url()
    : null;

  return (
    <article className="mt-32 flex flex-col items-center rounded-lg gap-5 flex-shrink-0 w-[450px] md:w-[500px] xl:w-[600px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative rounded-full h-[80px] w-[80px] md:h-[100px] md:w-[100px] xl:h-[120px] xl:w-[120px] object-center mx-auto"
      >
        {imageUrl ? (
          <Image
            alt="Experience Card Company Image"
            src={imageUrl}
            fill
            className="object-cover object-center rounded-full"
            sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
        ) : (
          <CompanyLogo name={experience.company} />
        )}
      </motion.div>

      <div className="px-0 md:px-10">
        <h4 className="text-2xl font-extralight">{experience.jobTitle}</h4>
        <p className="font-bold text-[18px] mt-1">{experience.company}</p>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map((technology) => (
            <Image
              width={24}
              height={24}
              key={technology._id}
              src={urlFor(technology.image).url()}
              alt={technology.title}
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-sm max-h-96">
          {/* pr-5 overflow-y-scroll scrollbar-thin scrollbar-track-black
          scrollbar-thumb-[#F7AB0A]/80 */}
          {experience.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
