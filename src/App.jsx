import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import InfoRow from "./components/InfoRow";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
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