import React from 'react'

const Pricing = () => {
  return (
    <div>
        <div className='container px-[120px] pb-[50px] '>
          <div className='row p-5'>
            <div className='col-5 p-5'>
              <h1 className="fs-3 mb-4">Unbeatable pricing</h1>
              <p className=" text-muted mb-4" >We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
              <a href="./" className="no-underline text-[#387ed1] hover:text-[#000] ">
                Explore our products <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
            
            <div className='col-7 '>
              <div className='flex flex-rows p-5 row'>
                <div className='col-4 flex flex-cols items-center justify-center'>
                  <img src='media/images/pricingEquity.svg' alt='pricing' className='w-[150px] h-[150px]' />
                  <p className='text-[10px]'>Free account opening</p>   
                </div>
                <div className='col-5 flex flex-cols items-center justify-center'>
                  <img src='media/images/pricingMF.svg' alt='pricing' className='w-[150px] h-[150px]'/>
                  <p className='text-[10px]'>Free equity delivery and direct mutual funds</p>
                </div>
                <div className='col-3 flex flex-cols items-center justify-center'>
                  <img src='media/images/intradayTrades.svg' alt='pricing' className='w-[150px] h-[150px]'/>  
                  <p className='text-[10px]'> Intraday and F&O</p>
                </div>
              </div>             
            </div>
          </div> 
        </div>
    </div>
  )
}

export default Pricing
