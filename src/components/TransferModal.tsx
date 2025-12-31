import { useState } from "react";
import CurrencyModal from "../CurrencyModal";
import AmountStep from "./AmountStep";

type OpCls = {
    open: boolean;
    close: () => void;
}

export default function TransferModal({open,close}:OpCls){

    const action = "withdraw"
    const [amount, setAmount] = useState<string>("");
    const [step, setSteps] = useState<"amount" | "receiver" | "review">("amount");
    const [currencyModal, setCurrencyModal] = useState(false);

    const handleAmountChange = (e: any) => {
        const value = e.target.value;
        const numeric = value.replace(/\D/g, "");
        setAmount(numeric);
    };
    if (!open) return null
    return (
        <>
        <CurrencyModal open={currencyModal} close={() => setCurrencyModal(false)} />
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40">
        <div className="h-[550px] w-full max-w-md rounded-2xl bg-white p-6 shadow-lg flex flex-col">
            <div className="flex items-center justify-between mb-4"> 
            <h2 className={`text-xl font-semibold ${step === "amount" ? "ml-40" : "mr-10"}`}>
              Transfer
            </h2>
            <button
              onClick={close}
              className="text-gray-500 hover:text-gray-700 text-xl leading-none"
            >
              ×
            </button>
          </div>
          <div className="mb-4">
            <div className="bg-slate-400 h-1 rounded-full w-full"></div>
            <div className="flex mt-2 justify-between mb-2">
              <p className="text-sm">Amount</p>
              <p className="text-sm">Receiver</p>
              <p className="text-sm">Review</p>
            </div>
          </div>
          <div className="flex-1 overflow-hidden">
                  {step === "amount" && ( 
                    <AmountStep
                      action={action}
                      amount={amount}
                      setAmount={setAmount}
                      goNext={() => setSteps("receiver")}
                    />
             
            )}
        </div>
        </div>
    </div>
    </>
    )
}