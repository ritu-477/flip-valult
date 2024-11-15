import React from 'react'
import CommonButton from '../../common/CommonButton'
import Icon from '../../common/Icons'
import Safety from './Safety'
import Header from '../../common/Header'

const HeroHome = () => {
  return (
      <div className='md:pb-[51px] bg-cover bg-no-repeat bg-center bg-hero' id='home'>
          <Header />
          <div className='lg:pt-[161px] md:pt-[120px] sm:pt-[80px] pt-12 pb-9 '>
              <div className='container'>
                  <h1 className='text-white text-center max-w-[822px] mx-auto lg:text-6xl md:text-5xl sm:text-4xl text-3xl xl:text-custom6xl xl:leading-custom-8xl'>Revolutionize Your
                      Trading Experience</h1>
                  <p className='text-white opacity-60 sm:text-custom2xl sm:leading-9 text-base max-w-[520px] mx-auto pt-5 text-center'>Trade NFTs, Cryptocurrencies, and Files Across
                      Multiple Networks</p>
                  <div className='flex gap-[14px] justify-center pt-7'>
                      <CommonButton className="py-[14.5px] px-[37.5px]" text="Launch Platform" />
                      <CommonButton className="py-[14.5px] px-[26px]" text="Staking" />
                  </div>
                  <div className='md:py-5 md:px-8 py-4 px-5 rounded-[20px] border border-gray-border bg-off-white bg-opacity-50 backdrop-blur-[33.5px] max-w-[795px] w-full mx-auto mt-7 sm:mt-[51px]'>
                      <div className='flex gap-4'>
                          <Icon iconName="token" />
                          <p className='font-normal sm:text-xl text-base text-white lg:text-nowrap'>Use our native token $FLIP, which runs on the Solana chain, to trade assets.</p>
                      </div>
                  </div>
              </div>
              <Safety />
         </div>
    </div>
  )
}

export default HeroHome