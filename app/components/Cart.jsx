'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useSelector,useDispatch } from 'react-redux'
import { decrementQuantity, incrementQuantity, removefromcart, updateScheduledTime } from '@/redux/cartSlice'
import Link from 'next/link'

const Cart = ({ products }) => {
    const dispatch =  useDispatch();
    const [hour,setHour] = useState("9")   
    const [minute,setMinute] = useState("00")   
    const { cart, totalAmount } = useSelector(store => store.cart)
    return (
        <section className="min-h-screen py-12 sm:py-16 lg:py-12 ">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <div className="flex items-center justify-center">
                    <h1 className="text-2xl font-semibold text-gray-900">Your Cart</h1>
                </div>

                <div className="mx-auto mt-8 max-w-2xl md:mt-12"> 
                    {cart.length != 0 ? <div className="bg-amber-100 shadow">
                        <div className="px-4 py-6 sm:px-8 sm:py-10">
                            <div className="flow-root">
                                <ul className="-my-8">
                                    {cart.map((item, index) => (
                                        <li className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0 border-b-2 border-b-gray-800">
                                            <div className="shrink-0">
                                                <Image src={`/uploads/products${item.imageUrl}`} width={80} height={80} className='object-cover'></Image>
                                            </div>
                                            <div className="relative flex flex-1 flex-col justify-between">
                                                <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                                                    <div className="pr-8 sm:pr-5">
                                                        <p className="text-base font-semibold text-gray-900">{item.productName}</p>
                                                        <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">{item.providerId == '1' ? 'Food Truck' : 'Food Court'}</p>
                                                    </div>

                                                    <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                                                        <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">Rs.{item.price * item.quantity}</p>

                                                        <div className="sm:order-1"> 
                                                            <div className="mx-auto flex h-8 items-stretch text-gray-600">
                                                                <button className="flex items-center justify-center rounded-l-md bg-gray-800 text-gray-100 px-4 transition hover:bg-black hover:text-white" onClick={async(e) => {
                                                                    await dispatch(decrementQuantity({productId : item.productId}))
                                                                }}>-</button>
                                                                <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">{item.quantity}</div>
                                                                <button className="flex items-center justify-center rounded-r-md bg-gray-800 text-gray-100 px-4 transition hover:bg-black hover:text-white" onClick={async(e) => {
                                                                    await dispatch(incrementQuantity({productId : item.productId}))
                                                                }}>+</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>               
                                                <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto lg:relative lg:justify-end">
                                                    <button type="button" className="flex rounded-full shadow-xl p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900 bg-gray-50" onClick={async(e) => {
                                                                    await dispatch(removefromcart({productId : item.productId}))
                                                                }}>
                                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" className=""></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className='m-3 mt-10 p-3 flex gap-10 items-center'>
                                <h1 className='text-gray-500'>Scheduled Time</h1>
                                <div className='flex justify-center items-center gap-2'>
                                <select value={hour} onChange={e => setHour(e.target.value)} name="" id="" className='p-2 bg-gray-100 rounded-lg'>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                </select>
                                <p className='font-bold text-xl'>:</p>
                                <select value={minute} onChange={e => setMinute(e.target.value)} name="" id="" className='p-2 bg-gray-100 rounded-lg'>
                                    <option value="00">00</option>
                                    <option value="05">05</option>
                                    <option value="10">10</option>
                                    <option value="15">15</option>
                                    <option value="20">20</option>
                                    <option value="25">25</option>
                                    <option value="30">30</option>
                                    <option value="35">35</option>
                                    <option value="40">40</option>
                                    <option value="45">45</option>
                                    <option value="50">50</option>
                                    <option value="55">55</option>
                                </select>
                                </div>
                            </div>
                            <div className="mt-6 flex items-center justify-between">
                                <p className="text-sm font-medium text-gray-900">Total</p>
                                <p className="text-2xl font-semibold text-gray-900"><span className="text-xs font-normal text-gray-400">Rs.  </span>{totalAmount}</p>
                            </div>

                            <Link href='/payment' className="mt-6 text-center">
                                <button type="button" onClick={async (e) => {
                                    await dispatch(updateScheduledTime({hour:hour,minute:minute}));
                                }} className="group inline-flex w-full items-center justify-center rounded-md bg-gray-800 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-900">
                                    Checkout
                                    <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:ml-8 ml-4 h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </button>
                            </Link>
                        </div>
                    </div>
                    :
                    <div className='h-96 flex justify-center items-center bg-white shadow-lg rounded-xl'>
                        <h1 className='text-gray-500 text-2xl'>Oops! No items in your cart</h1>
                    </div>
                    }
                </div>
            </div>
        </section>
    )
}

export default Cart