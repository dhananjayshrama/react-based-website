import Follow from "./Follow";
import Paragraph from "./Paragraph";

export default function InfoRow() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-16 bg-white px-16 pt-10 pb-20 min-h-64">
      <Follow />
      <Paragraph />
      <div></div>
    </section>
  );
}