import React from 'react'
import {Montserrat} from 'next/font/google'
import ProductCard from './ProductCard'
const montserrat = Montserrat({subsets : ['latin']})
const Section1 = () => {
  return (
    <div className='my-5'>
        <h1 className={`${montserrat.className} text-2xl font-semibold`}>For You</h1>
        <div className='flex flex-wrap gap-3 py-3'>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
    </div>
  )
}

export default Section1