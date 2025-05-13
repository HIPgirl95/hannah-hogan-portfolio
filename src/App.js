"use client";

import { useState, useEffect } from "react";
import { ThemeProvider } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Personal from "./components/Personal";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-bs-theme", savedTheme);
    } else if (prefersDark) {
      setTheme("dark");
      document.documentElement.setAttribute("data-bs-theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-bs-theme", newTheme);
  };

  return (
    <ThemeProvider data-bs-theme={theme}>
      <div className={`app ${theme}`}>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Personal />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
