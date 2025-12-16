const BurgerButton = () => {
    return (
         <button className="hidden md:flex lg:hidden fixed top-10 left-4 z-10 h-12 w-12 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200">
        <svg
          className="h-6 w-6"
          stroke="currentColor"
        >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      </button>
    );
};

export default BurgerButton;