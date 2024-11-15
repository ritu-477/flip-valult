
import React from 'react'
import safetyImg from '../../assets/images/webp/safety-image.webp'

const Safety = () => {
  return (
      <div className='sm:pt-[51px] pt-12 pb-3'>
          <div className='container'>
              <h2 className='xl:text-custom6xl xl:leading-custom-7xl lg:text-6xl md:text-5xl sm:text-4xl text-[28px] leading-8 text-white text-center'>Safety, Flexibility, Ease</h2>
              <img src={safetyImg} className='max-w-[777px] mx-auto w-full lg:pt-14 sm:pt-12 pt-6' alt="safety-image" />
              <p className='text-lg leading-7 font-normal max-w-[781px] text-light-gray text-center mx-auto md:pt-14 sm:pt-8 pt-6'>Conduct trades and transactions in a <span className='font-extrabold text-white'>safer</span> manner using our platform
                  <span className='lg:block'></span> Have the <span className='font-extrabold text-white'>flexibility</span> to trade whatever you want, whenever you want, with whoever you want
                  Do it all in a simple and <span className='font-extrabold text-white'>easy</span> manner</p>
          </div>
    </div>
  )
}

export default Safety