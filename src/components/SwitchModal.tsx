type OpCls = {
    open: boolean;
    close: () => void;
}

export default function SwitchModal({open,close}:OpCls){
    if (!open) return null;

    return(
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="h-[550px] w-full max-w-md rounded-2xl bg-universe p-6 shadow-lg">
             
            <div className="mt-3 flex items-center justify-between mb-12">
              <h1 className=" text-lg text-white">Cards Available</h1>
              <button
                  onClick={close}
                  className="text-gray-500 font-bold hover:text-gray-700 text-xl leading-none"
                >
                  ×
                </button>
            </div>
                <div className="opacity-50 bg-gray-100 rounded-2xl h-14 w-full flex justify-between items-center mb-10">
                    <p className="mt-3 ml-4 text-black">Add card</p>
                    <div className="bg-gray-500 h-10 w-10 mr-3 rounded-full flex justify-center items-center hover:cursor-pointer hover:bg-gray-700">
                        <p className="mt-2 text-white text-2xl leading-none">+</p>
                    </div>
                </div>
                <div className=" bg-gray-400 rounded-2xl h-20 w-full flex justify-between items-center mb-10">
                    <span className="ml-5 font-medium">second card •••• 1234</span>
                </div>
                <div className=" bg-gray-400 rounded-2xl h-20 w-full flex justify-between items-center mb-10">
                    <span className="ml-5 font-medium">third card •••• 1234</span>
                </div>
                <div className=" bg-gray-400 rounded-2xl h-20 w-full flex justify-between items-center mb-10">
                    <span className="ml-5 font-medium">fourth card •••• 1234</span>
                </div>
            </div>
        </div>   
    )
}