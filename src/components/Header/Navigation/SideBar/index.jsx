import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { IoIosClose } from "react-icons/io";
import { FaRegPlusSquare } from "react-icons/fa";
import "../style.css";
import { Link } from "react-router-dom";
// import { useState } from "react";
import { FaRegSquareMinus } from "react-icons/fa6";
import CategoryCollapse from "../../../CategoryCollapse";

const SideBar = ({ isOpenSideBar, closeSideBar }) => {
 
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="categories ">
      {" "}
      <h3 className="p-4 text-[15px] uppercase font-black flex justify-center">
        Shop By Categories{" "}
        <IoIosClose
          className=" !ml-4 cursor-pointer text-red-900 text-[25px]"
          onClick={closeSideBar}
        />
      </h3>
      <Divider />
     <CategoryCollapse />
    </Box>
  );

  return (
    <Drawer open={isOpenSideBar} onClose={closeSideBar}>
      {DrawerList}
    </Drawer>
  );
};

export default SideBar;
