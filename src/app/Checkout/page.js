'use client'
import React, { useEffect } from 'react'
import { incrementQuantity, decrementQuantity ,getCartTotal} from '@/store/cartSlice';
import {  AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { useDispatch ,useSelector } from 'react-redux';
import Link from 'next/link';
import dynamic from'next/dynamic'

const Checkout = () => {
  const item = useSelector((state) => state.allCart.cart);
  const {totalPrice} = useSelector((state) => state.allCart);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getCartTotal());
  },[item])
  return (
    <div className='container m-auto '>
      <h1 className='font-bold text-3xl text-center my-8'>Checkout</h1>
      <div className='p-2'>
        <h2 className='font-semibold text-xl'>1. Delivery Details</h2>
        <div className="mx-auto flex ">
          <div className="px-2 w-1/2">
            <div className="mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
              <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className="px-2 w-1/2">
            <div className="mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
        </div>
        <div className="px-2 w-full">
          <div className="mb-4">
            <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
            <textarea name="address" id="address" cols="30" rows="2" className="w-full bg-white rounded border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  ></textarea>
          </div>
        </div>
        <div className="mx-auto flex ">
          <div className="px-2 w-1/2">
            <div className="mb-4">
              <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
              <input type="text" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className="px-2 w-1/2">
            <div className="mb-4">
              <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
              <input type="text" id="city" name="city" className="w-full bg-white rounded border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
        </div>
        <div className="mx-auto flex ">
          <div className="px-2 w-1/2">
            <div className="mb-4">
              <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
              <input type="text" id="state" name="state" className="w-full bg-white rounded border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className="px-2 w-1/2">
            <div className="mb-4">
              <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">Pincode</label>
              <input type="text" id="pincode" name="pincode" className="w-full bg-white rounded border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
        </div>
      </div>
      <div className="p-2">

      <h2 className='font-semibold text-xl'>2. Review Cart Item & Pay</h2>
      <div  className=' sideCart bg-cyan-200 p-6 m-2'>
        <ol className='list-decimal font-semibold'>
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
        <span className="font-bold">Subtotal:₹{totalPrice}</span>
      </div>
        <div className="mx-4">
        <Link href={'../Checkout'}><button className="flex mr-2  text-white bg-cyan-600 border-0 py-2 px-2 focus:outline-none hover:bg-cyan-700 rounded text-sm">Pay ₹ {totalPrice}</button></Link> 
        </div>
      </div>

    </div>
  )
}

export default dynamic(() => Promise.resolve(Checkout), { ssr: false })