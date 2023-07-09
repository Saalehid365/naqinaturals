import React from "react";

const Hero4 = () => {
  return (
    <div className="bg-bg3 bg-center grid grid-rows-1 grid-cols-3 gap-4">
      <div className=" bg-magnesium  h-96 bg-cover relative">
        <h2 className="bg-white absolute top-4 h-14 w-60 flex justify-center items-center text-xl bg-opacity-60 text-gray-600">
          Magnesium Flakes
        </h2>
      </div>
      <div className=" bg-blackseed h-96 bg-cover relative">
        <h2 className="bg-white absolute top-4 h-14 w-60 flex justify-center items-center text-xl bg-opacity-60 text-gray-600">
          Black Seeds
        </h2>
      </div>
      <div className=" bg-colloidal h-96 bg-cover relative bg-center">
        <h2 className="bg-white absolute top-4 h-14 w-60 flex justify-center items-center text-xl bg-opacity-60 text-gray-600">
          Colloidal Silver
        </h2>
      </div>
    </div>
  );
};

export default Hero4;
