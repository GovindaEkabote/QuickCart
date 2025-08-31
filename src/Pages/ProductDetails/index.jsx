import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import ProductZoom from "../../components/ProductZoom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { useState } from "react";
import QtyBox from "../../components/QtyBox";
import { FaCartArrowDown } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import TextField from "@mui/material/TextField";
import ProductSlider from "../ProductSlider";
import BannerBox from "../../components/BannerBox";
import ProductDetailsPage from '../../components/ProductDetailsPage'

const ProductDetails = () => {
  // const [productActionIndex, setProductActionIndex] = useState(null);
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
              <ProductDetailsPage />
            </div>
          </div>

          <div className="container">
            <div className="flex items-center gap-12 !mb-1">
              <span
                className={`link text-[18px] cursor-pointer font-[450] ${
                  activeTag === 0 && "text-[#ff5252]"
                }`}
                onClick={() => setActiveTag(0)}
              >
                About This Item
              </span>
              <span
                className={`link text-[18px] cursor-pointer font-[450] ${
                  activeTag === 1 && "text-[#ff5252]"
                }`}
                onClick={() => setActiveTag(1)}
              >
                Product Details
              </span>
              <span
                className={`link text-[18px] cursor-pointer font-[450] ${
                  activeTag === 2 && "text-[#ff5252]"
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
              <div className="shadow-md w-full !py-2 px-8 rounded-md">
                <div class="relative overflow-x-auto">
                  <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <tbody>
                      <tr class="bg-white border-b  dark:border-gray-700 border-gray-200">
                        <td class=" py-4 font-[700] text-black">Brand</td>
                        <td class="!pl-40 py-4">Apple</td>
                      </tr>
                      <tr class="bg-white border-b  dark:border-gray-700 border-gray-200">
                        <td class=" py-4 font-[700] text-black">
                          Manufacturer
                        </td>
                        <td class="!pl-40 py-4">
                          Imported by Titan Company Limited, Imported by Titan
                          Company Limited 3 Sipcot Industries complex, Hosur-
                          635126
                        </td>
                      </tr>
                      <tr class="bg-white border-b  dark:border-gray-700 border-gray-200 ">
                        <td class=" py-4 font-[700] text-black">
                          Special Features{" "}
                        </td>
                        <td class="!pl-40 py-4">
                          Activity Tracker, Heart Rate Monitor, Multisport
                          Tracker, Phone Call, Stress Tracking
                        </td>
                      </tr>
                      <tr class="bg-white border-b  dark:border-gray-700 border-gray-200 ">
                        <td class=" py-4 font-[700] text-black">
                          Special Features{" "}
                        </td>
                        <td class="!pl-40 py-4">
                          Activity Tracker, Heart Rate Monitor, Multisport
                          Tracker, Phone Call, Stress Tracking
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            {activeTag === 2 && (
              <div className="shadow-md w-[80%] py-5 px-8 rounded-md">
                <div className="w-full productReviewsContainer">
                  <h2 className="text-[18px]">Customer Reviews</h2>
                  <div className="reviewScroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden !mt-5">
                    <div className="reviews pb-5 border-b border-[rgba(0,0,0,0.2)] mt-3 w-full flex items-center justify-between">
                      <div className="info w-[60%] flex items-center  gap-3">
                        <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Shah_Rukh_Khan_in_2023_%281%29.jpg"
                            className="w-full "
                          />
                        </div>
                        <div className="w-[80%] !mt-3">
                          <h4 className="text-[16px]">Shah Rukh Khan</h4>
                          <h5 className="!mb-0 text-[13px]">2025-08-01</h5>
                          <p className="!mt-0 mb-0 line-clamp-2">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                          </p>
                        </div>
                      </div>
                      <Rating
                        name="half-rating"
                        defaultValue={2.5}
                        precision={0.5}
                        readOnly
                        // size="small"
                      />
                    </div>
                    <div className="reviews pb-5 border-b border-[rgba(0,0,0,0.2)] mt-3 w-full flex items-center justify-between">
                      <div className="info w-[60%] flex items-center  gap-3">
                        <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Shah_Rukh_Khan_in_2023_%281%29.jpg"
                            className="w-full "
                          />
                        </div>
                        <div className="w-[80%] !mt-3">
                          <h4 className="text-[16px]">Shah Rukh Khan</h4>
                          <h5 className="!mb-0 text-[13px]">2025-08-01</h5>
                          <p className="!mt-0 mb-0 line-clamp-2">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                          </p>
                        </div>
                      </div>
                      <Rating
                        name="half-rating"
                        defaultValue={2.5}
                        precision={0.5}
                        readOnly
                        // size="small"
                      />
                    </div>
                    <div className="reviews pb-5 border-b border-[rgba(0,0,0,0.2)] mt-3 w-full flex items-center justify-between">
                      <div className="info w-[60%] flex items-center  gap-3">
                        <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Shah_Rukh_Khan_in_2023_%281%29.jpg"
                            className="w-full "
                          />
                        </div>
                        <div className="w-[80%] !mt-3">
                          <h4 className="text-[16px]">Shah Rukh Khan</h4>
                          <h5 className="!mb-0 text-[13px]">2025-08-01</h5>
                          <p className="!mt-0 mb-0 line-clamp-2">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                          </p>
                        </div>
                      </div>
                      <Rating
                        name="half-rating"
                        defaultValue={2.5}
                        precision={0.5}
                        readOnly
                        // size="small"
                      />
                    </div>
                    <div className="reviews pb-5 border-b border-[rgba(0,0,0,0.2)] mt-3 w-full flex items-center justify-between">
                      <div className="info w-[60%] flex items-center  gap-3">
                        <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Shah_Rukh_Khan_in_2023_%281%29.jpg"
                            className="w-full "
                          />
                        </div>
                        <div className="w-[80%] !mt-3">
                          <h4 className="text-[16px]">Shah Rukh Khan</h4>
                          <h5 className="!mb-0 text-[13px]">2025-08-01</h5>
                          <p className="!mt-0 mb-0 line-clamp-2">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                          </p>
                        </div>
                      </div>
                      <Rating
                        name="half-rating"
                        defaultValue={2.5}
                        precision={0.5}
                        readOnly
                        // size="small"
                      />
                    </div>
                    <div className="reviews pb-5 border-b border-[rgba(0,0,0,0.2)] mt-3 w-full flex items-center justify-between">
                      <div className="info w-[60%] flex items-center  gap-3">
                        <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Shah_Rukh_Khan_in_2023_%281%29.jpg"
                            className="w-full "
                          />
                        </div>
                        <div className="w-[80%] !mt-3">
                          <h4 className="text-[16px]">Shah Rukh Khan</h4>
                          <h5 className="!mb-0 text-[13px]">2025-08-01</h5>
                          <p className="!mt-0 mb-0 line-clamp-2">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                          </p>
                        </div>
                      </div>
                      <Rating
                        name="half-rating"
                        defaultValue={2.5}
                        precision={0.5}
                        readOnly
                        // size="small"
                      />
                    </div>
                    <div className="reviews pb-5 border-b border-[rgba(0,0,0,0.2)] mt-3 w-full flex items-center justify-between">
                      <div className="info w-[60%] flex items-center  gap-3">
                        <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Shah_Rukh_Khan_in_2023_%281%29.jpg"
                            className="w-full "
                          />
                        </div>
                        <div className="w-[80%] !mt-3">
                          <h4 className="text-[16px]">Shah Rukh Khan</h4>
                          <h5 className="!mb-0 text-[13px]">2025-08-01</h5>
                          <p className="!mt-0 mb-0 line-clamp-2">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                          </p>
                        </div>
                      </div>
                      <Rating
                        name="half-rating"
                        defaultValue={2.5}
                        precision={0.5}
                        readOnly
                        // size="small"
                      />
                    </div>
                  </div>

                  <br />
                  <div className="reviewForm bg-[#f1f1f1] p-4 rounded-md">
                    <h2 className="text-[18px]">Add Your Review</h2>
                    <form className="w-full">
                      <TextField
                        id="outlined-multiline-flexible"
                        label="Write a review..."
                        multiline
                        rows={4}
                        className="w-full !mt-3"
                      />
                      <br />
                      <br />
                      <Rating
                        name="half-rating"
                        defaultValue={2.5}
                        precision={0.5}
                      />
                      <div className="flex items-center !mt-5 bg-[#febd69] w-[150px] rounded-md">
                        <Button className="!text-black !font-[500] ">
                          Submit Review
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div>
            <div className="container !pt-8">
              <h3 className="uppercase font-[600] text-[20px] !mb-1">
                Related Products
              </h3>
              <ProductSlider items={6} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductDetails;
