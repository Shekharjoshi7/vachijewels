'use client';

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CiShoppingCart } from "react-icons/ci";
import { AiOutlineCloseCircle, AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { BsBagCheckFill, BsPersonCircle } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeToCart, getCartTotal } from '@/store/cartSlice';


function Navbar() {

  const item = useSelector((state) => state.allCart.cart);
  const { totalPrice } = useSelector((state) => state.allCart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [item])

  const toggleCart = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')

    }
    else if (!ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')

    }

  }
  const ref = useRef()
  return (

    <div className='flex flex-col md:flex-row justify-center md:justify-start items-center py-3 shadow-md  bg-cyan-600'>
      <div className=" logo mx-5" >
        <Link href={'/'}>
          <Image height={40} width={150} className='aspect-auto ' src='/logo.png' alt=''></Image>
        </Link>
      </div>
      <div className="nav">
        <ul className="flex items-center space-x-8 font-bold md:text-md text-white ">
          <Link href={'/AD'}>
            <li>AD</li>
          </Link>
          <Link href={'/Kundan'}>
            <li>Kundan</li>
          </Link>
          <Link href={'/Copper'}>
            <li>Copper</li>
          </Link>
          <Link href={'/Designer'}>
            <li>Designer</li>
          </Link>
        </ul>
      </div>
      <div className=" flex  cart absolute right-1 top-4 mx-4 cursor-pointer">
        <Link className=' m-auto' href={"/login"}>
          <BsPersonCircle className='mx-2 text-xl md:text-2xl text-white ' />
        </Link>
        <CiShoppingCart onClick={toggleCart} className=' text-xl md:text-3xl text-white ' />
      </div>

      <div ref={ref} className={`w-72 h-full  sideCart absolute top-0 right-0 bg-cyan-400 px-8 py-10 transition-transform ${item.length !== 0 ? 'translate-x-0' : 'translate-x-full'} z-10  text-white `}>
        <h2 className='font-bold text-xl text-center'>Shopping Cart</h2>
        <span onClick={toggleCart} className="absolute top-5 right-2 cursor-pointer text-2xl"><AiOutlineCloseCircle /></span>
        <ol className='list-decimal font-semibold'>
          {item && item.map((product, key) => {
            return (
              <li key={key}>
                <div className="item flex my-5">

                  <div className='w-2/3 font-semibold' >{product.name}</div>
                  <div className='w-1/3 font-semibold  flex items-center justify-center text-lg'>
                    <AiFillMinusCircle onClick={() => dispatch(decrementQuantity(product.id))} className='cursor-pointer  text-cyan-600' />
                    <span className="mx-2 text-sm">{product.quantity}</span>
                    <AiFillPlusCircle onClick={() => dispatch(incrementQuantity(product.id))} className='cursor-pointer  text-cyan-600' />
                  </div>
                </div>
              </li>
            )

          })
          }

        </ol>
        <div className="font-bold my-2">Subtotal: ₹{totalPrice}</div>
        <div className='flex'>
          <Link href={'../Checkout'}><button className="flex mr-2  text-white bg-cyan-600 border-0 py-2 px-2 focus:outline-none hover:bg-cyan-700 rounded text-sm"><BsBagCheckFill className='m-1' />Checkout</button></Link>
          <button className="flex  mr-2  text-white bg-cyan-600 border-0 py-2 px-2 focus:outline-none hover:bg-cyan-700 rounded text-sm" onClick={() => dispatch(removeToCart())}>Clear Cart</button>

        </div>

      </div>
    </div>
  )
}

export default Navbar
