/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
'use client'

import { Inter } from 'next/font/google'
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import './globals.css'
import { Provider } from 'react-redux';
import store from '@/store/store';

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <title>VachiJewels</title>
      </head>
      <body className={inter.className}>
        <Provider store={store    }>
      <Navbar/>
        {children}
      <Footer/>
        </Provider>
        </body>
    </html>
  )
}
