import React from 'react'
import { FEATURES_DATA } from '../../utils/Helper'
import { KEY_DATA } from '../../utils/Helper'
import Heading from '../../common/Heading'
import leftEllipse from '../../assets/images/webp/key-left-ellipse.webp'
import rightEllipse from '../../assets/images/webp/key-right-ellipse.webp'

const KeyFeatures = () => {
  return (
    <div className='lg:pb-[72px] md:pb-14 sm:pb-10 pb-6 relative' id='view'>
      <img className='absolute left-0 bottom-[-230px] pointer-events-none max-w-[376px] z-[-1]' src={leftEllipse} alt="key-left-ellipse" />
      <img className='absolute right-0 top-[-20%] max-w-[376px] pointer-events-none z-[-1]' src={rightEllipse} alt="key-right-ellipse" />
      <div className='container'>
        <Heading className='text-center' text={"Key Features"} />
        <p className='text-lg leading-custom-xl text-white pt-3 font-normal pp-telegraf-normal text-center mx-auto max-w-[570px] opacity-60'>FlipVault payment widgets and API cater to a wide range of Web3 clients: individuals,gaming platforms, exchange platforms</p>
        <div className='flex-row flex-wrap flex -mx-3 justify-center lg:mt-10 sm:mt-8 mt-2'>
          {FEATURES_DATA.map((features, idx) => (
            <div className='xl:w-[33.33%] sm:w-[50%] px-[10px] w-full mt-5'>
              <div
                key={idx}
                className='lg:p-[60px_33px] sm:p-[40px_24px] p-[32px_16px] flex-col flex items-center rounded-[20px] hover:bg-charcoal-black transition duration-300'>
                <p className={`${idx === 0 ? 'max-w-[308px]' : idx === 1 ? '' : ''} text-white text-2xl font-extrabold pp-telegraf-bold text-center mx-auto`}>{features.text}</p>
                <p className='text-white text-base opacity-60 pp-telegraf-normal text-center pt-4'>{features.para}</p>
                <img src={features.img} className={`${idx === 0 ? 'max-w-[141px]' :idx === 1 ? 'max-w-[356px]' :'max-w-[160px]'} w-full pt-[38px]`}alt={features.name}/>
              </div>
            </div>
          ))}
        </div>
        <div className='flex-row flex-wrap flex -mx-3 justify-center lg:mt-10 sm:mt-8 mt-2'>
          {KEY_DATA.map((keydata, idx) => (
            <div className='lg:w-[50%] px-[10px] w-full mt-5'>
              <div
                key={idx}
                className='lg:p-[60px_33px] sm:p-[40px_24px] p-[32px_16px] flex-col flex items-center rounded-[20px] hover:bg-charcoal-black transition duration-300'>
                <p className='text-white text-2xl font-extrabold pp-telegraf-bold text-center lg:max-w-[294px] mx-auto'>{keydata.text}</p>
                <p className='text-white text-base opacity-60 font-normal pp-telegraf-normal text-center pt-4'>{keydata.para}</p>
                <img src={keydata.img} className={`${idx === 0 ? 'max-w-[214px]' : idx === 1 ? 'max-w-[230px] pt-[72px]' : ''} w-full pt-[38px] pointer-events-none`}alt={keydata.img}
                />               
              </div>
            </div>
          ))}
        </div>
           </div>
    </div>
  )
}

export default KeyFeatures
