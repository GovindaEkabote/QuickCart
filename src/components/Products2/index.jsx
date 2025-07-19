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

const Products2 = () => {
  return (
    <div className="productItem rounded-md shadow-lg overflow-hidden border-1  border-[rgba(0,0,0,0.4)] flex items-center">
      <div className="group imgWrapper w-[25%] !h-full overflow-hidden rounded-md relative">
        <Link to="/">
          <div className="img overflow-hidden">
            <img src={images} className="w-full " />
            <img src="https://www.gonoise.com/cdn/shop/products/5_db6e1a8f-79c4-4d81-ba43-de815dd7760b.png?v=1752669445" className="w-full h-full top-0 left-0 absolute opacity-0 transition-all duration-500 group-hover:opacity-100" />
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
      <div className="info  h-full !px-5 py-3 w-[75%] bg-[rgb(247,247,247)]  ">
        <h6 className="text-[18px]">
          <Link to="/" className="link transition-all">
            Brand Name
          </Link>
        </h6>
        <h3 className="text-[16px] title !mt-2 !mb-2 font-[500] text-[rgba(0,0,0,0.9)]">
          <Link to="/" className="link  transition-all">
            Firebolt F-31A Digital Watch
          </Link>
        </h3>
        <p className="text-[14px] !mb-2 line-clamp-3">

            Resin Glass Water Resistant Case / bezel material: Resin / Chrome plated Stainless Steel Band Adjustable Buckle LED light 1/100-second stopwatch Measuring capacity: 59'59.99" Measuring modes: Net time, split time, 1st-2nd place times Daily alarm Hourly time signal Auto-calendar (28 days for February) 12/24-hour format Regular time keeping: Hour, minute, second, pm, date, day Accuracy: ±30 seconds per month Approx. battery life: 7 years on CR2016 and total weight: 48 g.


        </p>
        <Rating
          name="half-rating"
          defaultValue={2.5}
          precision={0.5}
          readOnly
          size="small"
        />
        <div className="flex items-center gap-4">
          <span className="oldPrice line-through text-gray-600 text-[15px] font-bold">
            ₹250.5
          </span>
          <span className="newPrice text-[brown] text-[14px] font-bold">
            ₹150.5
          </span>
        </div>
        <div className="py-2">
            <Button className="!bg-[#febd69] btn-org !text-black !font-[600]">Add To Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default Products2