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
              {/* {response} This is the response */}
              {response.slice(0,300)}
            </div>
            <div className="flex flex-row gap-2 w-[95%] ml-1.5">
              <input className="w-[82%] rounded-md text-white pl-1 text-md" type="text" value={data} onChange={e => setData(e.target.value)}></input>
              <button className="bg-cyan-500 w-[24%] rounded-md text-sm" onClick={handleChatResponse} > 
                <MessageSquareReply />
             </button>
            </div>
          </div>
        </div>
      </div> 
    );
  // const [isChatbotOpen, setIsChatbotOpen] = React.useState(false);
  // 
  // const [response, setResponse] = useState('')
  
  

  // const chatbot = () => {
    
  
  //   const callLLm = async () => {
  //     fetch(`http://localhost:5000/get-response?question=${data}`)
  //     .then(response => response.text())
  //     .then(data => setResponse(data))
  //     .catch(e => console.log(e))
  
  //     console.log(response)
  //   }
  
  //   useEffect(() => {
  //     callLLm()
  //   }, [])

  //   return (
      
  // }

  // return chatbot();
}
