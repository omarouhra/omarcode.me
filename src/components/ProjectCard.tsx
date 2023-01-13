import GithubIcon from "@/icons/GithubIcon";
import { StaticImageData } from "next/image";
import Link from "next/link";
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
      className={` group flex flex-col items-start justify-start space-y-8 rounded-md px-4 py-8 duration-300 md:px-6     ${color}  ${
        fullwidth
          ? " mb-12 mt-12 bg-gradient-to-r md:flex-row md:items-center md:justify-between md:py-16"
          : "bg-gradient-to-b md:w-1/2 md:py-10 "
      }
      `}
    >
      <div>
        <h2 className="mb-1 text-xl text-white md:text-2xl">{title}</h2>
        <p className="mb-8 text-sm font-light text-[#b8b8b8]">{role}</p>
        <p className="md:max-w-[300px] text-sm text-[#D9D9D9]">{description}</p>

        <div className="mt-8 flex  items-center  space-x-3 duration-200 ">
          <Link
            href="/"
            className="rounded-md  bg-purple-700 px-5  py-2 text-white group-hover:shadow-lg "
          >
            View site
          </Link>
          <Link
            href="/"
            className=" flex items-center justify-between space-x-3 rounded-md  px-5 py-3 text-white hover:text-purple-400"
          >
            <GithubIcon />
          </Link>
        </div>
      </div>

      <div
        className={`md: relative   h-[250px] w-full   md:h-[200px] md:w-full ${
          fullwidth ? "md:w-[450px]" : "h-[200px] w-full"
        }`}
      >
        <CustomImage
          imgSrc={image}
          alt={title}
          className={` ${
            fullwidth ? "rounded-t-md md:rounded-md" : "rounded-t-md"
          }`}
        />
      </div>
    </div>
  );
}

export default ProjectCard;
