import React, { useContext } from "react";
import { CartContext } from "../../context/shop-context";
import { getProductData } from "../../products";

const SideCartProduct = (props) => {
  const cart = useContext(CartContext);
  const { deleteFromCart } = useContext(CartContext);

  const name = props.name;
  const quantity = props.name;
  const id = props.id;
  const productData = getProductData(id);

  return (
    <div className="pb-4">
      <div className="flex items-start justify-between px-6">
        <img className="w-24 w-24" src={productData.image}></img>
        <div className="w-60 pl-4 text-gray-800 ">
          <h3>{productData.name}</h3>
          <h3 className="pb-4">{productData.name2}</h3>
          <h4 className="text-green-400 font-semibold text-md">
            £{productData.price}
          </h4>
        </div>
        <h3
          className="text-sm text-gray-700 hover:cursor-pointer hover:text-red-500"
          onClick={() => cart.deleteFromCart(id)}
        >
          X
        </h3>
      </div>
    </div>
  );
};

export default SideCartProduct;
