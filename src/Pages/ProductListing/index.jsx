import React from "react";
import SideBar from "../../components/SideBar";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Products from "../../components/Products";
import Button from "@mui/material/Button";
import { IoGrid } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";



const ProductListing = () => {
  return (
    <section className="pt-1 pb-3 ">
      <div className="container ">
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            color="inherit"
            href="/"
            className="link transition"
          >
            HOME
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/"
            className="link transition"
          >
            FASHION
          </Link>
        </Breadcrumbs>
      </div>
      <div className="bg-white p-2 !mt-4">
        <div className="container flex gap-3 ">
          <div className="sidebarWrapper w-[20%] h-full">
            <SideBar />
          </div>
          <div className="rightContent w-[80%] py-2 ">
            <div className="bg-[#f1f1f1] p-2 !mb-3 rounded-md w-full flex items-center justify-between">
              <div className="col1 flex items-center  ">
                <Button className=" !w-[40px] !h-[40px] !min-w-[40px] !rounded-full !max-w-[40px] !text-[250px] !text-black"><IoMenu  className=""/></Button>
                <Button className=" !w-[40px] !h-[40px] !min-w-[40px] !rounded-full !max-w-[40px] !text-[250px] !text-black"><IoGrid  className=""/></Button>
                <span className="text-[15px] font-[500] pl-2 ">There are 27 products</span>
              </div>
              <div className="col1 flex items-center  ">
                <Button className=" !w-[40px] !h-[40px] !min-w-[40px] !rounded-full !max-w-[40px] !text-[250px] !text-black"><IoMenu  className=""/></Button>
                <Button className=" !w-[40px] !h-[40px] !min-w-[40px] !rounded-full !max-w-[40px] !text-[250px] !text-black"><IoGrid  className=""/></Button>
                <span className="text-[15px] font-[500] pl-2 ">There are 27 products</span>
              </div>
             
            </div>
            
            <div className="grid grid-cols-4 md:grid-cols-4 gap-4">
              <Products />
              <Products />
              <Products />
              <Products />
              <Products />
              <Products />
              <Products />
              <Products />
              <Products />
              <Products />
              <Products />
              <Products />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductListing;
