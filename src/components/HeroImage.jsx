import img from "../assets/img.jpeg";

export default function HeroImage() {
  return (
    <div className="relative z-0 w-full md:absolute md:right-18 md:top-24 md:h-[450px] md:w-[60%] md:overflow-hidden">
  <img src={img} alt="Dhananjay Sharma" className="w-full object-cover object-top md:h-full" />
</div>
  );
}