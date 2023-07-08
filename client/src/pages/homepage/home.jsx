import React from "react";
import Hero from "./hero";
import Hero2 from "./hero2";
import Hero3 from "./hero3";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <Hero2 />
      <Hero3 />
    </div>
  );
};

export default Home;
