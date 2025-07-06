import React from "react";
import images from "../../assets/products/watches/boAt Cosmos Pro 1.webp";
import "../Products/style.css";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { FaRegHeart } from "react-icons/fa6";
import { FaCodeCompare } from "react-icons/fa6";
import { MdOutlineZoomOutMap } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";

const Products = () => {
  return (
    <div className="productItem rounded-md shadow-lg overflow-hidden border-1  border-[rgba(0,0,0,0.4)]">
      <div className="group imgWrapper w-[100%] h-[220px]  overflow-hidden rounded-md relative">
        <Link to="/">
          <div className="img h-[220px]  overflow-hidden">
            <img src={images} className="w-full " />
            <img src="https://m.media-amazon.com/images/I/41RCVsQkYDL._SX300_SY300_QL70_FMwebp_.jpg" className="w-full top-3 left-0 absolute opacity-0 transition-all duration-500 group-hover:opacity-100" />

          </div>
        </Link>
        <span className="dixcount flex items-center absolute top-[5%] left-[5%] z-50 bg-blue-400 p-1 text-[12px] text-white rounded-lg font-500">
          20%
        </span>
        <div className="actions absolute top-[-200px] !right-[5px] z-50 flex items-center gap-2  flex-col w-[50px] transition-all duration-300 group-hover:top-[15px] opacity-0 group-hover:opacity-100 ">
          <Tooltip title="Wish List">
            <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full  !text-black hover:!bg-[#febd69] !bg-white hover:text-white ">
              <FaRegHeart className="text-[15px] !text-black group-hover:text-white" />
            </Button>
          </Tooltip>
          <Tooltip title="compare">
            <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full  !text-black hover:!bg-[#febd69] !bg-white hover:text-white ">
              <FaCodeCompare className="text-[15px] !text-black group-hover:text-white" />
            </Button>
          </Tooltip>
          <Tooltip title="zoom">
            <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full  !text-black hover:!bg-[#febd69] !bg-white hover:text-white ">
              <MdOutlineZoomOutMap className="text-[15px] !text-black group-hover:text-white" />
            </Button>
          </Tooltip>
        </div>
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
          <span className="oldPrice line-through text-gray-600 text-[14px] font-bold">
            ₹250.5
          </span>
          <span className="newPrice text-[brown] text-[16px] font-bold">
            ₹150.5
          </span>
        </div>
      </div>
    </div>
  );
};

export default Products;
