import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/footer";
import CustomCursor from "./components/cursor";
import Project from "./components/Project";
import About from "./components/About/About";
import EducationSection from "./components/Education";
import Experience from "./components/experience"; // assuming this is your experience component

function App() {
  return (
    <Router>
      <CustomCursor />
      <Navbar />

      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <About />
              <Project />
            </>
          }
        />

        {/* About Page */}
        <Route
          path="/about"
          element={
            <>
              <About />
              <EducationSection />
              <Experience />
            </>
          }
        />
      </Routes>

      <Footer /> {/* Always shown */}
    </Router>
  );
}

export default App;
