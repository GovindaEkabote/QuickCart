import React from "react";
import SideBar from "../../components/SideBar";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Products from "../../components/Products";

const ProductListing = () => {
  return (
    <section className="pt-1 pb-3 ">
      <div className="container ">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/" className="link transition">
            HOME
          </Link>
          <Link underline="hover" color="inherit" href="/" className="link transition">
            FASHION
          </Link>
        </Breadcrumbs>
      </div>
     <div className="bg-white p-2 !mt-4">
       <div className="container flex gap-3 ">
        <div className="sidebarWrapper w-[20%] h-full">
          <SideBar />
        </div>

        <div className="rightContent w-[80%] py-2">
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
