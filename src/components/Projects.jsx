import { useRef, useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaArrowUp } from "react-icons/fa";

const projects = [
  {
    status: "Completed",
    title: "Jarvis AI Voice Assistant",
    about: "Opens apps, plays songs and gives temperature updates by voice.",
    tags: ["Python", "Voice"],
    link: "https://github.com/your-username/jarvis",
  },
  {
    status: "In progress",
    title: "Notes App",
    about: "Create, edit, delete and manage notes using React Hooks.",
    tags: ["React Native", "Expo Go"],
    link: "https://github.com/your-username/notes-app",
  },
  {
    status: "Completed",
    title: "Portfolio Website",
    about: "Personal site built with React and Tailwind CSS git&github.",
    tags: ["React", "Tailwind"],
    link: "https://github.com/your-username/portfolio",
  },
];

export default function Projects() {
  const sliderRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateArrows = () => {
    const el = sliderRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  };

  useEffect(() => {
    updateArrows();
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, []);

  const slide = (direction) => {
    const el = sliderRef.current;
    if (!el) return;
    const cardWidth = el.firstElementChild.offsetWidth;
    el.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  };

  return (
    <section
      id="projects"
      className="bg-white px-6 pt-1 pb-24 text-[#140c0c] md:px-10"
    >
      {/* heading and arrows */}
      <div className="mb-8 flex items-end justify-between">
        <h2 className="font-['Figtree'] text-4xl font-black uppercase leading-none tracking-tighter md:text-5xl">
          Projects
        </h2>

        <div className="flex gap-2">
          <button
            onClick={() => slide(-1)}
            disabled={atStart}
            aria-label="Previous project"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#140c0c] transition-colors hover:bg-[#140c0c] hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#140c0c]"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={() => slide(1)}
            disabled={atEnd}
            aria-label="Next project"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#140c0c] transition-colors hover:bg-[#140c0c] hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#140c0c]"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* slider */}
      <div
        ref={sliderRef}
        onScroll={updateArrows}
        className="flex snap-x snap-mandatory overflow-x-auto border-y border-[#140c0c] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((p, i) => (
          <a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="group flex min-h-[340px] w-[85%] shrink-0 snap-start flex-col justify-between border-r border-[#140c0c] p-6 transition-colors duration-300 last:border-r-0 hover:bg-[#140c0c] hover:text-white sm:w-[48%] lg:w-[36%]"
          >
            {/* number and status */}
            <div>
              <p className="font-['Figtree'] text-7xl font-black leading-none tracking-tighter md:text-8xl">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.14em] opacity-60">
                {p.status}
              </p>
            </div>

            {/* details */}
            <div>
              <h3 className="font-['Figtree'] text-2xl font-black leading-tight">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-6 opacity-80">{p.about}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-current px-3 py-0.5 text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <p className="mt-4 flex items-center gap-1.5 text-sm font-medium">
                View project
                <FaArrowUp className="rotate-45 text-xs transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}