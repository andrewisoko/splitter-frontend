// import { useState } from "react";
// import CurrencyModal from "../Modals/CurrencyModal";
// import AccountSwitch from "../SwitchComponents/AccountSwitch";
// import CardSwitch from "../SwitchComponents/CardSwitch";


// type BankProps = {

//     cardContent: string; 
//     currencyContent:string;
//     currencyAmount:string;
//     onSwitchCards: ()=>void;
//     onSwitchAccounts: ()=>void;
//     goNext: () => void;     
// }


// export default function BankStep({
// onSwitchCards,
//   onSwitchAccounts,
//   goNext,
//   cardContent,
//   currencyContent,
//   currencyAmount
    
// }:BankProps){

//     return(
//          <>
//            <div className="h-full flex flex-col">
//                <div className="flex-1">
//                 <AccountSwitch
//                     onSwitchAccounts={()=>onSwitchAccounts()}
//                     currencyAmount={currencyAmount}
//                     currencyContent={currencyContent}
//                 />
//                <CardSwitch
//                  onSwitchCards={()=>onSwitchCards()}
//                  cardContent={cardContent}
//                />
//                </div>
//                <button
//                  onClick={() => goNext()}
//                  className="btn-primary rounded-2xl w-full h-[50px] mt-auto"
//                >
//                  continue
//                </button>
//            </div>
//         </>
//     )
// }