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
        <div className="flex items-center justify-center text-center text-white flex-col w-full">
          <div className="pt-10 text-9xl  font-custom">Flames</div>
          <div className="flex justify-end">
            <label class="inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" />
              <div class="relative w-11 h-6 bg-gray-600 peer-focus:outline-none    rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white  after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-400"></div>
            </label>
          </div>
          <div className="flex items-center justify-center font-aesth text-lg pt-10 font-semibold w-1/3 flex-col space-y-5 bg-green-100 bg-opacity-50 rounded-lg p-5">
            <div className="flex flex-row w-full justify-center ">
              <p className="text-2xl ">Enter name 1:</p>
              <input className="p-1 ml-2 rounded-lg w-2/3" />
            </div>
            <div className="flex flex-row w-full justify-center ">
              {" "}
              <p className="text-2xl ">Enter name 2:</p>
              <input className="p-1 ml-2 rounded-lg w-2/3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
