import { useState } from "react";
import DepositModal from "../Modals/DepositModal";
import WithdrawModal from "../Modals/WithdrawModal";
import TransferModal from "../Modals/TransferModal";


export default function TransactionOptionsBtn (){


  const [depositModal,setDepositModal] = useState(false);
  const [contractModal,setContractModal] = useState(false);
  const [transferModal,setTransferModal] = useState(false);



    return (
            <>
            <DepositModal 
            open={depositModal}
             close={() => setDepositModal(false)} 
             />
            <WithdrawModal
            open={contractModal}
             close={() => setContractModal(false)} 
            />
            <TransferModal
            open={transferModal}
             close={() => setTransferModal(false)} 
            />

            <div className="mt-4 lg:mt-10 flex flex-row gap-4">
              <button onClick={()=>setDepositModal(true)}className="btn-primary rounded-full w-full md:w-auto">
                Deposit 
              </button>
              <button onClick={()=>setContractModal(true)} className="btn-primary rounded-full w-full md:w-auto">
                Withdraw
              </button>
              <button onClick={()=>setTransferModal(true)} className="btn-primary rounded-full w-full md:w-auto">
                Transfer
              </button>
          </div>
            </>

    );
};

