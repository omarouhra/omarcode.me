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
    <div className="flex space-x- my-24">
      {filter.map((filter) => (
        <div key={filter.id} className="px-4 ">
          <button
            onClick={() => {
              setIsActive(filter.id);
            }}
            className={
              isActive === filter.id
                ? "font-semibold text-black  transition duration-200 "
                : "font-semibold text-gray-300 transition duration-200"
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
