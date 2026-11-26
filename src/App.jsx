import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import useTheme from "./hooks/useTheme.js";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Skills from "./pages/Skills.jsx";
import Contact from "./pages/Contact.jsx";

// Scrolls to the top whenever the route changes (useEffect runs after render).
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [theme, toggleTheme] = useTheme(); // state lives here, passed down as props
  return (
    <>
      <ScrollToTop />
      <Navbar theme={theme} onToggle={toggleTheme} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
