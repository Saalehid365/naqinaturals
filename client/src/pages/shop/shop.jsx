import React, { useContext, useEffect } from "react";
import Navbar from "../../components/navbar";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";
import { productsList } from "../../products";

const Shop = () => {
  return (
    <div className="pb-32">
      <div className="h-96 bg-shopbg bg-no-repeat bg-cover bg-bottom">
        <Navbar />
        <div className="w-full flex justify-center items-center h-60">
          <h2 className="text-6xl text-white font-light">Shop</h2>
        </div>
      </div>
      <div className="px-12  pt-14 grid grid-cols-4 grid-rows-1 gap-1  gap-y-10 justify-items-center">
        {productsList.map((product) => (
          <Link to={`/shop/${product.sku}`} className="" data={product}>
            <img
              className="w-72"
              alt="image1"
              src="https://www.nealsyardremedies.com/cdn/shop/products/neals-yard-remedies-organic-elderberry-syrup-150ml-37337291423964_1800x1800.jpg?v=1656066787"
            ></img>
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

export default Shop;
