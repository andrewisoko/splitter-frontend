import React from "react";


type AccountType = {

  id: number;
  balance: string;
  color: string;
  currency:string /*fix logic mess later on*/
};

type CardType = {
  id: string;
  lastFour: string; /*fix logic mess later on*/
  type: string;
  color: string;
};

type ReviewStepProps = {
  amount: string;
  currency: string;
  nameCard:string;
  currencyAccount:string;
  payeeCurrency:string;
  selectedAccount: AccountType;
  CardOrAcc: CardType | AccountType;
  action: "deposit" | "withdraw" | "transfer"|null;
  onConfirm: () => void;
};

export default function ReviewStep({
  amount,
  currency,
  selectedAccount,
  CardOrAcc,
  action,
  nameCard,
  currencyAccount,
  payeeCurrency,
  onConfirm,
}: ReviewStepProps) {
  const formatAmount = (amount: string) => {
    if (!amount) return "0.00";
    const num = parseFloat(amount) / 100;
    return num.toLocaleString("en-GB", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const getTitle = 
    action === "deposit" 
    ? "Deposit"
    : action === "withdraw"
    ? "Withdraw"
    :"Transfer"


  return (
    <div className="h-full flex flex-col m">
      {/* Simple header like SwitchModal */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Review Transaction</h3>
      </div>
      
      {/* Scrollable content area - exactly like SwitchModal */}
      <div className="flex-1 overflow-y-auto pr-1">
        <div className="mb-6">
          <div className="text-center mb-6">
            <h4 className="font-semibold text-gray-800 mb-2">Transaction Summary</h4>
            <p className="text-sm text-gray-500">Review before confirming</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="pb-3 border-b  border-gray-200 mr-6">
            <p className="text-gray-600 text-sm mb-1">Amount</p>
            <div className="flex justify-between items-center">
              <div className="font-semibold text-lg">{currency} {formatAmount(amount)}</div>
              <p className="text-sm text-gray-500">Including all fees</p>
            </div>
          </div>
          
          <div className="pb-3 flex justify-between border-b border-gray-200 mr-6">
            <p className="text-gray-600 text-sm mb-1">From</p>

            {/*Display review options From*/}
            {getTitle === "Deposit" && "lastFour" in CardOrAcc &&( 
            <div className="flex items-center gap-3">
              <div className={`h-8 w-8 rounded-full ${CardOrAcc.color}`}></div>
              <div>
                <div className="font-medium">{nameCard}</div>
            
              </div>
            </div>
            )}
            {getTitle === "Withdraw"&&(
              <div className="flex items-center gap-3">
              <div className={`h-8 w-8 rounded-full ${selectedAccount.color}`}></div>
              <div>
                <div className="font-medium">{currencyAccount} Account</div>
              </div>
            </div>
            )}
            {getTitle === "Transfer"&&(
              <div className="flex items-center gap-3">
              <div className={`h-8 w-8 rounded-full ${selectedAccount.color}`}></div>
              <div>
                <div className="font-medium">{currencyAccount} Account</div>
              </div>
            </div>
            )}
          </div>
          
          <div className="pb-3 border-b flex justify-between border-gray-200 mr-6">
            <p className="text-gray-600 text-sm mb-1">To</p>

            {/*Display review options to*/}
            {getTitle === "Deposit" &&(
            <div className="flex items-center gap-3">
              <div className={`h-8 w-8 rounded-full ${selectedAccount.color}`}></div>
              <div>
                <div className="font-medium">{currencyAccount} Account</div>
              </div>
            </div>
            )}
            {getTitle === "Withdraw" && "lastFour" in CardOrAcc &&(
            <div className="flex items-center gap-3">
              <div className={`h-8 w-8 rounded-full ${CardOrAcc.color}`}></div>
              <div>
                <div className="font-medium">{nameCard}</div>
              </div>
            </div>
            )}
             {getTitle === "Transfer"&& (
            <div className="flex items-center gap-3">
              <div className={`h-8 w-8 rounded-full ${CardOrAcc.color}`}></div>
              <div>
                <div className="font-medium">{payeeCurrency} Payee Account</div>
              </div>
            </div>
            )}
          </div>
          
          <div className="pb-3 border-b border-gray-200 mr-6">
            <div className="flex justify-between">
              <p className="text-gray-600">Type</p>
              <span className="font-medium">{getTitle}</span>
            </div>
          </div>
          
          <div className=" mr-6">
            <div className="flex justify-between">
              <p className="text-gray-600">Date</p>
              <span className="font-medium">
                {new Date().toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-200 mr-6">
          <div className="flex justify-between items-center">
            <span className="text-gray-600 font-medium">Total</span>
            <div className="text-right">
              <div className="text-xl font-bold">{currency} {formatAmount(amount)}</div>
              <div className="text-sm text-gray-500">Amount to be transferred</div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed buttons at bottom - exactly like SwitchModal */}
      <div className="space-y-3 mt-4">
        <button
          onClick={onConfirm}
          className="btn-primary rounded-2xl w-full h-[50px] font-semibold"
        >
          Confirm {getTitle}
        </button>
      </div>
    </div>
  );
}