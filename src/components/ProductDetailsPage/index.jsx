import { useState } from 'react'
import QtyBox from "../QtyBox";
import { FaCartArrowDown } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import Button from '@mui/material/Button';
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";

const ProductDetailsPage = () => {
    const [productActionIndex, setProductActionIndex] = useState(null);
  return (
    <>
        <h1 className="text-[22px] font-[600] !mb-1 line-clamp-3">
                Apple Watch SE (2nd Gen, 2023) [GPS 40mm] Smartwatch with
                Starlight Aluminum Case with Lake Green Sport Loop. Fitness &
                Sleep Tracker, Crash Detection, Heart Rate Monitor, Retina
                Display
              </h1>
              <div className="flex items-center gap-3 ">
                <span className="text-gray-500 text-[15px]">
                  Brands :{" "}
                  <span className="font-[500] text-black opacity-75">
                    Apple
                  </span>
                </span>
                <Rating
                  name="half-rating"
                  defaultValue={2.5}
                  precision={0.5}
                  readOnly
                  size="small"
                />
                <Link to="#">
                  {" "}
                  <span className="text-[15px] font-[600] cursor-pointer">
                    Review (5){" "}
                  </span>
                </Link>
              </div>
              <div className="flex items-center gap-4 !mt-3">
                <span className="oldPrice line-through text-gray-600 text-[18px] font-bold">
                  ₹250.5
                </span>
                <span className="newPrice text-[brown] text-[20px] font-bold">
                  ₹150.5
                </span>
                <span className="newPrice text-[14px]">
                  Available In Stock :{" "}
                  <span className="newPrice text-emerald-600 text-[14px] font-bold">
                    78 Items
                  </span>
                </span>
              </div>
              <div className="gap-3 !mt-2 pr-[14px] !mb-3">
                <p className="line-clamp-3">
                  Black Solid Round Digital Sports Watch For Men And Boys, Best
                  Selling, Waterproof New Arrival Latest Trending Solid Sports
                  Silicone Watch For Men, Gents And Boys ,Under 149, Under 299,
                  Under 249 Under 199, Under 499, Under 349, Under 399, Under
                  499, High Quality Watches, Automatic Watch, Men Watches
                </p>
                <div className=" flex  items-center gap-2 !mt-3">
                  <span className="text-[18px] ">size :</span>
                  <div className="flex items-center gap-1 actions">
                    <Button
                      className={`${
                        productActionIndex === 0 ? "!bg-[#f7d4a6]" : ""
                      }`}
                      onClick={() => setProductActionIndex(0)}
                    >
                      S
                    </Button>
                    <Button
                      className={`${
                        productActionIndex === 1 ? "!bg-[#f7d4a6]" : ""
                      }`}
                      onClick={() => setProductActionIndex(1)}
                    >
                      M
                    </Button>
                    <Button
                      className={`${
                        productActionIndex === 2 ? "!bg-[#f7d4a6]" : ""
                      }`}
                      onClick={() => setProductActionIndex(2)}
                    >
                      L
                    </Button>
                    <Button
                      className={`${
                        productActionIndex === 3 ? "!bg-[#f7d4a6]" : ""
                      }`}
                      onClick={() => setProductActionIndex(3)}
                    >
                      XL
                    </Button>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="qtybox-wrapper !w-[70px]">
                    <QtyBox />
                  </div>
                  <div className="!mt-4 bg-[#febd69]  gap-2 rounded-md">
                    <Button className=" !m-1  !text-black !text-[14px] ">
                      <FaCartArrowDown className="text-black text-[22px]" />
                      &nbsp; Add To Cart
                    </Button>
                  </div>
                </div>
                <p className="text-[14px] !mt-2">
                  No Cost EMI available on products above ₹5,000. EMI starts at
                  ₹418.
                </p>
              </div>
              <div className="flex items-center gap-4 mt-5">
                <span className="flex items-center gap-2 text-[15px] link cursor-pointer font-[500]">
                  <FaRegHeart className="!text-[18px]" /> Add to Wishlist
                </span>
                <span className="flex items-center gap-3 text-[15px] link cursor-pointer font-[500]">
                  <FaCodeCompare className="!text-[18px]" /> Add to compare
                </span>
              </div>
    </>
  )
}

export default ProductDetailsPage
