import React from 'react'
import Image from 'next/image'
const ProductCard = () => {
    return (
        <div className='bg-white w-[48%] h-64 rounded-xl overflow-hidden'>
            <div className='h-44 bg-gray-100 relative'>
                <Image src='/images/CarouselPic.jpeg' width={170} height={100} alt='product-img' className='h-full object-cover'></Image>
                <div className='grid gap-2 absolute top-3 right-3'>
                    <div className='h-7 w-7 bg-white/50 flex justify-center items-center rounded-full'>
                        <i className="ri-shopping-cart-fill"></i>
                    </div>
                    <div className='h-7 w-7 bg-white/50 flex justify-center items-center rounded-full'>
                        <i className="ri-heart-2-line"></i>
                    </div>
                </div>
            </div>
            <div className='px-2 flex flex-col justify-center h-20'>
                <h1 className='font-semibold text-sm'>Vitamic C Serum</h1>
                <p className='text-[8px]'>For Anti-aging & Brightening</p>
                <p className='font-semibold text-[12px] mt-2'>Rs. 249 /-</p>
            </div>
        </div>
    )
}

export default ProductCard