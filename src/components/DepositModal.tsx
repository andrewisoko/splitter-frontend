import { useState } from "react";
import AmountStep from "./AmountStep";
import SwitchModal from "./SwitchModal";
import ReviewStep from "./ReviewStep";
import CardStep from "./CardStep";

type TranOptModalProps = {
  open: boolean;
  close: () => void;
 
};

export default function DepositModal({ open, close}: TranOptModalProps) {

  const action = "deposit";

  const [amount, setAmount] = useState<string>("");
  const [switchModal, setSwitchModal] = useState<"cards" | "accounts" | null>(null);
  const [step, setSteps] = useState<"amount" | "cards" | "review">("amount");
  const [currency, setCurrency] = useState<string>("GBP");
  const [selectedAccount, setSelectedAccount] = useState({
    id: "1",
    name: "Main Account",
    balance: 1250.75,
    currency: "GBP",
    color: "bg-blue-500",
  });
  const [selectedCard, setSelectedCard] = useState({
    id: "1",
    name: "Main Card",
    lastFour: "1234",
    type: "Visa",
    color: "bg-blue-600",
  });

  
  
  const handleConfirmTransaction = () => {
    console.log("Transaction confirmed:", {
      action,
      amount: formatAmount(amount),
      currency,
      fromCard: selectedCard,
      toAccount: selectedAccount,
    });
    close();
  };


  const handleBack = () => {
    if (step === "cards") {
      setSteps("amount");
    } else if (step === "review") {
      setSteps("cards");
    }
  };

  const formatAmount = (amount: string) => {
    if (!amount) return "0.00";
    const num = parseFloat(amount) / 100;
    return num.toLocaleString("en-GB", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  if (!open) return null;

  return (
    <>
      <SwitchModal open={switchModal} close={() => setSwitchModal(null)} />

      <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40">
        <div className="h-[550px] w-full max-w-md rounded-2xl bg-white p-6 shadow-lg flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            {(step === "cards" || step === "review") && (
              <button
                className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-gray-100"
                aria-label="Go back"
                onClick={handleBack}
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
            )}
            <h2 className={`text-xl font-semibold ${step === "amount" ? "ml-40" : "mr-10"}`}>
              Deposit
            </h2>
            <button
              onClick={close}
              className="text-gray-500 hover:text-gray-700 text-xl leading-none"
            >
              ×
            </button>
          </div>

          {/* Progress bar */}
          <div className="mb-4">
            <div className="bg-slate-400 h-1 rounded-full w-full"></div>
            <div className="flex mt-2 justify-between mb-2">
              <p className="text-sm">Amount</p>
              <p className="text-sm">Card</p>
              <p className="text-sm">Review</p>
            </div>
          </div>

          {/* Content Area - This is where the step content goes */}
          <div className="flex-1 overflow-hidden">
            {step === "amount" && (
                 <AmountStep
                action={action}
                amount={amount}
                setAmount={setAmount}
                goNext={() => setSteps("cards")}
              />
            )}

            {step === "cards" && (
              <CardStep
              onSwitchCards={() => setSwitchModal("cards")}
              onSwitchAmounts={ () => setSwitchModal("accounts")}
              goNext={()=> setSteps("review")}
              />
            )}

            {step === "review" && (
              <div className="h-full ">
                <ReviewStep
                  amount={amount}
                  currency={currency}
                  selectedAccount={selectedAccount}
                  selectedCard={selectedCard}
                  action={action}
                  onConfirm={handleConfirmTransaction}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}