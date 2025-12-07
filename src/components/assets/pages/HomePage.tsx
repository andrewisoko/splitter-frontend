
const HomePage = () => {
  return <div className="grid grid-cols-2 gap-4" >
    <ol className="mt-20 ml-14">
      <p>Home</p>
      <p>Cards</p>
      <p>Transactions</p>
      <p>Payments</p>
      <p>Direct Debit</p>
    </ol>
    <div className="mt-10 bg-gray-300 h-9 w-20">
        <span className="text-black-700 justify-center">Username
        </span>
    </div>
  </div>  /** two grids,one containing logo and elements while the actual page */
};

export default HomePage;