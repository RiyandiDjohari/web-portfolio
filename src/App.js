import React, { useState, useEffect } from "react";
// Style
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
// Components
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import MouseParticle from "./components/MouseParticle";
// Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Resume from "./pages/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

function App() {
  const [load, upadateLoad] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("isDarkMode") == null);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);  
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    if (isDarkMode) {
      setDarkMode();
    } else {
      setLightMode();
    }

    localStorage.setItem('isDarkMode', isDarkMode);
  }, [isDarkMode]);

  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark")
  }
  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light")
  }
  
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  }

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <MouseParticle />
        <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home isDarkMode={isDarkMode}/>} />
          <Route path="/project" element={<Projects isDarkMode={isDarkMode} />} />
          <Route path="/about" element={<About isDarkMode={isDarkMode}/>} />
          <Route path="/resume" element={<Resume isDarkMode={isDarkMode}/>} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
