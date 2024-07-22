"use client";
import { motion } from "framer-motion";
import ExperienceCard, { Experience } from "./ExperienceCard";
import { useEffect, useState } from "react";
import css from "@/public/icons8-css-240.png";
import html from "@/public/icons8-html-96.png";
import react from "@/public/icons8-react-480.png";
import javascript from "@/public/icons8-javascript-96.png";
import nextjs from "@/public/icons8-nextjs-100.png";
import firebase from "@/public/icons8-firebase-100.png";
import laravel from "@/public/icons8-laravel-100.png";
import php from "@/public/icons8-php-480.png";
import techChantier from "@/public/tech-chantier.webp";
import CompanyLogo from "./CompanyLogo";

const experiences: Experience[] = [
  {
    company: "Tech Chantier",
    jobTitle: "Software Developer Intern",
    companyImage: techChantier,
    dateStarted: new Date("2024-03-01"),
    dateEnded: new Date(),
    points: [
      "Implemented job board app using PHP, Laravel",
      "Created RESTful APIs for efficient data exchange",
      "Developed CRUD functionalities for job opportunity management",
    ],
    isCurrentlyWorkingHere: true,
    technologies: [html, css, javascript, laravel, php],
  },
  {
    company: "Touko Banix",
    jobTitle: "Frontend Developer",
    companyImage: null,
    dateStarted: new Date("2024-03-01"),
    dateEnded: new Date(),
    points: [
      "Part-time remote work on the Ndamba Project, focusing on frontend development of admin dashboard",
      "Implemented data-driven components using Nextjs",
      "Optimized application performance through efficient state management",
      "Collaborated with backend team to integrate RESTful APIs and real-time data updates",
    ],
    isCurrentlyWorkingHere: true,
    technologies: [html, css, javascript, react, nextjs, firebase],
  },
  {
    company: "Wicon",
    jobTitle: "Frontend Developer Mentor",
    companyImage: null,
    dateStarted: new Date("2024-02-01"),
    dateEnded: new Date("2024-03-31"),
    points: [
      "Led a mentorship program for frontend development interns, providing comprehensive guidance and support",
      "Conducted online evaluation sessions to assess progress",
      "Facilitated interactive learning experiences and real-time discussions",
      "Promoted collaborative learning through group projects",
    ],
    isCurrentlyWorkingHere: false,
    technologies: [html, css, javascript, react],
  },
  {
    company: "Loop Technologies",
    jobTitle: "Frontend Developer Intern",
    companyImage: null,
    dateStarted: new Date("2023-09-01"),
    dateEnded: new Date("2024-01-31"),
    points: [
      "Worked on the LEAD Frontend project, a food delivery application, focusing on frontend development",
      "Developed frontend interface for food delivery app using React and Next.js",
      "Implemented responsive and intuitive user interfaces",
    ],
    isCurrentlyWorkingHere: false,
    technologies: [html, css, javascript, react, nextjs],
  },
];

const WorkExperience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full ps-5 pe-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute pl-6 sm:pl-3 top-24 md:top-12 uppercase tracking-[20px] text-gray-500 text-[20px]">
        Experience
      </h3>

      <div className="w-full flex float-start gap-5 overflow-x-scroll p-10 snap-x snap-mandatory mt-2 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
};

export default WorkExperience;
