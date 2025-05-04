import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/footer";
import CustomCursor from "./components/cursor";
import Project from "./components/Project";
import About from "./components/about/About.jsx";
import EducationSection from "./components/Education";
import Experience from "./components/experience";
import Achievement from "./components/Achievement.jsx";
import Certificate from "./components/Certificate.jsx";
import Contact from "./components/Contact.jsx";
import Work from "./components/WorkSection.jsx";

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
{/* work section*/}
<Route
          path="/work"
          element={
            <>
             <Work />
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
              <Achievement />
              <Certificate />
            </>
          }
        />
        <Route
        path="/contact"
        element={
          <>
          <Contact />
          </>
        }
        />
      </Routes>

      <Footer /> {/* Always shown */}
    </Router>
  );
}

export default App;
