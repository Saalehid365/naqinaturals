import React from "react";
import natural from "./natural.png";
import planet from "./planet.png";
import delivery from "./delivery.png";

const Hero2 = () => {
  return (
    <div className="w-full flex justify-center items-center bg-background bg-bottom bg-no-repeat bg-cover py-32">
      <div className="flex justify-between items-center w-2/3">
        <div className="flex flex-col items-center justify-between h-60">
          <img src={natural} className="h-28 w-28" alt="natural"></img>
          <h3 className="font-semibold">Home made</h3>
          <h3 className="font-light">Branded items are made from home</h3>
          <h2>Read more</h2>
        </div>
        <div className="flex flex-col items-center justify-between h-60">
          <img src={planet} className="h-28 w-28" alt="planet"></img>
          <h3 className="font-semibold">Worldy Sourced</h3>
          <h3 className="font-light">Branded items are made from home</h3>
          <h2>Read more</h2>
        </div>
        <div className="flex flex-col items-center justify-between h-60">
          <img src={delivery} className="h-28 w-28" alt="delivery"></img>
          <h3 className="font-semibold">International Delivery</h3>
          <h3 className="font-light">Branded items are made from home</h3>
          <h2>Read more</h2>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
