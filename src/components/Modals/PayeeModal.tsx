import { useState,useEffect } from "react"
import api from "../../services/api"
import { AxiosResponse } from "axios";


interface AccountProps {
    accountID:number
    balance:string,
    currency:string,
}


type Operations = {
    open: boolean;
    loading:boolean;
    account:AccountProps;
    userName:string;
    fullName:string;
    accountNumber:string;
    historyPayees:AxiosResponse[]
    onSelectCurrency: (currency:string) => void;
    onSelectFullName: (fullName:string) => void;
    onSelectUsername: (username: string) => void;
    onSelectAccountNumber: (accountNumber: string) => void;
    onSelectAccountId:(id:string)=>void
    setLoading:() => void;
    onConfirm:()=>void
    close: () => void;
}


export default function PayeeModal({
    open,
    loading,
    account,
    userName,
    fullName,
    accountNumber,
    historyPayees,
    onSelectUsername,
    onSelectAccountNumber,
    onSelectCurrency,
    onSelectAccountId,
    onSelectFullName,
    onConfirm,
    setLoading,
    close}
    :Operations){

    const [accountDetails,setAccountDetails] = useState(false);
    
    useEffect(()=>{
        if(!open){
          setAccountDetails(false)
          onSelectUsername("")
          onSelectAccountNumber("") 
        }
        
    },[open])

    const handleSelectAccount = (id:string,currency:string,fullName:string) => {
        onSelectAccountId(id)
        onSelectCurrency(currency)
        onSelectFullName(fullName)
        close();
    }

   const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     onSelectUsername(e.target.value); 
    };

    const handleAccountNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const numeric = value.replace(/\D/g, "");
         onSelectAccountNumber(numeric);
    }


    if(!open) return null;
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
             <div className="mb-12 opacity-50 bg-gray-100 rounded-2xl h-14 w-full flex justify-between items-center">
                    <p className="mt-3 ml-4 text-black">Add Payee</p>
                    <button
                    onClick={()=>setAccountDetails(true)} 
                    className="bg-gray-500 h-10 w-10 mr-3 rounded-full flex justify-center items-center hover:cursor-pointer hover:bg-gray-700">
                        <p className="mt-2 text-white text-2xl leading-none">+</p>
                    </button>
                </div>
            {accountDetails?(
                 <div className="w-full mx-auto rounded-2xl bg-white p-6 shadow mb-4">
                    <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Account Details</h3>
                    <button
                      onClick={() => setAccountDetails(false)}
                      className="text-gray-500 font-bold hover:text-gray-700 text-xl leading-none"
                    >
                        ×
                    </button>
                    </div>

                    <div className="mb-3">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                        Username
                        </label>
                        <div className="relative">
                        <input
                            type="text"
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="username"
                            value={userName}
                            onChange={handleUsernameChange}
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
                        Account Number
                        </label>
                        <div className="relative">
                        <input
                            type="text"
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            inputMode="decimal"
                            placeholder="ex: 095847228"
                            value={accountNumber}
                            onChange={handleAccountNumberChange}
                        />
                        <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">

                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <rect x="3" y="5" width="18" height="14" rx="2" ry="2"/>
                            <path d="M3 10h18" />
                            </svg>
                        </span>
                        </div>
                    </div>
                    <div className="space-y-3 mt-4">
                        <button
                        onClick={onConfirm}
                        className="btn-primary rounded-2xl w-full h-[50px] font-semibold"
                        >
                        Confirm 
                        </button>
                    </div>
                    </div>
                ):(
                    <>
                     {loading?(
                        <div>Loading accounts...</div>
                     ):(
                        <>
                            {historyPayees.length < 1?(
                                <div className="text-white">Add the first payee account</div>
                            ):(
                                historyPayees.map((response:any, index:number)=>(
                                    <div 
                                        key={index}
                                        onClick={()=>handleSelectAccount(
                                            response.data.account.accountID,
                                            response.data.account.currency,
                                            response.data.fullName
                                        )}
                                        className="bg-gray-200 flex items-center justify-between px-4 py-4 w-full h-[80px] rounded-2xl shadow-lg mb-8 hover:cursor-pointer">
                                        <p className="mt-3 font-semibold text-lg flex-shrink-0">{response.data.fullName}</p>
                                        <div className="flex items-center gap-2 flex-shrink-0">
                                            <div className="h-10 w-10 rounded-full bg-red-500 flex-shrink-0"></div>
                                            <p className="mt-3 font-semibold text-sm whitespace-nowrap">{response.data.account.currency}</p>
                                        </div>
                                    </div>
                                ))
                            )}
                         </>

                     )}
                    </>
                )}

            </div>
        </div>
            
    )
}
