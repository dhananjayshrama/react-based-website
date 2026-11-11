import img from "../assets/img.jpeg";
import imgDark from "../assets/img-dark.jpeg.png";

export default function HeroImage() {
  return (
    <div className="relative z-0 w-full md:absolute md:right-18 md:top-24 md:h-[450px] md:w-[60%] md:overflow-hidden">
      {/* light mode photo */}
      <img
        src={img}
        alt="Dhananjay Sharma"
        className="hero-img-light w-full object-cover object-top md:h-full"
      />
      {/* dark mode photo */}
      <img
        src={imgDark}
        alt="Dhananjay Sharma"
        className="hero-img-dark w-full object-cover object-top md:h-full"
      />
    </div>
  );
}