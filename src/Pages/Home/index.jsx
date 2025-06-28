import React, { useState } from 'react'
import HomeSliders from '../../components/HomeSliders'
import Categories from '../../components/Categories'
import { TbTruckDelivery } from "react-icons/tb";
import Banners from '../../components/Banners';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box'; 

const Home = () => {
   const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
   <>
    <HomeSliders />
    <Categories />
    <section className='py-16 bg-white '>
      <div className='container'>
        <div className='freeShipping !mb-5 w-[80%] !m-auto rounded-md p-4 border-2 border-amber-700 flex items-center justify-between'>
            <div className='col1 flex items-center'>
              <p className='text-2xl uppercase font-[500]'>Free Shipping</p> 
               <TbTruckDelivery className='!ml-1 text-4xl'/>
            </div>
              <div className='col2'>
              <p className='mb-0 uppercase font-[500]'>Welcome to QuickCart</p>
            </div>
            <div className='col3'>
              <p className='mb-0 uppercase font-[500]'>All India Free Shipping Over RS.500 Order</p>
            </div>
        </div>
        <Banners />
      </div>
    </section>

      <section className='bg-white'>
        <div className='container !mt-8'>
          <div className='flex items-center justify-between py-5'>
            <div className='leftSection w-[30%]'>
              <h3 className='uppercase font-[600] text-[20px]'>Popular Products</h3>
              <h3 className='font-[400] text-[14px]'>Limited-time offers available until the end of March.</h3>
            </div>
            <div className='rightSection w-[70%]'>
              <Box sx={{ maxWidth: { xs: 600, sm: 1200 }, bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
        <Tab label="Item Four" />
        <Tab label="Item Five" />
        <Tab label="Item Six" />
        <Tab label="Item Seven" />
        <Tab label="Item 8" />
        <Tab label="Item 9" />
        <Tab label="Item 10" />
        <Tab label="Item 11" />
        <Tab label="Item 12" />
      </Tabs>
    </Box>
            </div>
          </div>
        </div>
      </section>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
   </>
  )
}

export default Home