"use client";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "@/typings";
import { useEffect, useState } from "react";

const WorkExperience = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`);
        if (!res.ok) {
          throw new Error('Failed to fetch experiences');
        }
        const data = await res.json();
        setExperiences(data.experiences);
      } catch (err) {
        setError('An error occurred while fetching experiences');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchExperiences();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 md:top-12 uppercase tracking-[20px] text-gray-500 text-[22px]">
        Experience
      </h3>

      <div className="w-full flex float-start gap-5 overflow-x-scroll p-10 snap-x snap-mandatory mt-2 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {isLoading ? (
          <p>Loading experiences...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          experiences.map((experience) => (
            <ExperienceCard key={experience._id} experience={experience} />
          ))
        )}
      </div>
    </motion.div>
  );
};

export default WorkExperience;