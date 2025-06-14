import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.jpg'
import Search from "../Search";


const Header = () => {
  return (
    <header>
      <div className="top-strip py-1 bg-[#febd69] border-t-[1px] border-black-100 border-b-[1px]">
        <div className="container">
          <div className="flex items-center justify-between">
              <div className="col1 w-[50%]">
                <p className='text-[12px] font-[500]'>Get upto 50% discount new season styles, limited time only</p>
              </div>
              <div className="flex items-center justify-end col2 ">
                <ul>
                  <li className="list-none">
                    <Link to="/help" className="m-3 text-[12px] font-[500] link transition">Help center</Link>
                    <Link to="/order-tracking" className=" text-[12px] font-[500] link transition">Order Tracking</Link>
                  </li>
                </ul>
              </div>
          </div>
        </div>
      </div>

      <div className="header py-3">
        <div className="container flex items-center justify-between">
          <div className="col1 w-[20%]">
            <Link to="/"><img src={logo} className="w-35" /></Link>
          </div>
          <div className="col2 w-[55%]">
                <Search />
          </div>
          <div className="col3 w-[25%]"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
