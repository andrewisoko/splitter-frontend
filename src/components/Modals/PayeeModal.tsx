import { useState } from "react"

type Operations = {
    open: boolean;
    amount:string;
    close: () => void;
    onSelectCurrency: (content:string) => void
}

export default function PayeeModal({open,amount,close,onSelectCurrency}:Operations){

    const [selectCurrency,setSelectCurrency] = useState<string|null>(null)
     const handleSelectCurrency = (content:string) => {
        setSelectCurrency(content)
        onSelectCurrency(content)
        close()
    }
    if(!open) return null
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="h-[550px] w-full max-w-md rounded-2xl bg-universe p-6 shadow-lg flex flex-col">
                  <div className="flex items-center justify-between mb-4">
              <h1 className="text-lg text-white mb-10">History Payees</h1>
              <button
                  onClick={close}
                  className="text-gray-500 font-bold hover:text-gray-700 text-xl leading-none"
                >
                  ×
                </button>
            </div>
                

                <div 
                    onClick={()=>handleSelectCurrency("GBP")}
                    className={`bg-gray-200 flex items-center flex-row gap-2 w-full h-[80px] rounded-2xl shadow-lg mb-8 hover:cursor-pointer${
                        selectCurrency === "GBP" && "bg-blue-500/20 border-2 border-blue-400 ring-2 ring-blue-400/50"
                    }`}>
                    <p className="ml-7 mt-5 font-semibold text-[20px]">{amount}</p>
                        <div className="ml-60 mt-2 h-10 w-10 rounded-full bg-blue-500"></div>
                        <p className="mt-5 font-semibold text-sm">GBP</p>
                </div>
                <div 
                    onClick={()=>handleSelectCurrency("EUR")}
                    className={`bg-gray-200 flex items-center flex-row gap-2 w-full h-[80px] rounded-2xl shadow-lg mb-8 hover:cursor-pointer${
                        selectCurrency === "EUR" && "bg-blue-500/20 border-2 border-blue-400 ring-2 ring-blue-400/50"
                    }`}>
                    <p className="ml-7 mt-5 font-semibold text-[20px]">{amount}</p>
                        <div className="ml-60 mt-2 h-10 w-10 rounded-full bg-blue-500"></div>
                        <p className="mt-5 font-semibold text-sm">EUR</p>
                </div>
                <div 
                    onClick={()=>handleSelectCurrency("USD")}
                    className={`bg-gray-200 flex items-center flex-row gap-2 w-full h-[80px] rounded-2xl shadow-lg  hover:cursor-pointer${
                        selectCurrency === "USD" && "bg-blue-500/20 border-2 border-blue-400 ring-2 ring-blue-400/50"
                    }`}>
                    <p className="ml-7 mt-5 font-semibold text-[20px]">{amount}</p>
                        <div className="ml-60 mt-2 h-10 w-10 rounded-full bg-blue-500"></div>
                        <p className="mt-5 font-semibold text-sm">USD</p>
                </div>


                <div className="mt-10 opacity-50 bg-gray-100 rounded-2xl h-14 w-full flex justify-between items-center">
                    <p className="mt-3 ml-4 text-black">Add Payee</p>
                    <button className="bg-gray-500 h-10 w-10 mr-3 rounded-full flex justify-center items-center hover:cursor-pointer hover:bg-gray-700">
                        <p className="mt-2 text-white text-2xl leading-none">+</p>
                    </button>
                </div>
            </div>
        </div>
            
    )
}