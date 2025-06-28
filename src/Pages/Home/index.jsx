import React from 'react'
import HomeSliders from '../../components/HomeSliders'
import Categories from '../../components/Categories'
import { TbTruckDelivery } from "react-icons/tb";


const Home = () => {
  return (
   <>
    <HomeSliders />
    <Categories />
    <section className='py-5 bg-white '>
      <div className='container'>
        <div className='freeShipping w-full rounded-md p-4 border-2 border-amber-700 flex items-center justify-between'>
            <div className='col1 flex items-center'>
              <p className='text-2xl font-[500]'>All India Free Delivery Above RS.500</p> 
               <TbTruckDelivery className='!ml-1 text-4xl'/>
            </div>
        </div>
      </div>
    </section>
   </>
  )
}

export default Home