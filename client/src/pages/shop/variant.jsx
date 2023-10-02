import React from "react";
import { Link, useParams } from "react-router-dom";
import { productsList } from "../../products";

const Variant = (props) => {
  const { productId, variateId } = useParams();

  const product = productsList.find((product) => product.sku === productId);
  const variate = product.variation.find((variate) => variate.id === variateId);
  console.log(variate);
  return (
    <Link
      //to={`/shop/${product.sku}/${variate.id}`}
      className="bg-green-600"
      product={variate}
    ></Link>
  );
};

export default Variant;
