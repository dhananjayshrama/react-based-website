import profile from "../assets/img.jpeg";

export default function HeroImage() {
  return (
    <img
      src={profile}
      alt="Dhananjay Sharma"
      className="absolute right-20 top-17 z-0 w-[60%] h-[400px] object-cover bg-gray-200"
    />
  );
}