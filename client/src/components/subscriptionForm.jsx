import { useState } from "react";
import React from "react";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleNameChange = (e) => {
    const { value } = e.target;
    setName(value);
  };

  const FORM_URL = "https://app.convertkit.com/forms/5447236/subscriptions";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    try {
      const response = await fetch(FORM_URL, {
        method: "post",
        body: data,
        headers: {
          accept: "application/json",
        },
      });
      const json = await response.json();

      if (json.status === "success") {
        return;
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-2/3 flex justify-center h-96 items-center bg-colourFour">
      <div className="">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col h-72 justify-between items-center text-white"
        >
          <h2 className="text-3xl font-semibold">Sign up to our newsletter</h2>
          <h3 className="font-light text-center">
            Get 10% off your first order, plus receive exclusive offers,
            discounts and exciting news when you sign up!
          </h3>
          <div className="flex flex-col justify-between h-40">
            <input
              aria-label="Your first name"
              name="fields[first_name]"
              placeholder="Your first name"
              type="text"
              onChange={handleNameChange}
              value={name}
              className="border w-96 h-12 pl-2 text-black font-light"
            />
            <input
              aria-label="Your email address"
              name="email_address"
              placeholder="Your email address"
              required
              type="email"
              onChange={handleEmailChange}
              value={email}
              className="border w-96 h-12 pl-2 text-black font-light"
            />
            <div className="flex justify-center">
              <button className="bg-colourFive w-32 h-8 text-white font-bold hover:opacity-50">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubscribeForm;
