import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../../App";

const Login = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const context = useContext(MyContext);
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });

  const history = useNavigate();
  const forgotPassword = () => {
    history("/varify");
    context.openAlertBox("success","OTP send to given Email");
  };

  return (
    <div className="section py-16">
      <div className="container flex !justify-center">
        <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-12">
          <h3 className="text-black text-[18px] text-center">
            Sign in or create account{" "}
          </h3>
          <form className="w-full !mt-5">
            <div className="form-group !w-full mb-5">
              <TextField
                id="standard-basic"
                label="Enter Email"
                type="email"
                variant="standard"
                className="w-full "
                name="email"
                required={true}
              />
            </div>
            <div className="form-group !w-full !mb-2 relative">
              <TextField
                id="standard-basic"
                type={isShowPassword === false ? "password" : "text"}
                label="Enter Password"
                variant="standard"
                className="w-full "
                name="password"
                required={true}
              />
              <Button
                className="!absolute top-[5px] z-50 !w-[35px] right-[15px] !h-[35px] !min-w-[35px] !rounded-full !text-black opacity-75"
                onClick={() => {
                  setIsShowPassword(!isShowPassword);
                }}
              >
                {isShowPassword === false ? (
                  <IoEyeSharp className="!text-[25px]" />
                ) : (
                  <FaEyeSlash className="!text-[25px]" />
                )}
              </Button>
            </div>
            <a
              className="link !mt-[30px] cursor-pointer text-[14px] font-[600]"
              onClick={forgotPassword}
            >
              Forgot Password?
            </a>
            <div className="flex items-center !w-full !mt-3">
              <Button className="btn-lg !bg-[#007BFF] !w-full !p-2 !text-white !text-[15px] !font-[700] !mr-2">
                Sign in
              </Button>
              <Button className="btn-lg !bg-[#dc3545] !w-full !p-2 !text-white !text-[15px] !font-[700]">
                <Link to="/">Cancle</Link>
              </Button>
            </div>
            <p>
              Not Registered?{" "}
              <Link
                to="/register"
                className="link !text-[#007BFF] !text-[14px] font-[600]"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
