import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/navbar";
import Description from "./description";
import Ingredients from "./ingredients";
import { CartContext } from "../../context/shop-context";
import { productsList } from "../../products";
import { Button, Input, useDisclosure } from "@chakra-ui/react";

import Footer from "../../components/footer";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import SideCartProduct from "./sideCartProduct";

const Singleproduct = (props) => {
  const { addOneToCart, updateCartItemCount, cartProducts, removeOneFromCart } =
    useContext(CartContext);

  const cart = useContext(CartContext);

  const { productId } = useParams();
  const product = productsList.find((product) => product.sku === productId);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleBasket = () => {
    addOneToCart(product.id);
    onOpen();
  };
  console.log(cart.items);

  return (
    <div className="relative">
      <div className="h-96 bg-shopbg bg-no-repeat bg-cover bg-bottom">
        <Navbar />
        <div className="w-full flex justify-center items-center h-60">
          <h2 className="text-6xl text-white font-light">Shop</h2>
        </div>
      </div>
      <div className=" bg-gray-100 px-60">
        <Link to="/shop" className="flex pt-10 items-center">
          <FaArrowLeft />
          <h2 className="pl-4">Return to shop</h2>
        </Link>
        <div className="pt-32 flex justify-between pb-12">
          <div className="bg-bg1 h-96 w-2/4"></div>
          <div className="w-2/5">
            <div className="border-b-2 border-orange-200">
              <h1 className="text-5xl font-semibold pb-2">{product.name}</h1>
              <h2>{product.name2}</h2>
              <h3>£{product.price}</h3>
              <div className="flex text-gray-600">
                Brand: <h4> {product.brand}</h4>
              </div>
            </div>
            <div className=" flex flex-col justify-between border-b-2 border-orange-200 pb-2 font-thin">
              <h3 className="text-sm pt-2">{product.description1}</h3>

              <h2 className="pt-10">Hurry up! Deals end up:</h2>

              <div className="pt-10 flex  w-96 justify-between">
                <div className="flex w-72 justify-between">
                  <Button
                    colorScheme="blue"
                    className="p-2 bg-green-600 rounded-md w-32"
                    onClick={handleBasket}
                  >
                    Add to cart
                  </Button>
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
          <Description product={product} />
          <Ingredients product={product} />
        </div>
      </div>
      <>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={"sm"}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader pl={12}>Your basket</DrawerHeader>
            <DrawerBody>
              {cart.items.map((currentProduct, idx) => (
                <SideCartProduct
                  key={idx}
                  id={currentProduct.id}
                  quantity={currentProduct.quantity}
                  currentProduct={currentProduct}
                ></SideCartProduct>
              ))}
              <Link to="/shoppingcart">
                <Button colorScheme="blue" width={96}>
                  Cart
                </Button>
              </Link>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
      <Footer />
    </div>
  );
};

export default Singleproduct;
