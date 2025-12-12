const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col md:grid md:grid-cols-[25%_75%] gap-4">
      {/* Mobile Navigation - Fixed bottom */}
      <nav className="md:hidden fixed bottom-2 left-0 right-0 bg-white border-t flex justify-between px-6 pt-8 pb-2 z-50">
        <div className="mx-auto flex justify-between gap-6">
          <button>Home</button>
          <button>Cards</button>
          <button>Recipients</button>
          <button>Payments</button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 md:col-start-2 p-4 md:p-6 pb-20 md:pb-6">
        {/* Username avatar - Responsive positioning */}
        <div className="flex justify-end mb-6 md:mb-10">
          <a className="h-12 w-12 md:h-16 md:w-16 rounded-full flex items-center justify-center hover:bg-gray-100">
            <div className="bg-blue-500 h-8 w-8 md:h-12 md:w-12 rounded-full"></div>
          </a>
        </div>

        {/* Balance Section */}
        <div className="mb-8">
          <p className="text-gray-600 mb-1">total balance:</p>
          <p className="font-bold text-2xl md:text-3xl">0.00 GBP</p>

          {/* Transaction Buttons - Stack on mobile, row on larger */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button className="btn-primary w-full sm:w-auto">
              Deposit
            </button>
            <button className="btn-primary w-full sm:w-auto">
              Withdraw
            </button>
            <button className="btn-primary w-full sm:w-auto">
              Transfer
            </button>
          </div>
        </div>

        {/* Accounts Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Accounts</h2>
          
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Currency Account Card */}
            <div className="flex-1 min-w-0 bg-gray-100 rounded-2xl shadow-sm p-4 md:p-6 flex flex-col justify-between h-[180px] md:h-[200px]">
              <p className="font-semibold text-xl md:text-2xl text-center">0.00</p>
              <div className="flex items-center">
                <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-blue-500"></div>
                <p className="ml-3 font-semibold">CURRENCY</p>
              </div>
            </div>

            {/* Add New Account Card */}
            <div className="flex-1 min-w-0 bg-gray-50 border-2 border-dashed border-gray-300 rounded-2xl p-4 md:p-6 flex flex-col justify-between h-[180px] md:h-[200px]">
              <p className="text-sm md:text-base font-semibold text-gray-600">
                +100 currencies available.
              </p>
              <div className="flex items-center">
                <button className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition">
                  <span className="text-xl md:text-2xl font-light">+</span>
                </button>
                <p className="ml-3 font-semibold">Add New</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;