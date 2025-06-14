import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header>
      <div className="top-strip py-2 bg-[#febd69]">
        <div className="container">
          <div className="flex items-center justify-between">
              <div className="col1 w-[50%]">
                <p className='text-[14px] font-[500]'>Get upto 50% discount new season styles, limited time only</p>
              </div>
              <div className="flex items-center justify-end col2">
                <ul>
                  <li className="list-none">
                    <Link to="/help" className="m-2 text-[14px] font-[500]">Help center</Link>
                    <Link to="#" className="m-2 text-[14px] font-[500]">Order Tracking</Link>
                  </li>
                </ul>
              </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
