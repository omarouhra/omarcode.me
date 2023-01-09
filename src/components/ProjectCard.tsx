import { StaticImageData } from "next/image";
import React from "react";
import CustomImage from "./CustomImage";

type TProject = {
  title: string;
  image: StaticImageData;
  role: string;
  description: string;
  color: string;
  fullwidth?: boolean;
};
function ProjectCard({
  title,
  image,
  role,
  description,
  color,
  fullwidth,
}: TProject) {
  return (
    <div
      className={`  flex flex-col items-start justify-start space-y-8 rounded-md py-10 px-4 md:py-20 md:px-6 ${color}  ${
        fullwidth
          ? "$ mb-12  mt-12 bg-gradient-to-r  md:flex-row md:items-center md:justify-between "
          : "bg-gradient-to-b  md:w-1/2"
      }
      `}
    >
      <div>
        <h2 className="text-xl text-white md:text-2xl">{title}</h2>
        <p className="mb-8 text-xs font-extralight text-[#D9D9D9]">{role}</p>
        <p className="max-w-[300px] text-xs font-extralight text-[#D9D9D9]">
          {description}
        </p>
      </div>
      <div
        className={`md: relative h-[200px] w-full rounded-md ${
          fullwidth ? "md:w-[450px]" : "h-[200px] w-full md:max-w-[400px]"
        }`}
      >
        <CustomImage imgSrc={image} alt={title} className="rounded-md" />
      </div>
    </div>
  );
}

export default ProjectCard;
