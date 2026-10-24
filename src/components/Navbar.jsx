import { useState } from "react";

const LINKS = [
  { label: "ABOUT", href: "#about" },
  { label: "EDUCATION", href: "#education" },
  { label: "SKILLS", href: "#skills" },
  { label: "PROJECTS", href: "#projects" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/30 bg-white/50 text-xs tracking-widest backdrop-blur-lg">
      <div className="flex h-14 items-center justify-between px-5 sm:px-8 md:justify-start md:gap-10 md:px-16 md:py-7">
        {/* logo */}
        <div className="flex shrink-0 items-center gap-2">
          <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-black text-white">D</span>
          <b className="whitespace-nowrap">DHANANJAY SHARMA</b>
          <div className="hidden h-6 w-px shrink-0 bg-gray-400 md:block"></div>
        </div>

        {/* desktop links (768px and up) */}
        <div className="hidden h-10 items-center gap-10 md:flex lg:gap-40">
          {LINKS.map((l) => (
            <a key={l.label} href={l.href} className="rounded px-3 py-3 font-semibold transition hover:bg-white/60">
              {l.label}
            </a>
          ))}
        </div>

        <a href="#contact" className="ml-auto hidden rounded px-3 py-3 font-semibold transition hover:bg-white/60 md:block">
          CONTACT
        </a>

        {/* hamburger (phones only) */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className={`h-0.5 w-6 bg-black transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-black transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-black transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* mobile dropdown */}
      {open && (
        <div className="flex flex-col border-t border-black/10 bg-white/90 px-5 pb-3 pt-1 sm:px-8 md:hidden">
          {[...LINKS, { label: "CONTACT", href: "#contact" }].map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 font-semibold"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}