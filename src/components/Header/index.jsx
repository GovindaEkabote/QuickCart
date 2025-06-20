import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import Search from "../Search";
import { Badge } from "@mui/material";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IoGitCompareOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';
import Navigation from "./Navigation";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
  return (
    <header>
      <div className="top-strip py-1 bg-[#febd69] border-t-[1px] border-black-100 border-b-[1px]">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="col1 w-[50%]">
              <p className="text-[12px] font-[500]">
                Get upto 50% discount new season styles, limited time only
              </p>
            </div>
            <div className="flex items-center justify-end col2 ">
              <ul className="flex items-center gap-3">
                <li className="list-none">
                  <Link
                    to="/help"
                    className="m-3 text-[12px] font-[500] link transition"
                  >
                    Help center
                  </Link>
                  </li>
                  <li>
                  <Link
                    to="/order-tracking"
                    className=" text-[12px] font-[500] link transition"
                  >
                    Order Tracking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="header py-3 border-black-100 top-strip2 ">
        <div className="container flex items-center justify-between">
          <div className="col1 w-[20%]">
            <Link to="/">
              <img src={logo} className="w-35" />
            </Link>
          </div>
          <div className="col2 w-[50%]">
            <Search />
          </div>
          <div className="col3 w-[30%] flex  pl-7">
            <ul className="flex items-center justify-end w-full gap-3 ">
              <li className="list-none ">
                <Link
                  to="/login"
                  className="link transition text-[15px] font-[500] uppercase"
                >
                  Login
                </Link>
                /&nbsp;
                <Link
                  to="/register"
                  className="link transition text-[15px] font-[500] uppercase"
                >
                  Register
                </Link>
                </li>
                <li >
                 <Tooltip title="compare">
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={4} color="secondary">
                    <IoGitCompareOutline />
                  </StyledBadge>
                </IconButton>
                </Tooltip>
                 </li>
                 
                 <li>
                 <Tooltip title="favorite">
                 <IconButton aria-label="cart">
                  <StyledBadge badgeContent={4} color="secondary">
                    <FaRegHeart />
                  </StyledBadge>
                </IconButton>
                </Tooltip>
                 </li>
                 <li>
                 <Tooltip title="cart">
                 <IconButton aria-label="cart">
                  <StyledBadge badgeContent={4} color="secondary">
                    <ShoppingCartIcon />
                  </StyledBadge>
                </IconButton>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Navigation />
    </header>
  );
};

export default Header;
