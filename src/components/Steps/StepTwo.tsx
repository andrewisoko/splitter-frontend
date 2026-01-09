
import AccountSwitch from "../SwitchComponents/AccountSwitch";
import CardSwitch from "../SwitchComponents/CardSwitch";
import TransferAccSwitch from "../SwitchComponents/TransferAccSwitch";



type StepTwoProps = {

  title:string
  cardContent: string; 
  currencyContent:string;
  currencyAmount:string;
  amountPayee:string;
  currencyPayee:string;
  onSwitchCards: ()=>void;
  onSwitchAccounts: ()=>void;
  onSwitchTransAcc:()=> void;
  goNext:()=>void;
}

export default function StepTwo({
  title,
  cardContent,
  currencyContent,
  currencyAmount,
  amountPayee,
  currencyPayee,
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
                amountPayee={amountPayee}
                currencyPayee={currencyPayee}
                onSwitchAccounts={()=>onSwitchTransAcc()}
                />
              </>
            )}
            </div>
            <button
              onClick={() => goNext()}
              className="btn-primary rounded-2xl w-full h-[50px] mt-auto"
            >
              continue
            </button>
        </div>
      </>
    )
}