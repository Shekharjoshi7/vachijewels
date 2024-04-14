'use client';

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CiShoppingCart } from "react-icons/ci";
import { AiOutlineCloseCircle, AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { BsBagCheckFill, BsPersonCircle } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeToCart, getCartTotal } from '@/store/cartSlice';
import dynamic from 'next/dynamic';
import { auth } from '@/store/userSlice';
import { useRouter } from 'next/navigation';



function Navbar() {
  const Router = useRouter();
  const [dropdown, setDropdown] = useState(false);
  const user = useSelector((state) => state.users.user);
  const item = useSelector((state) => state.allCart.cart);
  const { totalPrice } = useSelector((state) => state.allCart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [item])

  useEffect(() => {
    let token = localStorage.getItem('token')
    if (token) {
      dispatch(auth(token))
    }
  }, [])



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
  const logout = () => {
    localStorage.removeItem('token')
    dispatch(auth(null))
    Router.push('./')
  }
  return (

    <div className='flex flex-col md:flex-row justify-center md:justify-start items-center py-3 shadow-md  bg-cyan-600'>
      <div className=" logo mr-auto md:mx-5" >
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
      <div className=" flex items-center  cart absolute right-1 top-3 mx-4 cursor-pointer">
        <div onMouseOver={() => { setDropdown(true) }} onMouseLeave={() => { setDropdown(false) }}>
          {dropdown && <div onMouseOver={() => { setDropdown(true) }} onMouseLeave={() => { setDropdown(false) }} className='absolute right-8 py-4  bg-cyan-400 top-7 rounded-md px-5 w-32 shadow-lg '>
            <ul>
              <Link href={'/myaccount'}> <li className="py-1 font-bold text-white hover:text-cyan-900 text-sm">My Account</li></Link>
              <Link href={'/orders'}> <li className="py-1 font-bold text-white hover:text-cyan-900 text-sm">Orders</li></Link>
              <li onClick={logout} className="py-1 font-bold text-white hover:text-cyan-900 text-sm cursor-pointer">Logout</li>
            </ul>
          </div>}

          {user && <BsPersonCircle className='mx-2 text-xl md:text-2xl text-white ' />}
        </div>
        {!user && <Link className=' m-auto' href={"/login"}>
          <button className='bg-cyan-900 px-2 py-1 rounded-md text-sm text-white mx-2'>Login</button>
        </Link>}
        <CiShoppingCart onClick={toggleCart} className=' text-xl md:text-3xl text-white ' />
      </div>

      <div ref={ref} className={`w-72 h-[100vh]  sideCart overflow-y-scroll absolute top-0 right-0 bg-cyan-400 px-8 py-10 transition-transform ${item.length !== 0 ? 'translate-x-0' : 'translate-x-full'} z-10  text-white `}>
        <h2 className='font-bold text-xl text-center'>Shopping Cart</h2>
        <span onClick={toggleCart} className="absolute top-5 right-2 cursor-pointer text-2xl"><AiOutlineCloseCircle /></span>
        <ol className='list-decimal font-semibold'>
          {item.length == 0 && <p className='my-4 font-semibold'>Your cart is Empty!</p>}
          {item && item.map((product, key) => {
            return (
              <li key={key}>
                <div className="item flex my-5">

                  <div className='w-2/3 font-semibold' >{product.title}</div>
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


export default dynamic(() => Promise.resolve(Navbar), { ssr: false })