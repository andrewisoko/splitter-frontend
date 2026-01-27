import { useState,useEffect } from "react";
import { useAuthUser } from "./contexts/useAuthUser";
import UsernameDetailsModal from "./Modals/UsernameModal";
import api from "../services/api";

interface User {

  fullName:string,
  userName:string;
  number: number;
  email:string;
}

const UsernameAvatar = () => {

      const [loading, setLoading] = useState(true);
      const [user,setUser] = useState<User>({
          fullName:"",
          userName:"",
          number:0,
          email: ""
      })
      const { userId, loading: authLoading } = useAuthUser();
    
      useEffect(()=>{
    
          if (userId && !authLoading) {
          const getUser = async () => {
            try {
              setLoading(true);
              const response = await api.get(`/users/${userId}/`);
              setUser(response.data);
            } catch (error) {
              console.error("Failed to fetch user:", error);
              console.error(`data:${userId}`);
            } finally {
              setLoading(false);
            }
          };
          getUser();
        }
           
        },[userId, authLoading])


    const [UsernameModal,setUsernameModal]  = useState(false)
    return (
        <>
        <UsernameDetailsModal 
            fullName={user.fullName}
            userName={user.userName}
            number={user.number}
            email ={user.email}
            open={UsernameModal} 
            close={()=>setUsernameModal(false)}
        />
        <a onClick={()=>setUsernameModal(true)} className="mt-5 h-16 w-28 md:w-52 ml-auto rounded-full flex justify-between items-center px-7 hover:bg-gray-100">
            <div className="bg-blue-500 h-12 w-12 rounded-full justify-end"></div>
           <span className="hidden md:inline text-black-700 font-semibold ml-2">{user.userName}</span> 
        </a>
        </>
    );
};

export default UsernameAvatar;