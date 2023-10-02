import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../../context/shop-context";
import { productsList } from "../../products";
import { Button } from "@chakra-ui/react";

import SubscribeForm from "../../components/subscriptionForm";
import { FaCheck, FaStar } from "react-icons/fa";
import Cartpopup from "./cartpopup";
import Dropdown from "./dropdown";
import Yotpo from "../../components/yotpo";

const Singleproduct = (props) => {
  const { addOneToCart, isOpen, onClose, onOpen } = useContext(CartContext);

  const { productId } = useParams();

  const product = productsList.find((product) => product.sku === productId);

  const handleBasket = () => {
    addOneToCart(product.id);
    onOpen();
  };

  return (
    <div className="relative ">
      <div className=" pb-24 flex justify-center flex-col items-center">
        <div className="pt-10 flex justify-evenly mb-24 px-12">
          <div className="w-1/3 object-cover">
            <img alt="img1" className="" src={product.image}></img>
            <div
              alt="img1"
              className="grid grid-cols-4 grid-rows-1 gap-2 gap-y-4 mt-2"
            >
              <img
                alt="img1"
                className=""
                src="https://thatgirlcookshealthy.com/wp-content/uploads/2021/07/Sea-Moss-Gel-image.png"
              ></img>
              <img
                alt="img1"
                className=""
                src="https://pureseamoss.co.uk/cdn/shop/files/Cleanse-RawturmericInfusedSeaMossGel_1000x.jpg?v=1689701030"
              ></img>
              <img
                alt="img1"
                className=""
                src="https://tastegreatfoodie.com/wp-content/uploads/2023/02/sea-moss-gel.jpg"
              ></img>
              <img
                alt="img1"
                className=""
                src="https://tastegreatfoodie.com/wp-content/uploads/2023/02/sea-moss-gel.jpg"
              ></img>
            </div>
          </div>
          <div className="w-3/5 pl-8">
            <h1 className="text-2xl font-semibold pb-4 text-colourTwo">
              {product.name}
            </h1>
            <div className="text-xl pb-4 text-colourThree flex justify-between w-56">
              <h2 className="">{product.name2} -</h2>
              <h2 className="">100ml</h2>
            </div>

            <div className="flex w-52 justify-between pb-4 text-lg text-colourFour items-center hover:text-colourThree hover:cursor-pointer">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />

              <div>
                <p className="underline underline-offset-4 text-sm">
                  {" "}
                  8 Reviews
                </p>
              </div>
            </div>

            <div className="w-3/5">
              <p className="text-lg">
                £<span>{product.price}</span>
              </p>
            </div>

            <div>
              <label for="size">Choose size:</label>

              <select id="cars">
                <option value="saab">
                  <Link to="shop/:productId" value="volvo">
                    200ml
                  </Link>
                </option>
                <option value="vw">VW</option>
                <option value="audi" selected>
                  Audi
                </option>
              </select>
            </div>

            <div className="flex flex-col justify-between mt-10 pb-6">
              <div className="flex w-72 justify-between">
                <Button
                  height="12"
                  width="40"
                  className="p-2 border border-black text-black w-32"
                  onClick={handleBasket}
                  rounded={2}
                  bg="brand.colourFour"
                  textColor="white"
                >
                  Add to cart
                </Button>
              </div>
            </div>
            <div className=" pb-4 mb-20">
              <h3 className="tracking-wide text-lg pt-4 font-light text-gray-800  leading-8">
                {product.description1}
              </h3>
            </div>
            <Dropdown
              benefits={product.benefits}
              usage={product.howToUse}
              Ingredients={product.Ingredients}
              benefitPoints={product.benefitPoints}
            />
          </div>
        </div>
        <Cartpopup />
        <SubscribeForm />
      </div>
    </div>
  );
};

export default Singleproduct;
