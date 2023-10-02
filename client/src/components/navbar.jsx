import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import naqi from "./NaturalHealthFul.png";
import { CartContext } from "../context/shop-context";
import {
  FaCartPlus,
  FaFacebook,
  FaInstagram,
  FaMailBulk,
  FaMailchimp,
  FaSearch,
  FaTwitter,
} from "react-icons/fa";

import basket from "../assets/basket.png";
import search from "../assets/search.png";
import mail from "../assets/mail.png";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";

const Navbar = () => {
  const cart = useContext(CartContext);
  const [shop, setShop] = useState(false);
  const [about, setAbout] = useState(false);

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <div className="flex flex-col ">
      <div className="bg-colourOne z-90 h-8 flex justify-center items-center text-colourThree text-md font-light">
        Limited offer: £10 off £45 spend. Use code: &nbsp;
        <span className="font-bold uppercase">10off</span>
        <span className="text-fithly text-sm"> &nbsp; (T&C's apply)</span>
      </div>
      <div className="flex justify-between px-12 items-center uppercase text-gray-600 w-full  bg-opacity-70">
        <div className="w-44">
          <div className="flex text-2xl  justify-between hover:text-gray-400">
            <Link className="hover:text-gray-700">
              <img src={twitter} alt="" className="h-6 w-6" />
            </Link>
            <Link className="hover:text-gray-700">
              <img src={instagram} alt="" className="h-6 w-6" />
            </Link>
            <Link className="hover:text-gray-700">
              <img src={facebook} alt="" className="h-6 w-6" />
            </Link>
            <Link className="hover:text-gray-700">
              <img src={mail} alt="" className="h-6 w-6" />
            </Link>
          </div>
        </div>
        <div className="w-2/3 flex justify-center">
          <img src={naqi} className="h-96" alt="image4"></img>
        </div>
        <div className="">
          <div className="flex justify-end w-44">
            <div className="mr-4">
              <Link to="/dashboard" className="flex flex-col items-center  ">
                <img src={search} alt="" className="h-6 w-6" />
              </Link>
            </div>
            <div className="flex justify-between text-xl ">
              <Link
                to="/shoppingcart"
                className="flex flex-col justify-center items-center relative "
              >
                <img src={basket} className="h-6 w-6" />
                {productsCount > 0 ? (
                  <h2 className="absolute bg-colourFive w-5 h-5 text-xs text-white flex justify-center items-center rounded-full  -top-3 left-4">
                    {productsCount}
                  </h2>
                ) : (
                  <></>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center  border-primary border-opacity-10 h-10 tracking-widest	">
        <div className=" flex justify-between text-colourThree font-light h-full items-center text-lg">
          <div>
            <Link
              to="/"
              className=" hover:text-colourFive h-full flex items-center mx-8 justify-center"
            >
              Home
            </Link>
          </div>
          <div>
            <Link
              to="shop"
              className=" hover:text-colourFive h-full flex items-center mx-8 justify-center"
              onMouseOver={() => setShop(true)}
              onMouseLeave={() => setShop(false)}
            >
              Shop
            </Link>
            {shop && (
              <div
                className="flex flex-col absolute z-10 bg-colourFour  justify-evenly   pt-2 pb-4 w-40 pl-2 	"
                onMouseOver={() => setShop(true)}
                onMouseLeave={() => setShop(false)}
              >
                <Link
                  to=""
                  className="pb-1 hover:text-colourOne hover:font-semibold"
                >
                  Beauty
                </Link>
                <Link className="pb-1 hover:text-colourOne hover:font-semibold">
                  Vitamin D
                </Link>
                <Link className="pb-1 hover:text-colourOne hover:font-semibold">
                  Supplements
                </Link>
              </div>
            )}
          </div>
          <Link
            to="contact"
            className=" hover:text-colourFive h-full flex items-center mx-8 justify-center"
          >
            Contact
          </Link>
          <div>
            <Link
              to="about"
              className=" hover:text-colourFive h-full flex items-center mx-8 justify-center"
              onMouseOver={() => setAbout(true)}
              onMouseLeave={() => setAbout(false)}
            >
              About
            </Link>
            {about && (
              <div
                className="flex flex-col pl-2 absolute z-10 bg-colourFour  justify-evenly w-40 pr-4 pt-2 pb-4 borer-b-2 "
                onMouseOver={() => setAbout(true)}
                onMouseLeave={() => setAbout(false)}
              >
                <Link className="pb-1 hover:text-colourOne hover:font-semibold">
                  Our Story
                </Link>
              </div>
            )}
          </div>
          <Link
            to="faqs"
            className=" hover:text-colourFive h-full flex items-center mx-8 justify-center"
          >
            Faqs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
