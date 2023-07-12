import React from "react";

const Product = () => {
  return (
    <div className="w-72 flex flex-col items-center justify-between pb-8 text-xs">
      <div>
        <img alt="product" className="h-72"></img>
      </div>
      <h2 className="pt-6 uppercase ">Sambucus</h2>
      <h3 className="pt-2 font-light">Elderberry Syrup</h3>
      <h2 className="pt-4">Price £10.99</h2>
    </div>
  );
};

export default Product;
