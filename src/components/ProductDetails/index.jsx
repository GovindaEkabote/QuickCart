import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import ProductZoom from "../ProductZoom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { useState } from "react";
import QtyBox from "../QtyBox";
import { FaCartArrowDown } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";

const ProductDetails = () => {
  const [productActionIndex, setProductActionIndex] = useState(null);
  const [activeTag, setActiveTag] = useState(0);

  return (
    <>
      <div className="py-5 pb-0">
        <div className="container  !mb-2">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              to="/"
              className="link transition"
            >
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              to="/product/details/:id"
              className="link transition"
            >
              Details
            </Link>
            <Link underline="hover" color="inherit" className="link transition">
              Apple Digital Watch
            </Link>
          </Breadcrumbs>
        </div>
        <section className="bg-white py-5">
          <div className="container flex gap-8">
            <div className="productZoomContainer w-[40%] ">
              <ProductZoom />
            </div>
            <div className="productContent w-[60%] pr-10">
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
            </div>
          </div>
          <div className="container ">
            <div className="flex items-center gap-12 !mb-5">
              <span
                className={`link text-[18px] cursor-pointer font-[450] ${
                  activeTag === 0 && "text-[#e78300]"
                }`}
                onClick={() => setActiveTag(0)}
              >
                About This Item
              </span>
              <span
                className={`link text-[18px] cursor-pointer font-[450] ${
                  activeTag === 1 && "text-[#e78300]"
                }`}
                onClick={() => setActiveTag(1)}
              >
                Product Details
              </span>
              <span
                className={`link text-[18px] cursor-pointer font-[450] ${
                  activeTag === 2 && "text-[#e78300]"
                }`}
                onClick={() => setActiveTag(2)}
              >
                Reviews (10)
              </span>
            </div>
            {activeTag === 0 && (
              <div className="shadow-md w-full py-5 px-8 rounded-md">
                <h2 className="!mb-3 text-[18px] !font-[400]">
                  Apple Watch SE (2nd Gen, 2023) [GPS 40mm] Smartwatch with
                  Starlight Aluminum Case with Lake Green Sport Loop. Fitness &
                  Sleep Tracker, Crash Detection, Heart Rate Monitor, Retina
                  Display
                </h2>
                <h4>Vivid AMOLED Display: </h4>
                <p>
                  Large 4.9 CM display with 410x502 resolution for sharp visuals
                  and a premium look.
                </p>
                <h4>Enhanced Connectivity: </h4>
                <p>
                  Supports SingleSync BT calling, GPS tracking, and Bluetooth
                  5.3 for stable, fast connections.
                </p>
                <h4>Comprehensive Fitness Tracking: </h4>
                <p>
                  Includes Couch to 3K/5K running courses, VO2 Max, auto sports
                  recognition, and 100+ multisport modes.
                </p>
                <h4>Advanced Health Monitoring: </h4>
                <p>
                  Equipped with heart rate, SpO2, and stress tracking for
                  complete wellness support.
                </p>
                <h4>All-Day Utility: </h4>
                <p>
                  Offers a 5-day battery life, one-click measurements,
                  camera/music control, AI voice assistant, and additional
                  features like alarms, weather updates, and Find Phone
                  functionality.
                </p>
              </div>
            )}
            {activeTag === 1 && (
              <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"></thead>
                  <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                      <td class=" py-4 font-[700]">Brand</td>
                      <td class="!pl-40 py-4">
                        Apple
                      </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                      <td class=" py-4 font-[700]">Manufacturer</td>
                      <td class="!pl-40 py-4">
                        Imported by Titan Company Limited, Imported by Titan Company Limited 3 Sipcot Industries complex, Hosur- 635126
                      </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                      <td class=" py-4 font-[700]">Special Features	</td>
                      <td class="!pl-40 py-4">
                        Activity Tracker, Heart Rate Monitor, Multisport Tracker, Phone Call, Stress Tracking
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
            {
              activeTag === 2 && (<div className="">

              </div>)
            }

          </div>
        </section>
      </div>
    </>
  );
};

export default ProductDetails;
