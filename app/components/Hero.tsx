import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";
import TypeWriter from "./TypeWriter";
import { PageInfo } from "@/typings";

const Hero = async () => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`);
  const pageInfo: PageInfo = await res.json();


  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <div className="relative h-36 w-36">
        <Image
          alt="my profile picture"
          src="/mdprofile.jpg"
          fill
          className="object-cover rounded-full mx-auto"
        />
      </div>
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <TypeWriter />

        <div className="pt-3">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
