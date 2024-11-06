import React from "react";
import Product from "@/app/components/Product";

const page = async ({ params }) => {
  const productId = (await params).id;
  return (
   <Product/>
  );
};

export default page;
