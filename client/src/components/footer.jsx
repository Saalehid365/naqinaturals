import React from "react";
import logotrans from "../assets/log.png";
import payment from "../assets/payment.png";
import { Link } from "react-router-dom";
import {
  FaCopyright,
  FaFacebook,
  FaInstagram,
  FaMailBulk,
  FaPhone,
  FaSearchLocation,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" flex flex-col px-32 bg-homehero bg-cover bg-bottom">
      <div className="flex justify-between items-start pt-20 pb-12 font-thin text-black">
        <div>
          <img src={logotrans} className="h-28 w-60" alt="logo"></img>
          <h2 className="text-xs pt-6">Pure and Natural combined</h2>
        </div>
        <div className="flex flex-col text-sm">
          <h2 className="font-normal text-md uppercase pb-6">Usefull pages</h2>
          <Link to="about" className="pb-2 ">
            About
          </Link>
          <Link to="contact" className="pb-2">
            Contact
          </Link>
          <Link to="policy" className="pb-2">
            Policy
          </Link>
          <Link to="sale" className="pb-2">
            Flash Sale
          </Link>
        </div>
        <div className="flex flex-col text-sm">
          <h2 className="font-normal text-md uppercase pb-6">Help Center</h2>
          <Link to="payments" className="pb-2">
            Payments
          </Link>
          <Link to="shipping" className="pb-2">
            Shipping
          </Link>
          <Link to="faqs" className="pb-2">
            FAQs
          </Link>
          <Link to="checkout" className="pb-2">
            Checkout
          </Link>
        </div>

        <div className="flex flex-col text-sm">
          <h2 className="font-normal text-md uppercase pb-6">Contacts</h2>
          <div className="flex items-center pb-6 ">
            <FaSearchLocation className="text-2xl" />
            <h3 className="pl-2">Bonham Grove, Birmingham, B25 8rx</h3>
          </div>
          <div className="flex items-center pb-6">
            <FaPhone className="text-2xl" />
            <h3 className="pl-2">07494514196</h3>
          </div>
          <div className="flex items-center pb-2">
            <FaMailBulk className="text-2xl" />
            <h3 className="pl-2">info@Naqtural.com</h3>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center  border-y-2 border-gray-200 h-12 ">
        <div className="flex text-sm font-thin">
          <Link className="px-4 border-x-2">Home</Link>
          <Link className="px-4 border-r-2">About</Link>
          <Link className="px-4 border-r-2">Shop</Link>
          <Link className="px-4 border-r-2">Contact us</Link>
        </div>
        <div className="flex w-60 justify-evenly font-thin text-gray-600 border-r-2">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
        </div>
      </div>
      <div className="flex justify-between font-thin pt-4 pb-4 text-xs">
        <div className="flex items-center">
          <FaCopyright />
          <h3 className="pl-2">2023 Naqtural. All Rights Reserverd.</h3>
          <h3 className="pl-2 text-red-800">
            Designed and Developed by{" "}
            <Link className="underline underline-offset-4">IDesign365</Link>
          </h3>
        </div>
        <div>
          <Link className="border-r-2 pr-2">Terms and Conditions</Link>
          <Link className="pl-2">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
