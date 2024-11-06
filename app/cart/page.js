import React from "react";
import Nav from "../components/Nav";
import Cart from "../components/Cart";
import CartItem from "../components/CartItem";
import Link from "next/link";
import BottomNav from "../components/BottomNav";
const page = () => {
  return (
    <>
      <Nav />
      <BottomNav/>
      <div className="flex justify-between">
        <h1 className="font-semibold">Shopping Cart</h1>
        <h1 className="text-sm opacity-80">2 Items</h1>
      </div>
      <div className="w-full border-b-2 border-gray-300 pb-5">
        <CartItem />
        <CartItem />
      </div>
      <div className="py-3">
        <h1 className="font-semibold text-xl">Best Coupons for you </h1>
        <div className="flex flex-col gap-3 mt-5">
          <div className="p-2 border-2 border-green-400 bg-green-100 rounded-xl text-sm">
            <h1>Extra Rs.150 OFF</h1>
            <p>Rs. 150 OFF on minimum purchase of 400</p>
            <button className="px-5 py-1 border-2 rounded-xl border-gray-400">Applied</button>
          </div>
          <div className="p-2 border-2 bg-[#F5ECDF] border-[#b7a58a] rounded-xl text-sm">
            <h1>Extra Rs.30 OFF</h1>
            <p>Rs. 30 OFF on minimum purchase of 300</p>
            <button className="px-5 py-1 border-2 rounded-xl border-gray-400">Apply</button>
          </div>
        </div>
        <div className="flex justify-between items-center bg-[#3B2E00] text-white w-full fixed bottom-12 left-0 p-2">
            <p className="font-light text-sm">Cart Total : Rs. 348 (2 Items)</p>
            <Link href='/checkout' className="text-sm">Checkout {">"}</Link>
        </div>
      </div>
    </>
  );
};

export default page;
