import React, { useState } from "react";
import {
  FaChevronDown,
  FaAngleUp,
  IconName,
  FaChevronUp,
} from "react-icons/fa";
import { motion } from "framer-motion";
import elderflower from "./elderflower.webp";

const Benefits = () => {
  const [question1, setQuestion1] = useState(false);
  const [question2, setQuestion2] = useState(false);
  const [question3, setQuestion3] = useState(false);
  const [question4, setQuestion4] = useState(false);
  const [question5, setQuestion5] = useState(false);

  const handleQuestion1 = () => {
    setQuestion1(!question1);
  };
  const handleQuestion2 = () => {
    setQuestion2(!question2);
  };
  const handleQuestion3 = () => {
    setQuestion3(!question3);
  };
  const handleQuestion4 = () => {
    setQuestion4(!question4);
  };
  const handleQuestion5 = () => {
    setQuestion5(!question5);
  };

  return (
    <div className="flex pt-44 bg-bg3 bg-center px-40 pb-24">
      <div className="w-2/4 ">
        <div>
          <h3 className="pb-2 font-light text-xs">Organic is the way to go</h3>
          <h2 className="text-4xl font-light w-2/3">
            Most asked questions about our products
          </h2>
        </div>
        <div className="w-3/4 pt-12 font-thin">
          <div className="border-gray-400 border-b-2 flex flex-col justify-between pb-2 ">
            <div className="flex items-center justify-between pt-2">
              <h3
                className="w-full hover:cursor-pointer"
                onClick={handleQuestion1}
              >
                <span className="font-bold pr-2">Q.</span>Are your products all
                organic
              </h3>
              {!question1 ? (
                <FaChevronDown className="text-xs " />
              ) : (
                <FaAngleUp onClick={handleQuestion1} />
              )}
            </div>
            {question1 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="pt-2"
              >
                <span className="font-bold pr-2">A.</span> yes all of our
                products are natural and you will not find any harmfull
                ingredeints in them
              </motion.div>
            )}
          </div>
          <div className="border-gray-400 border-b-2 flex flex-col justify-between pb-2">
            <div className="flex items-center justify-between pt-2">
              <h3
                className="w-full hover:cursor-pointer"
                onClick={handleQuestion2}
              >
                Are your products all organic
              </h3>
              {!question2 ? (
                <FaChevronDown className="text-xs " />
              ) : (
                <FaAngleUp onClick={handleQuestion2} />
              )}
            </div>
            {question2 && <div className="pt-2">here is the answer</div>}
          </div>
          <div className="border-gray-400 border-b-2 flex flex-col justify-between pb-2">
            <div className="flex items-center justify-between pt-2">
              <h3
                className="w-full hover:cursor-pointer"
                onClick={handleQuestion3}
              >
                Are your products all organic
              </h3>
              {!question3 ? (
                <FaChevronDown className="text-xs " />
              ) : (
                <FaAngleUp onClick={handleQuestion3} />
              )}
            </div>
            {question3 && <div className="pt-2">here is the answer</div>}
          </div>
          <div className="border-gray-400 border-b-2 flex flex-col justify-between pb-2">
            <div className="flex items-center justify-between pt-2">
              <h3
                className="w-full hover:cursor-pointer"
                onClick={handleQuestion4}
              >
                Are your products all organic
              </h3>
              {!question4 ? (
                <FaChevronDown className="text-xs " />
              ) : (
                <FaAngleUp onClick={handleQuestion4} />
              )}
            </div>
            {question4 && <div className="pt-2">here is the answer</div>}
          </div>
          <div className="border-gray-400 border-b-2 flex flex-col justify-between pb-2">
            <div className="flex items-center justify-between pt-2">
              <h3
                className="w-full hover:cursor-pointer"
                onClick={handleQuestion5}
              >
                Are your products all organic
              </h3>
              {!question5 ? (
                <FaChevronDown className="text-xs " />
              ) : (
                <FaAngleUp onClick={handleQuestion5} />
              )}
            </div>
            {question5 && <div className="pt-2">here is the answer</div>}
          </div>
        </div>
      </div>
      <img src={elderflower} className="w-1/2 h-96"></img>
    </div>
  );
};

export default Benefits;
