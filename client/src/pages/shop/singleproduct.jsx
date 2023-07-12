import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { productsList } from "../../products";
import Navbar from "../../components/navbar";
import { FaCartPlus } from "react-icons/fa";
import Description from "./description";
import Ingredients from "./ingredients";
import { ShopContext } from "../../context/shop-context";

const Singleproduct = () => {
  const { productId } = useParams();
  const product = productsList.find((product) => product.sku === productId);
  const { name, price, id } = product;
  const { addToCart, cartItems, removeFromCart } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];

  return (
    <div>
      <div className="h-96 bg-shopbg bg-no-repeat bg-cover bg-bottom">
        <Navbar />
        <div className="w-full flex justify-center items-center h-60">
          <h2 className="text-6xl text-white font-light">Shop</h2>
        </div>
      </div>
      <div className=" bg-orange-100 px-60">
        <div className="pt-32 flex justify-between pb-12">
          <div className="bg-bg1 h-96 w-2/4"></div>
          <div className="w-2/5">
            <div className="border-b-2 border-orange-200">
              <h1 className="text-5xl font-semibold pb-2">{name}</h1>
              <h3>£{price}</h3>
            </div>
            <div className=" flex flex-col justify-between border-b-2 border-orange-200 pb-2 font-thin">
              <h3 className="text-sm pt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                ad repudiandae iusto, quis impedit perferendis maiores delectus
                officiis a earum?
              </h3>

              <h2 className="pt-10">Hurry up! Deals end up:</h2>

              <div className="pt-10 flex  w-96 justify-between">
                <div className="w-32 h-10 bg-black text-white flex justify-evenly">
                  <button
                    onClick={() => removeFromCart(id)}
                    className="border-r-2 pr-4 border-gray-500"
                  >
                    -
                  </button>
                  <h3 className="w-6 text-gray-100 flex justify-center items-center">
                    1
                  </h3>
                  <button
                    onClick={() => addToCart(id)}
                    className="border-l-2 pl-4 border-gray-500"
                  >
                    +
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => addToCart(id)}
                    className="flex justify-evenly items-center h-10 w-40 bg-orange-700 text-gray-100"
                  >
                    Add Cart{" "}
                    {cartItemAmount < 1 ? (
                      <FaCartPlus />
                    ) : (
                      <>({cartItemAmount})</>
                    )}
                  </button>
                </div>
              </div>
              <h3 className="pt-10">
                Worldwide Shipping - Free Delivery for orders over £75
              </h3>
            </div>
            <div className="pt-2">
              <div className="flex text-xs">
                <h3>Catergory:</h3>
                <h2>Organic</h2>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="flex">
          <Description />
          <Ingredients />
        </div>
      </div>
    </div>
  );
};

export default Singleproduct;
