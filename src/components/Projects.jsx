import { useRef, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaArrowUp } from "react-icons/fa";

const projects = [
  {
    status: "In progress",
    title: "Jarvis AI Voice Assistant",
    about: "Opens apps, plays songs and gives temperature updates by voice.",
    tags: ["Python", "Voice"],
    link: "https://github.com/dhananjayshrama",
  },
  {
    status: "Completed",
    title: "Hand Gesture Cursor",
    about: "Controls the mouse with index and middle finger tracking through the camera. Gestures click, select videos and adjust volume.",
    tags: ["Python", "OpenCV", "Gesture Control"],
    link: "https://github.com/dhananjayshrama/hand-cursor-in-python",
  },
  {
    status: "In progress",
    title: "NotesByDanny",
    about: "Create, edit, delete and manage notes using React Hooks.",
    tags: ["React Native", "Expo"],
    link: "https://expo.dev/accounts/dhananjayrajeshsharma",
  },
  {
    status: "Completed",
    title: "Indu Production",
    about: "Wedding post-production studio website with services, portfolio and contact sections.",
    tags: ["React", "Tailwind"],
    link: "https://induproduction.netlify.app/",
  },
  {
    status: "Completed",
    title: "Portfolio Website",
    about: "Personal site built with React and Tailwind CSS.",
    tags: ["React", "Tailwind"],
    link: "https://dhananjaysharm1.netlify.app/",
  },
];

// duplicated so the loop never shows an empty gap
const loopItems = [...projects, ...projects];

const SPEED = 40; // pixels per second, change this to go faster or slower

export default function Projects() {
  const sliderRef = useRef(null);
  const pausedRef = useRef(false);
  const pausedUntilRef = useRef(0);

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let pos = el.scrollLeft;
    let last = performance.now();
    let frame;

    const tick = (now) => {
      const dt = (now - last) / 1000;
      last = now;
      const half = el.scrollWidth / 2;

      if (pausedRef.current || now < pausedUntilRef.current) {
        // user is in control, follow where they are
        pos = el.scrollLeft;
      } else {
        pos += SPEED * dt;
        if (pos >= half) pos -= half;
        el.scrollLeft = pos;
      }

      // keep manual scrolling inside the loop too
      if (el.scrollLeft >= half) {
        el.scrollLeft -= half;
        pos = el.scrollLeft;
      }

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  const slide = (direction) => {
    const el = sliderRef.current;
    if (!el) return;
    const cardWidth = el.firstElementChild.offsetWidth;
    const half = el.scrollWidth / 2;

    // jump into the middle of the loop first if going backwards from the start
    if (direction < 0 && el.scrollLeft < cardWidth) {
      el.scrollLeft += half;
    }

    pausedUntilRef.current = performance.now() + 800;
    el.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  };

  return (
    <section
      id="projects"
      className="bg-paper px-6 pt-1 pb-24 text-ink md:px-10"
    >
      {/* heading and arrows */}
      <div className="mb-8 flex items-end justify-between">
        <h2 className="font-['Figtree'] text-4xl font-black uppercase leading-none tracking-tighter md:text-5xl">
          Projects
        </h2>

        <div className="flex gap-2">
          <button
            onClick={() => slide(-1)}
            aria-label="Previous project"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ink transition-colors hover:bg-ink hover:text-paper"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={() => slide(1)}
            aria-label="Next project"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ink transition-colors hover:bg-ink hover:text-paper"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* slider */}
      <div
        ref={sliderRef}
        onMouseEnter={() => (pausedRef.current = true)}
        onMouseLeave={() => (pausedRef.current = false)}
        onTouchStart={() => (pausedRef.current = true)}
        onTouchEnd={() => {
          pausedUntilRef.current = performance.now() + 1500;
          pausedRef.current = false;
        }}
        className="flex overflow-x-auto border-y border-ink [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {loopItems.map((p, i) => (
          <a
            key={`${p.title}-${i}`}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="group flex min-h-[340px] w-[85%] shrink-0 flex-col justify-between border-r border-ink p-6 transition-colors duration-300 hover:bg-ink hover:text-paper sm:w-[48%] lg:w-[36%]"
          >
            {/* number and status */}
            <div>
              <p className="font-['Figtree'] text-7xl font-black leading-none tracking-tighter md:text-8xl">
                {String((i % projects.length) + 1).padStart(2, "0")}
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