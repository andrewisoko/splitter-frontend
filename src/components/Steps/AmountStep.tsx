import { useState } from "react";
import CurrencyModal from "../Modals/CurrencyModal";

type AmountSectionProps = {
  action: string;
  amount: string;
  setAmount: (value: string) => void;
  goNext: () => void; 
};


export default function AmountStep({
  action,
  amount,
  setAmount,
  goNext,
}:AmountSectionProps){

    const [currencyModal, setCurrencyModal] = useState(false);
     const [selectedCurrency, setSelectedCurrency] = useState("GBP");

    const handleAmountChange = (e: any) => {
        const value = e.target.value;
        const numeric = value.replace(/\D/g, "");
        setAmount(numeric);
     };

    return (
        <>
            <CurrencyModal 
                open={currencyModal}
                onSelect={setSelectedCurrency}
                close={() => setCurrencyModal(false)}
                />
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
                        <span className="font-medium mr-52">{selectedCurrency}</span>
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
                        onClick={() => {
                        goNext();           
                        }}
                    className="btn-primary rounded-2xl w-full h-[50px] mt-auto"
                    >
                continue
                </button>
                </div>
            </>
    )
}