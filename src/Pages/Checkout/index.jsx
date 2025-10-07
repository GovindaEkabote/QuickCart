import React from "react";
import TextField from "@mui/material/TextField";

const Checkout = () => {
  return (
    <section className="py-10">
      <div className="container flex gap-5">
        <div className="leftCol w-[70%]">
          <div className="card bg-white shadow-md p-8 rounded-md w-full">
            <h1>Billing Details</h1>
            <form className="w-full pt-3 mb-3 pb-5">
              <div className="flex items-center gap-3">
                <div className="col w-[50%]">
                  <TextField
                    required
                    label="Full Name"
                    // defaultValue="Hello World"
                    size="small"
                    className="w-full"
                  />
                </div>
                <div className="col w-[50%] gap-5">
                  <TextField
                    required
                    label="Email"
                    // defaultValue="Hello World"
                    type="email"
                    size="small"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="flex items-center pt-5 gap-3">
                <div className="col w-[100%]">
                  <TextField
                    required
                    label="Street Address"
                    // defaultValue="Hello World"
                    size="small"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="flex items-center pt-5 gap-3">
                <div className="col w-[100%]">
                  <TextField
                    required
                    label="House No and Stree Name"
                    // defaultValue="Hello World"
                    size="small"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="flex items-center pt-5 gap-3">
                <div className="col w-[50%]">
                  <TextField
                    required
                    label="Town / City"
                    // defaultValue="Hello World"
                    size="small"
                    className="w-full"
                  />
                </div>
                <div className="col w-[50%] gap-5">
                  <TextField
                    required
                    label="State"
                    // defaultValue="Hello World"
                    size="small"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="flex items-center pt-5 gap-3">
                <div className="col w-[100%]">
                  <TextField
                    required
                    label="Postcode / ZIP "
                    // defaultValue="Hello World"
                    size="small"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="flex items-center pt-5 gap-3">
                <div className="col w-[50%]">
                  <TextField
                    required
                    label="Phone Number"
                    // defaultValue="Hello World"
                    size="small"
                    className="w-full"
                    type="number"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
