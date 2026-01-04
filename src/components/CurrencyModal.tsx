import { 
  FaSearch 
} from 'react-icons/fa';
import { useState } from 'react';

type ModalOptions = {
  open:boolean;
  onSelect: (currency: string) => void;
  close: () => void;
}

export default function CurrencyModal({open,onSelect,close}:ModalOptions){
  const [selectedCurrency, setSelectedCurrency] = useState<string | null>(null);

  const hanldeSelect = (currency:string) => {
    setSelectedCurrency(currency);
    onSelect(currency); 
    close();
  }


   if (!open) return null;

    return(
           <div className="fixed inset-0 z-50 flex items-center justify-center">
           <div className="h-[550px] w-full max-w-md rounded-2xl bg-universe p-6 shadow-lg">

            <div className="mt-3 flex items-center justify-between">
              <h1 className="font-semibold text-lg text-white">Currencies</h1>
              <button
                  onClick={close}
                  className="text-gray-500 font-bold hover:text-gray-700 text-xl leading-none"
                >
                  ×
                </button>
            </div>
            <div className="mt-10 h-12 rounded-full bg-gray-200 flex justify-between w-full items-center shadow-lg mb-8">
            <FaSearch className='ml-3 text-gray-400' size={20}/>
            <input 
              className="bg-transparent outline-none mr-44"
              type="text" 
              placeholder="Search Currency"/>
            </div>

           <div className="hover:cursor-pointer">
              <h3 className="text-white font-semibold mb-5">Select</h3>
              <div className="bg-gray-200 h-px mb-8"></div>

              {/* GBP */}
              <div
                onClick={() => hanldeSelect("GBP")}
                className={`flex flex-row gap-2 mb-3 items-center bg-transparent rounded-2xl w-full h-16 p-4 hover:border cursor-pointer transition-all ${
                  selectedCurrency === "GBP"
                    ? "bg-blue-500/20 border-2 border-blue-400 ring-2 ring-blue-400/50"
                    : "hover:border-gray-400"
                }`}
              >
                <div className="bg-gray-200 h-8 w-8 ml-4 rounded-full"></div>
                <p className="font-semibold text-md text-white">GBP</p>
                <p className="text-md text-white">British pound</p>
              </div>

              {/* EUR */}
              <div
                onClick={() => hanldeSelect("EUR")}
                className={`flex flex-row gap-2 mb-3 items-center bg-transparent rounded-2xl w-full h-16 p-4 hover:border cursor-pointer transition-all ${
                  selectedCurrency === "EUR"
                    ? "bg-blue-500/20 border-2 border-blue-400 ring-2 ring-blue-400/50"
                    : "hover:border-gray-400"
                }`}
              >
                <div className="bg-gray-200 h-8 w-8 ml-4 rounded-full"></div>
                <p className="font-semibold text-md text-white">EUR</p>
                <p className="text-md text-white">Euro</p>
              </div>

              {/* USD */}
              <div
                onClick={() => hanldeSelect("USD")}
                className={`flex flex-row gap-2 mb-3 items-center bg-transparent rounded-2xl w-full h-16 p-4 hover:border cursor-pointer transition-all ${
                  selectedCurrency === "USD"
                    ? "bg-blue-500/20 border-2 border-blue-400 ring-2 ring-blue-400/50"
                    : "hover:border-gray-400"
                }`}
              >
                <div className="bg-gray-200 h-8 w-8 ml-4 rounded-full"></div>
                <p className="font-semibold text-md text-white">USD</p>
                <p className="text-md text-white">United states dollar</p>
              </div>
            </div>
      </div>
    </div>
    )

}