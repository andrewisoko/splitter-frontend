
const HomePage = () => {
  return <div className="lg:grid lg:grid-cols-[25%_75%] gap-4" >
    <nav className="fixed bottom-2 left-0 right-0 bg-white border-t flex justify-between px-6 pt-8 pb-2 md:hidden">
      <div className="mx-auto flex justify-between gap-6">
        <button>Home</button>
        <button>Cards</button>
        <button>Recipients</button>
        <button>Payments</button>
      </div>
    </nav>
      <button className="hidden md:flex lg:hidden fixed top-10 left-4 z-10 h-12 w-12 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"> {/* adding the rest when starting implementing react*/}
        <svg
          className="h-6 w-6"
          stroke="currentColor"
        >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      </button>

      <aside className="hidden lg:block mt-20 p-6 border-r  border-gray-200">
        {/* Navigation Menu */}
        <div className="space-y-2 mb-8">
          <button className="w-full flex items-center px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors">
            <span className="mr-3">🏠</span>
            <span className="font-medium">Home</span>
          </button>
          <button className="w-full flex items-center px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors">
            <span className="mr-3">💳</span>
            <span className="font-medium">Cards</span>
          </button>
          <button className="w-full flex items-center px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors">
            <span className="mr-3">💰</span>
            <span className="font-medium">Payments</span>
          </button>
          <button className="w-full flex items-center px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors">
            <span className="mr-3">👥</span>
            <span className="font-medium">Recipients</span>
          </button>
        </div>
      </aside>
   
    <main className="md:col-start-2 p-4 md:p-6 pb-20 md:pb-6">
      <div>
        {/* * Username avatar*/}
        <a className="mt-5 h-16 w-28 md:w-52 ml-auto rounded-full flex justify-between items-center px-8 hover:bg-gray-100">
            <div className="bg-blue-500 h-12 w-12 rounded-full justify-end"></div>
           <span className="hidden md:inline text-black-700 font-semibold ml-2">Username</span> 
        </a>
        <div className="mt-10 ml-3">
        <p>total balance:</p>
        <p className="font-bold text-[24px] lg:text-[36px]">0.00 GBP</p> 

        {/*transactions money  */}
            <div className="mt-4 lg:mt-10 flex flex-row gap-4">
              <button className="btn-primary w-full md:w-auto">
                Deposit 
              </button>
              <button className="btn-primary w-full md:w-auto">
                Withdraw
              </button>
              <button className="btn-primary w-full md:w-auto">
                Transfer
              </button>
          </div>
      
          {/*accounts*/}
          <div className="mt-4 flex flex-row gap-4">
            <div className="h-[200px] w-1/2 md:w-[230px] bg-gray-200 rounded-2xl shadow-sm flex flex-col justify-between px-4 py-4">
                <p className="font-semibold text-[20px] self-center">0.00</p>
                <div className="flex items-end">
                  <div className="h-12 w-12 rounded-full bg-blue-500"></div>
                  <p className="ml-2 mb-3 font-semibold">CURRENCY</p>
                </div>
              </div>
            <div className="h-[200px] w-1/2 md:w-[230px] bg-gray-100 rounded-2xl shadow-sm flex flex-col justify-between px-4 py-4">
                <p className=" text-[15 px] font-semibold self-start">+100 currencies available.</p>
                <div className="flex items-center">
                  <button className="h-12 w-12 rounded-full bg-gray-300">
                      <span className="text-2xl leading-none">+</span>
                  </button>
                  <p className="ml-2 mb-1 font-semibold">Add New</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </main>
  </div>  
};

export default HomePage;