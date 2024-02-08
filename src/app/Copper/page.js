'use client';
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const AD = () => {
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
    }, [])
    return (
        <div>
            {isClient ? <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4 justify-center">

                        <div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-7">
                            <Link href='/product/Necklace'>
                                <a className="block relative rounded overflow-hidden">
                                    <img alt="ecommerce" className="m-auto md:mx-0 h-[25vh] md:h-[30vh] block" src="https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/71QwbqDvkVL._SL1500_.jpg" />
                                </a>
                                <div className="mt-4 text-center md:text-left">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Copper jewellry</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">Necklace</h2>
                                    <p className="mt-1">₹2000</p>
                                </div>

                            </Link>
                        </div>

                    </div>
                </div>
            </section> : 'Prerendered'}

        </div>
    )
}

export default AD
