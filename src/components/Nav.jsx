import React from 'react';

const Nav = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black md:bg-red-50 shadow-sm text-white md:text-gray-800 text-base sm:text-xl px-4 sm:px-8 py-4">
      <div className="flex items-center justify-between">
        
        {/* Left */}
        <div className="font-bold">LOGO</div>

        {/* Center */}
        <div className="hidden sm:block">MENU</div>

        {/* Right */}
        <div className="flex gap-4">
          <span className="cursor-pointer hover:underline">SHOP</span>
          <span className="cursor-pointer hover:underline">CART</span>
        </div>

      </div>
    </nav>
  );
};

export default Nav;
