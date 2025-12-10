
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
      <a className="mt-5 h-16 w-28 ml-80 bg-gray-500  rounded-full flex justify-between items-center px-8 hover:bg-gray-500">
          <div className="bg-blue-500 h-12 w-12 rounded-full justify-end"></div>
          {/* <span className="text-black-700 font-semibold">Username</span> */} 
      </a>
      <div className="mt-10 ml-5">
      <p>total balance:</p>
      <p className="font-bold text-[24px]">0.00 GBP</p> 
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
      </div>
    </div>
  </div>  
};

export default HomePage;