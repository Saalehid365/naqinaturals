import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { FaList, FaRegListAlt, FaTruck, FaUtensilSpoon } from "react-icons/fa";

const Dropdown = (props) => {
  const benefits = props.benefits;
  const usage = props.usage;
  const points = props.benefitPoints;

  return (
    <div>
      <Accordion className="font-light text-gray-800 text-xl">
        {/* benefits */}

        <AccordionItem>
          <h2>
            <AccordionButton paddingLeft={0}>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                className="font-semibold text-black tracking-widest flex"
              >
                <div className="border border-black flex items-center w-8 h-8 justify-center  mr-2">
                  <FaRegListAlt />
                </div>
                Benefits
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel
            pb={4}
            paddingLeft={0}
            className="tracking-wide text-base leading-relaxed"
          >
            {benefits}
            {points?.map((tag, key) => (
              <div className="">
                <li key={tag} className=" text-base mt-2">
                  {tag}
                </li>
              </div>
            ))}
          </AccordionPanel>
        </AccordionItem>

        {/* how to use */}

        <AccordionItem>
          <h2>
            <AccordionButton paddingLeft={0}>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                className="font-semibold text-black tracking-widest flex"
              >
                <div className="border border-black flex items-center w-8 h-8 justify-center  mr-2">
                  <FaUtensilSpoon />
                </div>
                How to use
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel
            pb={4}
            paddingLeft={0}
            className="tracking-wide text-base"
          >
            {usage}
          </AccordionPanel>
        </AccordionItem>

        {/* ingredients */}

        <AccordionItem>
          <h2>
            <AccordionButton paddingLeft={0}>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                className="font-semibold text-black tracking-widest flex"
              >
                <div className="border border-black flex items-center w-8 h-8 justify-center  mr-2">
                  <FaList />
                </div>
                Ingredients
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          {/*<AccordionPanel
            pb={4}
            paddingLeft={0}
            className="tracking-wide text-base"
          >
            {ingredients.map((ingred, key) => (
              <li key={ingred}>{ingred}</li>
            ))}
            </AccordionPanel>*/}
        </AccordionItem>

        {/* Shipping */}

        <AccordionItem>
          <h2>
            <AccordionButton paddingLeft={0}>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                className="font-semibold text-black tracking-widest flex"
              >
                <div className="border border-black flex items-center w-8 h-8 justify-center  mr-2">
                  <FaTruck />
                </div>
                Shipping
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel
            pb={4}
            paddingLeft={0}
            className="tracking-wide text-base"
          >
            <p>
              We endeavour to dispatch all our orders within 2 Working Days via
              Royal Mail. Please bear with us and allow a little longer during
              busy periods (promotional periods,).
            </p>
            <p className="mt-4">
              Royal Mail Tracked 24 (aims to deliver the next working day
              including Saturdays)
            </p>
            <p className="mt-4 font-bold">
              Orders under £40.00 | £3.95 Orders over £40.00 | FREE
            </p>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Dropdown;
