export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 flex h-14 w-full items-center justify-start gap-10 border-b border-white/30 bg-white/50 px-16 py-7 text-xs tracking-widest backdrop-blur-lg">
      <div className="flex shrink-0 items-center gap-2">
        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-black text-white">D</span>
        <b className="whitespace-nowrap">DHANANJAY SHARMA</b>
        <div className="h-6 w-px shrink-0 bg-gray-400"></div>
      </div>

      <div className="flex h-10 items-center gap-10 lg:gap-40">
        <a href="#about" className="rounded px-3 py-3 font-semibold transition hover:bg-white/60">ABOUT</a>
        <a href="#education" className="rounded px-3 py-3 font-semibold transition hover:bg-white/60">EDUCATION</a>
        <a href="#skills" className="rounded px-3 py-3 font-semibold transition hover:bg-white/60">SKILLS</a>
        <a href="#projects" className="rounded px-3 py-3 font-semibold transition hover:bg-white/60">PROJECTS</a>
      </div>

      <a href="#contact" className="ml-auto rounded px-3 py-3 font-semibold transition hover:bg-white/60">CONTACT</a>
    </nav>
  );
}