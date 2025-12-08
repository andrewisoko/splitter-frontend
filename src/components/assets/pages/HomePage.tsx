
const HomePage = () => {
  return <div className="grid grid-cols-[25%_75%] gap-4" >
    <ol className="mt-20 ml-14">
      <p>Home</p>
      <p>Cards</p>
      <p>Transactions</p>
      <p>Payments</p>
      <p>Direct Debit</p>
    </ol>
    <div className="mt-10">
      {/* * Username avatar*/}
      <div className="h-1/4 w-1/4 rounded-full flex justify-between items-center px-8 hover:bg-gray-50">
          <div className="bg-blue-500 h-12 w-12 rounded-full justify-end"></div>
          <span className="text-black-700 font-semibold">Username</span>
      </div>
      <p className="flex">total balance</p>

    </div>
  </div>  
};

export default HomePage;