/* eslint-disable react/prop-types */
'use client';
import React from 'react'
import { addToCart, removeToCart } from '@/store/cartSlice';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';

const Button = ({ data }) => {
    const dispatch = useDispatch();
    const Router = useRouter();
    const handleADD = () => {
        dispatch(addToCart(data))
    }
    const BuyNow= ()=>{
        dispatch(removeToCart())
        dispatch(addToCart(data))
        Router.push('../Checkout')
    }
    return (
        <div className='flex'>
            <button className="flex ml-8 text-white bg-cyan-600 border-0 py-2 px-2 md:px-6 focus:outline-none hover:bg-cyan-700 rounded"onClick={BuyNow}>Buy Now</button>
            <button className="flex ml-2 text-white bg-cyan-600 border-0 py-2 px-2 md:px-6 focus:outline-none hover:bg-cyan-700 rounded" onClick={handleADD}>Add to Cart</button>
        </div>
    )
}

export default Button
