/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */


import { Inter } from 'next/font/google'
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import './globals.css'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <title>VachiJewels</title>
      </head>
      <body className={inter.className}>
      <Navbar/>
        {children}
      <Footer/>
        </body>
    </html>
  )
}
