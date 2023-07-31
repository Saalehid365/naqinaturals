import React, { useState } from "react";
import Product from "../../components/product";
import { productsList } from "../../products";
import { Link } from "react-router-dom";

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
      <div className=" pt-14 grid grid-cols-4 grid-rows-1 gap-10">
        {productsList.map((product) => (
          <Link to={`/shop/${product.sku}`} className="w-72 relative">
            <img src="https://www.nealsyardremedies.com/cdn/shop/products/neals-yard-remedies-organic-elderberry-syrup-150ml-37337291423964_1800x1800.jpg?v=1656066787"></img>
            <div className="flex flex-col justify-center items-center bg-gray-100 h-20 w-full font-thin ">
              <h2 className="text-lg">{product.name}</h2>
              <h3 className="text-sm">{product.price}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
