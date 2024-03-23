"use client";
import { useState } from "react";
import Image from "next/image";
import green from "../../public/images/green.jpg";
import night from "../../public/images/night.jpg";
import paris from "../../public/images/paris.jpg";

export default function Home() {
  const [mode, setMode] = useState(1);

  const toggleMode = () => {
    setMode((prevMode) => {
      if (prevMode === 1) return 2;
      else if (prevMode === 2) return 3;
      else return 1;
    });
  };

  // Define the image based on the mode
  let bgImage;
  if (mode === 1) {
    bgImage = green;
  } else if (mode === 2) {
    bgImage = night;
  } else {
    bgImage = paris;
  }

  return (
    <div className="flex flex-col h-screen">
      <div className="flex justify-end">
        <div
          className={`custom-toggle ${
            mode === 1 ? "mode1" : mode === 2 ? "mode2" : "mode3"
          }`}
          onClick={toggleMode}
        >
          <button className="p-1 bg-white text-black rounded">theme</button>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center relative">
        {/* Background image */}
        <Image
          src={bgImage}
          alt="bgImage"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white flex-col w-full">
          <div className="pt-10 text-9xl font-custom">Flames</div>

          <div className="flex items-center justify-center font-aesth text-lg pt-10 font-semibold w-1/3 flex-col space-y-5 bg-green-100 bg-opacity-50 rounded-lg p-5">
            {mode === 1 && (
              <>
                <div className="flex flex-row w-full justify-center">
                  <p className="text-2xl">Enter name 1:</p>
                  <input className="p-1 ml-2 rounded-lg w-2/3" />
                </div>
                <div className="flex flex-row w-full justify-center">
                  <p className="text-2xl">Enter name 2:</p>
                  <input className="p-1 ml-2 rounded-lg w-2/3" />
                </div>
              </>
            )}
            {mode === 2 && <div className="text-2xl">Content for mode 2</div>}
            {mode === 3 && <div className="text-2xl">Content for mode 3</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
