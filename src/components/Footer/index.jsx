import { Button, Checkbox } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="!py-8 bg-white ">
        <div className="container">
          <div className="flex  justify-center gap-2">
            <div className=" w-[30%] border-r border-[#febd69]  footer flex ">
              <div className="part1 ">
                <h2 className="pb-2 text-2xl font-bold">Contact Us</h2>
                <p>
                  67 MIG Sagar Chowk Vidi Gharkur Hydarabad Road, Maharashtra
                </p>
                <p>Solapur - 413005</p>
                <br></br>
                <span className="font-bold">Email : </span>
                <Link className="link" to="govindaekbote7@gmail.com">
                  govindaekbote7@gmail.com
                </Link>
                <br></br>

                <span className="font-bold">Phone : </span>
                <span>(+91) 8766701896</span>
              </div>
            </div>
            <div className=" w-[20%]  pl-8  footer flex">
              <div className="part1 ">
                <h2 className="pb-2 text-2xl font-bold">Products</h2>
                <ul>
                  <li className="!mb-2">
                    <Link className="link ">Price drop</Link>
                  </li>
                  <li className="!mb-2">
                    <Link className="link ">New Products</Link>
                  </li>
                  <li className="!mb-2">
                    <Link className="link ">Top Brands</Link>
                  </li>
                  <li className="!mb-2">
                    <Link className="link ">Contact Us</Link>
                  </li>
                  <li className="!mb-2">
                    <Link className="link ">Stores</Link>
                  </li>
                  <li className="!mb-2">
                    <Link className="link ">Sitemap</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className=" w-[20%]    footer flex">
              <div className="part1 ">
                <h2 className="pb-2 text-2xl font-bold">Our Company</h2>
                <ul>
                  <li className="!mb-2">
                    <Link className="link">Delivery</Link>
                  </li>
                  <li className="!mb-2">
                    <Link className="link">Legal Notice</Link>
                  </li>
                  <li className="!mb-2">
                    <Link className="link">Terms & Conditions Of Use</Link>
                  </li>
                  <li className="!mb-2">
                    <Link className="link" to="/about">
                      About Us
                    </Link>
                  </li>
                  <li className="!mb-2">
                    <Link className="link">Secure Payment</Link>
                  </li>
                  <li className="!mb-2">
                    <Link className="link" to="/login">
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-[30%] footer flex">
              <div className="part1 ">
                <h2 className="pb-2 text-2xl font-bold">
                  Subscribe To Newsletter
                </h2>
                <p>
                  Subscribe to out latest newsletter to get news about apecial
                  discount
                </p>
                <input
                  type="email"
                  className="!mt-3 border-1 shadow-md p-3 w-full"
                  placeholder="Your Email Address"
                />
                <Button className="!p-3 !mt-4  w-[150px] !font-bold !text-black !bg-[#febd69]">
                  Subscribe
                </Button>
                <br></br>
                <Checkbox />
                <span>
                  I agree to the terms and conditions and the privacy policy
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="bottomStrip justify-between  border-t-1 py-3 bg-white border-[rgba(0,0,0,0.2)]">
        <div className="container flex items-center justify-between ">
          <ul className="flex items-center gap-2">
            <li className="list-none">
              <Link
                className="w-[35px] group h-[35px] rounded-full border border-[rgba(0,0,0,0.5)] flex items-center justify-center hover:bg-[#febd69] transition-all"
                to="/"
              >
                <FaFacebook className="text-[20px] " />
              </Link>
            </li>
            <li className="list-none">
              <Link
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.5)] flex items-center justify-center hover:bg-[#febd69] transition-all"
                to="/"
              >
                <FaInstagram className="text-[20px]" />
              </Link>
            </li>
            <li className="list-none">
              <Link
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.5)] flex items-center justify-center hover:bg-[#febd69] transition-all"
                to="/"
              >
                <FaTwitter className="text-[20px]" />
              </Link>
            </li>
          </ul>
          <p>@2025 - Ecommerce Template</p>
          <p>Govinda Ekabote</p>
        </div>
       
      </div>
    </>
  );
};

export default Footer;
