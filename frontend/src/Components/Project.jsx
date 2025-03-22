import React from "react";

const projects = [
  {
    id: 1,
    img: "/images/project.png",
    technologies: ["React", "Vite", "Tailwind", "Node.js"],
    heading:['LLB Website'],
    paragraph:['This website is created for Education purpose'],
    anchor:['https://llbwebsite.vercel.app/']
  },
];

const Project = () => {
  return (
    <div className="px-6 md:px-12 lg:px-20 py-10 text-white" id="project">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-yellow-500">My Work</h1>
        <p className="text-lg md:text-xl text-gray-300 mt-2">
          Check out some of my recent projects
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <a href={project.anchor} target="_blank">
          <div
            key={project.id}
          className="bg-gray-800 shadow-lg rounded-xl overflow-hidden transform transition-all duration-300 ease-in hover:-translate-y-3 hover:shadow-5xl cursor-pointer"
          >
            {/* Project Image */}
            <img
              src={project.img}
              alt="Project"
              className="w-full h-56 object-cover"
            />

            {/* Tech Stack */}
            <div className="p-4">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-sm font-medium text-purple-600 bg-gray-700 py-1 px-3 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
                <br />
                <div>
                <h1>{project.heading}</h1>
                <p>{project.paragraph}</p>
                </div>
              </div>
            </div>
          </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Project;
