import React from "react";
import { ExternalLink, Github } from "lucide-react"; // Icons for buttons
import project1 from "../assets/images/image.png";
import project2 from "../assets/images/long meet.webp";
import project3 from "../assets/images/profile.avif";

const projects = [
  {
    id: 1,
    title: "Food Saathi",
    category: "A bridge between wastage and need",
    image: project1,
    github: "https://github.com/your-username/brandify",
    live: "https://brandify.live",
  },
  {
    id: 2,
    title: "Lets Thango",
    category: "A long meet web app",
    image: project2,
    github: "https://github.com/your-username/shiro",
    live: "https://shiro.live",
  },
  {
    id: 3,
    title: "portfolio",
    category: "Personal Portfolio",
    image: project3,
    github: "https://github.com/your-username/vivrid",
    live: "https://vivrid.live",
  },
];

const Projects = () => {
  return (
    <section className="py-12 px-12 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-semibold text-gray-800">Some of my projects</h2>
          <a href="#" className="text-sm text-blue-500 hover:underline">View all →</a>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ id, title, category, image, github, live }) => (
            <div
              key={id}
              className="group bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transform transition-all duration-300 hover:scale-[1.02]"
            >
              <img src={image} alt={title} className="w-full h-56 object-cover" />
              <div className="p-4">
                <h3 className="text-md font-semibold text-gray-800 group-hover:text-black">{title}</h3>
                <p className="text-sm text-gray-500 mb-4">{category}</p>
                <div className="flex gap-4">
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-gray-600 hover:text-black transition"
                  >
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                  <a
                    href={live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-blue-600 hover:underline"
                  >
                    <ExternalLink className="w-4 h-4" /> Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
