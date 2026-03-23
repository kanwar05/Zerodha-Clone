import React from 'react'

const Education = () => {
  return (
    <div className='conainer px-[120px] pb-[50px]'>
        <div className='row px-5'>
          <div className='col-6 px-5'>
            <img src='media/images/education.svg' alt='education'/>
          </div>

          <div className='col-6 flex flex-col items-start justify-center pr-8'>
            <h2 className='fs-3 mb-[20px]'>Free and open market education</h2>
            <p className='mt-[15px] mb-[16px]'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
            <a href="./" className="no-underline text-[#387ed1] hover:text-[#000] ">
              Varsity  <i className="fa-solid fa-arrow-right"></i>
            </a>
            <p className='mt-[30px] mb-[16px]'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
            <a href="./" className="no-underline text-[#387ed1] hover:text-[#000] ">
              TradingQ&A  <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
    </div>
  )
}

export default Education
