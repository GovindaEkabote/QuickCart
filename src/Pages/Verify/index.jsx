import React from "react";
import { MdOutlineSecurity } from "react-icons/md";
import OtpBox from "../../components/OtpBox";
import { Button } from "@mui/material";

const Verify = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    alert("OTP Verified Successfully ✅");
  };
  return (
    <div className="section py-16 ">
      <div className="container flex !justify-center">
        <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-12 ">
          <h3 className="text-black text-[18px] text-center !mb-3">
            Verify OTP
          </h3>
          <p className="text-center mt-0 mb-4">
            OTP send to{" "}
            <span className="text-black font-bold">govinda@gmail.com</span>
          </p>
          <form onSubmit={handleSubmit}>
            <OtpBox />
            <div className="flex items-center justify-center !mb-5 px-3">
              <Button
                type="submit"
                className="w-full !bg-[#febd69] !text-black !font-bold"
              >
                Verify OTP
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Verify;
