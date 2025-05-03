import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // <-- added AnimatePresence
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white px-12 h-16 flex justify-between items-center shadow-md">
      <div className="text-2xl font-black uppercase text-black">
        <Link to="/" >Aditi</Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-black font-semibold">
        <li ><Link to="/work" className="cursor-none hover:text-gray-600 transition">Works</Link></li>
        <li ><Link to="/about" className="cursor-none hover:text-gray-600 transition">About</Link></li>
        <li ><Link to="/contact" className="cursor-none hover:text-gray-600 transition">Contact</Link></li>
      </ul>

      {/* Mobile 4-dots menu with hover interaction */}
      <div
        className="md:hidden relative z-50"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {/* Custom 4-dot icon */}
        <div className="flex flex-wrap w-6 h-6 gap-1 cursor-pointer">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-black rounded-full"
            />
          ))}
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="menu"
              className="absolute right-0 mt-3 w-40 bg-white shadow-lg rounded-md flex flex-col items-center py-4 gap-4 text-black font-semibold text-lg"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <span className="hover:text-gray-600 cursor-none">Works</span>
              <span className="hover:text-gray-600 cursor-none">About</span>
              <span className="hover:text-gray-600 cursor-none">Contact</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
