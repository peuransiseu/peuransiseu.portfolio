import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import OrgsExp from "./components/OrgsExp";
import About from "./components/About";
import Projects from "./components/Projects";

const AnimatedRoutes: React.FC = () => {
  const location = useLocation(); // Detects current route

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Intro />} />
        <Route path="/about" element={<About />} />
        <Route path="/orgsexp" element={<OrgsExp />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <>
      <div className="main-container">
        <NavBar />
        <AnimatedRoutes />
      </div>
    </>
  );
};

export default App;
