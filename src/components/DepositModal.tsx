import { useState } from "react";
import CurrencyModal from "../CurrencyModal";
import SwitchModal from "./SwitchModal";



type TranOptModalProps = {
  open: boolean;
  close: () => void;
  action: "deposit" | "contract" | "transfer" | null;
};

export default function DepositModal({ open,close,action }:TranOptModalProps) {

      const [amount,setAmount] = useState<string>("");
      const [currencyModal,setCurrencyModal] = useState(false);
      // const [switchModal,setSwitchModal] = useState(false);
      const [switchModal,setSwitchModal] = useState<"cards"|"accounts"|null>(null);

      const [step,setSteps] = useState<"amount"|"cards"|"payments">("amount");

      const handleAmountChange = (e:any) => {
      const value = e.target.value;
      const numeric = value.replace(/\D/g, ""); 
      setAmount(numeric);
    };

    if (!open || !action) return null;

        const title =
        action === "deposit"
          ? "Deposit"
          : action === "contract"
          ? "Contract"
          : "Transfer";

      
      return (
        <>
          <CurrencyModal open={currencyModal} close={()=>setCurrencyModal(false)}/>
          <SwitchModal open={switchModal} close={()=>setSwitchModal(null)}/>
          
          <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40">
            <div className="h-[550px] w-full max-w-md rounded-2xl bg-white p-6 shadow-lg">

              {/*Inner features*/}
              <div className="flex items-center justify-between mb-10">
                {(step === "cards" || step ==="payments") &&(
                  <div className="fixed bg-gray-300 h-10 -w-10 rounded-full flex items-center justify-center">
                    <button
                        className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-200 hover:bg-gray-300"
                        aria-label="Go back"
                        onClick={()=>setSteps("amount")}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <path d="M15 18l-6-6 6-6" />
                        </svg>
                      </button>
                  </div>
                )}
                <h2 className="ml-36 text-xl font-semibold">{title}</h2>
                <button
                  onClick={close}
                  className="text-gray-500 hover:text-gray-700 text-xl leading-none"
                >
                  ×
                </button>
              </div>
             
              <div className="bg-slate-400 h-1 rounded-full w--full mb2"></div>
              <div className="flex mt-2  justify-between mb-2">
                <p className="text-sm">Amount</p>
                <p className="text-sm">Card</p>
                <p className="text-sm">Payment</p>
              </div>

              {/* Conditional rendering */}
              {step === "amount" &&(
              <div>
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
                <button onClick={()=> setSteps("cards")} className="btn-primary rounded-2xl w-full h-[50px]">
                  continue
                </button>
              </div>
                )
              }
              {step === "cards" &&(
                <div>

                  <div className="flex justify-between">
                   <p className="font-semibold">Select card</p>
                   <button onClick={()=> setSwitchModal("cards")} className="mr-4 text-blue-500 hover:text-blue-700">switch</button>
                  </div>
                  <div className="bg-gray-200 flex items-center gap-2 w-full h-[80px] rounded-2xl shadow-lg mb-10">
                    <span className="ml-5 font-medium">Main card •••• 1234</span>
                 
                  </div>
                   <div className="flex justify-between">
                  <p className="font-semibold mb-2">Select account</p>
                  <button onClick={()=> setSwitchModal("accounts")} className="mr-4 text-blue-500 hover:text-blue-700">switch</button>
                  </div>
                  <div className="bg-gray-200 flex items-center flex-row gap-2 w-full h-[80px] rounded-2xl shadow-lg mb-12">
                    <p className="ml-7 mt-5 font-semibold text-[20px]">0.00</p>
                    <div className="ml-60 mt-2 h-10 w-10 rounded-full bg-blue-500"></div>
                    <p className="mt-5 font-semibold text-sm">GBP</p>
                  </div>
                  <button className="btn-primary rounded-2xl w-full h-[50px]">
                  continue
                </button>
                </div>
                
              )}
            </div>
          </div>
        </>
      );
    }

