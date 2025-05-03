import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/footer";
import CustomCursor from "./components/cursor";
import Project from "./components/Project";
import About from "./components/About/About";

function App() {
  return (
    <Router>
      <CustomCursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<About />} />
      </Routes>
      
      <Project />
      <Footer/>
      </Router>
  );
}

export default App;
