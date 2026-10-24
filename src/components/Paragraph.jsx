export default function Paragraph() {
  return (
    <div className="mt-8 flex flex-col gap-6 text-[14px] leading-6 text-[#140c0c] md:-mt-10 md:w-[1100px] md:max-w-none md:shrink-0 md:flex-row md:items-start">
      {/* Left: first paragraph */}
      <p className="md:flex-1 first-letter:float-left first-letter:mr-2 first-letter:text-6xl first-letter:font-black first-letter:leading-[0.8]">
        Hi, I'm <span className="font-bold">Dhananjay Sharma</span>, a final-year
        Computer Science Engineering student and MERN stack developer. I enjoy
        building web applications, responsive websites and mobile apps, and I'm
        always curious to learn new technologies and explore tools beyond the
        MERN stack.
      </p>

      {/* Vertical line */}
      <div className="hidden md:block w-px h-28 bg-[#140c0c]/30" />

      {/* Right: second paragraph */}
      <p className="md:flex-1">
        I work with JavaScript, React, Spring Boot and MySQL. My projects include
        a Python voice assistant called Jarvis, a React Native notes app and this
        portfolio. I'm looking for real-world projects where I can apply my skills,
        learn from experienced teams and keep growing as a developer.
      </p>
    </div>
  );
}