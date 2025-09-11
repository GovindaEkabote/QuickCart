import React from "react";
import { Button, Rating } from "@mui/material";
import CartItem from "./CartItem";

const Cart = () => {
  return (
    <section className="section py-10">
      <div className="container w-[70%] max-w-[80%] flex gap-5">
        <div className="leftCart w-[75%]">
          <div className="shadow-md rounded-md pb-10 bg-white">
            <div className="py-2 px-3 border-b border-[rgba(0,0,0,0.1)]">
              <h2>Your Cart</h2>
              <p className="mt-0">
                There are <span className="font-bold text-[red]">2</span>{" "}
                products in your cart
              </p>
            </div>
            <CartItem  size="S"/>
          </div>
        </div>

        <div className="rightPart w-[30%]">
          <div className="shadow-md rounded-md pb-10 bg-white">
            <div className="py-2 px-3 ">
              <h2 className="pb-3 border-b border-[rgba(0,0,0,0.1)]">
                Cart Totals
              </h2>
              <p className="flex items-center justify-between">
                <span className="text-[14px] font-[500]">Subtotal</span>
                <span className="font-bold text-[red]">₹ 25800</span>
              </p>
              <p className="flex items-center justify-between">
                <span className="text-[14px] font-[500]">Shipping</span>
                <span className="font-bold text-[green]">Free</span>
              </p>
              <p className="flex items-center justify-between">
                <span className="text-[14px] font-[500]">Estimated for</span>
                <span className="font-bold ">India</span>
              </p>
              <p className="flex items-center justify-between">
                <span className="text-[14px] font-[500]">Total</span>
                <span className="font-bold text-[red]">₹ 25800</span>
              </p>
              <br />
              <Button className="btn-lg !bg-[#febd69] !text-black !font-bold w-full">
                Checkout
              </Button>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
