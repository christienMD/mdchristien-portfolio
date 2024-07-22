"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-auto min-h-screen text-center md:text-left md:flex-row max-w-7xl px-6 md:px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-xl md:text-[22px]">
        About
      </h3>

      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="relative flex-shrink-0 h-52 w-52 sm:h-60 sm:w-60 md:h-80 md:w-[350px] xl:h-[400px] xl:w-[500px] rounded-full md:rounded-lg mt-32 md:mt-40"
      >
        <Image
          src="/MD.jpg"
          alt="my about image"
          fill
          className="object-cover rounded-full md:rounded-lg"
        />
      </motion.div>

      <div className="space-y-6 px-4 md:px-10 md:mt-32">
        <h4 className="text-2xl md:text-2xl font-semibold mt-5 md:mt-0">
          About <span className="underline decoration-[#F7AB0A]/40">Me</span>
        </h4>
        <p className="text-[13px] xl:text-base xl:tracking-[1px]">
          Full Stack Developer with a passion for creating impactful web
          applications. My journey in tech started during my Computer Science
          degree at the University of Buea, and I&apos;ve been hooked ever
          since.My toolkit includes HTML, CSS, JavaScript, React.js, Next.js for
          frontend magic, and PHP with Laravel for robust backend solutions.
          I&apos;m always eager to dive into new technologies and tackle
          challenging problems. When I&apos;m not coding, I&apos;passionate
          about sharing knowledge. I&apos;ve had the rewarding experience of
          mentoring frontend development interns, helping nurture the next
          generation of developers. I believe in the power of technology to make
          a difference, and I&apos;m always looking for opportunities to create
          solutions that enhance user experiences and drive innovation.
          Let&apos;s build something amazing together!
        </p>
      </div>
    </motion.div>
  );
};

export default About;
