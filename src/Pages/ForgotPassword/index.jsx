import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../../App";

const ForgotPassword = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowPassword2, setIsShowPassword2] = useState(false);

  const history = useNavigate();

  return (
    <div className="section py-16">
      <div className="container flex !justify-center">
        <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-12">
          <h3 className="text-black text-[18px] text-center">
            Forgot Password
          </h3>
          <form className="w-full !mt-5">
            <div className="form-group !w-full mb-5">
              <TextField
                id="password"
                label="New Password"
                type={isShowPassword === false ? "password" : "text"}
                variant="standard"
                className="w-full "
                name="password"
                required={true}
              />
            </div>
            <div className="form-group !w-full !mb-2 relative">
              <TextField
                id="confirm_password"
                type={isShowPassword2 === false ? "password" : "text"}
                label="Confirm Password"
                variant="standard"
                className="w-full "
                name="password"
                required={true}
              />
             
            </div>
           
            <div className="flex items-center !w-full !mt-3">
              <Button className="btn-lg !bg-[#007BFF] !w-full !p-2 !text-white !text-[15px] !font-[700] !mr-2">
                Sign in
              </Button>
              <Button className="btn-lg !bg-[#dc3545] !w-full !p-2 !text-white !text-[15px] !font-[700]">
                <Link to="/">Cancle</Link>
              </Button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
