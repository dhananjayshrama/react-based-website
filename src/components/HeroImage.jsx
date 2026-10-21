import profile from "../assets/img.jpeg";

export default function HeroImage() {
  return (
    <img
      src={profile}
      alt="Dhananjay Sharma"
      className="absolute right-16 top-24 z-0 w-[45%] h-[500px] object-cover bg-gray-200"
    />
  );
}