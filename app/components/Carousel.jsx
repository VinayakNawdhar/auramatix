import React from 'react'
import Image from 'next/image'

const Carousel = () => {
  return (
    <div className='w-full h-48 relative rounded-3xl overflow-hidden'>
        <Image src="/images/CarouselPic.jpeg" width={350} height={350} alt='caroursel pic' className='absolute z-10'></Image>
        <div className='z-[11] absolute flex gap-1 bottom-3 left-5'>
            <div className='w-2 h-2 rounded-full bg-gray-100/20'></div>
            <div className='w-2 h-2 rounded-full bg-gray-100/20'></div>
            <div className='w-2 h-2 rounded-full bg-gray-100'></div>
            <div className='w-2 h-2 rounded-full bg-gray-100/20'></div>
        </div>
    </div>
  )
}

export default Carousel