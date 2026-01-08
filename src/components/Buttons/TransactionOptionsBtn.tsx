import { useState } from "react";
import DepositModal from "../Modals/DepositModal";



const TransactionOptionsBtn = () => {


  const [openedModal,setOpenedModal] = useState(false);
  const [action,setActions] = useState<"deposit"|"withdraw"|"transfer"|null>(null);

const openFor = (type:"deposit"|"withdraw"|"transfer") =>{
    setOpenedModal(true)
    setActions(type)
  }
    return (
            <>
            <DepositModal
            open={openedModal}
             close={() => setOpenedModal(false)} 
             action={action}
             />
            
            <div className="mt-4 lg:mt-10 flex flex-row gap-4">
              <button onClick={()=>openFor("deposit")}className="btn-primary rounded-full w-full md:w-auto">
                Deposit 
              </button>
              <button onClick={()=>openFor("withdraw")} className="btn-primary rounded-full w-full md:w-auto">
                Withdraw
              </button>
              <button onClick={()=>openFor("transfer")} className="btn-primary rounded-full w-full md:w-auto">
                Transfer
              </button>
          </div>
            </>

    );
};

export default TransactionOptionsBtn;
