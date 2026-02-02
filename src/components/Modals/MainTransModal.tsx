import { useState,useEffect, use } from "react";
import AmountStep from "../Steps/AmountStep";
import SwitchModal from "./SwitchModal";
import ReviewStep from "../Steps/ReviewStep";
import StepTwo from "../Steps/StepTwo";
import PayeeModal from "./PayeeModal";
import api from "../../services/api";
import { AxiosResponse } from "axios";


type TranOptModalProps = {
  open: boolean;
  close: () => void;
  action: "deposit"|"withdraw"|"transfer"|null
 
};

interface FullNameProps {
  fullName:string
}

interface AccountProps {
    accountID:number,
    balance:string,
    currency:string,
    color: "bg-blue-500",
}

export default function MainOpModal({ open, close, action}: TranOptModalProps) {

  
  const title =
    action === "deposit"
      ? "Deposit"
      : action === "withdraw"
      ? "Withdraw"
      : "Transfer";

 /*------------------------------UseState--------------------------------------------- */

  const [amount, setAmount] = useState<string>("");
  const [userName,setUsername] = useState<string>("")
  const [balanceAccountA, setbalanceAccountA] = useState<string>("0.00");
  const [accountNumber, setaccountNumber] = useState<string>("");
  const [accounts,setAccounts] = useState<AccountProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [switchModal, setSwitchModal] = useState<"cards" | "accounts" | null>(null);
  const [payeeModal,setPayeeModal] = useState(false)
  const [step, setSteps] = useState<"amount" | "cards" | "review">("amount");
  const [currency, setCurrency] = useState<string>("GBP");
  const [currencySwitchModal, setCurrencySwitchModal] = useState<string>("USD");
  const [currencyPayee, setCurrencyPayee] = useState<string>("GBP"); /*this is mainlt to prove the data as been fetch succesfully*/
  const [cardContent, setCardContent] = useState("Main card •••• 1234");
  const [fullname, setFullname] = useState<string>("");
  const [historyPayees,setHistoryPayees] = useState<AxiosResponse[]>([])
  const [selectedAccount, setSelectedAccount] = useState<AccountProps>({
    accountID:0,
    balance:"",
    currency:"",
    color: "bg-blue-500"
  })

  const [selectedCard, setSelectedCard] = useState({
    id: "1",
    lastFour: "1234",
    type: "Visa",
    color: "bg-red-500",
  });
  const [payeeAccount, setPayeeAccount] = useState<AccountProps>({
    accountID:0,
    balance:"",
    currency:"",
    color: "bg-blue-500"
  })


  useEffect(() => {
    if (!open) {

      setSteps("amount");
      setAmount("");
      setSwitchModal(null);
    }
  }, [open]);

  /*------------------------------Handlers--------------------------------------------- */
  


  const handleBack = () => {
    if (step === "cards") {
      setSteps("amount");
    } else if (step === "review") {
      setSteps("cards");
    }
  };


/*-------------------------------------api------------------------------------------------- */

const  onConfirmTransactions = async () => {
  try {
    const numAmount = Number(formatAmount(amount))
    if (title === "Deposit"){

      await api.post("/transactions/deposit",{
        accountId:selectedAccount.accountID,
        deposit:numAmount,
        currency:currency
      })
      // console.log(`Deposit succesfull ${selectedAccount.accountID},${numAmount},${currency}`)
    }
    else if (title === "Withdraw"){
      await api.post("/transactions/withdraw",{
        accountId:selectedAccount.accountID,
        withdraw:numAmount,
        currency:currency
      })
    }
    else if ((title === "Transfer")){
      await api.post("/transactions/transfer",{
        accountAId:selectedAccount.accountID,
        accountBId:payeeAccount.accountID,
        amount:numAmount,
        currency:currency
      })
      console.log(`Transfer succesfull ${selectedAccount.accountID},${payeeAccount.accountID},${numAmount},${currency}`)
    }
  } catch (error) {
    console.log(`error during response:${error} data:${selectedAccount.accountID},${payeeAccount.accountID},${amount},${currency}`)
  }
  close()
}

  useEffect(()=>{
      const fetchAccounts = async () => {
          try {
              setLoading(true)
              const response = await api.get("/accounts/find-all-accounts")
              setAccounts(response.data)
          } catch (error) {
              console.log(`error:${error}`)
          }finally{
              setLoading(false)
          }
      };
      fetchAccounts()
  },[])

  const handlePayeeAccount = async () => {
    try {
      setLoading(true)
      const numAccNumber = Number(accountNumber)

      const response = await api.post("/accounts/retrieve-account",{
        userName:userName,
        accountNumber:numAccNumber,
      })
      // console.log(`succesfull attempt ${response.data}`)

      const accountData = response.data.account
      const fullNameData = response.data.fullName

      pushPayeeAccount(response)
      setPayeeAccount(accountData)
      setFullname(fullNameData)

      // console.log(`History payees: ${historyPayees.length}`)

    } catch (error) {
      console.log(`error:${error}, data: ${userName},${accountNumber}`)
    }
    finally{
      setLoading(false)
    }
    setPayeeModal(false)
  }

  
/*------------------------------other functions--------------------------------------------- */


  const formatAmount = (amount: string) => {
    if (!amount) return "0.00";
    const num = parseFloat(amount) / 100;
    return num.toLocaleString("en-GB", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const pushPayeeAccount = (responseData: AxiosResponse) => {
      setHistoryPayees(prev => {
        const alreadyExists = prev.some(p => p.data.account.accountID === responseData.data.account.accountID);
        
        if (alreadyExists) {
          console.log(`already contains accountID ${responseData.data.account.accountID}`);
          return prev; 
        }

        const updated = [...prev, responseData]; 
        console.log(`added accountID ${responseData.data.account.accountID}`, updated);
        return updated; 
      });
    };


  if (!open) return null;

  return (
    <>
      <SwitchModal 
        open={switchModal}
        accounts={accounts}
        loading={loading}
        onSelectBalance = {(value) => {
          setbalanceAccountA(value);   
        }}
        close={() => setSwitchModal(null)}
        onSelectCard={(value) => {
          setCardContent(value);   
        }}
        onSelectAccountId={(accountID) =>
          setSelectedAccount((prev) => ({ ...prev, accountID}))
        }
        onSelectCurrency={(value) => {
          setCurrencySwitchModal(value);   
        }}
        setAccounts={()=>setAccounts(accounts)}
        setLoading={()=>setLoading(true)}
      />


      <PayeeModal
            open={payeeModal}
            loading={loading}
            account={payeeAccount}              
            userName={userName} 
            fullName={fullname} 
            historyPayees={historyPayees}                 
            accountNumber={accountNumber} 
            onSelectAccountId={(AccountID)=>setSelectedAccount((prev) => ({ ...prev, AccountID}))}     
            onSelectCurrency={(value) => setCurrencyPayee(value)}
            onSelectFullName={(value) => setFullname(value)}
            onSelectUsername={(value) => setUsername(value)}     
            onSelectAccountNumber={(value) => setaccountNumber(value)}
            setLoading={() => setLoading(true)}
            onConfirm={handlePayeeAccount}        
            close={() => setPayeeModal(false)}
        />


      <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40">
        <div className="h-[550px] w-full max-w-md rounded-2xl bg-white p-6 shadow-lg flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            {(step === "cards" || step === "review") && (
              <button
                className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-gray-100"
                aria-label="Go back"
                onClick={handleBack}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
            )}
            <h2 className={`mt-2 mb-2 text-xl font-semibold ${step === "amount" ? "ml-40" : "mr-10"}`}>
              {title}
            </h2>
            <button
              onClick={close}
              className="text-gray-500 hover:text-gray-700 text-xl leading-none"
            >
              ×
            </button>
          </div>

          {/* Progress bar */}
          <div className="mb-4">
            {step === "amount" && (
              <div className="bg-slate-400 h-1 rounded-full w-full"></div>
            )}
            {step === "cards" && (
              <div className="h-1 rounded-full w-full">
                  <div className="h-full w-1/2  bg-green-800 float-left"></div>
                  <div className="h-full w-1/2 bg-slate-400 float-left"></div>
              </div>
            )}
            {step === "review" && (
              <div className="bg-green-800 h-1 rounded-full w-full"></div>
            )}
            <div className="flex mt-2 justify-between mb-2">
              <p className="text-sm">Amount</p>
              {(title === "Deposit" || title === "Withdraw")
              ?(<p className="text-sm">Card</p>)
              :(<p className="text-sm">Accounts</p>)
              }
              <p className="text-sm">Review</p>
            </div>
          </div>

          {/* Content Area - This is where the step content goes */}
          <div className="flex-1 overflow-hidden">
            {step === "amount" && (
               <AmountStep
                action={action}
                amount={amount}
                setAmount={setAmount}
                currency={currency}
                setCurrency={setCurrency}
                goNext={()=>setSteps("cards")}
              />
            )}

            {step === "cards"  && (
              <StepTwo
              title={title}
              cardContent={cardContent}
              currencyContent={currencySwitchModal}
              currencyAmount={balanceAccountA}
              fullName={fullname}
              payeeAccount={payeeAccount}  
              currencyPayee={currencyPayee}
              onSelectCurrency={(value) => setCurrencyPayee(value)}
              onSelectUsername={(value) => setUsername(value)}  
              onSwitchCards={() => setSwitchModal("cards")}
              onSwitchAccounts={() => setSwitchModal("accounts")}
              onSwitchTransAcc={ () => setPayeeModal(true)}
              goNext={()=> setSteps("review")}
              />
            )}

            {step === "review" && (
              <div className="h-full ">
                <ReviewStep
                  amount={amount}
                  nameCard={cardContent}
                  currencyAccount={currencySwitchModal}
                  payeeCurrency={currencyPayee}
                  currency={currency}
                  selectedAccount={selectedAccount}
                  CardOrAcc={selectedCard}
                  action={action}
                  onConfirm={onConfirmTransactions}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}