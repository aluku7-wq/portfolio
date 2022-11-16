import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import Contact from "./pages/contact/Contact";
import { Homepage } from "./pages/homepage/Homepage";
import Project from "./pages/project/Project";
import Projects from "./pages/projects/Projects";
import Services from "./pages/services/Services";
import Skill from "./pages/skills/Skill";

const App = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/skills" element={<Skill />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contacts" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
