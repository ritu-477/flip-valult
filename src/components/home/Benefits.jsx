import React from 'react'
import Heading from '../../common/Heading'
import {BENEFITS_DATA} from '../../utils/Helper'
import Icon from '../../common/Icons'

const Benefits = () => {
  return (
      <div className='lg:py-20 md:py-14 sm:py-10 py-6'>
          <div className='container'>
              <Heading className='text-center max-w-[758px] mx-auto' text={"Benefits of Using Our Revolutionary Trading Platformy"} />
              <p className='text-base leading-custom-xl text-white pt-3 font-normal text-center mx-auto max-w-[504px] opacity-60'>Lorem ipsum dolor sit amet consectetur. Eu bibendum in mollis vitae
                  lectus mauris sit integer. Ut ac.</p>
              <div className='flex-row flex-wrap flex -mx-3 justify-center lg:mt-10 sm:mt-8 mt-2'>
                  {BENEFITS_DATA.map((benefits, idx) => (
                      <div className='xl:w-[33.33%] sm:w-[50%] px-[10px] w-full mt-5'>
                          <div
                              key={idx}
                              className='sm:p-[27px_27px_40px] p-[20px_20px_24px] flex-col flex items-center rounded-[30px] bg-light-black hover:scale-95 transition duration-300'
                          >
                              <Icon iconName={benefits.process} />
                              <p className='text-white text-2xl font-extrabold text-center sm:pt-10 pt-6 max-w-[294px] mx-auto'>{benefits.text}</p>
                              <p className='text-white text-base opacity-60 font-extrabold text-center pt-2'>{benefits.para}</p>
                          </div>
                    </div>
                  ))}
              </div>
          </div>
    </div>
  )
}

export default Benefits