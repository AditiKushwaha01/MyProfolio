import React from "react";
import { FaReact, FaNodeJs, FaPython, FaGit, FaBootstrap } from "react-icons/fa";
import { SiRedux, SiFirebase, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import SelfPic from '../../assets/images/self_pic.jpg';

const About = () => {
  return (
    <div className="min-h-screen bg-white text-black px-6 md:px-20 py-12">
      {/* About Section */}
      <div className="flex flex-col md:flex-row gap-10 items-center mb-20">
        {/* Left Content */}
        <div className="md:w-1/2 pt-14">
          <h1 className="text-5xl font-bold mb-4">Aditi Kushwaha</h1>
          <p className="text-lg leading-relaxed">
            Hello, I'm Aditi. I'm a passionate developer focused on building impactful, user-friendly digital products.
            I specialize in full-stack development using modern tools and frameworks. I love solving real-world problems
            and currently working on meaningful projects like <strong>FoodSathi</strong>.
            <br /><br />
            With a background in Computer Science and experience in building scalable web apps, I bring creativity,
            discipline, and innovation to every project.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center items-center">
          <img
            src={SelfPic}
            alt="Aditi smiling"
            className="rounded-2xl shadow-2xl w-48 h-auto object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

      </div>

      {/* Skills Section */}
      <div className="text-center">
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>

        <div className="flex flex-col gap-10 items-center">
          {/* Frontend */}
          <div>
            <h3 className="text-xl font-medium mb-3">Frontend</h3>
            <div className="flex flex-wrap gap-6 justify-center text-4xl text-indigo-600">
              <SiJavascript title="JavaScript" />
              <FaReact title="React" />
              <SiRedux title="Redux" />
              <SiHtml5 title="HTML5" />
              <SiCss3 title="CSS3" />

              <FaBootstrap title="Bootstrap" />
            </div>
          </div>

          {/* Backend */}
          <div>
            <h3 className="text-xl font-medium mb-3">Backend</h3>
            <div className="flex flex-wrap gap-6 justify-center text-4xl text-green-600">

              <FaNodeJs title="Node.js" />
              <FaJava title="Java" />

            </div>
          </div>

          {/* Others */}
          <div>
            <h3 className="text-xl font-medium mb-3">Other Tools</h3>
            <div className="flex flex-wrap gap-6 justify-center text-4xl text-pink-500">
              <FaGit title="Git" />
              <FaPython title="Python" />
              <SiFirebase title="Firebase" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
