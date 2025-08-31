import React from "react";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const Cart = () => {
  return (
    <section className="section py-5">
      <div className="container w-[70%] max-w-[80%] flex">
        <div className="leftCart w-[75%]">
          <h2>Your Cart</h2>
          <p className="mt-0">
            There are <span className="font-bold text-[red]">2</span> products
            in your cart
          </p>
          <div className="shadow-md rounded-md  bg-white">
            <div className="cartItem w-full p-3 flex items-center gap-4">
              <div className="img w-[10%] rounded-md overflow-hidden">
                <Link to="/product/785" className="group">
                  <img
                    src="https://images.meesho.com/images/products/48013767/w4wu8_512.avif?width=512"
                    className="w-full group-hover:scale-105 transition-all"
                  />
                </Link>
              </div>
              <div className="info w-[80%] relative">
                <IoCloseSharp className="cursor-pointer absolute top-[-8px] right-[-55px] text-[25px] link transition-all" />
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
                <div className="flex items-center gap-4">
                  <span className="flex items-center justify-center bg-[#f1f1f1] text-[12px] font-[600] py-1 px-2 rounded-md cursor-pointer">
                    Size: s &nbsp;<IoIosArrowDown className="text-[15px]"/>
                  </span>
                  <span className="flex items-center justify-center bg-[#f1f1f1] text-[12px] font-[600] py-1 px-2 rounded-md cursor-pointer">
                    Qty: 1 &nbsp;<IoIosArrowDown className="text-[15px]"/>
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
      </div>
    </section>
  );
};

export default Cart;
