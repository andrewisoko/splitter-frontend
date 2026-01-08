import { useState } from "react";
import SwitchModal from "../Modals/SwitchModal";
import AccountSwitch from "../AccountSwitch";


type CardProps = {

    onSwitchCards: ()=>void;
    onSwitchAccounts: ()=>void;
    goNext:()=>void;
    cardContent: string; 
    currencyContent:string;
    currencyAmount:string;
}

export default function CardStep({
  onSwitchCards,
  onSwitchAccounts,
  goNext,
  cardContent,
  currencyContent,
  currencyAmount
}:CardProps){
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
                    <span className="ml-5 font-medium">{cardContent}</span>
                  </div>
                  <AccountSwitch
                    onSwitchAccounts={()=>onSwitchAccounts()}
                    currencyAmount={currencyAmount}
                    currencyContent={currencyContent}
                  />
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