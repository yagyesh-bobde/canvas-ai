"use client";
import React from "react";
import Spline from "@splinetool/react-spline";
import { Button } from "./ui/button";

export default function Bubble() {
  const [isChatbotOpen, setIsChatbotOpen] = React.useState(false);

  const handleClick = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  return (
    <div className="container relative min-h-screen">
      <div className="spline-container fixed bottom-0 right-1 z-10 h-[20%] w-[10%]">
        <Spline
          scene="https://prod.spline.design/swFUPPJBxfIdhq9X/scene.splinecode"
          className=""
          onClick={handleClick}
        />
      </div>
      <div
        className={` fixed h-[50%] w-[20%] bg-white rounded-lg text-black text-2xl font-sans flex justify-center bottom-[18%] right-[3%] shadow-md bg-gradient-to-r from-indigo-500 to-green-700  ${
          isChatbotOpen ? "" : "hidden"
        }`}
      >
      <div className="flex flex-col gap-2 font-sans ">
        Arty
        <div className="bg-black ml-1.5 h-[75%] w-[95%] rounded-md">
          {/* {response} */}
        </div>
        <div className="flex flex-row gap-2 w-[95%] ml-1.5">
          <input className="w-[82%] rounded-md text-white pl-1 "></input>
          <button className="bg-cyan-500 w-[24%] rounded-md text-sm"> 
          Click
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}
