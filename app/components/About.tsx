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
      <h3 className="absolute top-16 md:top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        About
      </h3>

      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="relative flex-shrink-0 h-52 w-52 sm:h-60 sm:w-60 md:h-96 md:w-[450px] xl:h-[400px] xl:w-[500px] rounded-full md:rounded-lg mt-32 md:mt-40"
      >
        <Image
          src="/MD.jpg"
          alt="my about image"
          fill
          className="object-cover rounded-full md:rounded-lg"
        />
      </motion.div>

      <div className="space-y-6 px-4 md:px-10 mt-16 md:mt-0">
        <h4 className="text-2xl md:text-3xl font-semibold">
          About <span className="underline decoration-[#F7AB0A]/40">Me</span>
        </h4>
        <p className="text-sm md:text-base">
          As an enthusiastic Full Stack Developer, I excel in both frontend and
          backend development, creating engaging web designs and robust
          functionalities that enhance user experience. I possess a
          comprehensive foundation in HTML, CSS, JavaScript, TypeScript,
          React.js, Next.js, PHP, and Laravel, strengthened by a degree in
          Computer Science. My quick adaptability to new technologies and
          continuous self-improvement ensure I stay at the forefront of the
          ever-evolving tech landscape. I am committed to delivering exceptional
          user experiences through innovation, creativity, and a relentless
          pursuit of knowledge.
        </p>
      </div>
    </motion.div>
  );
};

export default About;

// "use client";
// import Image from "next/image";
// import { motion } from "framer-motion";

// const About = () => {
//   return (
//     <motion.div
//       initial={{
//         opacity: 0,
//       }}
//       whileInView={{ opacity: 1 }}
//       transition={{
//         duration: 1.5,
//       }}
//       className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
//     >
//       <h3 className="absolute top-16 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
//         About
//       </h3>

//       <motion.div
//         initial={{
//           x: -200,
//           opacity: 0,
//         }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{
//           duration: 1.2,
//         }}
//         viewport={{ once: true }}
//         className="relative md:mb-0 flex-shrink-0 h-60 w-60 md:h-72 md:w-52 xl:h-[450px] xl:w-[600px] rounded-full md:rounded-lg mt-0 md:mt-40"
//       >
//         <Image
//           src="/MD.jpg"
//           alt="my about image"
//           fill
//           className="object-cover rounded-full md:rounded-lg"
//         />
//       </motion.div>

//       <div className="space-y-10 px-0 md:px-10">
//         <h4 className="text-3xl font-semibold">
//           About <span className="underline decoration-[#F7AB0A]/40 ">Me</span>
//         </h4>
//         <p className="text-base">
//           As an enthusiastic Full Stack Developer, I excel in both frontend and
//           backend development, creating engaging web designs and robust
//           functionalities that enhance user experience. I possess a
//           comprehensive foundation in HTML, CSS, JavaScript, TypeScript,
//           React.js, Next.js, PHP, and Laravel, strengthened by a degree in
//           Computer Science. My quick adaptability to new technologies and
//           continuous self-improvement ensure I stay at the forefront of the
//           ever-evolving tech landscape. I am committed to delivering exceptional
//           user experiences through innovation, creativity, and a relentless
//           pursuit of knowledge.
//         </p>
//       </div>
//     </motion.div>
//   );
// };

// export default About;
