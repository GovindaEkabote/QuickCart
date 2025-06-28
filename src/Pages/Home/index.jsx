import React from 'react'
import HomeSliders from '../../components/HomeSliders'
import Categories from '../../components/Categories'
import { TbTruckDelivery } from "react-icons/tb";
import Banners from '../../components/Banners';


const Home = () => {
  return (
   <>
    <HomeSliders />
    <Categories />
    <section className='py-16 bg-white '>
      <div className='container'>
        <div className='freeShipping !mb-5 w-full rounded-md p-4 border-2 border-amber-700 flex items-center justify-between'>
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
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
   </>
  )
}

export default Home