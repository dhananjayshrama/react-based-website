import HeroImage from "./HeroImage";

const WORDS = ["MERN", "STACK", "DEVELOPER"];
const ANIM = "animate-blur-in"; // change this line to switch style
const GAP = 0.7; // seconds between words

export default function Hero() {
  return (
    <section className="relative min-h-[600px] px-16 pt-16 pb-10">
      <h1 className="relative z-10 max-w-2xl font-['Figtree'] text-7xl md:text-9xl font-black uppercase leading-[0.85] tracking-tighter text-[#140c0c]">
        {WORDS.map((word, i) => (
          <span key={word}>
            <span className="inline-block overflow-hidden align-bottom pb-3">
              <span
                className={`inline-block opacity-0 ${ANIM}`}
                style={{ animationDelay: `${0.3 + i * GAP}s` }}
              >
                {word}
              </span>
            </span>{" "}
          </span>
        ))}
      </h1>

      <p className="relative z-10 mt-4 font-['Mrs_Saint_Delafield'] text-6xl text-[#140c0c]">
        Dhananjay Sharma
      </p>

      <HeroImage />
    </section>
  );
}