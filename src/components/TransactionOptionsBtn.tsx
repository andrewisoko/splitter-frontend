import { useState } from "react";
import DepositModal from "./DepositModal";


export default function TransactionOptionsBtn (){


  const [openedModal,setOpenedModal] = useState(false);
  const [action,setActions] = useState<"deposit"|"contract"|"transfer"|null>(null);

const openFor = (type:"deposit"|"contract"|"transfer") =>{
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
              <button onClick={()=>openFor("contract")} className="btn-primary rounded-full w-full md:w-auto">
                Contract
              </button>
              <button onClick={()=>openFor("transfer")} className="btn-primary rounded-full w-full md:w-auto">
                Transfer
              </button>
          </div>
            </>

    );
};

