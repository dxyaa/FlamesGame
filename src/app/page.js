import Image from "next/image";
import green_city from "../../public/images/green.jpg";
export default function Home() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src={green_city}
          alt="green_city"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 ">
        <div className="flex items-center justify-center text-center text-white">
          <div className="pt-10 text-4xl  font-custom">Flames!</div>
        </div>
      </div>
    </div>
  );
}
