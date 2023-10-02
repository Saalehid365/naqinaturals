import React from "react";

import { Parallax } from "react-parallax";

import backggg from "../contact/items.JPG";

const ContactHero = () => {
  return (
    <Parallax
      pages={5}
      bgImage={backggg}
      strength={300}
      className="w-full h-[60vh] flex justify-center items-center  bg-bottom bg-no-repeat bg-cover text-white text-xl"
    >
      <div className="flex flex-col items-center justify-between text-5xl font-bold font-sans tracking-widest">
        <h3 className="text-green-900">Contact Us</h3>
      </div>
    </Parallax>
  );
};

export default ContactHero;
