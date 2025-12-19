const AccountCard = () =>{
    return(
    <div className="h-[200px] w-1/2 md:w-[230px] bg-gray-100 rounded-2xl shadow-sm flex flex-col justify-between px-4 py-4">
            <p className=" text-[15 px] font-semibold self-start">+100 currencies available.</p>
            <div className="flex items-center">
                <button className="h-12 w-12 rounded-full bg-gray-300">
                    <span className="text-2xl leading-none">+</span>
                </button>
                <p className="ml-2 mb-1 font-semibold">Add New</p>
             </div>
            </div>
    );
};

export default AccountCard;