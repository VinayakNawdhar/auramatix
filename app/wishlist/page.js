import React from "react";
import Nav from "../components/Nav";
import BottomNav from "../components/BottomNav";
import FavouriteItems from "../components/FavouriteItems";
import Link from "next/link";
const page = () => {
  return (
    <div>
      <Nav />
      <div className="pb-16">
        <div className="flex justify-between">
          <h1 className="font-semibold">Favourites</h1>
          <h1 className="text-sm opacity-80">2 Items</h1>
        </div>
        <div className="w-full border-b-2 border-gray-300 pb-5">
          <FavouriteItems />
          <FavouriteItems />
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default page;
