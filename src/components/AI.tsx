"use client";
import React, { useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import { textTotext } from "~/utils/gemini";
import { MessageSquareReply } from "lucide-react";

export default function AI() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [data, setData] = useState('');
  
  const handleClick = () => {
    setIsChatbotOpen(!isChatbotOpen);
    setresponse('')
    setData('')
  };


  const handleChatResponse = async () => {
    const response = await textTotext(data);
    setresponse(response)
  }

  const [response, setresponse] = useState("")


  return(
    <div className="container relative min-h-screen">
        <div className="spline-container fixed bottom-0 right-1 z-10 h-[20%] w-[10%]">
          <Spline
            scene="https://prod.spline.design/swFUPPJBxfIdhq9X/scene.splinecode"
            className=""
            onClick={handleClick}
          />
        </div>
        <div
          className={` fixed h-[50%] w-[30%] bg-white rounded-lg text-black text-2xl font-sans flex justify-center bottom-[18%] right-[3%] shadow-md bg-gradient-to-r from-indigo-500 to-green-700  ${
            isChatbotOpen ? "" : "hidden"
          }`}
        >
          <div className="flex flex-col gap-2 font-sans w-[90%]">
            Jarvis
            <div className="bg-black ml-1.5 h-[75%] w-[95%] rounded-md text-white p-2 pl-2">
              {response.slice(0,300)}
            </div>
            <div className="flex flex-row gap-2 w-[95%] ml-1.5">
              <input className="w-[82%] rounded-md text-white pl-1 text-md" placeholder="Search" type="text" value={data} onChange={e => setData(e.target.value)}></input>
              <button className="bg-cyan-500 w-[24%] rounded-md text-sm" onClick={handleChatResponse} > 
                <MessageSquareReply />
             </button>
            </div>
            <div>
              <button className="bg-cyan-500 w-[95%] h-6 rounded-md text-sm mb-3 ml-1.5">Switch to Voice Assisstant</button>
            </div>
          </div>
        </div>
      </div> 
    );

}
