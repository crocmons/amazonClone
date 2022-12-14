import React, { useState } from 'react'
import Image from "next/image"
import {AiOutlineSearch} from "react-icons/ai"
import { AiOutlineShoppingCart } from 'react-icons/ai'
import {FiMenu} from "react-icons/fi"
import { selectItems } from '../slices/basketSlice'
import { useSelector } from 'react-redux'
import {signIn, signOut, useSession} from "next-auth/react"
import { useRouter } from 'next/router'


const Header = () => {
const items = useSelector(selectItems);
const { data:session }= useSession();
const router = useRouter();
const [searchTerm, setsearchTerm] = useState("");
const handleclick =(e)=>{
  e.key === "Enter"
  if (searchTerm) {
      items.filter((item) => item.title.toLowerCase().indexOf(value) !== -1)
      setsearchTerm("");
  } 
}


  return (
    <header>
      {/* Top Navbar */}

        <div className='flex items-center bg-amazonBlue p-1 flex-grow py-2'>
          <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
            <Image 
            onClick={()=>router.push("/")}
            src='https://links.papareact.com/f90'
            width={150}
            height={40}
            objectFit="contain"
            className='cursor-pointer'
            />
          </div>
          {/* search */}
          <div>
          <div className='hidden sm:flex items-center h-10 rounded-md flex-grow  cursor-pointer px-3 bg-yellow-400 hover:bg-yellow-500'>
            <input className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4' type="text" placeholder='search'value={searchTerm} onChange={(e)=>setsearchTerm(e.target.value.toLowerCase())} onKeyUp={handleclick}/>
            <AiOutlineSearch className='text-2xl w-12 h-12 p-1'/>
          </div>
          </div>
          
          {/* right */}
           <div className='text-white flex space-x-6 items-center text-xs mx-6 whitespace-nowrap'>
              <div onClick={!session ? signIn : signOut} className='link'>
                    <p>{
                        session ? `Hello, ${session.user.name}` : (<button className='text-sm outline-white p-1 my-1'>Sign In</button>)
                      }</p>
                    <p className="font-extrabold md:text-sm">Account & Lists</p>
              </div>

              <div onClick={()=> session && router.push("/orders")} className='link'>
              <p>Returns</p>
              <p className="font-extrabold md:text-sm">& Orders</p>
              </div>

              <div onClick={()=>router.push("/checkout")} className='relative link flex items-center'>
                <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold'>{items.length}</span>
               
                 <AiOutlineShoppingCart className='text-2xl w-10 h-12'/>
                 <p className="hidden md:inline font-extrabold md:text-sm mt-2">Baskets</p>
              </div>
           </div>
        </div>

        {/* Bottom navbar */}
        <div className='flex items-center  space-x-3 p-2 pl-6 bg-amazonBlue-light text-white text-sm'>
          <p onClick={()=>router.push("/")} className='link flex items-center'>
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