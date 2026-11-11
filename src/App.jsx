import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import InfoRow from "./components/InfoRow";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { setupInk } from "./ink/setup";

export default function App() {
  // Start the ink effect once, after the toggle button is in the page.
  useEffect(() => {
    setupInk();
  }, []);

  return (
    <div className="min-h-screen bg-paper">
      <Navbar />
      <Hero />
      <InfoRow />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}