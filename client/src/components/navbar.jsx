import React from "react";
import logotrans from "../assets/log.png";
import { Link } from "react-router-dom";
import { FaHeart, FaIcons, FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex justify-between px-6 items-center uppercase pt-4 bg-opacity-0 text-white">
      <div className="w-96 flex justify-between text-sm">
        <Link>Home</Link>
        <Link>Shop</Link>
        <Link>About</Link>
        <Link>Pages</Link>
        <Link>Contact</Link>
      </div>
      <img src={logotrans} alt="/" className="w-60 h-24 "></img>
      <div className="flex justify-evenly text-sm">
        <Link className="pr-6">Search</Link>
        <Link className="flex items-center">
          <FaHeart className="" /> <h2 className="pl-4">Wishlist</h2>
        </Link>
        <Link className="flex items-center pl-4">
          <FaUser className="" />
          <h2 className="pl-4">Register/Login</h2>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
