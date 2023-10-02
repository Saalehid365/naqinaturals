import React from "react";
import logotrans from "./header.JPG";
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
    <div className=" flex flex-col px-20  bg-cover bg-bottom mt-12 ">
      <div className="flex justify-between items-start pt-20 pb-12 font-light ">
        <div>
          <img src={logotrans} className="h-40 w-96" alt="logo"></img>
        </div>
        <div className="flex flex-col text-sm ">
          <h2 className="font-normal uppercase pb-6">Usefull pages</h2>
          <Link to="shop" className="pb-2 w-max hover:text-black">
            Shop
          </Link>
          <Link to="about" className="pb-2 w-max hover:text-black">
            About
          </Link>
          <Link to="contact" className="pb-2 w-max hover:text-black">
            Contact
          </Link>
        </div>
        <div className="flex flex-col text-sm">
          <h2 className="font-normal uppercase pb-6">Help Center</h2>
          <Link to="faqs" className="pb-2 uppercase w-max hover:text-black">
            Faqs
          </Link>
          <Link to="delivery" className="pb-2 w-max hover:text-black">
            Delivery & Returns
          </Link>
          <Link to="terms" className="pb-2 ">
            Terms & conditions
          </Link>
          <Link to="privacy" className="pb-2 ">
            Privacy
          </Link>
        </div>

        <div className="flex flex-col text-sm">
          <h2 className="font-normal uppercase pb-6">Contact</h2>
          <div className="flex items-start pb-6 ">
            <FaSearchLocation className="text-lg" />
            <h3 className="pl-2 w-72">
              Natural and Naqi, 71-75 Shelton Street, Covent Garden, London,
              WC2H 9JQ
            </h3>
          </div>
          <div className="flex items-center pb-6">
            <FaPhone className="text-lg" />
            <h3 className="pl-2">07494514196</h3>
          </div>
          <div className="flex items-center pb-2">
            <FaMailBulk className="text-lg" />
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
      <div className="flex justify-between pt-4 pb-4 text-sm font-light">
        <div className="flex items-center">
          <FaCopyright />
          <h3 className="pl-2">
            2023 Naqtural and naqi. All Rights Reserverd.
          </h3>
          <h3 className="pl-2 text-fithly ">
            Designed and Developed by{" "}
            <Link className="underline underline-offset-4">IDesign365</Link>
          </h3>
        </div>
        <div>
          <Link className="border-r-2 pr-2">Terms and Conditions</Link>
          <Link to="privacy" className="pl-2">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
