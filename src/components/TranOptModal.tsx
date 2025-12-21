import { useState } from "react";


type TranOptModalProps = {
  open: boolean;
  close: () => void;
  action: "deposit" | "withdraw" | "transfer" | null;
};

function TranOptModal({ open,close,action }:TranOptModalProps) {

  const [amount,setAmount] = useState<string>("");

  const handleAmountChange = (e:any) => {
  const value = e.target.value;
  const numeric = value.replace(/\D/g, ""); 
  setAmount(numeric);
};


  if (!open || !action) return null;

  const title =
    action === "deposit"
      ? "Deposit"
      : action === "withdraw"
      ? "Withdraw"
      : "Transfer";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

      <div className="h-[550px] w-full max-w-md rounded-2xl bg-white p-6 shadow-lg">
  
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
      
        <div className="bg-gray-200 flex items-center gap-2 w-full h-[100px] rounded-2xl shadow-lg mb-10"> 
         <input className="bg-transparent text-[30px] font-semibold  outline-none text-center"
          type="text"
          inputMode="decimal"
          placeholder="0.00"
          value={amount}
          onChange={handleAmountChange}
          />
        </div>
        <div>
          <p className="font-semibold mb-2">Currency</p>
          <button className="bg-gray-200 flex items-center justify-between w-full h-[70px] rounded-2xl shadow-sm px-4 mb-10">
            <span className="font-medium">GBP</span>
            <span className="text-sm text-gray-500">Change ▾</span>
          </button>
        </div>
        <button className="btn-primary rounded-2xl w-full h-[50px]">
          continue
        </button>
      </div>
    </div>
  );
}

export default TranOptModal;
