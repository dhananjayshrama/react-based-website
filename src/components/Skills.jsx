import { useEffect, useRef } from "react";
import { FaMobileAlt, FaPlug, FaJava } from "react-icons/fa";
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiSpringboot,
  SiGit,
  SiExpress,
  SiNodedotjs,
} from "react-icons/si";

const skills = [
  {
    name: "Express",
    sub: "Backend framework",
    about:
      "Minimal Node.js framework for building REST APIs, routes and middleware.",
    percent: 55,
    link: "https://github.com/your-username/your-express-project",
    icon: SiExpress,
    span: "",
  },
  {
    name: "Node.js",
    sub: "JavaScript runtime",
    about:
      "Runs JavaScript on the server, which lets me use one language across the whole stack.",
    percent: 55,
    link: "https://github.com/your-username/your-node-project",
    icon: SiNodedotjs,
    span: "",
  },
  {
    name: "MERN STACK",
    sub: "MongoDB, Express, React, Node",
    about:
      "Full-stack JavaScript development. I build complete web applications, from the database and API to the user interface.",
    percent: 60,
    link: "https://github.com/your-username/portfolio",
    icon: SiReact,
    dark: true,
    span: "col-span-2 row-span-2",
    big: true,
  },
  {
    name: "Tailwind",
    sub: "Styling",
    about: "Utility-first CSS for building responsive, consistent interfaces quickly.",
    percent: 40,
    link: "https://github.com/your-username/portfolio",
    icon: SiTailwindcss,
    span: "",
  },
  {
    name: "JavaScript",
    sub: "Core",
    about: "The core language behind my web and mobile applications.",
    percent: 65,
    link: "https://github.com/your-username/portfolio",
    icon: SiJavascript,
    span: "",
  },
  {
    name: "React Native",
    sub: "Mobile apps with Expo Go",
    about:
      "Cross-platform mobile apps for Android and iOS, built with React and tested on Expo Go.",
    percent: 70,
    link: "https://github.com/your-username/notes-app",
    icon: FaMobileAlt,
    span: "col-span-2",
  },
  {
    name: "Java",
    sub: "Programming language",
    about:
      "Object-oriented programming language that I use for backend development with Spring Boot.",
    percent: 60,
    link: "https://github.com/your-username/your-java-project",
    icon: FaJava,
    span: "",
  },
  {
    name: "MongoDB",
    sub: "NoSQL database",
    about: "Stores flexible, JSON-like data for full-stack applications.",
    percent: 70,
    link: "https://github.com/your-username/your-mongodb-project",
    icon: SiMongodb,
    span: "",
  },
  {
    name: "Spring Boot",
    sub: "Java backend",
    about: "Java framework for building secure, production-ready backend services.",
    percent: 60,
    link: "https://github.com/your-username/your-spring-project",
    icon: SiSpringboot,
    span: "",
  },
  {
    name: "Git",
    sub: "Version control",
    about: "Tracks code changes and supports teamwork through GitHub.",
    percent: 50,
    link: "https://github.com/your-username",
    icon: SiGit,
    span: "",
  },
  {
    name: "REST APIs",
    sub: "Build and connect services",
    about:
      "Designing and consuming APIs so the frontend, backend and database can communicate.",
    percent: 55,
    link: "https://github.com/your-username/portfolio",
    icon: FaPlug,
    span: "col-span-2",
  },
];

/* 4 wave bumps across the width (each bump = one tile width) */
const WAVE_PATH =
  "M0 10 Q75 0 150 10 T300 10 T450 10 T600 10 T750 10 T900 10 T1050 10 T1200 10 V20 H0 Z";

const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

