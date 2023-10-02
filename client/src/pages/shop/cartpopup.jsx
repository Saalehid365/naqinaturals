import React, { useContext } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { Button, useDisclosure } from "@chakra-ui/react";
import SideCartProduct from "./sideCartProduct";
import { CartContext } from "../../context/shop-context";
import { Link } from "react-router-dom";

const Cartpopup = () => {
  const cart = useContext(CartContext);
  const { isOpen, onClose, onOpen } = useContext(CartContext);

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={"sm"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader paddingLeft={2}>My basket</DrawerHeader>
          <DrawerBody>
            {cart.items.map((currentProduct, idx) => (
              <SideCartProduct
                key={idx}
                id={currentProduct.id}
                quantity={currentProduct.quantity}
                currentProduct={currentProduct}
              ></SideCartProduct>
            ))}
            <div className="flex justify-between pr-4">
              <div>
                <h3 className="font-bold text-lg">
                  subtotal
                  <span className="font-light">
                    &nbsp; &#40;{productsCount}&nbsp;
                    {productsCount === 1 ? <>item</> : <>items</>}&#41;{" "}
                  </span>
                </h3>
              </div>
              <div>
                <h2>£{cart.getTotalCost().toFixed(2)}</h2>
              </div>
            </div>
            <div className="h-24 flex flex-col justify-between">
              <Link to="/shoppingcart">
                <Button bg="brand.colourFour" width={96}>
                  Cart
                </Button>
              </Link>
              <Link className="text-black" onClick={onClose}>
                <Button
                  colorScheme="white"
                  width={96}
                  textColor="black"
                  border="2px"
                >
                  Continue shopping
                </Button>
              </Link>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Cartpopup;
