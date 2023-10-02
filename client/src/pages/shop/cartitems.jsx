import React, { useContext } from "react";
import { CartContext } from "../../context/shop-context";
import { FaTimes } from "react-icons/fa";
import { getProductData } from "../../products";

const Cartitems = (props) => {
  const {
    removeOneFromCart,
    updateCartItemCount,
    addOneToCart,
    cartItems,
    deleteFromCart,
  } = useContext(CartContext);

  const id = props.id;
  const quantity = props.quantity;
  const productData = getProductData(id);

  const itemAmount = quantity * productData.price;

  return (
    <div className="h-40 border-b-2 grid grid-cols-4 grid-rows-1 mt-2 pt-2">
      <div className="flex col-span-2">
        <img src={productData.image} className="h-28 w-32" alt="product"></img>
        <div className="pl-8 font-light pt-2">
          <div className="flex flex-col">
            <h2 className=" text-black font-light text-xl">
              {productData.name}
            </h2>
            <h2 className=" text-gray-600 pt-2">{productData.name2}</h2>
            <h2 className=" text-gray-600">size &nbsp; {productData.size}</h2>
          </div>
        </div>
      </div>
      <div className="countHandler flex justify-center items-start ">
        <div className="flex items-center">
          {props.quantity >= 2 ? (
            <button
              className="hover:bg-colourFour w-10 h-10 rounded-full text-2xl"
              onClick={() => removeOneFromCart(id)}
            >
              -
            </button>
          ) : (
            <button className=" w-10 h-10 rounded-full text-2x text-gray-300 ">
              -
            </button>
          )}
          <h2 className="w-10 h-6 pl-4 font-thin text-2xl">{props.quantity}</h2>
          <button
            className="hover:bg-colourFour w-10 h-10 rounded-full text-2xl"
            onClick={() => addOneToCart(productData.id)}
          >
            +
          </button>
        </div>
      </div>
      <div className="flex justify-end items-start pr-4 ">
        <div className="flex w-32 justify-between pt-2">
          <h2 className="font-thin text-2xl">£{itemAmount}</h2>
          <div
            className="flex ml-4 justify-end text-gray-400 hover:cursor-pointer hover:text-colourThree"
            onClick={() => deleteFromCart(productData.id)}
          >
            <FaTimes className="text-3xl font-thin " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartitems;
