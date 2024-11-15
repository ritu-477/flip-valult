import React from 'react'
import Heading from '../../common/Heading'
import { WALLET_DATA } from '../../utils/Helper'

const SupportedWallets = () => {
  return (
      <div className='lg:py-20 md:py-14 sm:py-10 py-6 relative'>
          <div className='blue-ellipse lg:block hidden absolute left-0 z-[-1] top-[-150px]'></div>
          <div className='yellow-ellipse lg:block hidden absolute right-[110px] z-[-1] bottom-[-20%]'></div>
          <div className='container'>
              <Heading className='text-center' text={"Supported Wallets"} />
              <p className='font-normal text-base leading-custom-xl text-center max-w-[504px] mx-auto pt-3 text-white opacity-80'>Lorem ipsum dolor sit amet consectetur. Eu bibendum in mollis vitae
                  lectus mauris sit integer. Ut ac.</p>
              <div className='lg:flex-row flex-wrap flex gap-5 justify-center lg:mt-[60px] sm:mt-10 mt-6'>
                  {WALLET_DATA.map((wallet, index) => (
                      <div
                          key={index}
                          className='max-w-[216px] w-full py-[27px] px-11 rounded-[30px] bg-navy-blue hover:scale-95 transition duration-300'
                      >
                          <img src={wallet.image} className='w-[128px] mx-auto' alt={wallet.name} />
                          <p className='text-white text-2xl font-extrabold text-center pt-5'>{wallet.name}</p>
                      </div>
                  ))}
              </div>
          </div>
    </div>
  )
}

export default SupportedWallets