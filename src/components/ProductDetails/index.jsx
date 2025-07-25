import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import ProductZoom from "../ProductZoom";

const ProductDetails = () => {
  return (
    <>
        <div className="py-5 pb-0">
      <div className="container !mb-2">
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            color="inherit"
            to="/"
            className="link transition"
          >
            HOME
          </Link>
          <Link
            underline="hover"
            color="inherit"
            to="/product/details/:id"
            className="link transition"
          >
            DETAILS
          </Link>
        </Breadcrumbs>
      </div>
      <section className="bg-white py-5">
        <div className="container flex gap-4 ">
        <div className="productZoomContainer w-[30%] h-[60vh] overflow-hidden">
            <ProductZoom />
        </div>
      </div>
      </section>
    </div>
    </>
  );
};

export default ProductDetails;
