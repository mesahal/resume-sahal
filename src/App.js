import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Work from "./components/Work";
import Education from "./components/Education";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import ParticleBackground from "./components/another/ParticleBackground";
import Portfolio from "./components/another/Portfolio";
import RotatingCube from "./components/another/RotatingCube";
import Background from "./components/another/Background";
import FloatingGlowParticles from "./components/another/Background3D";
import ParticleWaves from "./components/another/ParticleWaves";
import GalaxySpiral from "./components/another/GalaxySpiral";
import CodeSnippetBackground from "./components/another/CodeSnippetBackground";
import LaptopBackground from "./components/another/LaptopBackground";
import BinaryRainBackground from "./components/another/BinaryRainBackground";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        {/* <ParticleBackground />
        <Navbar />
        <main className="pt-16 z-50">
          <Routes>
            <Route path="/" element={<Home2 />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/work" element={<Work />} />
            <Route path="/education" element={<Education />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main> */}
         {/* <Background />  */}
        {/* <ParticleBackground />  */}
        {/* <FloatingGlowParticles /> */}
        {/* <ParticleWaves /> */}
        {/* <GalaxySpiral /> */}
        {/* <LaptopBackground /> */}
        {/* <CodeSnippetBackground /> */}
        <Portfolio />
      </div>
    </Router>
  );
}

export default App;
