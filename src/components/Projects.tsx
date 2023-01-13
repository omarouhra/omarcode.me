import { PROJECTS } from "@/data/projects";
import Container from "./Container";
import ProjectCard from "./ProjectCard";
import Title from "./Title";

function Project() {
  return (
    <Container>
      <Title
        title="Featured projects"
        label="See More projects >"
        href="/work"
      />

      <ProjectCard
        title={PROJECTS[0].title}
        color={PROJECTS[0].color}
        fullwidth
        image={PROJECTS[0].image}
        role={PROJECTS[0].role}
        description={PROJECTS[0].description}
      />

      <div className="flex flex-col space-y-12 md:flex-row md:justify-between md:space-x-12 md:space-y-0">
        <ProjectCard
          title={PROJECTS[1].title}
          color={PROJECTS[1].color}
          image={PROJECTS[1].image}
          role={PROJECTS[1].role}
          description={PROJECTS[1].description}
        />
        <ProjectCard
          title={PROJECTS[2].title}
          color={PROJECTS[2].color}
          image={PROJECTS[2].image}
          role={PROJECTS[2].role}
          description={PROJECTS[2].description}
        />
      </div>
      <ProjectCard
        title={PROJECTS[0].title}
        color={PROJECTS[0].color}
        fullwidth
        image={PROJECTS[0].image}
        role={PROJECTS[0].role}
        description={PROJECTS[0].description}
      />
    </Container>
  );
}

export default Project;
