import React from 'react'
import CommonButton from '../../common/CommonButton'
import Icon from '../../common/Icons'
import Safety from './Safety'
import Header from '../../common/Header'
import heroEllipse from '../../assets/images/webp/hero-ellipse.webp'

const HeroHome = () => {
  return (
      <div className='md:pb-[51px] bg-cover bg-no-repeat bg-center bg-hero' id='home'>
          <Header />
          <div className='lg:pt-[180px] md:pt-[120px] sm:pt-[80px] pt-12 pb-9 relative'>
              <img className='absolute top-5 lg:block hidden max-w-[600px] w-full left-12 -z-10' src={heroEllipse} alt="hero-ellipse" />
              <div className='container'>
                  <h1 className='text-white text-center pp-telegraf-bold max-w-[822px] mx-auto lg:text-6xl md:text-5xl sm:text-4xl text-3xl xl:text-custom7xl xl:leading-custom-9xl'>Revolutionize Your
                      Trading Experience</h1>
                  <p className='text-white opacity-60 sm:text-custom2xl sm:leading-9 text-base max-w-[520px] mx-auto pt-5 text-center pp-telegraf-normal font-normal'>Trade NFTs, Cryptocurrencies, and Files Across
                      Multiple Networks</p>
                  <div className='flex gap-[14px] justify-center pt-7'>
                      <CommonButton className="py-[14.5px] px-[37.5px]" text="Launch Platform" />
                      <CommonButton className="py-[14.5px] px-[26px]" text="Staking" />
                  </div>
                  <div className='md:py-5 md:px-8 py-4 px-5 rounded-[20px] border border-gray-border bg-off-white bg-opacity-50 backdrop-blur-[33.5px] max-w-[795px] w-full mx-auto mt-7 sm:mt-[51px]'>
                      <div className='flex gap-4'>
                          <Icon iconName="token" />
                          <p className='font-normal sm:text-xl text-base pp-telegraf-normal text-white lg:text-nowrap'>Use our native token $FLIP, which runs on the Solana chain, to trade assets.</p>
                      </div>
                  </div>
              </div>
              <Safety />
         </div>
    </div>
  )
}

export default HeroHome