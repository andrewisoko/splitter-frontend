import React, { useState,useEffect } from "react";
import api from "../../services/api";



const CreateAccountCard = () =>{

    const [amount,setAmount] = useState<string>("");
    const [currency,setCurrency] = useState<"GBP"|"USD"|"EUR">("GBP")
    const [newAccountForm,setNewAccountForm] = useState(false);

    useEffect (()=>{
        if(!newAccountForm){
            setAmount("")
            setCurrency("GBP")
        }
    },[newAccountForm])


    const handleAmountChange = (e: any) => {
        const value = e.target.value;
        const numeric = value.replace(/\D/g, "");
        setAmount(numeric);
     };

    const handleOnSubmit = async (event:any) => {
        event.preventDefault()
        await api.post("accounts/create",{
            currency:currency,
            initialDeposit:amount
        }
        )
        console.log("account created!")  
        setNewAccountForm(false)
    }


    return(
    <>
        {newAccountForm &&(
            <>
            {/* Backdrop wrapper for Tailwind modal */}
            <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40">
            {/* Modal panel with Tailwind utilities */}
            <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
                <h2 className="mb-4 text-xl font-semibold text-gray-800">
                New Account
                </h2>

                <form
                    action = "create"
                    method="post"
                    className="space-y-4"
                 >
                {/* Amount field */}
                <div>
                    <label
                    htmlFor="amount"
                    className="mb-1 block text-sm font-medium text-gray-700"
                    >
                    Amount
                    </label>
                    <input
                    id="amount"
                    type="text"
                    inputMode="decimal"
                    className="block w-full rounded-xl border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                    placeholder="0.00"
                    value={amount}
                    onChange={handleAmountChange}
                    />
                </div>

                {/* Currency select */}
                <div>
                    <label
                    htmlFor="currency"
                    className="mb-1 block text-sm font-medium text-gray-700"
                    >
                    Currency
                    </label>
                    <select

                    id="currency"
                    className="block w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                    >
                    <option onClick={()=>setCurrency("GBP")} value="GBP">GBP</option>
                    <option onClick={()=>setCurrency("EUR")} value="EUR">EUR</option>
                    <option onClick={()=>setCurrency("USD")} value="USD">USD</option>
                    </select>
                </div>

                {/* Modal actions */}
                <div className="mt-6 flex justify-end gap-3">
                    <button
                    onClick={()=>setNewAccountForm(false)}
                    type="button"
                    className="rounded-full px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100"
                    >
                    Cancel
                    </button>
                    <button
                    onClick={handleOnSubmit}
                    type="submit"
                    className="rounded-full bg-purple-700 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500/60"
                    >
                    Create
                    </button>
                </div>
                </form>
            </div>
            </div>

            </>
        )}
        <div className="h-[200px] w-1/2 md:w-[230px] bg-gray-100 rounded-2xl shadow-sm flex flex-col justify-between px-4 py-4">
            <p className=" text-[15 px] font-semibold self-start">+100 currencies available.</p>
            <div className="flex items-center">
                <button onClick={()=>setNewAccountForm(true)} className="h-12 w-12 rounded-full bg-gray-300">
                    <span className="text-2xl leading-none">+</span>
                </button>
                <p className="ml-2 mb-1 font-semibold">Add New</p>
             </div>
        </div>
    </>
    
    );
};

export default CreateAccountCard;