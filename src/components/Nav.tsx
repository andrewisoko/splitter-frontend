import Sidebar from "./SideBar";

const Nav = () => {
    return (
      <nav className="fixed bottom-2 left-0 right-0 bg-white border-t flex justify-between px-6 pt-8 pb-2 md:hidden">
      <div className="mx-auto flex justify-between gap-6">
        <button>Home</button>
        <button>Cards</button>
        <button>Recipients</button>
        <button>Payments</button>
      </div>
    </nav>

);
};

export default Nav;