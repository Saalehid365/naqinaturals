import React, { useContext, useState } from "react";
import Product from "../../components/product";
import { productsList } from "../../products";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/shop-context";
import { FaShoppingBag } from "react-icons/fa";
import Cartpopup from "../shop/cartpopup";

import bottle from "../../assets/bottle.png";
const Products = () => {
  const { addOneToCart, isOpen, onClose, onOpen } = useContext(CartContext);

  return (
    <div className="h-full  px-40 pt-6 pb-44">
      <div className="h-44  flex justify-between items-end pr-12">
        <div className="flex flex-col justify-between">
          <h3 className="pb-2 font-light text-lg">Organic is the way to go</h3>
          <h2 className="text-5xl font-light">Top Products</h2>
          <h3 className="pt-2 font-light text-lg">
            Here are some of our top sellers which our customers love to
            purchase
          </h3>
        </div>
        <div>
          <h2 className="underline text-xl text-colourTwo">View all</h2>
        </div>
      </div>
      <div className=" pt-14 grid grid-cols-4 grid-rows-1 gap-10">
        {productsList.map((product) => (
          <div className=" ">
            <Link to={`/shop/${product.sku}`} className="w-72 relative">
              <img alt={product.image} src={product.image} className=""></img>
              <div className="flex flex-col justify-center items-start  w-full font-light mt-2">
                <h2 className="text-lg">{product.name}</h2>
                <h2 className="text-lg">{product.name2}</h2>
                <div className="flex">
                  <h3 className="text-sm">£{product.price}</h3>
                  <div className="flex">
                    <p>{product.size}</p>
                    <img src={bottle} alt="" className="h-8 w-8" />
                  </div>
                </div>
              </div>
            </Link>
            <div className="w-full flex justify-between pt-2">
              <div className="border border-black h-10 flex justify-center items-center w-4/5 mr-1 hover:cursor-pointer hover:text-white hover:bg-colourTwo">
                <Link
                  to={`/shop/${product.sku}`}
                  className="w-full text-center "
                >
                  View detail
                </Link>
              </div>
              <div
                className="w-12 border flex justify-center items-center border-black hover:cursor-pointer hover:text-white hover:bg-colourTwo"
                onClick={() => {
                  addOneToCart(product.id);
                  onOpen();
                }}
              >
                <FaShoppingBag />
              </div>
            </div>
          </div>
        ))}
      </div>
      <Cartpopup />
    </div>
  );
};

export default Products;
