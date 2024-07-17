"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [1, 2, 3, 4, 5];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-ful justify-evenly mx-auto items-center z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 "
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-[22px]">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 mt-20 md:mt-10">
        {/* projects */}
        {projects.map((project, i) => (
          <div
            key={project}
            className="w-screen flex-shrink-0 snap-center flex flex-col gap-4 items-center justify-center h-screen px-10 py-20 sm:p-20 md:p-40"
          >
            <motion.div
              initial={{
                y: -100,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative w-[400px] h-[600px] rounded-lg"
            >
              <Image
                alt=""
                fill
                src="/mdprofile.jpg"
                className="object-cover rounded-lg"
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
            </motion.div>

            <div className="space-y-10 px-0 md:10 w-full sm:max-w-6xl">
              <h4 className="text-[22px] font-semibold">
                <span className="underline decoration-[#F7AB0A]">
                  Case Study {i + 1} of {projects.length}: UPS: Clone
                </span>
              </h4>

              <p className="text-base text-center md:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                magni, reiciendis sequi dolorem quibusdam, eum quasi tempore
                doloribus incidunt nulla eligendi. Repellendus totam adipisci,
                dolore eum vel quo neque magni molestias cumque.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[45%] bg-[#F7AB0A]/10 left-0 h-[200px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
