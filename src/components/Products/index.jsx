import React from "react";
import images from "../../assets/products/watches/boAt Cosmos Pro 1.webp";
import "../Products/style.css";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";

const Products = () => {
  return (
    <div className="productItem rounded-md shadow-lg overflow-hidden border-1  border-[rgba(0,0,0,0.4)]">
      <div className="imgWrapper w-[100%] h-[220px]  overflow-hidden rounded-md">
        <img src={images} className="w-full " />
      </div>
      <div className="info p-3 bg-[rgb(247,247,247)] ">
        <h6 className="text-[13px]">
          <Link to="/" className="link transition-all">
            Brand Name
          </Link>
        </h6>
        <h3 className="text-[14px] title mt-1 mb-1 font-[500] text-[rgba(0,0,0,0.9)]">
          <Link to="/" className="link  transition-all">
            Firebolt F-31A Digital Watch
          </Link>
        </h3>
        <Rating
          name="half-rating"
          defaultValue={2.5}
          precision={0.5}
          readOnly
          size="small"
        />
        <div className="flex items-center gap-4">
          <span className="oldPrice line-through text-gray-600 text-[14px] font-bold">₹250.5</span>
          <span className="newPrice text-[brown] text-[16px] font-bold">₹150.5</span>
        </div>
      </div>
    </div>
  );
};

export default Products;
