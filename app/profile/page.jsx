import React from 'react'
import Nav from '../components/Nav'
import BottomNav from '../components/BottomNav'
import Link from 'next/link'
const page = () => {
  return (
    <div>
        <Nav/>
        <div>
            <h1 className='mb-3 font-semibold'>Account</h1>
            <div className='flex items-center gap-5 bg-white p-2 rounded-lg'>
                <div className='h-10 w-10 rounded-full text-white bg-[#3B2E00] flex justify-center items-center text-xl'>S</div>
                <div>
                    <p className='text-sm font-semibold'>Sanjana</p>
                    <p className='text-[12px]'>Sanjana@gmail.com</p>
                </div>
            </div>
            <ul className='grid gap-3 text-sm mt-5'>
                <li><Link href='/profile/orders'>Orders</Link></li>
                <li>Delete Account</li>
                <li>Logout</li>
            </ul>
        </div>
        <BottomNav/>
    </div>
  )
}

export default page