import React from 'react'
import Heading from '../../common/Heading'
import { PARAGRAPHS_DATA } from '../../utils/Helper'
import tradeImg from '../../assets/images/webp/trade-image.webp'
import tradeLeft from '../../assets/images/webp/trade-left-ellipse.webp'
import tradeCenter from '../../assets/images/webp/trade-center-ellipse.webp'


const Trade = () => {
  return (
      <div className='relative lg:pb-8'>
          <img className='lg:block hidden pointer-events-none absolute bottom-[-40%] left-0 max-w-[300px] w-full' src={tradeLeft} alt="trade-left-ellipse" />
          <img className='lg:block hidden pointer-events-none absolute top-[-30%] left-[45%] lg:max-w-[500px] xl:max-w-[600px] w-full' src={tradeCenter} alt="trade-center-ellipse" />
          <div className='container'>
              <div className='lg:flex-row flex flex-col gap-[59px]'>
                  <div className='lg:w-[50%] w-full flex flex-col justify-center'>
                      <Heading className='lg:max-w-[484px] lg:text-start text-center pb-4 sm:pb-5' text={"Trade NFTs Across Different Networks"} />
                      <div>
                          {PARAGRAPHS_DATA.map((text, index) => (
                              <p
                                  key={index}
                                  className={`text-lg leading-7 text-white opacity-60 lg:text-start text-center lg:max-w-[570px] ${index !== 0 ? 'sm:pt-5 pt-4' : ''}`}>
                                  {text}
                              </p>
                          ))}
                      </div>
                  </div>
                  <div className='lg:w-[46%] w-full'>
                      <img className='w-full pointer-events-none max-lg:max-w-[520px] mx-auto max-lg:-mt-20'  src={tradeImg} alt="trade-image" />
                  </div>
              </div>
           </div>
    </div>
  )
}

export default Trade