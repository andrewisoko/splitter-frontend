import { 
  FaHome,           // 🏠 Home
  FaCreditCard,     // 💳 Cards
  FaMoneyBillAlt,   // 💰 Payments
  FaUsers,          // 👥 Recipients
  FaCog,            // ⚙️ Settings
  FaBell,           // 🔔 Notifications
} from 'react-icons/fa';

const Sidebar = () => {
    return (
      <aside className="hidden lg:block mt-20 p-6 border-r  border-gray-200">
        {/* Navigation Menu */}
        <div className="space-y-2 mb-8">
          <button className="w-full flex items-center px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors">
            {/* <span className="mr-3">🏠</span> */}
            <FaHome className='mr-3 text-gray-600' size={20}/>
            <span className="font-medium">Home</span>
          </button>
          <button className="w-full flex items-center px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors">
           <FaCreditCard className="mr-3 text-gray-600" size={20} />
            <span className="font-medium">Cards</span>
          </button>
          <button className="w-full flex items-center px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors">
            <FaMoneyBillAlt className="mr-3 text-gray-600" size={20} />
            <span className="font-medium">Payments</span>
          </button>
          <button className="w-full flex items-center px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors">
            <FaUsers className="mr-3 text-gray-600" size={20} />
            <span className="font-medium">Recipients</span>
          </button>
        </div>
      </aside>
    );
};

export default Sidebar;