const education = [
  {
    label: "2024 – 2027",
    title: "B.Tech, Computer Science Engineering",
    detail: "Bharat Ratna Indira Gandhi College, Solapur (DBATU)",
  },
  {
    label: "2020 – 2024",
    title: "Diploma, Computer Engineering",
    detail: "MSBTE · 72.23%",
  },
  {
    label: "2019",
    title: "SSC",
    detail: "Add your school name and percentage",
  },
];

const projects = [
  {
    label: "Python",
    title: "Jarvis AI Voice Assistant",
    detail:
      "Voice assistant that opens apps, YouTube and VS Code, creates files, plays songs and gives temperature updates.",
  },
  {
    label: "React Native · Expo Go",
    title: "Notes App",
    detail:
      "Mobile app to create, edit, delete and manage notes using React Hooks.",
  },
  {
    label: "React · Tailwind CSS",
    title: "Portfolio Website",
    detail: "This personal portfolio, built with React and Tailwind CSS.",
  },
];

function Column({ heading, items }) {
  return (
    <div>
      <h2 className="mb-8 font-['Figtree'] text-3xl font-black uppercase leading-none tracking-tighter">
  {heading}
</h2>

      <ol className="border-l-2 border-gray-300">
        {items.map((item) => (
          <li key={item.title} className="relative pb-10 pl-8 last:pb-0">
            <span className="absolute -left-[8px] top-2 h-3.5 w-3.5 rounded-full bg-[#140c0c]" />
            <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
              {item.label}
            </p>
            <h3 className="mt-1.5 text-2xl font-bold leading-snug">{item.title}</h3>
            <p className="mt-1.5 text-base leading-7 text-gray-600">{item.detail}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function Education() {
  return (
    <section
      id="education"
      className="grid grid-cols-1 gap-16 bg-white px-6 pt-1 pb-30 text-[#140c0c] md:grid-cols-2 md:px-10 -mt-25"
    >
      <Column heading="Education" items={education} />
      <Column heading="Projects" items={projects} />
    </section>
  );
}