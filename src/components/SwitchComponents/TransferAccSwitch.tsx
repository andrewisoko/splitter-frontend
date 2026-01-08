
type TransferAccountProps = {
    onSwitchAccounts : () => void;
    // currencyAmount:string;
    // currencyContent:string;
}


export default function TransferAccSwitch({onSwitchAccounts}:TransferAccountProps){

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
            </div>
        </>
    )
}