"use client";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
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
import gameHub from "@/public/gameHub-small.png";
import cloudHosting from "@/public/online-hosting.png";
import issueTracker from "@/public/issueTracker-img.png";
import amazoneClone from "@/public/amazone-clone.png";
import fiverrClone from "@/public/fivierr-clone.png";
import Link from "next/link";

interface Project {
  title: string;
  image: StaticImageData;
  linkToBuild: string;
  summary: string;
  technologies: StaticImageData[];
}

const projects: Project[] = [
  {
    title: "Game-Hub",
    image: gameHub,
    linkToBuild: "https://mdchristien-gamehub.vercel.app/",
    summary:
      "This is a beautiful Video Game Discovery web app for searching and discovering games. It is a mini version of the Rawg website, a popular Video Game Discovery Platform.",
    technologies: [html, css, javascript, ts, react, tailwind],
  },
  {
    title: "Online Cloud-Hosting",
    image: cloudHosting,
    linkToBuild: "https://mdchristien.netlify.app/",
    summary:
      "This is a Beautiful, Responsive and Blazingly Fast Website for a cloud hosting company - Cloud Hosting for Pros.",
    technologies: [html, css, javascript],
  },
  {
    title: "Issue Tracker",
    image: issueTracker,
    linkToBuild: "https://issue-tracker-md-christien.vercel.app/",
    summary:
      "This is a Beautiful Full-stack Production-grade web app for tracking issues. This web app includes features such as: Dashboard, Charts, Sorting, Filtering, Pagination, Skeletons, CRUD, Forms, Caching, Authentication and more.",
    technologies: [html, css, javascript, ts, nextjs, tailwind, git, mysql],
  },
  {
    title: "Fiverr Home-Page-clone",
    image: fiverrClone,
    linkToBuild: "https://fiverr-home-page.vercel.app/",
    summary:
      "This is a beautiful recreation of Fiverr's homepage, showcasing my ability to replicate complex, modern web designs. This project demonstrates my proficiency in frontend development and attention to detail.",
    technologies: [html, css, javascript, ts, nextjs, tailwind],
  },
  {
    title: "Amazone Clone",
    image: amazoneClone,
    linkToBuild: "https://amazone-clone-mdchristien.vercel.app/",
    summary:
      "A comprehensive e-commerce platform built with Next.js and Tailwind CSS, mirroring the functionality and design of the renowned Amazon website. Features include user authentication with NextAuth.js, state management with React Context and Reducers.",
    technologies: [html, css, javascript, ts, nextjs, tailwind],
  },
];

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col text-left md:flex-row max-w-ful justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-[22px]">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 z-20 mt-14 md:mt-10">
        {/* projects */}
        {projects.map((project, i) => (
          <div
            key={i}
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
              className="relative w-[325px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[400px] md:h-[600px] rounded-lg cursor-pointer"
              onClick={() => window.open(project.linkToBuild, "_blank")}
            >
              <Image
                alt={project.title}
                src={project.image}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </motion.div>

            <div className="space-y-5 px-0 md:10 w-full sm:max-w-6xl">
              <div className="flex justify-center">
                <Link
                  href={project.linkToBuild}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[20px] font-semibold text-center group"
                >
                  <span className="underline decoration-[#F7AB0A]">
                    Case Study {i + 1} of {projects.length}:
                  </span>{" "}
                  <span className="underline decoration-white md:no-underline md:group-hover:underline md:group-hover:decoration-[#F7AB0A] transition-all duration-300">
                    {project.title}
                  </span>
                </Link>
              </div>

              <div className="flex items-center gap-2 justify-center">
                {project.technologies.map((technology, index) => (
                  <Image
                    width={25}
                    height={25}
                    alt={`Technology ${index + 1}`}
                    key={index}
                    src={technology}
                  />
                ))}
              </div>

              <p className="text-sm text-center md:text-left">
                {project.summary}
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