/* ---------- Liquid: always moving + reacts to phone shake ---------- */
function Liquid({ percent }) {
  const bodyRef = useRef(null);
  const waveRef = useRef(null);

  useEffect(() => {
    const body = bodyRef.current;
    const wave = waveRef.current;
    if (!body || !wave) return;

    let angle = 0; // current tilt of the water surface (deg)
    let vel = 0; // angular velocity (deg/s)
    let rest = 0; // where the water settles (follows phone tilt)
    let energy = 0; // 0..1, makes the waves taller while shaking
    let px = 0, py = 0, pz = 0; // previous accelerometer values
    let last = performance.now();
    let raf;

    /* phone motion: tilt sets the resting angle, sudden change = shake */
    const onMotion = (e) => {
      const g = e.accelerationIncludingGravity;
      if (!g) return;
      const gx = g.x || 0, gy = g.y || 0, gz = g.z || 0;

      rest = clamp((gx / 9.8) * 12, -12, 12);

      const jx = gx - px, jy = gy - py, jz = gz - pz;
      px = gx; py = gy; pz = gz;

      vel += clamp(jx * 3, -120, 120);
      energy = Math.min(1, energy + Math.hypot(jx, jy, jz) * 0.02);
    };

    /* desktop testing: move the mouse fast over the box */
    const onMouse = (e) => {
      vel += clamp(e.movementX * 0.8, -60, 60);
      energy = Math.min(1, energy + Math.abs(e.movementX) * 0.01);
    };
    const tile = body.parentElement;
    tile?.addEventListener("pointermove", onMouse);

    /* iOS needs permission, asked on the first tap */
    const DM = window.DeviceMotionEvent;
    let askOnTap;
    if (DM && typeof DM.requestPermission === "function") {
      askOnTap = () => {
        DM.requestPermission()
          .then((r) => {
            if (r === "granted") window.addEventListener("devicemotion", onMotion);
          })
          .catch(() => {});
      };
      window.addEventListener("touchend", askOnTap, { once: true });
    } else {
      window.addEventListener("devicemotion", onMotion);
    }

    /* spring physics: water swings back and forth, then settles */
    const tick = (now) => {
      const dt = Math.min(0.032, (now - last) / 1000);
      last = now;

      const stiffness = 40;
      const damping = 3.2;
      vel += (-stiffness * (angle - rest) - damping * vel) * dt;
      angle = clamp(angle + vel * dt, -20, 20);
      energy *= 0.96;

      body.style.transform = `rotate(${angle}deg)`;
      wave.style.transform = `scaleY(${1 + energy * 2})`;
      raf = requestAnimationFrame(tick);
    };

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduce) raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("devicemotion", onMotion);
      if (askOnTap) window.removeEventListener("touchend", askOnTap);
      tile?.removeEventListener("pointermove", onMouse);
    };
  }, []);

  return (
    <div
      ref={bodyRef}
      className="liquid-rise pointer-events-none absolute -inset-x-1/2 -bottom-[120px] bg-paper/15"
      style={{ "--fill": `${percent}%`, height: 0, transformOrigin: "50% 0" }}
    >
      {/* moving wave on the water surface */}
      <div
        ref={waveRef}
        className="absolute inset-x-0 -top-4 h-4 origin-bottom overflow-hidden"
      >
        <svg
          className="liquid-wave-slow absolute bottom-0 left-0 h-full w-[200%] text-paper/10"
          viewBox="0 0 1200 20"
          preserveAspectRatio="none"
        >
          <path d={WAVE_PATH} fill="currentColor" />
        </svg>
        <svg
          className="liquid-wave absolute bottom-0 left-0 h-full w-[200%] text-paper/15"
          viewBox="0 0 1200 20"
          preserveAspectRatio="none"
        >
          <path d={WAVE_PATH} fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-paper px-6 pt-1 pb-24 text-ink md:px-10"
    >
      <h4 className="mb-8 font-['Figtree'] text-4xl font-black uppercase leading-none tracking-tighter md:text-5xl">
        Skills
      </h4>

      <div className="grid auto-rows-[170px] grid-cols-2 gap-3 md:auto-rows-[160px] md:grid-cols-4">
        {skills.map((s) => {
          const Icon = s.icon;
          return (
            <a
              key={s.name}
              href={s.link}
              target="_blank"
              rel="noreferrer"
              className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl p-3.5 pb-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_26px_rgba(20,12,12,0.22)] ${
                s.dark ? "bg-ink text-paper" : "bg-card text-ink"
              } ${s.span}`}
            >
              {/* liquid fill (big tile only) */}
              {s.big && <Liquid percent={s.percent} />}

              {/* top: icon and percentage */}
              <div className="relative z-10 flex items-start justify-between">
                <Icon className="text-2xl" />
                <span className="text-xs font-bold">{s.percent}%</span>
              </div>

              {/* bottom: name, subtitle and description */}
              <div className="relative z-10">
                <h3
                  className={`font-['Figtree'] font-black leading-none ${
                    s.big ? "text-3xl md:text-4xl" : "text-base"
                  }`}
                >
                  {s.name}
                </h3>

                {/* subtitle changes to "View project" on hover */}
                <div className="relative mt-1 h-4 text-xs">
                  <span className="absolute inset-0 font-medium opacity-70 transition-opacity duration-200 group-hover:opacity-0">
                    {s.sub}
                  </span>
                  <span className="absolute inset-0 font-semibold opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    View project ↗
                  </span>
                </div>

                <p
                  className={`mt-1 line-clamp-2 leading-[1.35] opacity-80 ${
                    s.big ? "max-w-sm text-sm" : "text-[11px]"
                  }`}
                >
                  {s.about}
                </p>
              </div>

              {/* progress bar */}
              <div
                className={`absolute bottom-0 left-0 z-10 h-1 w-full ${
                  s.dark ? "bg-track-inv" : "bg-track"
                }`}
              >
                <div
                  className={`h-full rounded-r-full ${
                    s.dark ? "bg-paper" : "bg-ink"
                  }`}
                  style={{ width: `${s.percent}%` }}
                />
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}