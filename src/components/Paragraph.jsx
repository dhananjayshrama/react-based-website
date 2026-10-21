export default function Paragraph() {
  return (
    <div className="text-sm leading-6 text-[#140c0c] -mt-18 md:translate-x-40 flex flex-col md:flex-row md:items-start gap-6">
      {/* Left: first paragraph */}
      <p className="md:w-1/2 first-letter:float-left first-letter:mr-2 first-letter:text-6xl first-letter:font-black first-letter:leading-[0.8]">
        Hi, I'm Dhananjay Sharma, a final-year Computer Science Engineering
        student. I enjoy build the mobile application and wep-appliction ,web page, i like to learn new technology  I'm always learning something new.
      </p>

      {/* Vertical line */}
      <div className="hidden md:block w-px self-stretch bg-[#140c0c]/30" />

      {/* Right: second paragraph */}
      <p className="md:w-1/2">
        I work with JavaScript, React, Spring Boot and MySQL. My projects
        include a Python voice assistant called Jarvis, a React Native notes
        app and this portfolio. I'm looking for real-world projects where I
        can grow as a developer.
      </p>
    </div>
  );
}