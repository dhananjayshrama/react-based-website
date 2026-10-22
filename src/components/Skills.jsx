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

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-white px-6 pt-1 pb-24 text-[#140c0c] md:px-10"
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
                s.dark ? "bg-[#140c0c] text-white" : "bg-[#e8eaed] text-[#140c0c]"
              } ${s.span}`}
            >
              {/* top: icon and percentage */}
              <div className="flex items-start justify-between">
                <Icon className="text-2xl" />
                <span className="text-xs font-bold">{s.percent}%</span>
              </div>

              {/* bottom: name, subtitle and description */}
              <div>
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
                className={`absolute bottom-0 left-0 h-1 w-full ${
                  s.dark ? "bg-white/20" : "bg-[#140c0c]/10"
                }`}
              >
                <div
                  className={`h-full rounded-r-full ${
                    s.dark ? "bg-white" : "bg-[#140c0c]"
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