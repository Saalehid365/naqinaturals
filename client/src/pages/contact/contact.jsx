import React from "react";
import Navbar from "../../components/navbar";
import {
  FaFacebook,
  FaInstagram,
  FaMailBulk,
  FaPhone,
  FaSearchLocation,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <div className="h-96 bg-shopbg bg-no-repeat bg-cover bg-bottom">
        <Navbar />
        <div className="w-full flex justify-center items-center h-60">
          <h2 className="text-6xl text-white font-light">Contact</h2>
        </div>
      </div>
      <div className="px-32 flex flex-col justify-center w-full pt-20 pb-12 bg-orange-100">
        <div className="flex justify-between items-center pb-12">
          <div className="w-96 border-b-2 border-gray-600"></div>
          <div className="text-2xl"> Any thing you need get onto us</div>
          <div className="w-96 border-b-2 border-gray-600"></div>
        </div>
      </div>
      <div className="flex justify-evenly bg-orange-100 pb-32">
        <div className="h-48 w-2/3">
          <div className="grid grid-cols-3 grid-rows-1 gap-x-10 px-6 ">
            <div className="flex flex-col text-sm  p-2 bg-gray-100">
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
            <div className="flex flex-col text-sm bg-yellow-600 p-2">
              <h2 className="font-normal text-md uppercase pb-6">Socials</h2>
              <div className="flex items-center pb-6 ">
                <FaInstagram className="text-2xl" />
                <h3 className="pl-2">Bonham Grove, Birmingham, B25 8rx</h3>
              </div>
              <div className="flex items-center pb-6">
                <FaTwitter className="text-2xl" />
                <h3 className="pl-2">07494514196</h3>
              </div>
              <div className="flex items-center pb-2">
                <FaFacebook className="text-2xl" />
                <h3 className="pl-2">info@Naqtural.com</h3>
              </div>
            </div>
            <div className="flex flex-col text-sm  bg-gray-100 p-2 ">
              <h2 className="font-normal text-md uppercase pb-6">Socials</h2>
              <div className="flex items-center pb-6 ">
                <FaInstagram className="text-2xl" />
                <h3 className="pl-2">Bonham Grove, Birmingham, B25 8rx</h3>
              </div>
              <div className="flex items-center pb-6">
                <FaTwitter className="text-2xl" />
                <h3 className="pl-2">07494514196</h3>
              </div>
              <div className="flex items-center pb-2">
                <FaFacebook className="text-2xl" />
                <h3 className="pl-2">info@Naqtural.com</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between bg-orange-100">
        <div className="pt-12 pl-32 pb-32 w-2/5">
          <h2 className="text-xl pb-2">Contact Form</h2>
          <h3 className="text-3xl">Ask Us Anything</h3>
          <form className="flex flex-col pt-12  h-72 justify-between">
            <input
              className="border border-gray-500 h-10 pl-2"
              placeholder="Your Name here"
            ></input>
            <input
              className="border border-gray-500 h-10 pl-2"
              placeholder="Your Email here"
            ></input>
            <input
              className="border border-gray-500 h-10 pl-2"
              placeholder="Your Message here"
            ></input>
            <div>
              <button className="bg-orange-500 w-32 text-white">
                Send Mail
              </button>
            </div>
          </form>
        </div>
        <div className="bg-pattern h-96 w-2/5"></div>
      </div>
    </div>
  );
};

export default Contact;
