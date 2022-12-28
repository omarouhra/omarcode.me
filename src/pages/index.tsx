import Hero from "@/components/Hero";

import type { NextPage } from "next";
import { PROJECTS } from "@/data/projects";
import MaxWidth from "@/components/MaxWidth";
import CustomImage from "@/components/CustomImage";

const Home: NextPage = () => {
  return (
    <div>
      <Hero />

      <MaxWidth>
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
      </MaxWidth>
    </div>
  );
};

export default Home;
