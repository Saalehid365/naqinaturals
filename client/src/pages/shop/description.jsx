import React from "react";

const Description = (props) => {
  const { description2 } = props.product;

  return (
    <div className="flex pt-10 relative w-3/4">
      <img
        className="w-60 h-60"
        alt="imag2"
        src="https://www.nealsyardremedies.com/cdn/shop/products/neals-yard-remedies-organic-elderberry-syrup-150ml-37337291194588_1800x1800.jpg?v=1656091269"
      ></img>
      <div className="pl-10 font-thin">
        <p className="w-3/4 pt-6">{description2}</p>
      </div>
    </div>
  );
};

export default Description;
