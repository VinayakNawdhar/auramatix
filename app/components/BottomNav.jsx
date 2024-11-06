'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
const BottomNav = () => {
  const pathname = usePathname();
  return (
    <div className='fixed bottom-0 h-12 w-full left-0 flex text-2xl justify-between py-2 px-9 text-gray-400 bg-gray-200 backdrop-blur-md'>
      <div>
        <Link href='/' className={`${pathname=='/'?'text-[#3B2E00]':''}`} ><i className="ri-home-4-line"></i></Link>
      </div>
      <div>
        <Link href='/cart' className={`${pathname=='/cart'?'text-[#3B2E00]':''}`}><i className="ri-shopping-cart-2-line"></i></Link>
      </div>
      <div>
        <Link href='/wishlist' className={`${pathname=='/wishlist'?'text-[#3B2E00]':''}`}><i className="ri-heart-line"></i></Link>
      </div>
      <div>
        <Link href='/profile' className={`${pathname=='/profile'?'text-[#3B2E00]':''}`}><i className="ri-user-line"></i></Link>
      </div>
    </div>
  )
}

export default BottomNav