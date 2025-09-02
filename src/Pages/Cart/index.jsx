import React from "react";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { Button, Rating } from "@mui/material";

const Cart = () => {
  return (
    <section className="section py-10">
      <div className="container w-[70%] max-w-[80%] flex gap-5">
        <div className="leftCart w-[75%]">
          <div className="shadow-md rounded-md pb-10 bg-white">
            <div className="py-2 px-3 border-b border-[rgba(0,0,0,0.1)]">
              <h2>Your Cart</h2>
              <p className="mt-0">
                There are <span className="font-bold text-[red]">2</span>{" "}
                products in your cart
              </p>
            </div>
            <div className="cartItem w-full p-3 flex items-center gap-4 pb-2 border-b border-[rgba(0,0,0,0.1)]">
              <div className="img w-[15%] rounded-md overflow-hidden">
                <Link to="/product/785" className="group">
                  <img
                    src="https://images.meesho.com/images/products/48013767/w4wu8_512.avif?width=512"
                    className="w-full group-hover:scale-105 transition-all"
                  />
                </Link>
              </div>
              <div className="info w-[85%] relative">
                <IoCloseSharp className="cursor-pointer absolute top-[-10px] right-[0px] text-[25px] link transition-all" />
                <span className="text-[13px]">Brand Name</span>
                <h3 className="line-clamp-2 text-[15px] font-[600]">
                  <Link to="/product/785" className="link">
                    Apple Watch SE (2nd Gen, 2023) [GPS 40mm] Smartwatch with
                    Starlight Aluminum Case with Lake Green Sport Loop. Fitness
                    & Sleep Tracker, Crash Detection, Heart Rate Monitor, Retina
                    Apple Watch SE (2nd Gen, 2023) [GPS 40mm] Smartwatch with
                    Starlight Aluminum Case with Lake Green Sport Loop. Fitness
                    & Sleep Tracker, Crash Detection, Heart Rate Monitor, Retina
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
                  <span className="flex items-center justify-center bg-[#f1f1f1] text-[12px] font-[600] py-1 px-2 rounded-md cursor-pointer">
                    Size: s &nbsp;
                    <IoIosArrowDown className="text-[15px]" />
                  </span>
                  <span className="flex items-center justify-center bg-[#f1f1f1] text-[12px] font-[600] py-1 px-2 rounded-md cursor-pointer">
                    Qty: 1 &nbsp;
                    <IoIosArrowDown className="text-[15px]" />
                  </span>
                </div>
                <div className="flex items-center gap-3 !mt-1">
                  <span className="newPrice text-[#f3683a] text-[15px] font-bold">
                    ₹150.5
                  </span>
                  <span className="oldPrice line-through text-gray-600 text-[14px] font-bold">
                    ₹250.5
                  </span>
                  <span className="newPrice text-[red] text-[15px] font-bold">
                    50% OFF
                  </span>
                </div>
              </div>
            </div>
            <div className="cartItem w-full p-3 flex items-center gap-4 pb-2 border-b border-[rgba(0,0,0,0.1)]">
              <div className="img w-[15%] rounded-md overflow-hidden">
                <Link to="/product/785" className="group">
                  <img
                    src="https://images.meesho.com/images/products/48013767/w4wu8_512.avif?width=512"
                    className="w-full group-hover:scale-105 transition-all"
                  />
                </Link>
              </div>
              <div className="info w-[85%] relative">
                <IoCloseSharp className="cursor-pointer absolute top-[-10px] right-[0px] text-[25px] link transition-all" />
                <span className="text-[13px]">Brand Name</span>
                <h3 className="line-clamp-2 text-[15px] font-[600]">
                  <Link to="/product/785" className="link">
                    Apple Watch SE (2nd Gen, 2023) [GPS 40mm] Smartwatch with
                    Starlight Aluminum Case with Lake Green Sport Loop. Fitness
                    & Sleep Tracker, Crash Detection, Heart Rate Monitor, Retina
                    Apple Watch SE (2nd Gen, 2023) [GPS 40mm] Smartwatch with
                    Starlight Aluminum Case with Lake Green Sport Loop. Fitness
                    & Sleep Tracker, Crash Detection, Heart Rate Monitor, Retina
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
                  <span className="flex items-center justify-center bg-[#f1f1f1] text-[12px] font-[600] py-1 px-2 rounded-md cursor-pointer">
                    Size: s &nbsp;
                    <IoIosArrowDown className="text-[15px]" />
                  </span>
                  <span className="flex items-center justify-center bg-[#f1f1f1] text-[12px] font-[600] py-1 px-2 rounded-md cursor-pointer">
                    Qty: 1 &nbsp;
                    <IoIosArrowDown className="text-[15px]" />
                  </span>
                </div>
                <div className="flex items-center gap-3 !mt-1">
                  <span className="newPrice text-[#f3683a] text-[15px] font-bold">
                    ₹150.5
                  </span>
                  <span className="oldPrice line-through text-gray-600 text-[14px] font-bold">
                    ₹250.5
                  </span>
                  <span className="newPrice text-[red] text-[15px] font-bold">
                    50% OFF
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rightPart w-[30%]">
          <div className="shadow-md rounded-md pb-10 bg-white">
            <div className="py-2 px-3 ">
              <h2 className="pb-3 border-b border-[rgba(0,0,0,0.1)]">Cart Totals</h2>
             <p className="flex items-center justify-between">
              <span className="text-[14px] font-[500]">Subtotal</span>
              <span className="font-bold text-[red]">₹ 25800</span>
             </p>
             <p className="flex items-center justify-between">
              <span className="text-[14px] font-[500]">Shipping</span>
              <span className="font-bold text-[green]">Free</span>
             </p>
             <p className="flex items-center justify-between">
              <span className="text-[14px] font-[500]">Estimated for</span>
              <span className="font-bold ">India</span>
             </p>
             <p className="flex items-center justify-between">
              <span className="text-[14px] font-[500]">Total</span>
              <span className="font-bold text-[red]">₹ 25800</span>
             </p>
             <br/>
             <Button className="btn-lg !bg-[#febd69] !text-black !font-bold w-full">Checkout</Button>
             <br/>
             <br/> 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
