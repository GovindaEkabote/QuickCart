import React from 'react'

const Help = () => {
  return (
        <div className='container py-3'>
          <h1 className='text-[25px] flex  !mb-5'>Hello. What can we help you with?</h1>
          <hr></hr>
          <div >
            <span className='text-[18px] flex py-3 !mb-5'>Some things you can do here</span>
            <div className='flex w-[80%] gap-4'>
              <div className='border-1 !p-5 shadow rounded-md '>
                <p className='text-[18px] font-bold text-amber-500'>Your Order</p>
                <p className='text-[13px]'>Track Packages</p>
                <p className='text-[13px]'>Edit or cancle Order</p>
              </div>
              <div className='border-1'>Your Order</div>
              <div className='border-1'>Your Order</div>  
            </div>
          </div>
        </div>

  )
}

export default Help