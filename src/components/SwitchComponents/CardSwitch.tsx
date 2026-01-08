import { useState } from "react";

type CardSwitchProps = {
    onSwitchCards : () => void;
    cardContent:string;
}

export default function CardSwitch({onSwitchCards,cardContent}:CardSwitchProps){
    return(
        <>
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
        </>
    )
}