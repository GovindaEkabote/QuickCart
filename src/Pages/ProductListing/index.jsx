import React, { useState } from "react";
import SideBar from "../../components/SideBar";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Products from "../../components/Products";
import Button from "@mui/material/Button";
import { IoGrid } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { MdOutlineSort } from "react-icons/md";
import Products2 from "../../components/Products2";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const ProductListing = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [sortByClicked, setSortByclicked] = useState("Sort By");
  const [isItemView, setIsItemView] = useState("grid");

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (option) => {
    setSortByclicked(option); // Update the button text
    handleClose(); // Close the menu
  };
  return (
    <section className="pt-1 pb-0 ">
      <div className="container ">
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            color="inherit"
            href="/"
            className="link transition"
          >
            HOME
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/"
            className="link transition"
          >
            FASHION
          </Link>
        </Breadcrumbs>
      </div>
      <div className="bg-white p-2 !mt-4">
        <div className="container flex gap-3 ">
          <div className="sidebarWrapper w-[20%] h-full">
            <SideBar />
          </div>
          <div className="rightContent w-[80%] py-2 ">
            <div className="bg-[#f1f1f1] p-2 !mb-3 rounded-md w-full flex items-center justify-between">
              <div className="col1 flex items-center itemViewAction ">
                <Button
                  className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !max-w-[40px] !text-[250px] !text-black ${
                    isItemView === "list" && "active"
                  }`}
                  onClick={() => setIsItemView("list")}
                >
                  <IoMenu />
                </Button>
                <Button
                  className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !max-w-[40px] !text-[250px] !text-black ${
                    isItemView === "grid" && "active"
                  }`}
                  onClick={() => setIsItemView("grid")}
                >
                  <IoGrid />
                </Button>
                <span className="text-[15px] font-[500] pl-2 ">
                  There are 27 products
                </span>
              </div>
              <div className="col23 ml-auto flex items-center justify-end  ">
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  className="!bg-white !border-1 !border-[#000] "
                >
                  {sortByClicked}
                  <span className="text-[20px] !font-[800]  pl-2 ">
                    <MdOutlineSort />
                  </span>
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  slotProps={{
                    list: {
                      "aria-labelledby": "basic-button",
                    },
                  }}
                  className="uppercase !mt-0.5 "
                >
                  {[
                    "Sales Highest to Lowest",
                    "Price High to Low",
                    "Price Low to High",
                    "Product A to Z",
                    "Product Z to A",
                  ].map((option, index) => (
                    <MenuItem
                      key={index}
                      className="!text-[14px] !font-[500] !text-black"
                      onClick={() => handleMenuItemClick(option)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </Menu>
              </div>
            </div>

            <div
              className={`grid ${
                isItemView === "grid"
                  ? "grid-cols-4 md:grid-cols-4"
                  : "grid-cols-1 md:grid-cols-1"
              } gap-4`}
            >
              {isItemView === "grid" ? (
                <>
                  <Products />
                  <Products />
                  <Products />
                  <Products />
                  <Products />
                  <Products />
                  <Products />
                  <Products />
                  <Products />
                  <Products />
                  <Products />
                  <Products />
                </>
              ) : (
                <>
                  <Products2 />
                  <Products2 />
                  <Products2 />
                  <Products2 />
                  <Products2 />
                  <Products2 />
                  <Products2 />
                  <Products2 />
                </>
              )}
            </div>
            <div className="flex items-center justify-center !mt-10 ">
                 <Pagination count={10} variant="outlined" shape="rounded" size="large"  />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductListing;
