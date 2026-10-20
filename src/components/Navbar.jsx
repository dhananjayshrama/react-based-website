export default function Navbar() {
  return (
    <nav className="flex justify-start gap-10 items-center bg-white px-16 py-7 text-xs tracking-widest h-20">
      <div className="flex items-center gap-2 shrink-0">
        <span className="grid place-items-center w-6 h-6 shrink-0 rounded-full bg-black text-white">D</span>
        <b className="whitespace-nowrap">DHANANJAY SHARMA</b>
        <div className="w-px h-6 shrink-0 bg-gray-400"></div>
      </div>

   <div className="flex items-center gap-40 h-10">
  <a href="#" className="px-3 py-1 rounded font-semibold hover:bg-gray-100 transition py-3">ABOUT</a>
  <a href="#" className="px-3 py-1 rounded font-semibold hover:bg-gray-100 transition py-3">EDUCATION</a>
  <a href="#" className="px-3 py-1 rounded font-semibold hover:bg-gray-100 transition py-3">SKILLS</a>
  <a href="#" className="px-3 py-1 rounded font-semibold hover:bg-gray-100 transition py-3">PROJECTS</a>
</div>

<a href="#" className="ml-auto px-3 py-1 rounded font-semibold hover:bg-gray-100 transition py-3">CONTACT</a>
    </nav>
  );
}