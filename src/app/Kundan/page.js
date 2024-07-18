/* eslint-disable no-undef */
import React from 'react'
import Link from 'next/link'
import Product from '@/models/Product';
import mongoose from 'mongoose';
import dynamic from 'next/dynamic'

const Kundan = async () => {
    const products = await getdata();
    return (
        <div>
            <section className="text-gray-600 body-font h-screen">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4 justify-center">
                    { products.length==0 && <div className='my-4 font-semibold'>We are adding Kundan jewellery soon.</div>}
                        {products.map((item, index) => {
                            return (
                                <div key={index} className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-7">
                                    <Link className="block relative rounded overflow-hidden" passHref={true} href={`/product/${item.slug}`}>
                                    <div className='flex justify-center'>
                                        <img alt="ecommerce" className="m-auto  md:mx-0 h-[25vh] md:h-[30vh] block" src={item.img} />
                                        </div>
                                        <div className="mt-4 text-center md:text-left">
                                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.category}</h3>
                                            <h2 className="text-gray-900 title-font text-lg font-medium">{item.title}</h2>
                                            <p className="mt-1">₹{item.price}</p>
                                        </div>
                                    </Link>
                                 </div>
                            )
                        })}
                    </div>
                </div>
            </section>

        </div>
    )
}

const getdata = async () => {
    if (!mongoose.connections[0].readyStatestate) {
        await mongoose.connect(process.env.MONGO_URI)
    }
    let products = await Product.find({ category: 'Kundan jewellery' });
    products = JSON.stringify(products)
    products = JSON.parse(products)
    return products

}

export default dynamic(() => Promise.resolve(Kundan), { ssr: false })