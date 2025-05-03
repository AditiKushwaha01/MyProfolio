import React from "react";
import profileImg from "../assets/images/pasport sizeportfolio.jpg"; // Replace with your image

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-12 py-12 pt-24 bg-gray-50">
      {/* Left Section */}
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl font-bold text-gray-800">
          Hello! <br /> I’m <span className="text-indigo-600">Aditi Kushwaha</span>
        </h1>
        <p className="text-gray-600">
          Full stack developer who crafts meaningful digital experiences.
        </p>
        <div className="flex space-x-4">
          <button className="bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-500">
            📧 Email me
          </button>
          <a
            href="/resume.pdf"
            className="border border-indigo-600 text-indigo-600 px-5 py-2 rounded-md hover:bg-indigo-100"
            download
          >
            ⬇ Download CV
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src={profileImg}
          alt="Aditi"
          className="w-72 h-72 object-cover rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;
