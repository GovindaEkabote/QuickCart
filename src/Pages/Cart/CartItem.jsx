import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const CartItem = (props) => {
  // Size state
  const [sizeAnchorEl, setSizeAnchorEl] = useState(null);
  const [selectedSize, setSelectedSize] = useState(props.size || "M");
  const openSize = Boolean(sizeAnchorEl);

  // Qty state
  const [qtyAnchorEl, setQtyAnchorEl] = useState(null);
  const [selectedQty, setSelectedQty] = useState(props.qty || 1);
  const openQty = Boolean(qtyAnchorEl);

  // Size handlers
  const handleClickSize = (event) => {
    setSizeAnchorEl(event.currentTarget);
  };
  const handleCloseSize = (value) => {
    setSizeAnchorEl(null);
    if (value) setSelectedSize(value);
  };

  // Qty handlers
  const handleClickQty = (event) => {
    setQtyAnchorEl(event.currentTarget);
  };
  const handleCloseQty = (value) => {
    setQtyAnchorEl(null);
    if (value) setSelectedQty(value);
  };

  return (
    <div className="cartItem w-full p-3 flex items-center gap-4 pb-2 border-b border-[rgba(0,0,0,0.1)]">
      {/* Product Image */}
      <div className="img w-[15%] rounded-md overflow-hidden">
        <Link to="/product/785" className="group">
          <img
            src="https://images.meesho.com/images/products/48013767/w4wu8_512.avif?width=512"
            className="w-full group-hover:scale-105 transition-all"
            alt="Product"
          />
        </Link>
      </div>

      {/* Product Info */}
      <div className="info w-[85%] relative">
        <IoCloseSharp className="cursor-pointer absolute top-[-10px] right-[0px] text-[25px]" />

        <span className="text-[13px]">Brand Name</span>
        <h3 className="line-clamp-2 text-[15px] font-[600]">
          <Link to="/product/785" className="link">
            Apple Watch SE (2nd Gen, 2023) [GPS 40mm] Smartwatch with Starlight
            Aluminum Case with Lake Green Sport Loop.
          </Link>
        </h3>

        {/* Rating */}
        <Rating defaultValue={2.5} precision={0.5} readOnly size="small" />

        {/* Size & Qty */}
        <div className="flex items-center gap-4 mt-2">
          {/* Size Selector */}
          <div className="relative">
            <span
              className="flex items-center justify-center bg-[#f1f1f1] text-[12px] font-[600] py-1 px-2 rounded-md cursor-pointer"
              onClick={handleClickSize}
            >
              Size: {selectedSize} &nbsp;
              <IoIosArrowDown className="text-[15px]" />
            </span>
            <Menu
              anchorEl={sizeAnchorEl}
              open={openSize}
              onClose={() => handleCloseSize(null)}
            >
              <MenuItem onClick={() => handleCloseSize("S")}>S</MenuItem>
              <MenuItem onClick={() => handleCloseSize("M")}>M</MenuItem>
              <MenuItem onClick={() => handleCloseSize("LG")}>LG</MenuItem>
              <MenuItem onClick={() => handleCloseSize("XL")}>XL</MenuItem>
            </Menu>
          </div>

          {/* Qty Selector */}
          <div className="relative">
            <span
              className="flex items-center justify-center bg-[#f1f1f1] text-[12px] font-[600] py-1 px-2 rounded-md cursor-pointer"
              onClick={handleClickQty}
            >
              Qty: {selectedQty} &nbsp;
              <IoIosArrowDown className="text-[15px]" />
            </span>
            <Menu
              anchorEl={qtyAnchorEl}
              open={openQty}
              onClose={() => handleCloseQty(null)}
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <MenuItem key={num} onClick={() => handleCloseQty(num)}>
                  {num}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3 mt-2">
          <span className="newPrice text-[#f3683a] text-[15px] font-bold">
            ₹150.5
          </span>
          <span className="oldPrice line-through text-gray-600 text-[14px] font-bold">
            ₹250.5
          </span>
          <span className="discount text-[red] text-[15px] font-bold">
            50% OFF
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
