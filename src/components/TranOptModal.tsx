import { useState } from "react";
import CurrencyModal from "../pages/CurrencyModal";

type TranOptModalProps = {
  open: boolean;
  close: () => void;
  action: "deposit" | "withdraw" | "transfer" | null;
};

export default function TranOptModal({ open,close,action }:TranOptModalProps) {

      const [amount,setAmount] = useState<string>("");
      const [currenyModal,setCurrencyModal] = useState(false)

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
        <>
          <CurrencyModal open={currenyModal} close={()=>setCurrencyModal(false)}/>
          <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40">

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
                <div className="bg-gray-200 flex items-center justify-between w-full h-[70px] rounded-2xl shadow-sm px-4 mb-10">
                  <div className="bg-blue-600 h-10 w-10 rounded-full "></div>
                  <span className="font-medium mr-52">GBP</span>
                  <span onClick={()=> setCurrencyModal(true)} className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer">Change ▾</span>
                </div>
              </div>
              <button className="btn-primary rounded-2xl w-full h-[50px]">
                continue
              </button>
            </div>
          </div>
        </>
      );
    }

