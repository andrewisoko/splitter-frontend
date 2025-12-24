import { 
  FaSearch 
} from 'react-icons/fa';

type ModalOptions = {
  open:boolean;
  close: () => void;
}

export default function CurrencyModal({open,close}:ModalOptions){
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

            <div>
              <h3 className='text-white font font-semibold mb-5'>Select</h3>
              <div className='bg-gray-200 h-px mb-8'></div>
              <div className='flex flex-row gap-2 mb-3 items-center bg-transparent rounded-2xl w-full h-16 hover:border'>
                <div className='bg-gray-200 h-8 w-8 ml-4 rounded-full'></div>
                <p className='font-semibold text-md text-white mt-4'>GBP</p>
                <p className='text-md text-white mt-4 '>British pound</p>
              </div>
              <div className='flex flex-row gap-2 mb-3 items-center bg-transparent rounded-2xl w-full h-16 hover:border'>
                <div className='bg-gray-200 h-8 w-8 ml-4 rounded-full'></div>
                <p className='font-semibold text-md text-white mt-4'>EUR</p>
                <p className='text-md text-white mt-4 '>Euro</p>
              </div>
  
              <div className='flex flex-row gap-2 mb-3 items-center bg-transparent rounded-2xl w-full h-16 hover:border'>
                <div className='bg-gray-200 h-8 w-8 ml-4 rounded-full'></div>
                <p className='font-semibold text-md text-white mt-4'>USD</p>
                <p className='text-md text-white mt-4 '>United states dollar</p>
              </div>

            </div>
      </div>
    </div>
    )

}