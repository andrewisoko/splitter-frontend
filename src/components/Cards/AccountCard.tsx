import { useState,useEffect } from "react";
import api from "../../services/api";

interface AccountProps {
  id:number
  balance:string;
  currency:string;
}

type AccountCardProps = {
  onSelectcurrency:(currency:string)=>void
  onSelectBalance:(balance:string)=>void
}
const AccountCard = ({
  onSelectcurrency,
  onSelectBalance,
}:AccountCardProps) => {

  const [accounts,setAccounts] = useState<AccountProps[]>([])
  const [loading, setLoading] = useState(true);

    useEffect(() => {
  const fetchAccounts = async () => {
    try {
      setLoading(true);
      const response = await api.get("/accounts/find-all-accounts");
      // console.log("API Response:", response.data); 
      // console.log("Response status:", response.status);
      setAccounts(response.data); 
    } catch (error) {
      console.error("Failed to fetch accounts:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchAccounts();
}, []);

const selectAccount = (currency:string,balance:string) => {
  onSelectcurrency(currency)
  onSelectBalance(balance)
}


const currencyFlags: Record<string, string> = {
  USD: '🇺🇸', EUR: '🇪🇺', GBP: '🇬🇧', JPY: '🇯🇵',
  CAD: '🇨🇦', AUD: '🇦🇺', CHF: '🇨🇭', CNY: '🇨🇳',
  INR: '🇮🇳', BRL: '🇧🇷', DEFAULT: '💱'
};

  return (
    <div className="flex flex-wrap gap-4">
      {loading ? (
        <div>Loading accounts...</div>
      ) : accounts.length > 0 ? (
        accounts.map((account: AccountProps, index: number) => (
          <div 
            key={index} 
            onClick={()=>selectAccount(
              account.currency,
              parseFloat(account.balance).toFixed(2))
            }
            className="h-[200px] w-1/2 md:w-[230px] bg-gray-200 rounded-2xl shadow-sm flex flex-col justify-between px-4 py-4"
          >
          <p className="font-semibold text-[24px] self-center text-gray-800">
            {parseFloat(account.balance).toFixed(2)}
          </p>
          <div className="flex items-end gap-3">
            {/* Flag INSIDE rounded background */}
            <div className="h-14 w-14 rounded-full bg-gradient-to-br
                            flex items-center justify-center shadow-lg border-2 border-white/50">
              <span className="text-2xl">
                {currencyFlags[account.currency as keyof typeof currencyFlags] || currencyFlags.DEFAULT}
              </span>
            </div>
            <p className="font-bold text-xl text-gray-700 mb-1">{account.currency}</p>
            </div>
          </div>
        ))
      ) : (
        <div>No accounts found</div>
      )}
    </div>
  );

};

export default  AccountCard;