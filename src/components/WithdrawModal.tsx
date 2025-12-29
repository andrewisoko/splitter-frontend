import { useState } from "react";

type OpCls = {
    open: boolean;
    close: () => void;
}


export default function WithdrawModal({open,close}:OpCls){
      const [step, setSteps] = useState<"withdraw" |  "review">("withdraw");
    if (!open) return null
    return (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40">
            <div className="h-[550px] w-full max-w-md rounded-2xl bg-white p-6 shadow-lg flex flex-col">
                <div className="flex items-center justify-between mb-4"> 
                    <h2 className={`text-xl font-semibold ${step === "withdraw" ? "ml-40" : "mr-10"}`}>
                     Withdraw
                    </h2>
                    <button
                        onClick={close}
                        className="text-gray-500 hover:text-gray-700 text-xl leading-none"
                    >
                    ×
                    </button>
                </div>
                <div className="flex-1 overflow-hidden">
                </div>
            </div>
        </div>
    )
}