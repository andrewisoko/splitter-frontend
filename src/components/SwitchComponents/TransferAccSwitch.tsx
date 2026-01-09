
type TransferAccountProps = {
    onSwitchAccounts : () => void;
    amountPayee:string;
    currencyPayee:string;
}


export default function TransferAccSwitch({amountPayee,currencyPayee,onSwitchAccounts}:TransferAccountProps){

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
                <div className="bg-gray-200 flex items-center flex-row gap-2 w-full h-[80px] rounded-2xl shadow-lg mb-12">
                    <p className="ml-7 mt-5 font-semibold text-[20px]">{amountPayee}</p>
                    <div className="ml-60 mt-2 h-10 w-10 rounded-full bg-blue-500"></div>
                    <p className="mt-5 font-semibold text-sm">{currencyPayee}</p>
            </div>
        </>
    )
}