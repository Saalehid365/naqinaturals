import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { productsList } from "../../products";
import Hero2 from "../homepage/hero2";
import { CartContext } from "../../context/shop-context";
import Cartpopup from "./cartpopup";

const Shop = () => {
  const { catergoryId } = useParams();

  {
    /*const catergoryFilter = productsList.find(
    (product) => product.catergory === catergoryId
  );*/
  }

  return (
    <div className="">
      <div className=" w-full ">
        <div className=" pt-14 grid grid-cols-4 grid-rows-1 gap-y-6 gap-x-12 justify-items-center pb-40 h-full px-10">
          {productsList.map((product) => (
            <Link
              to={`/shop/${product.sku}`}
              className="w-full col-span-1 "
              data={product}
            >
              <img
                className="w-full h-96 "
                alt="image1"
                src={product.image}
              ></img>
              <div className="flex flex-col justify-center items-start h-20 w-full font-normal font-serif text-black">
                <h2 className="text-sm font-black">{product.name}</h2>
                <h3 className="text-sm pt-2">£{product.price}</h3>
              </div>
            </Link>
          ))}
        </div>
        {/*<Cartpopup />*/}
      </div>
    </div>
  );
};

export default Shop;
