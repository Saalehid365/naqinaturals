import React from "react";
import Navbar from "../../components/navbar";

const Hero = () => {
  return (
    <div className="bg-homehero h-[80vh] bg-no-repeat bg-cover bg-top">
      <Navbar />
      <div className="flex flex-col justify-center items-center h-3/4">
        <h2 className="text-7xl text-white w-2/4 text-center font-light">
          Health and Cheerfullness Naturally
        </h2>
        <div className="pt-12 w-72 flex justify-between text-white text-sm">
          <button className=" bg-green-700 w-32 h-10">Shop now</button>
          <button className=" bg-green-700 w-32 h-10">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
