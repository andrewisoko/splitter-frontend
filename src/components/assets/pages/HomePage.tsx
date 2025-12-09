
const HomePage = () => {
  return <div className="grid grid-cols-[25%_75%] gap-4" >
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-between px-6 py-2 md:hidden">
    <button>Home</button>
    <button>Cards</button>
    <button>Recipients</button>
    <button>Payments</button>
    </nav>
    <div>
      {/* * Username avatar*/}
      <a className="mt-8 h-16 w-28 ml-80 bg-gray-500  rounded-full flex justify-between items-center px-8 hover:bg-gray-500">
          <div className="bg-blue-500 h-12 w-12 rounded-full justify-end"></div>
          {/* <span className="text-black-700 font-semibold">Username</span> */} 
      </a>
      <p className="mt-10 ml-5">total balance:</p>

    </div>
  </div>  
};

export default HomePage;