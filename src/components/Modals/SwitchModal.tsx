import { useState,useEffect } from "react";
import api from "../../services/api";

interface AccountProps {
    accountID:number,
    balance:string,
    currency:string,
}

type OpCls = {
    open: "cards" | "accounts"| null;
    accounts:AccountProps[];
    loading:boolean;
    close: () => void; 
    onSelectBalance:(balance:string) => void;
    onSelectCard: (content:string) => void;
    onSelectCurrency: (content:string) => void;
    onSelectAccountId: (id: number) => void;
    setAccounts:([]) => void;
    setLoading:() => void;
}


export default function SwitchModal(
    {
    open,
    accounts,
    loading,
    onSelectBalance,
    close,
    onSelectCard,
    onSelectCurrency,
    setAccounts,
    setLoading,
    onSelectAccountId
}:OpCls){
    const [cardDetails,setCardDetails]= useState(false);
    const [selectcard,setSelectCard] = useState<string|null>(null);
    const [selectCurrency,setSelectCurrency] = useState<string|null>(null);
    
/*---------------------------------------handlers---------------------------------------------------------*/


    const handleSelectCard = (content:string) =>{
        setSelectCard(content);
        onSelectCard(content);
        close()
        }
    const handleSelectAccount = (id:number,content:string,balance:string) => {
        setSelectCurrency(content);
        onSelectCurrency(content);
        onSelectAccountId(id); 
        onSelectBalance(balance);
        console.log(id)
        close()
    }

/*---------------------------------------useEffect---------------------------------------------------------*/
    useEffect(()=>{
        if(!open){
            setCardDetails(false)
        }
    },[open])

    
    if (!open) return null;

    return(
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="h-[550px] w-full max-w-md rounded-2xl bg-universe p-6 shadow-lg flex flex-col">
            
            {open === "cards" && (
                <>
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-lg text-white">Cards Available</h1>
              <button
                  onClick={close}
                  className="text-gray-500 font-bold hover:text-gray-700 text-xl leading-none"
                >
                  ×
                </button>
            </div>
                <div className="opacity-50 bg-gray-100 rounded-2xl h-14 w-full flex justify-between items-center mb-16">
                    <p className="mt-3 ml-4 text-black">Add card</p>
                    <button onClick={()=>setCardDetails(true)} className="bg-gray-500 h-10 w-10 mr-3 rounded-full flex justify-center items-center hover:cursor-pointer hover:bg-gray-700">
                        <p className="mt-2 text-white text-2xl leading-none">+</p>
                    </button>
                </div>
                
                {/* Scrollable content area */}
                <div className="flex-1 overflow-y-auto pr-1">
                    {cardDetails ? (
                    <div className="w-full mx-auto rounded-2xl bg-white p-6 shadow mb-4">
                    <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Card Details</h3>
                    <button
                      onClick={() => setCardDetails(false)}
                      className="text-gray-500 font-bold hover:text-gray-700 text-xl leading-none"
                    >
                        ×
                    </button>
                    </div>

                    <div className="mb-3">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                        Account Name
                        </label>
                        <div className="relative">
                        <input
                            type="text"
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Account Name"
                        />
                        <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M5.121 17.804A9 9 0 1118.88 6.196 9 9 0 015.12 17.804z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </span>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                        Card Number
                        </label>
                        <div className="relative">
                        <input
                            type="text"
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="•••• •••• •••• ••••"
                        />
                        <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">

                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <rect x="3" y="5" width="18" height="14" rx="2" ry="2"/>
                            <path d="M3 10h18" />
                            </svg>
                        </span>
                        </div>
                    </div>
                    <div className="mb-3 grid grid-cols-2 gap-3">
                        <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Expire Date
                        </label>
                        <input
                            type="text"
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="MM/YY"
                        />
                        </div>
                        <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            CVC
                        </label>
                        <input
                            type="text"
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="123"
                        />
                        </div>
                    </div>

                    <div className="mb-4 flex items-center space-x-2">
                        <input
                        id="save-card"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label className="text-sm text-gray-700">
                        Save Card for Later
                        </label>
                    </div>
                    <button
                        type="button"
                        className="w-full rounded-xl bg-universe py-3 text-sm font-semibold text-white"
                    >
                    ADD CARD
                    </button>
                    </div>
                    ) : (
                    <>
                        <div 
                            onClick={()=>handleSelectCard("Main card •••• 1234")}
                            className={`bg-gray-400 rounded-2xl h-20 w-full flex justify-between items-center mb-4 hover:cursor-pointer${
                                selectcard === "Main card •••• 1234" && "bg-blue-500/20 border-2 border-blue-400 ring-2 ring-blue-400/50"
                            }`}>
                            <span className="ml-5 font-medium">Main card •••• 1234</span>
                        </div>
                        <div 
                            onClick={()=>handleSelectCard("Second card •••• 1234")}
                            className={`bg-gray-400 rounded-2xl h-20 w-full flex justify-between items-center mb-4 hover:cursor-pointer${
                                selectcard === "Second card •••• 1234" && "bg-blue-500/20 border-2 border-blue-400 ring-2 ring-blue-400/50"
                            }`}>
                            <span className="ml-5 font-medium">Second card •••• 1234</span>
                        </div>
                        <div 
                            onClick={()=>handleSelectCard("Third card •••• 1234")}
                            className={`bg-gray-400 rounded-2xl h-20 w-full flex justify-between items-center mb-4 hover:cursor-pointer${
                                selectcard === "Third card •••• 1234" && "bg-blue-500/20 border-2 border-blue-400 ring-2 ring-blue-400/50"
                            }`}>
                            <span className="ml-5 font-medium">Third card •••• 1234</span>
                        </div>
                    </>
                    )}
                </div>
                </>
                )}
                { open === "accounts" && (
                        <>
                         <div className="flex items-center justify-between mb-12">
                            <h1 className="text-lg text-white">Select Accounts</h1>
                            <button
                                onClick={close}
                                className="text-gray-500 font-bold hover:text-gray-700 text-xl leading-none"
                                >
                                ×
                                </button>
                            </div>
                            {loading?(
                                <div>Loading accounts...</div>
                                ): accounts.length > 0 ?(
                                    accounts.map((account:AccountProps, index: number) => (
                                         <div 
                                            key={index}
                                            onClick={()=>handleSelectAccount(account.accountID,account.currency,account.balance)}
                                            className={`bg-gray-200 flex items-center flex-row gap-2 w-full h-[80px] rounded-2xl shadow-lg mb-8 hover:cursor-pointer${
                                                selectCurrency === account.currency && "bg-blue-500/20 border-2 border-blue-400 ring-2 ring-blue-400/50"
                                            }`}>
                                            <p className="ml-7 mt-5 font-semibold text-[20px]">{account.balance}</p>
                                                <div className="ml-60 mt-2 h-10 w-10 rounded-full bg-blue-500"></div>
                                                <p className="mt-5 font-semibold text-sm">{account.currency}</p>
                                        </div>
                                    ))
                                ):(
                                    <div className="text-white">No accounts found</div>
                                )
                            }
                        </>

                    )
                }
            </div>
        </div>   
    )
}