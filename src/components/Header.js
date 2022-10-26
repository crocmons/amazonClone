import React from 'react'
import Image from "next/image"
import {AiOutlineSearch} from "react-icons/ai"
import { AiOutlineShoppingCart } from 'react-icons/ai'
import {FiMenu} from "react-icons/fi"
const Header = () => {
  return (
    <header>
      {/* Top Navbar */}

        <div className='flex items-center bg-amazonBlue p-1 flex-grow py-2'>
          <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
            <Image 
            src='https://links.papareact.com/f90'
            width={150}
            height={40}
            objectFit="contain"
            className='cursor-pointer'
            />
          </div>
          {/* search */}
          <div className='hidden sm:flex items-center h-10 rounded-md flex-grow  cursor-pointer px-3 bg-yellow-400 hover:bg-yellow-500'>
            <input className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4' type="text" placeholder='search'/>
            <AiOutlineSearch className='text-2xl w-12 h-12 p-1'/>
          </div>
          
          {/* right */}
           <div className='text-white flex space-x-6 items-center text-xs mx-6 whitespace-nowrap'>
              <div className='link'>
                    <p>Hello Oishi</p>
                    <p className="font-extrabold md:text-sm">Account & Lists</p>
              </div>

              <div className='link'>
              <p>Returns</p>
              <p className="font-extrabold md:text-sm">& Orders</p>
              </div>

              <div className='relative link flex items-center'>
                <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold'>0</span>
               
                 <AiOutlineShoppingCart className='text-2xl w-10 h-12'/>
                 <p className="hidden md:inline font-extrabold md:text-sm mt-2">Baskets</p>
              </div>
           </div>
        </div>

        {/* Bottom navbar */}
        <div className='flex items-center  space-x-3 p-2 pl-6 bg-amazonBlue-light text-white text-sm'>
          <p className='link flex items-center'>
            <FiMenu className='mr-1'/>
            All
          </p>
          <p className='link'>Prime Video</p>
          <p className='link'>Amazon Business</p>
          <p className='link'>Today's Deals</p>
          <p className='link hidden lg:inline-flex'>Electronics</p>
          <p className='link hidden lg:inline-flex'>Food & Grocery</p>
          <p className='link hidden lg:inline-flex'>Prime</p>
          <p className='link hidden lg:inline-flex'>Buy Again</p>
          <p className='link hidden lg:inline-flex'>Shopping Toolkit</p>
          <p className='link hidden lg:inline-flex'>Health & Personal Care</p>

        </div>
    </header>
  )
}

export default Header