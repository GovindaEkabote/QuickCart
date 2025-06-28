import React, { useState } from "react";
import HomeSliders from "../../components/HomeSliders";
import Categories from "../../components/Categories";
import { TbTruckDelivery } from "react-icons/tb";
import Banners from "../../components/Banners";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const Home = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <HomeSliders />
      <Categories />
      <section className="py-16 bg-white ">
        <div className="container">
          <div className="freeShipping !mb-5 w-[80%] !m-auto rounded-md p-4 border-2 border-amber-700 flex items-center justify-between">
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
          <Banners />
        </div>
      </section>

      <section className="bg-white">
        <div className="container !mt-8">
          <div className="flex items-center justify-between py-5">
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
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Home;
