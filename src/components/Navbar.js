'use client';

import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CiShoppingCart } from "react-icons/ci";
import { AiOutlineCloseCircle, AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { BsBagCheckFill } from "react-icons/bs";

function Navbar() {
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

    <div className='flex flex-col md:flex-row justify-center md:justify-start items-center py-3 shadow-md'>
      <div className=" logo mx-5" >
        <Link href={'/'}>
          <Image height={40} width={150} className='aspect-auto ' src='/logo.png' alt=''></Image>
        </Link>
      </div>
      <div className="nav">
        <ul className="flex items-center space-x-8 font-bold md:text-md ">
          <Link href={'/AD'}>
            <li>AD</li>
          </Link>
          <Link href={'/'}>
            <li>Kundan</li>
          </Link>
          <Link href={'/'}>
            <li>Copper</li>
          </Link>
          <Link href={'/'}>
            <li>Kundan</li>
          </Link>
        </ul>
      </div>
      <div onClick={toggleCart} className="cart absolute right-0 mx-5 top-4 cursor-pointer">
        <CiShoppingCart className=' text-xl md:text-3xl ' />
      </div>

      <div ref={ref} className='w-72 h-full sideCart absolute top-0 right-0 bg-slate-500 px-8 py-10 transition-transform translate-x-full'>
        <h2 className='font-bold text-xl text-center'>Shopping Cart</h2>
        <span onClick={toggleCart} className="absolute top-5 right-2 cursor-pointer text-2xl"><AiOutlineCloseCircle /></span>
        <ol className='list-decimal font-semibold'>
          <li>
            <div className="item flex my-5">

              <div className='w-2/3 font-semibold' >AD Nackless set</div>
              <div className='w-1/3 font-semibold  flex items-center justify-center text-lg'>
                <AiFillMinusCircle className='cursor-pointer' />
                <span className="mx-2 text-sm">1</span>
                <AiFillPlusCircle className='cursor-pointer' />
              </div>
            </div>
          </li>
        </ol>
        <div className='flex'>
            <button className="flex mr-2  text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-sm"><BsBagCheckFill className='m-1'/>Checkout</button>
            <button className="flex  mr-2  text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-sm">Clear Cart</button>

          </div>

      </div>
    </div>
  )
}

export default Navbar
