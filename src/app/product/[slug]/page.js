/* eslint-disable no-undef */
import Button from '@/components/Button';
import React from 'react';
import mongoose  from 'mongoose';
import Product from '@/models/Product';

const page= async({ params })=> {

  const { slug } = params
  if (!mongoose.connections[0].readyStatestate) {
    await mongoose.connect(process.env.MONGO_URI)
}
let product = await Product.findOne({slug:slug});
const data = {
  id:product.id,
  title: product.title,
  price: product.price,
  quantity: product.availableQty
}
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-16 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto px-14 object-cover object-top rounded" src="https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/71QwbqDvkVL._SL1500_.jpg" />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">Vachi Jewels</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title}</h1>
              <div className="flex mb-4">
               
              </div>
              <p className="leading-relaxed">{product.desc}</p>
              <div className="flex my-7">
                <span className="title-font font-medium text-2xl text-gray-900">₹{product.price}</span>
                <Button data={data}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default page