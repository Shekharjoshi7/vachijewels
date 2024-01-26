import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CiShoppingCart } from "react-icons/ci";

function Navbar() {
  return (
    <div className='flex flex-col md:flex-row justify-center md:justify-start items-center py-3 shadow-md'>
      <div className=" logo mx-5" >
        <Link href={'/'}>
          <Image height={40} width={150} className='aspect-auto 'src='/logo.png' alt=''></Image>
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
      <div className="cart absolute right-0 mx-5 top-4">
       <CiShoppingCart className=' text-xl md:text-3xl ' />
      </div>
   
    </div>
  )
}

export default Navbar
