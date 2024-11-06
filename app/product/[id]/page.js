import React from "react";
import Image from "next/image";
import Carousel from "@/app/components/Carousel";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });
const page = async ({ params }) => {
  const productId = (await params).id;
  return (
    <div className="pb-10">
      <div className="w-full relative">
        <Carousel />
        <div className="flex flex-col gap-2 absolute bottom-3 right-2 z-10 text-white text-xl">
          <div className="w-10 h-10 bg-white/60 rounded-full flex justify-center items-center">
            <i className="ri-heart-line"></i>
          </div>
          <div className="w-10 h-10 bg-white/60 backdrop-blur-md rounded-full flex justify-center items-center">
            <i className="ri-share-fill"></i>
          </div>
        </div>
      </div>
      <div className="my-3 text-[#3B2E00]">
        <h1 className={`${montserrat.className} text-xl font-semibold`}>
          Vitamin C Serum
        </h1>
        <p className="text-[12px] opacity-85">
          For Anti-aging, brightens complexion, prevents sun damage, reduce fine
          lines and reduce dark spots.
        </p>
      </div>
      <div className="text-[12px] flex gap-4">
        <div className="flex items-center gap-1">
          <i class="ri-star-fill"></i>
          <p>4.6</p>
        </div>
        <p className="underline">253 Reviews</p>
      </div>
      <div className="my-2">
        <h1 className="text-[#9E7F53]">Rs. 249</h1>
        <p className="text-[10px]">MRP (Incl. of all taxes)</p>
      </div>
      <div className="border-b-2 border-b-gray-200 pb-5">
        <h1 className="font-[600] text-sm">Ingredients : </h1>
        <p className="text-[12px]">
          Vitamin C Powder, Orange Extract, Lemon Extract, Arnica Extract and
          more...
        </p>
      </div>
      <div className="py-5">
        <h1 className="text-sm">Rate this Product</h1>
        <div className="flex text-[#9E7F53] text-3xl">
          <i className="ri-star-line"></i>
          <i className="ri-star-line"></i>
          <i className="ri-star-line"></i>
          <i className="ri-star-line"></i>
          <i className="ri-star-line"></i>
        </div>
      </div>
      <div>
        <p className="text-sm">Write a review</p>
        <textarea className="bg-transparent border-[2px] mt-2 p-2 border-gray-300 rounded-xl w-full h-32"></textarea>
        <button className="px-4 py-2 bg-[#9E7F53] rounded-full text-white">Submit</button>
      </div>
      <div className="w-[90%] flex fixed bottom-4 left-1/2 translate-x-[-50%] overflow-hidden bg-red-100 rounded-full">
        <button className="text-center py-5 w-1/2 bg-white">ADD TO CARD</button>
        <button className="text-center py-5 w-1/2 bg-[#9E7F53] text-white">BUY NOW</button>
      </div>
    </div>
  );
};

export default page;
