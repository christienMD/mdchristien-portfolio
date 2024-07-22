"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";

const TypeWriter = () => {
  const [text, count] = useTypewriter({
    words: ["Hi, I'm Mesueh Christien", "A Full Stack Developer"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold px-10">
      <span>{text}</span>
      <Cursor cursorColor="#F7AB0A" />
    </h1>
  );
};

export default TypeWriter;
