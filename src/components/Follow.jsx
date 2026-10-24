import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Follow() {
  return (
    <div className="self-start mt-6 md:-mt-15">
      <h4 className="relative mb-1 ml-0 text-xl font-['Playfair_Display'] md:-top-5 md:ml-8">
        Find Me
      </h4>

      <div className="ml-0 flex items-center gap-18 border-t border-black pt-1.5 text-2xl md:ml-8"></div>

      <div className="flex items-center gap-10 pt-2 text-3xl md:ml-8 md:gap-18">
        <a href="https://github.com/dhananjayshrama" target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-gray-500">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/dhananjay-sharma-564795248/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-gray-500">
          <FaLinkedin />
        </a>
        <a href="mailto:dhananjayrajeshsharma@gmail.com" aria-label="Email" className="transition hover:text-gray-500">
          <MdEmail />
        </a>
      </div>
    </div>
  );
}