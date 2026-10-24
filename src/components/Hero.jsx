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
    <section className="relative flex flex-col px-5 pt-6 pb-10 sm:px-8 md:block md:min-h-[600px] md:px-16 md:pt-24">
      {/* photo: on top for phones, original position on md and up */}
      <div className="order-1 mb-6 md:mb-0">
        <HeroImage />
      </div>

      <h1 className="relative z-10 order-2 max-w-2xl font-['Figtree'] text-[13vw] font-black uppercase leading-[0.85] tracking-tighter text-[#140c0c] sm:text-7xl md:text-9xl">
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
        className={`relative z-10 order-3 mt-4 font-['Mrs_Saint_Delafield'] text-5xl text-[#140c0c] md:text-6xl ${fadeUp}`}
        style={{ transitionDelay: `${0.2 + WORDS.length * GAP}s` }}
      >
        Dhananjay Sharma
      </p>
    </section>
  );
}