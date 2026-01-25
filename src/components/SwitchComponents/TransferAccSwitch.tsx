

interface AccountProps {
    accountID:number,
    balance:string,
    currency:string,
}
type TransferAccountProps = {
    account: AccountProps;  
    onSwitchAccounts : () => void;
    fullName:string
    currencyPayee:string;
}


export default function TransferAccSwitch({
    fullName,
    account,   
    onSwitchAccounts
}:TransferAccountProps){
    

    return(
        <>
            <div className="flex justify-between">
                <p className="font-semibold mb-2">Select transfer account</p>
                <button
                    onClick={() => onSwitchAccounts()}
                    className="mr-4 text-blue-500 hover:text-blue-700"
                >
                add
                </button>
                </div>
                {account?(
                    <div      
                        className="bg-gray-200 flex items-center justify-between px-4 py-4 w-full h-[80px] rounded-2xl shadow-lg mb-8 hover:cursor-pointer">
                        <p className="mt-3 font-semibold text-lg flex-shrink-0">{fullName}</p>
                        <div className="flex items-center gap-2 flex-shrink-0">
                            <div className="h-10 w-10  rounded-full bg-blue-500 flex-shrink-0"></div>
                            <p className="mt-3 font-semibold text-sm whitespace-nowrap">{account.currency}</p>
                        </div>
                    </div>
                    
                ):(
                    <div className="bg-gray-200 flex items-center flex-row gap-2 w-full h-[80px] rounded-2xl shadow-lg mb-12">
                </div>
                )}
        </>
    )
}