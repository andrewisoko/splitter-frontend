import { useState } from "react";


type TranOptModalProps = {
  open: boolean;
  close: () => void;
  action: "deposit" | "withdraw" | "transfer" | null;
};

function TranOptModal({ open,close,action }:TranOptModalProps) {

  const [amount,setAmount] = useState<string>("")

  if (!open || !action) return null;

  const title =
    action === "deposit"
      ? "Deposit"
      : action === "withdraw"
      ? "Withdraw"
      : "Transfer";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

      <div className="h-[500px] w-full max-w-md rounded-2xl bg-white p-6 shadow-lg">
  
        <div className="flex items-center justify-between mb-14">
          <h2 className="ml-36 text-xl font-semibold">{title}</h2>
          <button
            onClick={close}
            className="text-gray-500 hover:text-gray-700 text-xl leading-none"
          >
            ×
          </button>
        </div>
 
        <p className="font-semibold">Enter amount</p>
      
        <div className="bg-gray-300 flex items-center gap-2 w-full h-[100px] rounded-2xl shadow-lg mb-2"> 
         <input className="bg-transparent text-[30px] font-semibold  outline-none text-center"
          type="text"
          inputMode="decimal"
          placeholder="0.00"
          value={amount}
          />
        </div>
        <p className="font-semibold">Currency</p>
        <div className="bg-gray-300 flex w-full h-[70px] rounded-2xl shadow-lg mb-10">
        card
        </div>
        <button className="btn-primary rounded-2xl w-full h-[50px]">
          continue
        </button>
      </div>
    </div>
  );
}

export default TranOptModal;
