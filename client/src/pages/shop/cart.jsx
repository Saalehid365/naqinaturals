import React, { useContext, useEffect } from "react";
import Cartitems from "./cartitems";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/shop-context";

const Cart = () => {
  const { cartItems, getTotalCartAmount, cartProducts, getTotalCost } =
    useContext(CartContext);
  const cart = useContext(CartContext);

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cart.items));
  }, [cart]);

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
    <div className="pb-32">
      {productsCount > 0 ? (
        <div className="px-32 pt-20">
          <div className="pb-6">
            <h2 className="text-2xl">Shopping Cart</h2>
          </div>
          <div className="flex ">
            <div className="grid grid-cols-1 w-full  pb-12">
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
          <div className="w-full flex justify-end">
            <div className="w-1/3 flex flex-col">
              <div className="flex justify-between pb-4">
                <h3 className="text-xl font-bold">Subtotal</h3>
                <h3 className="font-light text-2xl">
                  £{cart.getTotalCost().toFixed(2)}
                </h3>
              </div>
              <button
                onClick={checkout}
                className="h-12  text-white bg-colourFive text-xl font-semibold hover:bg-gray-600"
              >
                checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="pt-12">
          <h2 className="text-2xl font-bold font-serif pl-12">Shopping cart</h2>
          <div className="  flex flex-col h-72 pt-6 pl-12">
            <h3 className="font-serif text-xl">
              You have nothing in your cart is empty.
            </h3>
            <Link
              to="/shop"
              className=" bg-fithly w-48 h-12 flex items-center justify-center text-white mt-8 hover:bg-gray-600"
            >
              Start shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
