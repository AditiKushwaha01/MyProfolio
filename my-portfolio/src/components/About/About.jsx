import React from "react";
import { FaReact, FaNodeJs, FaPython, FaGit, FaBootstrap, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiRedux, SiFirebase, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import SelfPic from '../../assets/images/pasport sizeportfolio.jpg'; // Use your actual image path
import resume from './aditi_resume(7).pdf';

const About = () => {
  return (
    <div className="min-h-screen bg-white text-black px-6 md:px-20 py-12">
      {/* About Section */}
      <div className="flex flex-col md:flex-row gap-10 items-center mb-20">
        {/* Left Content */}
        <div className="md:w-1/2 pt-9">
          <h1 className="text-5xl font-bold mb-4">Aditi Kushwaha</h1>
          <p className="text-lg leading-relaxed">
            Hello, I'm Aditi. I'm a passionate developer focused on building impactful, user-friendly digital products.
            I specialize in full-stack development using modern tools and frameworks. I love solving real-world problems
            and currently working on meaningful projects like <strong>FoodSathi</strong>.
            <br /><br />
            With a background in Computer Science and experience in building scalable web apps, I bring creativity,
            discipline, and innovation to every project.
          </p>

          {/* Social Icons and Resume */}
          <div className="flex gap-6 mt-4 text-2xl text-gray-700 ">
            <a href="https://github.com/AditiKushwaha01" rel="noopener noreferrer" title="GitHub">
              <FaGithub className="hover:text-black transition-colors" />
            </a>
            <a href="www.linkedin.com/in/aditi-kushwaha" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <FaLinkedin className="hover:text-black transition-colors" />
            </a>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm font-medium bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition-colors"
              title="Download Resume"
            >
              <FiDownload /> Resume
            </a>
          </div>

        </div>

        {/* Right Side - Image with circle + social */}
        <div className="md:w-1/2 flex justify-center items-center relative">
          {/* Dotted background wrapper */}
          <div className="relative w-[300px] h-[300px]">
            {/* Dotted background layer */}
            <div className="absolute inset-0 -top-4 -left-4 w-full h-full bg-[radial-gradient(#000_1.2px,transparent_1.2px)] bg-[length:16px_16px] opacity-50 z-0 rounded-xl"></div>

            {/* Circular image container */}
            <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-tr from-red-500 to-green-600 shadow-lg z-10">
              <img
                src={SelfPic}
                alt="Aditi smiling"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
      
      {/* skills*/}
      <div className="text-center py-6 bg-gradient-to-b from-white to-gray-50">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">🌟 Skills</h2>

        <div className="grid md:grid-cols-3 gap-12 px-6 max-w-6xl mx-auto">
          {/* Frontend */}
          <div className="bg-white rounded-2xl shadow-xl p-6 transition-transform hover:scale-105 hover:shadow-2xl duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-indigo-600">Frontend</h3>
            <div className="flex flex-wrap justify-center gap-6 text-4xl text-indigo-600">
              <div className="flex flex-col items-center">
                <SiJavascript title="JavaScript" />
                <span className="text-sm mt-1">JS</span>
              </div>
              <div className="flex flex-col items-center">
                <FaReact title="React" />
                <span className="text-sm mt-1">React</span>
              </div>
              <div className="flex flex-col items-center">
                <SiRedux title="Redux" />
                <span className="text-sm mt-1">Redux</span>
              </div>
              <div className="flex flex-col items-center">
                <SiHtml5 title="HTML5" />
                <span className="text-sm mt-1">HTML</span>
              </div>
              <div className="flex flex-col items-center">
                <SiCss3 title="CSS3" />
                <span className="text-sm mt-1">CSS</span>
              </div>
              <div className="flex flex-col items-center">
                <FaBootstrap title="Bootstrap" />
                <span className="text-sm mt-1">Bootstrap</span>
              </div>
            </div>
          </div>

          {/* Backend */}
          <div className="bg-white rounded-2xl shadow-xl p-6 transition-transform hover:scale-105 hover:shadow-2xl duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-green-600">Backend</h3>
            <div className="flex flex-wrap justify-center gap-6 text-4xl text-green-600">
              <div className="flex flex-col items-center">
                <FaNodeJs title="Node.js" />
                <span className="text-sm mt-1">Node.js</span>
              </div>
              <div className="flex flex-col items-center">
                <FaJava title="Java" />
                <span className="text-sm mt-1">Java</span>
              </div>
            </div>
          </div>

          {/* Other Tools */}
          <div className="bg-white rounded-2xl shadow-xl p-6 transition-transform hover:scale-105 hover:shadow-2xl duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-pink-500">Other Tools</h3>
            <div className="flex flex-wrap justify-center gap-6 text-4xl text-pink-500">
              <div className="flex flex-col items-center">
                <FaGit title="Git" />
                <span className="text-sm mt-1">Git</span>
              </div>
              <div className="flex flex-col items-center">
                <FaPython title="Python" />
                <span className="text-sm mt-1">Python</span>
              </div>
              <div className="flex flex-col items-center">
                <SiFirebase title="Firebase" />
                <span className="text-sm mt-1">Firebase</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      );
};

      export default About;
