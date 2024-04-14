'use client';
import { redirect } from 'next/navigation'
import React, { useEffect } from 'react'

const page = () => {
    useEffect(()=>{
        if(!localStorage.getItem('token'))
        {
            redirect('/')
        }
    },[])
  return (
    <div>
      my account
    </div>
  )
}

export default page
