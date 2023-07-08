import React from "react";

const Hero3 = () => {
  return (
    <div className="bg-bg1 bg-bottom bg-no-repeat bg-cover flex justify-evenly py-32">
      <div className="w-2/5 h-96 "></div>
      <div className="w-2/5 flex flex-col justify-between items-start">
        <div className="h-40 flex flex-col justify-evenly">
          <h4>Organic is the way to go</h4>
          <h3 className="text-5xl font-normal w-2/3">
            Healthy and Cheerfull Naturally helps
          </h3>
          <h3 className="pt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
            impedit fugit ut quas sint tenetur culpa facere eum quis repellat
            ipsa cumque placeat eius asperiores pariatur odit, velit debitis
            cum?
          </h3>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 w-96 ">
          <div>
            <p>Natural</p>
          </div>
          <div>
            <p>Natural</p>
          </div>
          <div>
            <p>Natural</p>
          </div>
          <div>
            <p>Natural</p>
          </div>
        </div>
        <div>
          <button className="bg-green-700 w-32 h-10 text-white">
            Shop now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero3;
