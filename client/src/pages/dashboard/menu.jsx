import React from "react";
import {
  Fade,
  ScaleFade,
  Slide,
  SlideFade,
  Collapse,
  Button,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaArrowDown, FaDelicious } from "react-icons/fa";

const MenuDrop = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <div className="">
      <div
        onClick={onToggle}
        className="w-full flex justify-between hover:cursor-pointer text-gray-300 px-8 items-center"
      >
        <FaDelicious />
        <h3 className="text-xl font-semibold ">Dashboard</h3>
        <FaArrowDown className="text-xs" />
      </div>
      <Collapse in={isOpen} animateOpacity>
        <Box
          pl="20"
          rounded="md"
          shadow="md"
          className="flex flex-col h-52 justify-evenly text-gray-400 font-thin hover:cursor-pointer"
        >
          <Link className="hover:text-teal-200">Orders</Link>
          <Link className="hover:text-teal-200">Customers</Link>
          <Link className="hover:text-teal-200">Reports</Link>
          <Link className="hover:text-teal-200">Stockist</Link>
        </Box>
      </Collapse>
    </div>
  );
};

export default MenuDrop;
