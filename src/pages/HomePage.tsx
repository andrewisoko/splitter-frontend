import AccountCard from "../components/Cards/AccountCard";
import CreateAccountCard from "../components/Cards/CreateAccountCard";
import Sidebar from "../components/SideBar";
import Nav from "../components/Nav";
import BurgerBtn from "../components/Buttons/BurgerBtn";
import UsernameAvatar from "../components/UsernameAvatar";
import TransactionOptionsBtn from "../components/Buttons/TransactionOptionsBtn";



const HomePage = () => {

  return <div className="lg:grid lg:grid-cols-[25%_75%] gap-4" >
    <Nav/>
    <BurgerBtn/>
    <Sidebar/>
    <main className="md:col-start-2 p-4 md:p-6 pb-20 md:pb-6">
      <div>
        <UsernameAvatar/>
  
        <div className="mt-10 ml-3">
        <p>total balance:</p>
        <p className="font-bold text-[24px] lg:text-[36px]">0.00 GBP</p> 
        <TransactionOptionsBtn/>
    
          {/*accounts*/}
          <div className="mt-4 flex flex-row gap-4">
          <CreateAccountCard/>
           <AccountCard/>
          </div>
        </div>
      </div>
    </main>
  </div>  
};

export default HomePage;