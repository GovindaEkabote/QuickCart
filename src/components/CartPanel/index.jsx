import React, { useContext } from "react";
import { MyContext } from "../../App";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { IoCloseSharp } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Button } from "@mui/material";

const Cartpanel = () => {
  const context = useContext(MyContext);
  const toggleDrawer = (newOpen) => () => {
    context.setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 400 }} role="presentation">
      <div className="flex items-center justify-between py-3 px-3 border-b border-[rgba(0,0,0,0.2)] ">
        <h1>Shipping Cart (1)</h1>
        <IoCloseSharp
          className="text-[25px] cursor-pointer"
          onClick={toggleDrawer(false)}
        />
      </div>
      <div className="scroll w-full max-h-[400px] overflow-y-scroll overflow-x-hidden  !py-3 px-4">
        <div className="cartItem w-full flex items-center gap-4 !mb-2 !mt-2 border-b border-[rgba(0,0,0,0.2)] pb-4">
          <div className="img w-[25%] overflow-hidden h-[100px] rounded-md">
            <img
              src="https://images.meesho.com/images/products/48013767/w4wu8_512.avif?width=512"
              className="w-full"
            />
          </div>
          <div className="img w-[75%] relative">
            <h4>
              <Link
                to="/product/234"
                className="link text-[14px] font-[500] pr-5"
              >
                Apple Watch
              </Link>
            </h4>
            <p className="flex items-center gap-5 mt-2 mb-2">
              <span>
                Qty : <span>1</span>
              </span>
              <span>
                Price : <span className="text-[red] font-[500]">10000</span>
              </span>
            </p>
            <RiDeleteBin6Line className="absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all" />
          </div>
        </div>
        <div className="cartItem w-full flex items-center gap-4 !mb-2 !mt-2 border-b border-[rgba(0,0,0,0.2)] pb-4">
          <div className="img w-[25%] overflow-hidden h-[100px] rounded-md">
            <img
              src="https://images.meesho.com/images/products/48013767/w4wu8_512.avif?width=512"
              className="w-full"
            />
          </div>
          <div className="img w-[75%] relative">
            <h4>
              <Link
                to="/product/234"
                className="link text-[14px] font-[500] pr-5"
              >
                Apple Watch
              </Link>
            </h4>
            <p className="flex items-center gap-5 mt-2 mb-2">
              <span>
                Qty : <span>1</span>
              </span>
              <span>
                Price : <span className="text-[red] font-[500]">10000</span>
              </span>
            </p>
            <RiDeleteBin6Line className="absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all" />
          </div>
        </div>
        <div className="cartItem w-full flex items-center gap-4 !mb-2 !mt-2 border-b border-[rgba(0,0,0,0.2)] pb-4">
          <div className="img w-[25%] overflow-hidden h-[100px] rounded-md">
            <img
              src="https://images.meesho.com/images/products/48013767/w4wu8_512.avif?width=512"
              className="w-full"
            />
          </div>
          <div className="img w-[75%] relative">
            <h4>
              <Link
                to="/product/234"
                className="link text-[14px] font-[500] pr-5"
              >
                Apple Watch
              </Link>
            </h4>
            <p className="flex items-center gap-5 mt-2 mb-2">
              <span>
                Qty : <span>1</span>
              </span>
              <span>
                Price : <span className="text-[red] font-[500]">10000</span>
              </span>
            </p>
            <RiDeleteBin6Line className="absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all" />
          </div>
        </div>
        <div className="cartItem w-full flex items-center gap-4 !mb-2 !mt-2 border-b border-[rgba(0,0,0,0.2)] pb-4">
          <div className="img w-[25%] overflow-hidden h-[100px] rounded-md">
            <img
              src="https://images.meesho.com/images/products/48013767/w4wu8_512.avif?width=512"
              className="w-full"
            />
          </div>
          <div className="img w-[75%] relative">
            <h4>
              <Link
                to="/product/234"
                className="link text-[14px] font-[500] pr-5"
              >
                Apple Watch
              </Link>
            </h4>
            <p className="flex items-center gap-5 mt-2 mb-2">
              <span>
                Qty : <span>1</span>
              </span>
              <span>
                Price : <span className="text-[red] font-[500]">10000</span>
              </span>
            </p>
            <RiDeleteBin6Line className="absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all" />
          </div>
        </div>
        <div className="cartItem w-full flex items-center gap-4 !mb-2 !mt-2 border-b border-[rgba(0,0,0,0.2)] pb-4">
          <div className="img w-[25%] overflow-hidden h-[100px] rounded-md">
            <img
              src="https://images.meesho.com/images/products/48013767/w4wu8_512.avif?width=512"
              className="w-full"
            />
          </div>
          <div className="img w-[75%] relative">
            <h4>
              <Link
                to="/product/234"
                className="link text-[14px] font-[500] pr-5"
              >
                Apple Watch
              </Link>
            </h4>
            <p className="flex items-center gap-5 mt-2 mb-2">
              <span>
                Qty : <span>1</span>
              </span>
              <span>
                Price : <span className="text-[red] font-[500]">10000</span>
              </span>
            </p>
            <RiDeleteBin6Line className="absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all" />
          </div>
        </div>
        <div className="cartItem w-full flex items-center gap-4 !mb-2 !mt-2 border-b border-[rgba(0,0,0,0.2)] pb-4">
          <div className="img w-[25%] overflow-hidden h-[100px] rounded-md">
            <img
              src="https://images.meesho.com/images/products/48013767/w4wu8_512.avif?width=512"
              className="w-full"
            />
          </div>
          <div className="img w-[75%] relative">
            <h4>
              <Link
                to="/product/234"
                className="link text-[14px] font-[500] pr-5"
              >
                Apple Watch
              </Link>
            </h4>
            <p className="flex items-center gap-5 mt-2 mb-2">
              <span>
                Qty : <span>1</span>
              </span>
              <span>
                Price : <span className="text-[red] font-[500]">10000</span>
              </span>
            </p>
            <RiDeleteBin6Line className="absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all" />
          </div>
        </div>
      </div>

      <br></br>
      <div className="bottomSec absolute bottom-[10px] left-[10px] w-full pr-5 shadow-md">
      <div className="bottomInfo w-full border-t px-4 border-[rgba(0,0,0,0.1)] py-3 flex items-center justify-between flex-col">
        <div className="flex items-center justify-between w-full">
          <span className="text-[15px] font-[600]">1 item</span>
          <span className="text-[red] font-bold">₹10000</span>
        </div>
        <div className="flex items-center justify-between w-full">
          <span className="text-[15px] font-[600]">Shipping</span>
          <span className="text-[red] font-bold">₹10000</span>
        </div>
      </div>

      <div className="bottomInfo w-full border-t px-4 border-[rgba(0,0,0,0.1)] py-3 flex items-center justify-between flex-col">
        <div className="flex items-center justify-between w-full">
          <span className="text-[15px] font-[600]">Total</span>
          <span className="text-[red] font-bold">₹10000</span>
        </div><br/>
        <div className="flex items-center justify-between !mt-5 w-full gap-5">
           <Link to='/cart' className="!w-[50%] d-block"><Button className="btn-lg !bg-[#febd69] !text-black !font-bold w-full">View Cart</Button></Link>
           <Link to='/checkout' className="!w-[50%] d-block"><Button className="btn-lg !bg-[#febd69] !text-black !font-bold w-full">checkout</Button></Link>
        </div>
      </div>
      </div>
    </Box>
  );
  return <>{DrawerList}</>;
};

export default Cartpanel;
