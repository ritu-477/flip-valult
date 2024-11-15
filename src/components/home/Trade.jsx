import React from 'react'
import Heading from '../../common/Heading'
import { PARAGRAPHS_DATA } from '../../utils/Helper'
import tradeImg from '../../assets/images/webp/trade-image.webp'

const Trade = () => {
  return (
      <div>
          <div className='container'>
              <div className='lg:flex-row flex flex-col gap-[59px]'>
                  <div className='lg:w-1/2 w-full flex flex-col justify-center'>
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
                  <div className='lg:w-1/2 w-full'>
                      <img className='w-full max-lg:max-w-[520px] mx-auto max-lg:-mt-20'  src={tradeImg} alt="trade-image" />
                  </div>
              </div>
           </div>
    </div>
  )
}

export default Trade