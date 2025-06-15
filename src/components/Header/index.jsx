import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import Search from "../Search";
import { Badge } from "@mui/material";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

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
              <ul>
                <li className="list-none">
                  <Link
                    to="/help"
                    className="m-3 text-[12px] font-[500] link transition"
                  >
                    Help center
                  </Link>
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

      <div className="header py-3">
        <div className="container flex items-center justify-between">
          <div className="col1 w-[20%]">
            <Link to="/">
              <img src={logo} className="w-35" />
            </Link>
          </div>
          <div className="col2 w-[50%]">
            <Search />
          </div>
          <div className="col3 w-[30%] flex items-center justify-between">
            <ul className="flex items-center gap-3">
              <li className="list-none">
                <Link
                  to="/login"
                  className="link transition text-[17px] font-[500]"
                >
                  Login
                </Link>
                /&nbsp;
                <Link
                  to="/register"
                  className="link transition text-[17px] font-[500]"
                >
                  Register
                </Link>
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={4} color="secondary">
                    <ShoppingCartIcon />
                  </StyledBadge>
                </IconButton>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
