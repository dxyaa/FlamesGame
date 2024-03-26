"use client";
import { useState } from "react";
import Image from "next/image";
import green from "../../public/images/green.jpg";
import night from "../../public/images/night.jpg";
import paris from "../../public/images/paris.jpg";
import CircularIterator from "./components/circular";
import { useRef } from "react";

export default function Home() {
  const [mode, setMode] = useState(1);

  const toggleMode = () => {
    setMode((prevMode) => {
      if (prevMode === 1) return 2;
      else if (prevMode === 2) return 3;
      else return 1;
    });
  };

  let bgImage;
  let theme;
  if (mode === 1) {
    bgImage = green;
    theme = "groot";
  } else if (mode === 2) {
    bgImage = night;
    theme = "cyberpunk";
  } else {
    bgImage = paris;
    theme = "sunset";
  }
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [count, setCount] = useState(0);
  const [result, setResult] = useState("");

  const iteratorRef = useRef(new CircularIterator(""));

  const compareNames = () => {
    let count = 0;
    let temp;
    let flames = "FLAMES";

    let shorterName = name1.length < name2.length ? name1 : name2;
    let longerName = name1.length < name2.length ? name2 : name1;
    console.log("shorterName : ", shorterName);
    console.log("longerName : ", longerName);
    for (let i = 0; i < shorterName.length; i++) {
      console.log("i: ", i);
      console.log("shorterName inside for: ", shorterName);
      console.log("longerName inside for: ", longerName);
      console.log("shortername[i] inside for : ", shorterName[i]);
      if (longerName.includes(shorterName[i])) {
        console.log("shortername[i] inside if : ", shorterName[i]);
        // count++;
        temp = shorterName[i];
        longerName = longerName.replace(new RegExp(temp, "g"), "");
        shorterName = shorterName.replace(new RegExp(temp, "g"), "");
        i--;
      }
    }
    console.log("shorterName last: ", shorterName);
    console.log("longerName last: ", longerName);
    count =
      shorterName.replace(/\s/g, "").length +
      longerName.replace(/\s/g, "").length;

    // /count += Math.abs(name1.length - name2.length);
    setCount(count);
    //ITERATION

    /* let y = 6;
    let letter;
    while (y > 1) {
      const x = count % y;
      console.log("x:", x);
     
      //if (flames.includes(letter)) {
      flames = flames.replace(flames[x], "");
      //  }
      flames.replace(/\s/g, "");
      console.log("flames: ", flames);
      y--;
      console.log("y  :", y);
    }
    let vari;
    switch (flames) {
      case "F":
        vari = "FRIENDS";
        break;
      case "L":
        vari = "LOVERS";
        break;
      case "A":
        vari = "AFFECTION";
        break;
      case "M":
        vari = "MARRIAGE";
        break;
      case "E":
        vari = "ENEMIES";
        break;
      case "S":
        vari = "SIBLINGS";
        break;
      default:
        vari = "Error";
    }

    setResult(vari);*/
  };
  const word = "FLAMES";
  index = count;
  let p;
  const getCharacterAt = (index) => {
    for (let j = 0; i < 6; j++) {
      p = iteratorRef.current.getCharacterAt(index);
      word = word.replace(word[p], "");
      word.replace(/\s/g, "");
      console.log("word: ", word);
    }
  };
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1 items-center justify-center relative">
        <Image
          src={bgImage}
          alt="bgImage"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 ">
          <div className="flex justify-end p-4">
            <div
              className={`custom-toggle ${
                mode === 1 ? "mode1" : mode === 2 ? "mode2" : "mode3"
              }`}
              onClick={toggleMode}
            >
              <button className="p-1 bg-white bg-opacity-50 text-black rounded">
                {theme}
              </button>
            </div>
          </div>{" "}
          <div className="flex items-center justify-center text-white flex-col w-full">
            <div className="pt-10 text-9xl font-custom">Flames</div>
            <div className="flex items-center justify-center font-aesth text-lg pt-10 font-semibold w-1/3 flex-col space-y-5 bg-green-100 bg-opacity-50 rounded-lg p-5">
              {mode === 1 && (
                <>
                  <div className="flex flex-row w-full justify-center">
                    <p className="text-2xl">Enter name 1:</p>
                    <input
                      onChange={(e) => setName1(e.target.value)}
                      value={name1}
                      className="p-1 ml-2 rounded-lg w-2/3 text-black"
                    />
                  </div>
                  <div className="flex flex-row w-full justify-center">
                    <p className="text-2xl">Enter name 2:</p>
                    <input
                      value={name2}
                      onChange={(e) => setName2(e.target.value)}
                      className="p-1 ml-2 rounded-lg w-2/3 text-black"
                    />
                  </div>
                </>
              )}
              {mode === 2 && <div className="text-2xl">Content for mode 2</div>}
              {mode === 3 && <div className="text-2xl">Content for mode 3</div>}
              {mode === 1 && name1 && name2 && (
                <div>
                  <p className="text-2xl">Name 1: {name1}</p>
                  <p className="text-2xl">Name 2: {name2}</p>
                  <button
                    className="bg-blue-500 text-white font-semibold py-2 px-4 rounded"
                    onClick={compareNames}
                  >
                    Compare Names
                  </button>
                  <p className="text-2xl">
                    Number of dissimilar letters: {count}
                  </p>
                  <p className="text-2xl">r: {result}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
