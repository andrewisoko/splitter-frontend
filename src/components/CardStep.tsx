import { useState } from "react";
import SwitchModal from "./SwitchModal";


type CardProps = {
    onSwitchCards: ()=>void;
    onSwitchAmounts: ()=>void;
    goNext:()=>void;
    content: string; 
}

export default function CardStep({onSwitchCards,onSwitchAmounts,goNext,content}:CardProps){
    return(
          <>
          <div className="h-full flex flex-col">
                <div className="flex-1">
                  <div className="flex justify-between">
                    <p className="font-semibold">Select card</p>
                    <button
                      onClick={() => onSwitchCards()}
                      className="mr-4 text-blue-500 hover:text-blue-700"
                    >
                      switch
                    </button>
                  </div>
                  <div className="bg-gray-200 flex items-center gap-2 w-full h-[80px] rounded-2xl shadow-lg mb-10">
                    <span className="ml-5 font-medium">{content}</span>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-semibold mb-2">Select account</p>
                    <button
                      onClick={() => onSwitchAmounts()}
                      className="mr-4 text-blue-500 hover:text-blue-700"
                    >
                      switch
                    </button>
                  </div>
                  <div className="bg-gray-200 flex items-center flex-row gap-2 w-full h-[80px] rounded-2xl shadow-lg mb-12">
                    <p className="ml-7 mt-5 font-semibold text-[20px]">0.00</p>
                    <div className="ml-60 mt-2 h-10 w-10 rounded-full bg-blue-500"></div>
                    <p className="mt-5 font-semibold text-sm">GBP</p>
                  </div>
                </div>
                <button
                  onClick={() => goNext()}
                  className="btn-primary rounded-2xl w-full h-[50px] mt-auto"
                >
                  continue
                </button>
              </div>
            </>
    )
}