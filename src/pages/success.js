import React, { useEffect } from 'react'
import Header from '../components/Header'
import {BsFillCartCheckFill} from "react-icons/bs"
import { useRouter } from 'next/router'
import { fireworks } from '../../lib/utils'
const success = () => {
    const router = useRouter();

    useEffect(() => {
      fireworks();
      
    }, []);
    
  return (
    <div className='bg-gray-100 h-screen'>
      <Header />
      <main className='max-w-screen-lg mx-auto'>
       <div className='space-y-6 items-center m-5 p-3'>
           <div>
              <BsFillCartCheckFill className="text-green-500 text-3xl "/>
              <h1 className='text-3xl'>
                Thank you, your order is confirmed!
              </h1>
           </div>
           <p>
           Thank you for shopping with us.” It isn't just a slogan for plastic shopping bags, it's a real feeling you have toward your customers.please press the link below.
           </p>
           <button onClick={()=>router.push("/orders")} className="button mt-8">
            Go to my orders
           </button>
       </div>
      </main>
    </div>
  )
}

export default success