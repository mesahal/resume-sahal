import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Work from "./components/Work";
import Education from "./components/Education";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="flex flex-col bg-gray-900 text-white">
        <Navbar />
        <div className="flex flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/work" element={<Work />} />
            <Route path="/education" element={<Education />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
