import React from 'react'
import Heading from '../../common/Heading'
import circleOne from '../../assets/images/webp/circle-one.webp'
import circleTwo from '../../assets/images/webp/circle-two.webp'
import circleThree from '../../assets/images/webp/circle-three.webp'
import circleFour from '../../assets/images/webp/circle-four.webp'

const Ready = () => {
    return (
        <div className='lg:py-20 md:py-14 sm:py-10 py-6'>
            <div className='container'>
                <div className='max-w-[1160px] w-full lg:py-[90px] md:py-16 sm:py-12 py-5 px-5 rounded-[30px] bg-no-repeat bg-ink-black bg-[100%,100%] relative bg-center lg:bg-ready z-10'>
                    <div className='absolute top-0 left-0'>
                        <img className='lg:max-w-[107px] pointer-events-none md:max-w-[80px] sm:max-w-[60px] max-w-[40px] circle-one overflow-hidden' src={circleOne} alt="circle-one" />
                    </div>
                    <div className='absolute top-0 right-[30%]'>
                        <img className='md:max-w-[80px] pointer-events-none sm:max-w-[50px] max-w-[30px] circle-two overflow-hidden' src={circleTwo} alt="circle-one" />
                    </div>
                    <div className='absolute bottom-0 left-[10%]'><img className='lg:max-w-[231px] md:max-w-[200px] sm:max-w-[150px] max-w-[50px] circle-three overflow-hidden' src={circleThree} alt="circle-one" /></div>
                    <div className='absolute top-[5%] right-[5%]'>
                        <img className='lg:max-w-[250px] pointer-events-none md:max-w-[220px] sm:max-w-[180px] max-w-[80px] circle-four overflow-hidden' src={circleFour} alt="circle-one" />
                    </div>
                    <div className='flex flex-col items-center'>
                        <Heading className='text-center relative z-10' text={"Ready to start?"} />
                        <p className='font-normal text-lg leading-6 text-center text-white opacity-80 pt-2 mx-auto max-w-[682px]'>Got questions or feedback about our services? Interested in joining our team? Reach out to us anytime! Let’s chat and see how we can work.</p>
                        <button className='hover:from-[#085BF7] hover:to-[#6494EE] bg-gradient-to-r from-[#6494EE] to-[#085BF7] duration-300 ease-in-out relative z-10 to-[#085BF7] text-white font-extrabold text-base rounded-[10px] sm:mt-6 mt-4 lg:mt-[30px] text-center sm:py-[14.5px] sm:px-[47px] py-3 px-8'>Join Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ready