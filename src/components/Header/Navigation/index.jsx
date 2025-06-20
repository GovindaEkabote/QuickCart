import { Button } from "@mui/material";
import React from "react";
import { MdOutlineMenu } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { TbTruckDelivery } from "react-icons/tb";



const Navigation = () => {
  return (
    <nav className="py-2">
      <div className="container flex justify-start items-center gap-8">
        <div className="col_1 w-[20%]">
          <Button className="!text-black w-full">
            <MdOutlineMenu className="text-[18px]" />
            &nbsp; Shop By Categories &nbsp;&nbsp;
            <IoIosArrowDown className="text-[18px] ml-auto font-bold " />
          </Button>
        </div>
        <div className="col_2 w-[62%] ">
          <ul className="flex items-center ">
            <li className="list-none">
              <Link
                to="/"
                className="link transition text-[14px] uppercase font-[500]"
              >
              <Button className="link transition !text-black uppercase">
                HOME
              </Button>
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                className="link transition text-[14px] uppercase font-[500]"
              >
              <Button className="link transition !text-black uppercase">
                Electronics

              </Button>
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                className="link transition text-[14px] uppercase font-[500]"
              >
              <Button className="link transition !text-black uppercase">
                Footwares

              </Button>
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                className="link transition text-[14px] uppercase font-[500]"
              >
              <Button className="link transition !text-black uppercase">
                kids

              </Button>
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                className="link transition text-[14px] uppercase font-[500]"
              >
              <Button className="link transition !text-black uppercase">
                accessories

              </Button>
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                className="link transition text-[14px] uppercase font-[500]"
              >
              <Button className="link transition !text-black uppercase">
                groceries

              </Button>
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                className="link transition text-[14px] uppercase font-[500]"
              >
              <Button className="link transition !text-black uppercase">
                books

              </Button>
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                className="link transition text-[14px] uppercase font-[500]"
              >
              <Button className="link transition !text-black uppercase">
                jewellery

              </Button>
              </Link>
            </li>
           
          </ul>
        </div>
        <div className="col_3 w-[18%]">
          <p className="text-[13px] uppercase font-[450] flex items-center">free delivery above Rs.500 &nbsp;<TbTruckDelivery className="text-[25px] ml-auto font-bold"/></p>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
