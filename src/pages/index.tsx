import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Title from "@/components/Title";

import type { NextPage } from "next";
import { PROJECTS } from "@/data/projects";
import MaxWidth from "@/components/MaxWidth";
import CustomImage from "@/components/CustomImage";

const Home: NextPage = () => {
  return (
    <MaxWidth>
      <Hero />
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className={` flex items-center justify-center space-x-4`}
          >
            <div>
              <h2 className="text-xl md:text-xl ">{project.title}</h2>
              <p className="mb-8 text-sm text-gray-500">{project.role}</p>
              <p className="max-w-xs text-sm text-gray-500">
                {project.description}
              </p>
            </div>
            <div className="relative h-[200px] w-[400px]">
              <CustomImage imgSrc={project.image} alt={project.title} />
            </div>
          </div>
        ))}
      </div>
    </MaxWidth>
  );
};

export default Home;
