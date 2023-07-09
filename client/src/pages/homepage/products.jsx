import React from "react";
import Product from "../../components/product";

const Products = () => {
  return (
    <div className="h-full bg-bg3 bg-no-repeat bg-cover bg-center px-40 pt-6 pb-24">
      <div className="h-44  flex justify-between items-end pr-12">
        <div className="flex flex-col justify-between">
          <h3 className="pb-2 font-light text-xs">Organic is the way to go</h3>
          <h2 className="text-4xl font-light">Top Products</h2>
          <h3 className="pt-2 font-light text-xs">
            Here are some of our top sellers which our customers love to
            purchase
          </h3>
        </div>
        <div>
          <h2 className="underline">View all</h2>
        </div>
      </div>
      <div className=" pt-14 grid grid-cols-4 grid-rows-2 gap-1">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default Products;
