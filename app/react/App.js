import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Bio from "./components/Bio";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="main-container overflow-hidden">
        <Routes>
          <Route path="/" element={<Bio />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
