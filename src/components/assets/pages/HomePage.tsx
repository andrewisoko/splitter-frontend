
const HomePage = () => {
  return <div className="grid grid-cols-[25%_75%] gap-4" >
    <nav className="fixed bottom-2 left-0 right-0 bg-white border-t flex justify-between px-6 pt-8 pb-2 md:hidden">
      <div className="mx-auto flex justify-between gap-6">
        <button>Home</button>
        <button>Cards</button>
        <button>Recipients</button>
        <button>Payments</button>
      </div>
    </nav>
    <div>
      {/* * Username avatar*/}
      <a className="mt-5 h-16 w-28 ml-96 rounded-full flex justify-between items-center px-8 hover:bg-gray-100">
          <div className="bg-blue-500 h-12 w-12 rounded-full justify-end"></div>
          {/* <span className="text-black-700 font-semibold">Username</span> */} 
      </a>
      <div className="mt-10 ml-5">
      <p>total balance:</p>
      <p className="font-bold text-[24px]">0.00 GBP</p> 

      {/*transactions money  */}

        <div className="mt-4 flex gap-4 flex-nowrap">
          <button className="px-10 btn-primary">
            Deposit 
          </button>
          <button className="px-10 btn-primary">
            Withdraw
          </button>
          <button className="px-10 btn-primary">
            Transfer
          </button>
        </div>

        {/*accounts*/}
        <div className=" mt-4  h-[200px] w-[250px] bg-gray-200 rounded 2x1 shadow-sm flex">
          <div className="fixed mt-4 ml-24">
            <p className="mt-6 font-semibold text-[20px]">0.00</p> 
          </div>
          <div className="flex justify-start items-end px-2 pb-4">
            <div className="h-12 w-12 rounded-full bg-blue-500"></div>
            <p className="ml-2 mb-3 font-semibold">CURRENCY</p>
          </div>
        </div>

      </div>
    </div>
  </div>  
};

export default HomePage;