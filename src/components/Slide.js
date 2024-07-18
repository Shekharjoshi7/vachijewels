"use client"
import React, { useState } from 'react';
import { RxDotFilled } from 'react-icons/rx';
const Slide = () => {
    const slides = [
        {
            url: 'https://navrathan.com/wp-content/uploads/2023/04/NJJ-3019152-01-2.jpg',
        },
        {
            url: 'https://images.unsplash.com/photo-1721103418939-5112f0ccfac8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            url: 'https://images.unsplash.com/photo-1676485261309-784d67817972?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },

        {
            url: 'https://images.unsplash.com/photo-1673131158657-4404fd1f041a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            url: 'https://images.unsplash.com/photo-1601121141461-920cb1993441?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    setTimeout(()=>{
        currentIndex===slides.length -1 ?setCurrentIndex(0):setCurrentIndex(currentIndex+1);
    },4000)
   

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className='w-[95vw] h-[92vh] py-1 px-1   m-auto relative group'>
            <div
                style={{ backgroundImage: `url(${slides[currentIndex].url}) `,  borderImage: 'fill 0 linear-gradient(rgba(0, 0, 0, 0.007),#000000)' }}
                className='w-full rounded-2xl h-full bg-center bg-cover duration-500'
            >
                <div className='flex w-full absolute bottom-0 justify-center py-2'>
                    {slides.map((slide,slideIndex) => (
                        <div
                            key={slideIndex}
                            onClick={() => goToSlide(slideIndex)}
                            className='text-2xl cursor-pointer text-gray-200'
                        >
                            <RxDotFilled />
                        </div>
                    ))}
                </div>
            </div>
        

        </div>
    );
}



export default Slide
