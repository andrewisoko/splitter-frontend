
const HomePage = () => {
  return <div className="min-h-screen flex flex-col md:grid md:grid-cols-[25%_75%] gap-4" >
    <nav className="fixed bottom-2 left-0 right-0 bg-white border-t flex justify-between px-6 pt-8 pb-2 md:hidden">
      <div className="mx-auto flex justify-between gap-6">
        <button>Home</button>
        <button>Cards</button>
        <button>Recipients</button>
        <button>Payments</button>
      </div>
    </nav>

    <main className="flex-1 md:col-start-2 p-4 md:p-6 pb-20 md:pb-6">
      <div>
        {/* * Username avatar*/}
        <a className="mt-5 h-16 w-28 ml-auto rounded-full flex justify-between items-center px-8 hover:bg-gray-100">
            <div className="bg-blue-500 h-12 w-12 rounded-full justify-end"></div>
            {/* <span className="text-black-700 font-semibold">Username</span> */} 
        </a>
        <div className="mt-10 ml-3">
        <p>total balance:</p>
        <p className="font-bold text-[24px]">0.00 GBP</p> 

        {/*transactions money  */}
            <div className="mt-4 flex flex-row gap-4">
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
            <div className="h-[200px] w-1/2 bg-gray-200 rounded-2xl shadow-sm flex flex-col flex-shrink-0 justify-between px-4 py-4">
                <p className="font-semibold text-[20px] self-center">0.00</p>
                <div className="flex items-end">
                  <div className="h-12 w-12 rounded-full bg-blue-500"></div>
                  <p className="ml-2 mb-1 font-semibold">CURRENCY</p>
                </div>
              </div>
            <div className="h-[200px] w-1/2 bg-gray-100 rounded-2xl shadow-sm flex flex-col justify-between px-4 py-4">
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