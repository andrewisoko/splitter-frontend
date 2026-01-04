import { useState } from "react";
import CurrencyModal from "./CurrencyModal";



type ReceiverProps = {

    goNext: () => void;     
}


export default function ReceiverStep({goNext}:ReceiverProps){
    const [currencyModal,setCurrencyModal] = useState(false)
    return(
  <>
    <CurrencyModal open={currencyModal} close={() => setCurrencyModal(false)}/>

  <div className="flex flex-col h-full">
  {/* Title */}
  <h3 className="text-lg font-semibold mb-4">Select Receiver</h3>
  
  {/* Search Bar */}
  <div className="mb-6">
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <input
        type="text"
        placeholder="Search contacts or enter email"
        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  </div>

  {/* Scrollable Content */}
  <div className="flex-1 overflow-y-auto pr-1 space-y-4">
    {/* Recent Contacts */}
    <div>
      <h4 className="text-sm font-medium text-gray-500 mb-3">Recent</h4>
      <div className="space-y-3">
        {/* Contact 1 */}
        <div className="flex items-center p-3 border border-gray-200 rounded-xl hover:border-gray-300 transition-all cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center mr-3">
            <span className="text-blue-600 font-bold">J</span>
          </div>
          <div className="flex-1">
            <div className="font-medium text-gray-800">John Doe</div>
            <div className="text-sm text-gray-500">john@example.com</div>
          </div>
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>

        {/* Contact 2 */}
        <div className="flex items-center p-3 border border-gray-200 rounded-xl hover:border-gray-300 transition-all cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center mr-3">
            <span className="text-green-600 font-bold">S</span>
          </div>
          <div className="flex-1">
            <div className="font-medium text-gray-800">Sarah Smith</div>
            <div className="text-sm text-gray-500">sarah@company.com</div>
          </div>
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>

        {/* Contact 3 */}
        <div className="flex items-center p-3 border border-gray-200 rounded-xl hover:border-gray-300 transition-all cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-100 to-red-50 flex items-center justify-center mr-3">
            <span className="text-red-600 font-bold">M</span>
          </div>
          <div className="flex-1">
            <div className="font-medium text-gray-800">Mike Johnson</div>
            <div className="text-sm text-gray-500">mike.j@business.com</div>
          </div>
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>

        {/* Contact 4 */}
        <div className="flex items-center p-3 border border-gray-200 rounded-xl hover:border-gray-300 transition-all cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-100 to-yellow-50 flex items-center justify-center mr-3">
            <span className="text-yellow-600 font-bold">E</span>
          </div>
          <div className="flex-1">
            <div className="font-medium text-gray-800">Emma Wilson</div>
            <div className="text-sm text-gray-500">emma.w@email.com</div>
          </div>
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>

        {/* Contact 5 */}
        <div className="flex items-center p-3 border border-gray-200 rounded-xl hover:border-gray-300 transition-all cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center mr-3">
            <span className="text-purple-600 font-bold">R</span>
          </div>
          <div className="flex-1">
            <div className="font-medium text-gray-800">Robert Brown</div>
            <div className="text-sm text-gray-500">robert.b@office.com</div>
          </div>
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>

    {/* Bank Transfers */}
    <div className="mb-6">
      <h4 className="text-sm font-medium text-gray-500 mb-3">Bank Transfer</h4>
      <div className="space-y-3">
        {/* Bank Transfer 1 */}
        <div className="flex items-center p-3 border border-gray-200 rounded-xl hover:border-gray-300 transition-all cursor-pointer">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-100 to-indigo-50 flex items-center justify-center mr-3">
            <div className="text-indigo-600 font-bold">B</div>
          </div>
          <div className="flex-1">
            <div className="font-medium text-gray-800">Barclays Bank</div>
            <div className="text-sm text-gray-500">•••• 5678 • Savings Account</div>
          </div>
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>

        {/* Bank Transfer 2 */}
        <div className="flex items-center p-3 border border-gray-200 rounded-xl hover:border-gray-300 transition-all cursor-pointer">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center mr-3">
            <div className="text-blue-600 font-bold">H</div>
          </div>
          <div className="flex-1">
            <div className="font-medium text-gray-800">HSBC UK</div>
            <div className="text-sm text-gray-500">•••• 1234 • Current Account</div>
          </div>
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  </div>

  {/* New Receiver */}
  <div className="mt-4 pt-4 border-t border-gray-100">
    <button className="flex items-center justify-center w-full py-3 border-2 border-dashed border-gray-300 rounded-xl text-gray-600 hover:border-gray-400 hover:text-gray-800 transition-colors">
      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
      </svg>
      Add New Receiver
    </button>
  </div>

  {/* Continue Button */}
  <div className="mt-4">
    <button onClick={()=>goNext()} className="btn-primary rounded-2xl w-full h-[50px] mt-auto">
      Continue
    </button>
  </div>
</div>
</>
    )}