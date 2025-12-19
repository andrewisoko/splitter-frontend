import { useState } from "react";


const TransactionOptionsBtn = () => {

  const name:string = "ciao"
  const [openedModal,setOpenedModal] = useState(true)
  const [action,setActions] = useState<"deposit"|"withdraw"|"transfer"|null>(null)
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