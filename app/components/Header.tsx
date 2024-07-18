"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 p-5 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex items-center"
      >
        <SocialIcon
          url="https://www.twitter.com/mdchristien"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.twitter.com/mdchristien"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.twitter.com/mdchristien"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>

      <motion.div
        onClick={() => router.push("#contact")}
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex items-center cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />

        <p className="uppercase hidden md:inline-flex text-gray-400">
          Get In Touch
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
