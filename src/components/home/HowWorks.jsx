import React from 'react'
import ConnectWallets from '../home/ConnectWallets'
import Heading from '../../common/Heading'
import CommonButton from '../../common/CommonButton'
import { TIMELINE_DATA } from '../../utils/Helper'
import worksEllipse from '../../assets/images/webp/how-works-ellipse.webp'
    
function HowWorks() {
    return (
        <div className='lg:py-20 md:py-14 sm:py-10 py-6 relative'>
             <img className='absolute lg:block hidden right-0 top-[-100px] pointer-events-none -z-10 max-w-[750px] w-full' src={worksEllipse} alt="works-ellipse" />
            <div className='container'>
                <div className='flex flex-wrap justify-between items-center pb-5 lg:pb-8'>
                    <div className='lg:w-1/3 w-full'>
                        <Heading className='text-start' text={"How it works"} />
                        <p className='text-base leading-custom-xl opacity-80 text-white'>There are many variations of passages of Lorem
                            Ipsum availablebut</p>
                    </div>
                    <div className='mt-4 lg:mt-0'>
                        <CommonButton className="text-white py-[14.5px] px-[37.5px]" text="Launch Platform" />
                    </div>
                </div>
                <div className='border-dashed border bg-white opacity-20  mb-20 lg:mb-24'></div>
                {/* timeline */}
                <div className="lg:block hidden">
                    <div className="flex flex-col lg:flex-row lg:w-full">
                        {TIMELINE_DATA.map((item, index) => (
                            <div
                                key={index}
                                className={`relative ${index === TIMELINE_DATA.length - 1
                                    ? '' : 'border-dashed'} ${index === 3 ? 'border-transparent'
                                    : 'border-dark-blue'} border max-w-[212px] w-full lg:ml-[85px] hover:bg-transparent`}>
                                <div className="absolute size-[17px] top-[-8px] left-[-45px] rounded-full border-dark-blue bg-dark-blue"></div>
                                <div className="absolute size-[63px] top-[-31px] left-[-68px] rounded-full border-dark-blue border"></div>
                            </div>
                        ))}
                    </div>
                {/* </div> */}
                <div className="flex lg:flex-row mt-16 lg:mt-20 lg:ml-8 lg:space-x-8">
                    {TIMELINE_DATA.map((step, index) => (
                        <div key={index} className="w-full lg:w-1/4">
                            <p className="text-2xl font-extrabold text-gray">{step.title}</p>
                            <p className="text-lg font-normal text-white opacity-60">{step.description}</p>
                        </div>
                    ))}
                </div>
                </div>
                <div className='lg:hidden block'>
                    <div className='flex'>
                    <div>
                        {TIMELINE_DATA.map((item, index) => (
                            <div
                                key={index}
                                className={`relative ${index === TIMELINE_DATA.length - 1
                                    ? '' : 'border-dashed'} ${index === 3 ? 'border-transparent'
                                        : ''} border-dark-blue border w-[1px] ms-4 h-14 sm:h-20 mb-10 lg:ml-[85px]`}>
                                <div className="absolute size-[10px] top-[-26px] left-[-3px] border-dark-blue border bg-dark-blue"></div>
                                <div className="absolute size-[40px] top-[-42px] left-[-18px] border-dark-blue border rounded-full"></div>
                            </div>
                        ))}
                    </div>
                        <div className='flex-col sm:gap-10 gap-5 flex -mt-10 ps-8'>
                            {TIMELINE_DATA.map((step, index) => (
                                <div key={index} className="w-full pb-1 sm:pb-8">
                                    <p className="text-lg font-extrabold text-gray">{step.title}</p>
                                    <p className="text-base font-normal text-white opacity-60">{step.description}</p>
                                </div>
                            ))}
                   </div>
                  </div>
                </div>
            </div>

            <ConnectWallets />
        </div>
    )
}

export default HowWorks