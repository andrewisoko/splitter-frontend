import { useState } from "react";
import CurrencyModal from "../Modals/CurrencyModal";


type BankProps = {

    // action: string;
    // amount: string;
    // setAmount: (value: string) => void;
    goNext: () => void;     
}


export default function BankStep({goNext}:BankProps){
    const [currencyModal,setCurrencyModal] = useState(false)
    const [selectedAccount,setSelectedAccount]=useState("")

    return(
        <>
        <div className="flex justify-between">
                    <p className="font-semibold mb-2">Select account</p>
                    <button
                    //   onClick={() => onSwitchAccounts()}
                      className="mr-4 text-blue-500 hover:text-blue-700"
                    >
                      switch
                    </button>
                  </div>
        
        <div className="flex flex-col h-full">
            <h3 className="text-lg font-semibold mb-4">Select Card</h3>
            
         
            <div className="space-y-4 flex-1 overflow-y-auto pr-1">
                {/*  Bank Account 1 */}
                <div className="p-4 border border-gray-200 rounded-xl cursor-pointer hover:border-gray-300 transition-all">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                    {/* Radio button */}
                    <div className="mr-3">
                        <div onClick={()=>setSelectedAccount("HSBC")} className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center">
                            {selectedAccount === "HSBC" &&(<div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>)} 
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center">
                        <h4 className="font-medium text-gray-800">HSBC UK</h4>
                        <span className="ml-2 px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded">
                            Default
                        </span>
                        </div>
                        <div className="text-sm text-gray-500">
                        •••• 1234 • Current Account
                        </div>
                    </div>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                    <div className="text-blue-600 font-bold text-sm">H</div>
                    </div>
                </div>
                </div>
                {/* Bank Account 2 */}
                <div className="p-4 border border-gray-200 rounded-xl cursor-pointer hover:border-gray-300 transition-all">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                    <div className="mr-3">
                        <div onClick={()=>setSelectedAccount("Barclays")} className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center">
                         {selectedAccount === "Barclays" &&(<div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>)} 
                        </div>
                    </div>
                    <div>
                        <h4 className="font-medium text-gray-800">Barclays</h4>
                        <div className="text-sm text-gray-500">
                        •••• 5678 • Savings Account
                        </div>
                    </div>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center">
                    <div className="text-green-600 font-bold text-sm">B</div>
                    </div>
                </div>
                </div>

                {/*  Bank Account 3 */}
                <div className="p-4 border border-gray-200 rounded-xl cursor-pointer hover:border-gray-300 transition-all">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                    <div className="mr-3">
                        <div onClick={()=>setSelectedAccount("Lloyds")}  className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center">
                             {selectedAccount === "Lloyds" &&(<div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>)} 
                        </div>
                    </div>
                    <div>
                        <h4 className="font-medium text-gray-800">Lloyds Bank</h4>
                        <div className="text-sm text-gray-500">
                        •••• 9012 • Current Account
                        </div>
                    </div>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center">
                    <div className="text-purple-600 font-bold text-sm">L</div>
                    </div>
                </div>
                </div>
            </div>
            
            {/* Add New Bank*/}
            <div className="mt-6 pt-4 border-t border-gray-100">
                <button className="flex items-center justify-center w-full py-3 border-2 border-dashed border-gray-300 rounded-xl text-gray-600 hover:border-gray-400 hover:text-gray-800 transition-colors">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Add New Bank Account
                </button>
            </div>
            {/* Continue Button */}
            <div className="mt-6">
                <button onClick={()=>goNext()} className="btn-primary rounded-2xl w-full h-[50px] mt-auto ">
                Continue
                </button>
            </div>
            </div>
        </>
    )
}