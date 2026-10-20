import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Follow() {
  return (
    <div className="self-start -mt-10">
      <h4 className="mb-1 text-xl font-['Playfair_Display'] ml-8 relative -top-5">Find Me</h4>

    <div className="flex items-center gap-18 border-t border-black pt-1.5 text-2xl ml-8"></div>

      <div className="flex items-center gap-18 pt-2 text-3xl ml-8">
        <a href="https://github.com/dhananjayshrama" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-gray-500 transition">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/your-name" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-gray-500 transition">
          <FaLinkedin />
        </a>
        <a href="mailto:dhananjayrajeshsharma@gmail.com" aria-label="Email" className="hover:text-gray-500 transition">
          <MdEmail />
        </a>
      </div>
    </div>
  );
}