/* eslint-disable react/prop-types */
'use client';
import React from 'react'
import { addToCart } from '@/store/cartSlice';
import { useDispatch } from 'react-redux';

const Button = ({ data }) => {
    const dispatch = useDispatch();
    const handleADD = () => {
        dispatch(addToCart(data))
    }
    return (
        <div>
            <button className="flex ml-2 text-white bg-cyan-600 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-700 rounded" onClick={handleADD}>Add to Cart</button>
        </div>
    )
}

export default Button
