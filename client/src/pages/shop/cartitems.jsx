import React, { useContext } from "react";
import { CartContext, ShopContext } from "../../context/shop-context";
import { Select } from "@chakra-ui/react";
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
    <div className="h-32 border grid grid-cols-4 grid-rows-1 pt-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] mb-4">
      <div className="flex col-span-2">
        <img src={productData.image} className="h-28 w-32 pl-2"></img>
        <div className="pl-4 font-light">
          <div className="flex">
            <h2 className="">{productData.name}</h2>
            <h2>{productData.name2}</h2>
          </div>
          <h3>{productData.price}</h3>
        </div>
      </div>
      <div className="countHandler flex justify-center items-start ">
        <div className="border rounded-md flex">
          <button
            onClick={() => removeOneFromCart(id)}
            className="w-6 h-6 border-r-2"
          >
            -
          </button>
          <h2 className="w-10 h-6 pl-4">{props.quantity}</h2>
          <button
            className="w-6 h-6 border-l-2"
            onClick={() => addOneToCart(productData.id)}
          >
            +
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-between items-end pr-4">
        <h2 className="font-semibold">{itemAmount}</h2>
        <div
          className="flex items-center w-20 justify-between text-gray-400 hover:cursor-pointer hover:text-blue-400"
          onClick={() => deleteFromCart(productData.id)}
        >
          <FaTimes className="text-sm" />
          <h3>Remove</h3>
        </div>
      </div>
    </div>
  );
};

export default Cartitems;
