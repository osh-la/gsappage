import React from 'react'

const Nav = () => {
  return (
    <ul className='flex justify-between text-brown-500 p-7 text-xl bg-gray-200 '>
        <li>PROPS</li>
        <li>MENU</li>
        <div className='flex justify-between gap-2'>
            <li>SHOP</li>
            <li>CART</li>
        </div>
    </ul>
  )
}

export default Nav