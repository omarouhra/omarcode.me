import { useState } from "react";

function ProjectFilters() {
  const [isActive, setIsActive] = useState(1);

  const filter = [
    { id: 1, link: "Client projects" },
    { id: 2, link: "Internships" },
    { id: 3, link: "Products" },
    { id: 4, link: "Clone" },
    { id: 5, link: "Design" },
  ];
  return (
    <div className="flex space-x-4 lg:space-x-12 mt-12 lg:mt-24">
      {filter.map((filter) => (
        <div key={filter.id}>
          <button
            onClick={() => {
              setIsActive(filter.id);
            }}
            className={
              isActive === filter.id
                ? "filter text-black  transitions "
                : "filter text-gray-300 transitions"
            }
          >
            {filter.link}
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProjectFilters;
