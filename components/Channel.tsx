"use client";

import { styles } from "@/app/stylesPage";
import Image from "next/image";
import youtube from "../public/icons/youtube.svg";
import { projects } from "@/constans";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/utils";
import SectionWrapper from "@/hoc/SectionWrapper";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_link,
}: {
  index: number;
  name: string;
  description: string;
  tags: Array<{ name: string; color: string }>;
  image: any;
  source_link: string;
}) => {
  return (
    <div>
      <div className="p-5 rounded-2xl sm:w-[360px] w-full bg-tertiary">
        <div className="relative w-full h-[230px]">
          <Image
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
            fill
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <Image
                src={youtube}
                alt="source code"
                width={40}
                height={40}
                className=" object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

const Channel = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Youtube channel</p>
        <h2 className={styles.sectionHeadText}>Lifestyle showcase </h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following lifestyle showcases. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Vel fuga libero eum quas odio dignissimos omnis,
          veniam, et tempora nisi hic pariatur soluta quod veritatis magnam, ea
          aliquid animi corporis?
        </motion.p>
      </div>
      <div className="w-full mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Channel, "lifestyle");
