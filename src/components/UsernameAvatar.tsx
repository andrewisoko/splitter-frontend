import { useState } from "react";
import UsernameDetailsModal from "./Modals/UsernameModal";

const UsernameAvatar = () => {
    const [UsernameModal,setUsernameModal]  = useState(false)
    return (
        <>
        <UsernameDetailsModal open={UsernameModal} close={()=>setUsernameModal(false)}/>
        <a onClick={()=>setUsernameModal(true)} className="mt-5 h-16 w-28 md:w-52 ml-auto rounded-full flex justify-between items-center px-8 hover:bg-gray-100">
            <div className="bg-blue-500 h-12 w-12 rounded-full justify-end"></div>
           <span className="hidden md:inline text-black-700 font-semibold ml-2">Username</span> 
        </a>
        </>
    );
};

export default UsernameAvatar;