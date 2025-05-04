import React, { useState } from "react";
import { motion } from "framer-motion";
import { Copy } from "lucide-react"; // For copy icon, install lucide-react
import profile from "../assets/images/i3.jpg";

const HeroSection = () => {
  const [copied, setCopied] = useState(false);
  const email = "aditi.kushwaha@email.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section className="min-h-screen flex px-8 bg-white text-black font-sans relative">
      <div className="max-w-7xl w-full flex justify-between mx-auto relative">
        {/* Left Section (top-aligned) */}
        <motion.div
          className="flex-1 pt-24"
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm Aditi<br />Kushwaha<br />
            I'm a developer
          </h1>

          {/* Email section */}
          <div className="mt-4 flex items-center gap-2 cursor-pointer group" onClick={handleCopy}>
            <span className="text-sm text-gray-700">{email}</span>
            <Copy className="w-4 h-4 text-gray-500 group-hover:text-black transition" />
            {copied && <span className="text-green-500 text-xs ml-2">Copied!</span>}
          </div>
        </motion.div>

        {/* Right Section (centered paragraph + image on top right) */}
        <div className="flex-1 relative ">
          {/* Profile Image */}
          <img
            src={profile}
            alt="Aditi Profile"
            className="absolute right-20 top-24  w-40 h-40 rounded-full object-cover shadow-md"
            initial={{ opacity: 0, y: 40 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.5 }}
             
          />

          {/* Paragraph */}
          <motion.div
            className="flex items-center h-full"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <p className="text-base md:text-lg max-w-md text-gray-800 pt-60">
              I specialize in building impactful digital solutions that connect people, promote sustainability, and bring ideas to life — from full-stack web apps to creative design.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
