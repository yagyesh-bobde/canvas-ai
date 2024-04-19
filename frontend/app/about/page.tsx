import React from "react";
import { PinContainer } from "components/ui/3d-pin";

function page() {
  return (
    <div className="h-[100vh] w-[100%]">
        <div className="flex justify-center text-5xl relative top-[10%]"> The Craftsmen</div>
      <div className="flex h-[60%] w-[100%] justify-center gap-[7%]">
        <div className="h-[100%] w-[25%]">
          <div className="flex h-[40rem] w-full items-center justify-center ">
            <PinContainer
              title="/ui.aceternity.com"
              href=""
            >
              <div className="flex h-[20rem] w-[20rem] basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 ">
                <h3 className="!m-0 max-w-xs !pb-2 text-base  font-bold text-slate-100">
                  Yagyesh Bobde
                </h3>
                <div className="!m-0 !p-0 text-base font-normal">
                  <span className="text-slate-500 ">
                    Tech Stack: 
                  </span>
                </div>
                <div className="mt-4 flex w-full flex-1 rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" > 
                </div>
              </div>
            </PinContainer>
          </div>
        </div>
        <div className="w-[25%]">
          <div className="h-[60%]">
          <div className="h-[40rem] w-full flex items-center justify-center ">
      <PinContainer
        title="/ui.aceternity.com"
        href=""
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Om Chillure
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Tech Stack:
              More Stack:
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
             
          </div>
        </div>
      </PinContainer>
    </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
