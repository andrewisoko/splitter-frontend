const TransactionOptionsBtn = () => {
    return (
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

    );
};

export default TransactionOptionsBtn;