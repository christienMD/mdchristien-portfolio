import Image from "next/image";
import { motion } from "framer-motion";

interface Props {}

const ExperienceCard = ({}: Props) => {
  return (
    <article className="mt-32 flex flex-col items-center rounded-lg gap-7 flex-shrink-0 w-[450px] md:w-[500px] xl:w-[700px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
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
        <Image
          alt="Experience Card Company Image"
          src="/mdprofile.jpg"
          fill
          className="object-cover object-center rounded-full"
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
      </motion.div>

      <div className="px-0 md:px-10">
        <h4>Front End Developer Intern</h4>
        <p className="font-bold text-[22px] mt-1">Loop Technologies</p>
        <div className="flex space-x-2 my-2"></div>
        <p className="uppercase py-5 text-gray-300">Started... , Ended....</p>
        <ul className="list-disc space-y-4 ml-5 text-base">
          <li>
            Lorem, ipsum dolor Lorem, ipsum dolor.Lorem, ipsum dolor.Lorem,
            ipsum dolor..
          </li>
          <li>
            Rerum, nobis totam Lorem, ipsum dolor.Lorem, ipsum dolor.Lorem,
            ipsum dolor..
          </li>
          <li>
            Et, rem possimus Lorem, ipsum dolor.Lorem, ipsum dolor.Lorem, ipsum
            dolor..
          </li>
          {/* <li>
            Impedit, accusamus consectetur Lorem, ipsum dolor.Lorem, ipsum
            dolor.Lorem, ipsum dolor..
          </li> */}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
