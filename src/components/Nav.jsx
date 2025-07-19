import React from 'react';

const Nav = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-red-50 shadow-sm text-gray-800 text-base sm:text-xl px-4 sm:px-8 py-4">
      <div className="flex items-center justify-between">
        
        
        <div className="font-bold">
          <a href="/">LOGO</a>
          </div>

       

  
        <div className="flex gap-4">
          <span className="cursor-pointer hover:underline"><a href="/shop">SHOP</a></span>
          <span className="cursor-pointer hover:underline">CART</span>
        </div>

      </div>
    </nav>
  );
};

export default Nav;
