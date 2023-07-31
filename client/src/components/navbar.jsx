import React from "react";
import logotrans from "../assets/log.png";
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingBasket, FaUserAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex justify-between px-6 items-center uppercase pt-4 bg-opacity-0 text-white">
      <div className="w-96 flex justify-between text-sm font-bold">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
        <Link>Pages</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="flex justify-between text-xl pr-10 w-20">
        <Link to="/shoppingcart" className="flex items-center pl-4">
          <FaShoppingBasket className="" />
        </Link>
        <Link to="/dashboard" className="flex items-center pl-4">
          <FaUserAlt className="" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
