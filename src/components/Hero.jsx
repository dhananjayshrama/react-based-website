import { useEffect, useState } from "react";
import HeroImage from "./HeroImage";

const WORDS = ["MERN", "STACK", "DEVELOPER"];
const GAP = 0.25; // seconds between words

export default function Hero() {
  const [show, setShow] = useState(false);

  // flips to true right after the first paint, which starts the transition
  useEffect(() => {
    const id = requestAnimationFrame(() => setShow(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const fadeUp = `transition-all duration-1000 ease-out motion-reduce:transition-none ${
    show ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
  }`;

  return (
    <section className="relative min-h-[600px] px-16 pt-16 pb-10">
      <h1 className="relative z-10 max-w-2xl font-['Figtree'] text-7xl md:text-9xl font-black uppercase leading-[0.85] tracking-tighter text-[#140c0c]">
        {WORDS.map((word, i) => (
          <span key={word}>
            <span
              className={`inline-block ${fadeUp}`}
              style={{ transitionDelay: `${0.2 + i * GAP}s` }}
            >
              {word}
            </span>{" "}
          </span>
        ))}
      </h1>

      <p
        className={`relative z-10 mt-4 font-['Mrs_Saint_Delafield'] text-6xl text-[#140c0c] ${fadeUp}`}
        style={{ transitionDelay: `${0.2 + WORDS.length * GAP}s` }}
      >
        Dhananjay Sharma
      </p>

      <HeroImage />
    </section>
  );
}