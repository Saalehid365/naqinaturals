import React from "react";
import { Parallax } from "react-parallax";

import backggg from "./images/worktop.jpg";

const Hero2 = () => {
  return (
    <Parallax
      pages={5}
      bgImage={backggg}
      strength={200}
      className="w-full h-[60vh] flex justify-center items-center bg-background bg-bottom bg-no-repeat bg-cover text-white "
    >
      <div className="flex flex-col items-center justify-between h-52 text-4xl font-light font-serif tracking-widest">
        <h3>Shop our totally Natural,</h3>
        <h3>Organic and Pure range,</h3>
        <button className="border-4 px-8 py-2 text-3xl">Store</button>
      </div>
    </Parallax>
  );
};

export default Hero2;
