import React from "react";
import Hero from "./hero";
import Hero2 from "./hero2";
import Hero3 from "./hero3";
import Products from "./products";
import Hero4 from "./hero4";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <Hero2 />
      <Hero3 />
      <Products />
      <Hero4 />
    </div>
  );
};

export default Home;
