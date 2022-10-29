import Image from 'next/image'
import React from 'react'
import {FiStar} from "react-icons/fi"
import CurrencyFormat from 'react-currency-format'
import {useDispatch} from "react-redux"
import { addToBasket, removeFromBasket } from '../slices/basketSlice'

const CheckoutProduct = ({id,category,title,description,image,rating,price,hasPrime}) => {

    const dispatch = useDispatch();

   const addItemToBasket = ()=>{
        const product = {
         id,
         category,
         title,
         description,
         image,
         rating,
         price,
         hasPrime
        }
        dispatch(addToBasket(product))
   }
   const removeItemFromBasket =()=>{
      dispatch(removeFromBasket({id}))
   }
   
  return (
    <div className='grid grid-cols-5'>
       <Image 
       src={image}
       height ={200}
       width={200}
       objectFit="contain"
       alt="productimg"

       />

       {/* middle section */}
       <div className='mx-5 col-span-3'>
          <p>{title}</p>
       <div className='flex'>
        {Array(rating).fill().map((_,i)=>(
           <FiStar key={i} className="h-5 text-yellow-500" />
        ))}
       </div>
       <p className='text-xs my-2 line-clamp-3'>{description}</p>
       <CurrencyFormat  value={price} displayType={'text'} thousandSeparator={true} prefix={'$'}/>

       {hasPrime && (
        <div className='flex items-center space-x-2'>
            <img src="https://links.papareact.com/fdw" alt="" className='w-12' loading="lazy" />
            <p className='text-xs text-gray-500'>FREE Next day Delivery</p>
        </div>
       )}
    </div>

    <div className='flex flex-col space-y-2 my-auto justify-self-end'>
      <button className='button' onClick={addItemToBasket}>Add Basket</button>
      <button className='button' onClick={removeItemFromBasket}>Remove Basket</button>
    </div>
       </div>
  )
}

export default CheckoutProduct