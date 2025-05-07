import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import workImage from '../assets/images/work.png';

// Project Data
const projects = [
  {
    name: 'Portfolio Website',
    description: 'A personal portfolio to showcase my projects and resume.',
    techStack: ['React', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://github.com/AditiKushwaha01/MyProfolio',
  },
  {
    name: 'FoodSathi',
    description: 'A real time Application which acts as a bridge between needy and Food wastage.',
    techStack: ['HTML5', 'CSS3', 'JavaScript','React.js', 'API'],
    link: 'https://github.com/AditiKushwaha01/foodsathi',
  },
  {
    name: 'Lets Thango: Long Meet',
    description: 'A real time video conferencing Application which acts as a bridge the flow of communication between couples',
    techStack: ['React.js','Node.js', 'API'],
    link: 'https://github.com/AditiKushwaha01/Lets_Thango-',
  },
  // Add more projects here
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const WorkSection = () => {
  return (
    <section className="bg-white text-gray-800">
      {/* Top Image */}
      <motion.div
        className="w-full h-64 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={workImage}
          alt="Work Section Banner"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Heading */}
      <motion.div
        className="text-center py-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-bold tracking-tight">My Work</h2>
        <p className="text-gray-500 mt-2">A selection of my recent projects</p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="max-w-6xl mx-auto px-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.article
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 p-6 flex flex-col justify-between"
            variants={itemVariants}
          >
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{project.name}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <p className="text-sm text-gray-500 mb-4">
                <strong>Tech Stack:</strong> {project.techStack.join(', ')}
              </p>
            </div>
            <div className="mt-auto flex items-center gap-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium flex items-center gap-1 hover:underline"
              >
                {project.link.includes('github.com') ? (
                  <>
                    <FaGithub /> View on GitHub
                  </>
                ) : (
                  <>
                    <FaExternalLinkAlt /> Live Demo
                  </>
                )}
              </a>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default WorkSection;
