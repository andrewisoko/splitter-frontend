import { useState,useEffect } from "react";
import CurrencyModal from "../CurrencyModal";
import AmountStep from "./AmountStep";
import ReceiverStep from "./ReceiverSteps";
import ReviewStep from "./ReviewStep";

type OpCls = {
    open: boolean;
    close: () => void;
}

export default function TransferModal({open,close}:OpCls){

    const action = "transfer"
    const [amount, setAmount] = useState<string>("");
    const [step, setSteps] = useState<"amount" | "receiver" | "review">("amount");
    const [currencyModal, setCurrencyModal] = useState(false);
    const [currency, setCurrency] = useState<string>("GBP");
    const [selectedAccount, setSelectedAccount] = useState({
      id: "1",
      name: "Main Account",
      balance: 1250.75,
      currency: "GBP",
      color: "bg-blue-500",
    });
    const [accountReceiver, setAccountReceiver] = useState({
      id: "3",
      name: "Other Account",
      balance: 88.75,
      currency: "GBP",
      color: "bg-yellow-600",
    });

     useEffect(() => {
        if (!open) {
          setSteps("amount");
          setAmount("");
        }
      }, [open]);
  

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
            {step === "receiver" && (
              <ReceiverStep
               goNext={()=>setSteps("review")}
              />
            )}
            {step === "review" && (
              <ReviewStep
              amount={amount}
              currency={currency}
              selectedAccount={selectedAccount}
              CardOrAcc={accountReceiver}
              action={action}
              onConfirm={close}
              />
            )}
        </div>
        </div>
    </div>
    </>
    )
}