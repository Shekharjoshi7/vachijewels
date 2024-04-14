/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
'use client'

import { Inter } from 'next/font/google'
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import './globals.css'
import { Provider } from 'react-redux';
import store from '@/store/store';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  const [key, setKey] = useState()
  const path = usePathname();
  useEffect(() => {
    setKey(Math.random())
  }, [path])
  return (
    <html className='overflow-x-hidden' lang="en">
      <head>
        <title>VachiJewels</title>
      </head>
      <body className={inter.className}>
        <Provider store={store}>
          {key&&<Navbar key={key} />}
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
