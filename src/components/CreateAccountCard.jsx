const CreateAccountCard = () => {
    return (
        <div className="h-[200px] w-1/2 md:w-[230px] bg-gray-200 rounded-2xl shadow-sm flex flex-col justify-between px-4 py-4">
                <p className="font-semibold text-[20px] self-center">0.00</p>
                <div className="flex items-end">
                  <div className="h-12 w-12 rounded-full bg-blue-500"></div>
                  <p className="ml-2 mb-3 font-semibold">CURRENCY</p>
                </div>
              </div>
    );
};

export default  CreateAccountCard;