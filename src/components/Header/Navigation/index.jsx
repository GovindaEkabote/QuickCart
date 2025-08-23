import { Button } from "@mui/material";
import React, { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { TbTruckDelivery } from "react-icons/tb";
import "./style.css";
import SideBar from "./SideBar";
import { IoIosArrowForward } from "react-icons/io";




const Navigation = () => {


  const [isOpenSideBar, setIsOpenSideBar] = useState(false);
  const openSideBar = () => {
  setIsOpenSideBar(true);
};

const closeSideBar = () => {
  setIsOpenSideBar(false);
};
  return (
    <>
      <nav className="">
        <div className="container flex justify-start items-center gap-12">
          <div className="col_1 w-[20%]">
            <Button className="!text-black w-full" onClick={openSideBar}>
              <MdOutlineMenu className="text-[18px]" />
              &nbsp; Shop By Categories &nbsp;&nbsp;
              <IoIosArrowDown className="text-[18px] ml-auto font-bold " />
            </Button>
          </div>

          <div className="col_2 w-[62%] ">
            <ul className="flex items-center nav">
              <li className="list-none ">
                <Link
                  to="/"
                  className="link transition text-[14px] uppercase font-[500]  "
                >
                  <Button className="link hover:!text-[#ff5252] transition !text-black uppercase !py-4">
                    HOME
                  </Button>
                </Link>
              </li>
              <li className="list-none relative">
                <Link
                  to="/"
                  className="link transition text-[14px] uppercase font-[500]"
                >
                  <Button className="!py-4 link transition !text-black uppercase hover:!text-[#ff5252]">
                    Electronics&nbsp;  <IoIosArrowDown />
                  </Button>
                 
                </Link>
                <div className="submenu absolute top-[120%] left-[0%] min-w-[200px] bg-white shadow-md opacity-0 transition-all">
                    <li className="list-none relative">
                    <Link to="/" className="w-full">
                      <Button className="!text-black hover:!text-[#ff5252] w-full !justify-start !text-left !rounded-none">Mobiles <IoIosArrowForward className="!justify-end w-full"/> </Button>
                      </Link>
                       <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                    <li className="list-none">
                    <Link to="/" className="w-full">
                      <Button className="!text-black w-full hover:!text-[#ff5252] !justify-start !text-left !rounded-none">Mobiles</Button>
                      </Link>
                    </li>
                     <li className="list-none">
                    <Link to="/" className="w-full">
                      <Button className="!text-black w-full hover:!text-[#ff5252] !justify-start !text-left !rounded-none">Laptop</Button>
                      </Link>
                    </li>
                     <li className="list-none">
                    <Link to="/" className="w-full">
                      <Button className="!text-black w-full hover:!text-[#ff5252] !justify-start !text-left !rounded-none">Computer</Button>
                      </Link>
                    </li>
                    <li className="list-none">
                    <Link to="/" className="w-full">
                      <Button className="!text-black w-full hover:!text-[#ff5252] !justify-start !text-left !rounded-none">Headphones</Button>
                      </Link>
                    </li>
                </div>
                    </li>
                     <li className="list-none">
                    <Link to="/" className="w-full">
                      <Button className="!text-black w-full hover:!text-[#ff5252] !justify-start !text-left !rounded-none">Laptop</Button>
                      </Link>
                    </li>
                     <li className="list-none">
                    <Link to="/" className="w-full">
                      <Button className="!text-black w-full hover:!text-[#ff5252] !justify-start !text-left !rounded-none">Computer</Button>
                      </Link>
                    </li>
                    <li className="list-none">
                    <Link to="/" className="w-full">
                      <Button className="!text-black w-full hover:!text-[#ff5252] !justify-start !text-left !rounded-none">Headphones</Button>
                      </Link>
                    </li>
                </div>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  className="link transition text-[14px] uppercase font-[500]"
                >
                  <Button className="link transition !text-black uppercase hover:!text-[#ff5252] !py-4">
                    Footwares
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  className="link transition text-[14px] uppercase font-[500]"
                >
                  <Button className="link transition !text-black uppercase hover:!text-[#ff5252] !py-4">
                    Fashion
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  className="link transition text-[14px] uppercase font-[500]"
                >
                  <Button className="link transition !text-black uppercase hover:!text-[#ff5252] !py-4">
                    accessories
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  className="link transition text-[14px] uppercase font-[500]"
                >
                  <Button className="link transition !text-black uppercase hover:!text-[#ff5252] !py-4">
                    groceries
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  className="link transition text-[14px] uppercase font-[500]"
                >
                  <Button className="link transition !text-black uppercase hover:!text-[#ff5252] !py-4">
                    books
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  className="link transition text-[14px] uppercase font-[500]"
                >
                  <Button className="link transition !text-black uppercase hover:!text-[#ff5252] !py-4">
                    jewellery
                  </Button>
                </Link>
              </li>
            </ul>
          </div>

          <div className="col_3 w-[18%]">
            <p className="!text-[13px] uppercase font-[450] flex items-center">
              free delivery above Rs.500 &nbsp;
              <TbTruckDelivery className="text-[25px] ml-auto font-bold" />
            </p>
          </div>
        </div>
      </nav>

      {/* Side Bar Component */}
      <SideBar isOpenSideBar={isOpenSideBar} closeSideBar={closeSideBar}/>
    </>
  );
};

export default Navigation;
