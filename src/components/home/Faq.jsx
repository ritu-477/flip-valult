import React from 'react'
import { useState } from 'react';
import { ACCORDION_ITEMS } from '../../utils/Helper'
import Heading from '../../common/Heading'


const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <div className="lg:pt-[65px] md:pt-14 sm:pt-10 pt-6 lg:pb-20 md:pb-14 sm:pb-10 pb-6">
            <div className="container mx-auto px-4">
                <Heading className='text-center max-w-[758px] mx-auto' text={"Any Questions? Look Here"} />
                <p className='text-base leading-custom-xl text-white pt-3 font-normal text-center mx-auto max-w-[504px] opacity-60'>There are many variations of passages of Lorem Ipsum available
                    but the majority have suffered alteration in some form.</p>
                <div className="space-y-[10px] max-w-[964px] pt-[49px] mx-auto w-full">
                    {ACCORDION_ITEMS.map((item, index) => (
                        <div key={index} className={`${activeIndex === index ? 'bg-gradient-to-r from-[#6494EE] to-[#085BF7]' : 'bg-ink-black'} rounded-[20px]`}>
                            <button
                                onClick={() => toggleAccordion(index)}
                                className={`${activeIndex === index ? 'md:pt-7 sm:pt-6 pt-4 pb-0 md:ps-16 sm:ps-8 ps-4 pe-4 sm:pe-8' : 'md:p-[24px_32px_24px_64px] sm:p-[24px_32px_24px_32px] p-[16px]'
                                    } flex items-center justify-between w-full text-left text-white text-lg sm:text-2xl leading-custom-xl font-extrabold`}                          >
                                <span>{item.title}</span>
                                <svg
                                    className={`w-5 h-5 transform transition-transform ${activeIndex === index ? 'rotate-180' : 'rotate-0'}`} width="15" height="9" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                    <path d="M6.5 7.44726L0.00480711 0.697264L12.9952 0.697266L6.5 7.44726Z" fill="white" />
                                </svg>
                            </button>
                            {activeIndex === index && (
                                <div className="md:ps-16 sm:ps-8 ps-4 pt-3 md:pb-7 sm:pb-6 pb-4 text-white opacity-60">{item.content}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Faq