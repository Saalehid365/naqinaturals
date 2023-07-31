import React from "react";
import {
  FaArrowDown,
  FaCompressArrowsAlt,
  FaDelicious,
  FaPrescriptionBottle,
  FaUsers,
} from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import { logo } from "./log.png";
import { Menu } from "@chakra-ui/react";
import MenuDrop from "./menu";

const Dashboard = () => {
  return (
    <div className="flex w-screen ">
      <div className=" bg-sky-900 pt-12 sticky h-screen">
        <div className="flex justify-center">
          <img
            src="http://localhost:3000/static/media/log.abb681f9c15be1751ab8.png"
            className="h-24 pb-12"
          ></img>
        </div>
        <div className="w-52">
          <MenuDrop />
          <div className="w-full flex  text-gray-300 px-8 items-center pt-6">
            <FaUsers className="" />
            <h3 className="text-xl font-semibold pl-2">Users</h3>
          </div>
          <div className="w-full flex  text-gray-300 px-8 items-center pt-6">
            <FaPrescriptionBottle className="" />
            <Link to="addproductpage" className="text-xl font-semibold pl-2">
              Products
            </Link>
          </div>
        </div>
      </div>
      <div className="w-screen">
        <div className="flex justify-end items-center bg-gray-200 h-16  pr-12">
          <div className="flex justify-between w-20 items-center text-1xl text-gray-300">
            <div>
              <FaCompressArrowsAlt />
            </div>
            <h3>Admin</h3>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
