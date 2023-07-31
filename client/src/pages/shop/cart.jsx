import React, { useContext, useState } from "react";
import Navbar from "../../components/navbar";
import Cartitems from "./cartitems";
import { FaCartArrowDown } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/shop-context";
import { productsList } from "../../products";

const Cart = () => {
  const { cartItems, getTotalCartAmount, cartProducts } =
    useContext(CartContext);
  const cart = useContext(CartContext);

  console.log(cart.items);
  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  const navigate = useNavigate();

  const checkout = async () => {
    await fetch("http://localhost:4000/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: cart.items }),
    }).then((response) => {
      return response.json().then((response) => {
        if (response.url) {
          window.location.assign(response.url);
        }
      });
    });
  };

  return (
    <div>
      <div className="h-96 bg-shopbg bg-no-repeat bg-cover bg-bottom">
        <Navbar />
        <div className="w-full flex justify-center items-center h-60">
          <h2 className="text-6xl text-white font-light">Cart</h2>
        </div>
      </div>
      {productsCount > 0 ? (
        <div className="pl-32 pt-20">
          <div className="pb-6">
            <h2 className="text-3xl">Shopping Cart</h2>
          </div>
          <div className="w-2/3 bg-blue-200 mb-4 pl-2">
            spend £15:00 get free delivery
          </div>
          <div className="w-2/3 grid grid-cols-4 mb-4">
            <h2 className="col-span-2">Item</h2>
            <h2 className=" justify-self-center">Quantity</h2>
            <h2 className="justify-self-end pr-4">Total</h2>
          </div>
          <div className="flex ">
            <div className="grid grid-cols-1 w-2/3  pb-12">
              {cart.items.map((currentProduct, idx) => (
                <Cartitems
                  key={idx}
                  id={currentProduct.id}
                  quantity={currentProduct.quantity}
                  product={currentProduct}
                ></Cartitems>
              ))}
            </div>
          </div>
          <button onClick={checkout}> checkout</button>
        </div>
      ) : (
        <div className="pt-12 pb-12">
          <h2 className="text-2xl font-bold pl-32">Shopping cart</h2>
          <div className="w-full  flex flex-col justify-evenly items-center h-72 pt-6">
            <div className="h-40 w-40 rounded-full bg-gray-400 flex justify-center items-center">
              <FaCartArrowDown className="text-7xl text-gray-200" />
            </div>
            <h3>Your shopping cart is empty</h3>
            <Link to="/shop" className="text-blue-600">
              Start shopping
            </Link>
          </div>
        </div>
      )}
      <div>{getTotalCartAmount}</div>
    </div>
  );
};

export default Cart;
