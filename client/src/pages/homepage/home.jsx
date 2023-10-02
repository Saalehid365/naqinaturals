import React from "react";
import Hero from "./hero";
import Hero2 from "./hero2";
import Products from "./products";
import SubscriptionForm from "../../components/subscriptionForm";
import Instagram from "./instagram";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <Hero2 />
      <Products />
      <Instagram />
      <div className="flex justify-center mt-24">
        <SubscriptionForm />
      </div>
    </div>
  );
};

export default Home;
