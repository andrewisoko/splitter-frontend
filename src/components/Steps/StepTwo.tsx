
import AccountSwitch from "../SwitchComponents/AccountSwitch";
import CardSwitch from "../SwitchComponents/CardSwitch";
import TransferAccSwitch from "../SwitchComponents/TransferAccSwitch";
import { useState } from "react";


interface AccountProps {
    accountID:number,
    balance:string,
    currency:string,
}


type StepTwoProps = {

  title:string
  cardContent: string; 
  currencyContent:string;
  currencyAmount:string;
  fullName:string;
  currencyPayee:string;
  payeeAccount: AccountProps;     
  onSwitchCards: ()=>void;
  onSwitchAccounts: ()=>void;
  onSwitchTransAcc:()=> void;
  onSelectCurrency: (content:string) => void;
  onSelectUsername: (username: string) => void;
  goNext:()=>void;
}

export default function StepTwo({
  title,
  cardContent,
  currencyContent,
  currencyAmount,
  fullName,
  currencyPayee,
  payeeAccount, 
  onSwitchCards,
  onSwitchAccounts,
  onSwitchTransAcc,
  goNext,
}:StepTwoProps){

    return(
      <>
        <div className="h-full flex flex-col">
            <div className="flex-1">
            {title === "Deposit" && (
              <>
              <CardSwitch
                onSwitchCards={()=>onSwitchCards()}
                cardContent={cardContent}
              />
              <AccountSwitch
                  onSwitchAccounts={()=>onSwitchAccounts()}
                  currencyAmount={currencyAmount}
                  currencyContent={currencyContent}
                />
              </>
            )}
            {title === "Withdraw" && (
              <>
                <AccountSwitch
                    onSwitchAccounts={()=>onSwitchAccounts()}
                    currencyAmount={currencyAmount}
                    currencyContent={currencyContent}
                    
                  />
                <CardSwitch
                  onSwitchCards={()=>onSwitchCards()}
                  cardContent={cardContent}
                />
              </>
            )}
            {title === "Transfer" && (
              <>
              <AccountSwitch
                  onSwitchAccounts={()=>onSwitchAccounts()}
                  currencyAmount={currencyAmount}
                  currencyContent={currencyContent}
                />
              <TransferAccSwitch
                fullName={fullName}
                account={payeeAccount}  
                currencyPayee={currencyPayee}
                onSwitchAccounts={()=>onSwitchTransAcc()}
                />
              </>
            )}
            </div>
            <button
              onClick={() => goNext()}
              className="btn-primary rounded-2xl w-full h-[50px]"
            >
              continue
            </button>
        </div>
      </>
    )
}