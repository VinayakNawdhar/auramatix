import React from 'react'
import Image from 'next/image'
const FavouriteItems = () => {
    return (
        <div className='flex my-3'>
            <div className='w-[30%]'>
                <Image alt='abcd' src="/images/CarouselPic.jpeg" height={100} width={100} className='h-full w-full object-cover rounded-xl'></Image>
            </div>
            <div className='py-2 px-3 flex flex-col gap-3'>
                <div>
                    <h1 className='font-semibold text-sm'>Vitamin C Serum</h1>
                    <p className='text-[12px] opacity-65'>For Anti-aging & Bright..</p>
                    <p className='font-semibold text-sm'>Rs. 249</p>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='flex rounded-lg overflow-hidden border-2 border-gray-200'>
                        <button className='bg-[#9E7F53] px-5 py-2 text-white text-sm'>Add to Cart</button>
                    </div>
                    <div className='h-full w-[2px] bg-[#3B2E00]'></div>
                    <i className="ri-delete-bin-6-line border-l-2 text-lg border-2 border-[#3B2E00] p-1 rounded-md"></i>
                </div>
            </div>
        </div>
    )
}

export default FavouriteItems