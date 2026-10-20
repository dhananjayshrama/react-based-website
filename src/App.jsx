import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import InfoRow from "./components/InfoRow";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <InfoRow />
    </div>
  );
}