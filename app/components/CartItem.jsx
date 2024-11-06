import React from 'react'
import Image from 'next/image'
const CartItem = () => {
    return (
        <div className='flex my-3'>
            <div className='w-[30%]'>
                <Image alt='abcd' src="/images/CarouselPic.jpeg" height={100} width={100} className='h-full w-full object-cover rounded-xl'></Image>
            </div>
            <div className='py-2 px-3 flex flex-col gap-3'>
                <div>
                    <h1 className='font-semibold'>Vitamin C Serum</h1>
                    <p className='text-sm opacity-65'>For Anti-aging & Bright..</p>
                    <p className='font-semibold text-sm'>Rs. 249</p>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='flex rounded-lg overflow-hidden border-2 border-gray-200'>
                        <div className='p-2 h-8 w-8 flex justify-center items-center text-center bg-white'><i className="ri-subtract-line"></i></div>
                        <div className='p-2 h-8 w-8 flex justify-center items-center text-center'>1</div>
                        <div className='p-2 h-8 w-8 flex justify-center items-center text-center bg-white'><i className="ri-add-line"></i></div>
                    </div>
                    <p className='border-r-2 border-[#3B2E00] pr-3'>x <span className='font-semibold text-sm'>Rs. 249</span></p>
                    <i className="ri-delete-bin-6-line border-l-2 text-lg border-2 border-[#3B2E00] p-1 rounded-md"></i>
                </div>
            </div>
        </div>
    )
}

export default CartItem