import React, { useState } from "react";
import HomeSliders from "../../components/HomeSliders";
import Categories from "../../components/Categories";
import { TbTruckDelivery } from "react-icons/tb";
import Banners from "../../components/Banners";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Products from "../../components/Products";
import ProductSlider from "../../ProductSlider";
import BannerBox from "../../components/BannerBox";
import { TbTruckReturn } from "react-icons/tb";
import { RiSecurePaymentLine } from "react-icons/ri";
import { BsGift } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <HomeSliders />
      <Categories />
      <section className="py-8 pt-2 bg-white ">
        <div className="container">
          <div className="freeShipping !mb-5  w-[80%] !m-auto rounded-md p-4 border-2 border-amber-700 flex items-center justify-between">
            <div className="col1 flex items-center">
              <p className="text-2xl uppercase font-[500]">Free Shipping</p>
              <TbTruckDelivery className="!ml-1 text-4xl" />
            </div>
            <div className="col2">
              <p className="mb-0 uppercase font-[500]">Welcome to QuickCart</p>
            </div>
            <div className="col3">
              <p className="mb-0 uppercase font-[500]">
                All India Free Shipping Over RS.500 Order
              </p>
            </div>
          </div>
          <Banners  items={3} />
        </div>
      </section>

      <section className="bg-white">
        <div className="container !mt-8">
          <div className="flex items-center justify-between py-5 ">
            <div className="leftSection w-[25%]">
              <h3 className="uppercase font-[600] text-[20px]">
                Popular Products
              </h3>
              <h3 className="font-[400] text-[14px]">
                Limited-time offers available until the end of March.
              </h3>
            </div>
            <div className="rightSection w-[75%]">
              <Box
                sx={{
                  maxWidth: { xs: 600, sm: 1200 },
                  bgcolor: "background.paper",
                }}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons
                  allowScrollButtonsMobile
                  aria-label="scrollable force tabs example"
                >
                  <Tab label="Fashion" />
                  <Tab label="Books" />
                  <Tab label="Electronics" />
                  <Tab label="Toys" />
                  <Tab label="Mobiles" />
                  <Tab label="Laptop" />
                  <Tab label="HeadPhone" />
                  <Tab label="jewellery" />
                  <Tab label="Watches" />
                  <Tab label="Bages" />
                  <Tab label="Footware" />
                  <Tab label="Accessories" />
                </Tabs>
              </Box>
            </div>
          </div>
          <ProductSlider items={6}/>
        </div>
      </section>

      <section className="py-5 pt-0 bg-white">
        <div className="container"> 
        <BannerBox items={4} />
        <h3 className="uppercase font-[600] text-[20px]">
                latest Products
              </h3>
              <h3 className="font-[400] text-[14px]">
                Explore the latest products—available for a limited time this month.
              </h3>
             <ProductSlider items={6}/>    
        </div>
      </section>
      <section className="py-5 pt-0 bg-white">
        <div className="container"> 
        <h3 className="uppercase font-[600] text-[20px]">
                Feature Products
              </h3>
              <h3 className="font-[400] text-[14px]">
                Discover our top-rated products, available for a limited time.
              </h3>
             <ProductSlider items={6}/>    
        </div>
      </section>
      <section className=" py-8  pb-5 bg-white">
        <div className="container ">
          <div className="freeShipping  !m-auto rounded-md flex items-center justify-between">
            <div className="col1 flex flex-col pointer items-center">
              <TbTruckDelivery className="!ml-1 text-[40px]" />
              <p className="text-[18px] uppercase font-[500]">Free Shipping</p>
              <Link className="link"><p >For all order Over Rs.500</p></Link> 
            </div>
            <div className="col1 flex flex-col items-center">
              <TbTruckReturn className="!ml-1 text-[40px]" />
              <p className="text-[18px]  uppercase font-[500]">30 Days Returns</p>
               <Link className="link"><p >For an Exchange Product</p></Link>
            </div>
            <div className="col1 flex flex-col items-center">
              <RiSecurePaymentLine className="!ml-1 text-[40px]" />
              <p className="text-[18px] uppercase font-[500]">Secured Payment</p>
               <Link className="link"><p className="">Payment cards Accepted</p></Link>
            </div>
            <div className="col1 flex flex-col items-center">
              <BsGift className="!ml-1 text-[40px]" />
              <p className="text-[18px] uppercase font-[500]">Special Gift</p>
             <Link className="link"> <p>Our First Product Order</p></Link>
            </div>
            <div className="col1 flex flex-col items-center">
            <BiSupport className="!ml-1 text-[40px]" />
              <p className="text-[18px] uppercase font-[500]">Support 24/7</p>
              <Link className="link">
              <p>Contact Anytime</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer/>

    </>
  );
};

export default Home;
