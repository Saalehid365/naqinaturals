import React from "react";
import SubscribeForm from "../../components/subscriptionForm";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const Success = () => {
  const queryString = window.location.search;
  console.log(queryString);

  return (
    <div className="pt-20">
      <div className="flex justify-center">
        <div className="w-1/3 flex flex-col items-center">
          <h2 className="text-6xl font-semibold pb-4">Thank you </h2>
          <h3 className="text-4xl">for your order?</h3>
          <p className="pt-12 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ab
            ducimus cumque, libero nostrum quod quas corrupti vero veniam
            distinctio.
          </p>
          <p className="pt-6 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ab
            ducimus cumque, libero nostrum quod quas corrupti vero veniam
            distinctio.
          </p>
          <p className="text-end font-sans text-2xl">Natural and Naqi</p>
        </div>
        <div className="">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center   border-b-2 w-2/3 pb-6">
              <div className="flex items-center pb-8">
                <div className="border rounded-full h-8 w-8 flex justify-center items-center border-teal-500 mr-4">
                  <FaCheck />
                </div>
                <h2 className="text-2xl ">Order Successfully Placed</h2>
              </div>
              <p className="text-xl pb-2">
                your order no &nbsp;
                <span className=" text-md font-semibold">{queryString}</span>
              </p>
              <p className="text-xl  text-center leading-10">
                if you have any questions about your order please feel free to
                contact us on info@naturalnaqi.com
              </p>
              <Link className="bg-teal-500 px-4 py-2 rounded-full mt-6 text-white">
                View your order
              </Link>
            </div>
            <div className=" flex justify-center">
              <SubscribeForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
