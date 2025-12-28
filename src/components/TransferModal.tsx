import { useState } from "react";
import CurrencyModal from "../CurrencyModal";

type OpCls = {
    open: boolean;
    close: () => void;
}

export default function TransferModal({open,close}:OpCls){
    
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
              <div className="h-full flex flex-col">
                <div className="flex-1">
                  <p className="font-semibold">Enter amount</p>
                  <div className="bg-gray-200 flex items-center gap-2 w-full h-[100px] rounded-2xl shadow-lg mb-10">
                    <input
                      className="bg-transparent text-[30px] font-semibold outline-none text-center w-full"
                      type="text"
                      inputMode="decimal"
                      placeholder="0.00"
                      value={amount}
                      onChange={handleAmountChange}
                    />
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Currency</p>
                    <div className="bg-gray-200 flex items-center justify-between w-full h-[70px] rounded-2xl shadow-sm px-4 mb-10">
                      <div className="bg-blue-600 h-10 w-10 rounded-full "></div>
                      <span className="font-medium mr-52">GBP</span>
                      <span
                        onClick={() => setCurrencyModal(true)}
                        className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer"
                      >
                        Change ▾
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSteps("receiver")}
                  className="btn-primary rounded-2xl w-full h-[50px] mt-auto"
                >
                  continue
                </button>
              </div>
            )}
        </div>
        </div>
    </div>
    </>
    )
}