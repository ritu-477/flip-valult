import React from 'react'
import footerLogo from '../assets/images/webp/footer-logo.webp'
import { FOOTER_DATA } from '../utils/Helper'
import Icon from './Icons'

const Footer = () => {
    return (
        <div className='bg-ink-black pt-20 lg:mt-20 md:mt-14 sm:mt-10 mt-6'>
            <div className='container'>
                <div className='lg:flex-row flex flex-wrap justify-between'>
                    <div className='lg:w-1/4 w-full'>
                        <a href=""><img src={footerLogo} className='max-w-[114.57px]' alt="footer-logo" /></a>
                        <p className='font-normal text-base text-primary-gray max-w-[299px] pt-5'>Trade NFTs, Cryptocurrencies, and Files Across Multiple Networks.</p>
                    </div>``
                        {FOOTER_DATA.map((value, i) => (
                            <div className='lg:w-[20%] md:w-[33.33%] sm:w-[50%] w-full flex lg:items-center flex-col lg:mt-0 mt-6'>
                                <div key={i}>
                                    <p className='font-semibold text-lg text-white whitespace-nowrap pb-4'>{value.list}</p>
                                    {value.content.map((list, items) => (
                                        <ul key={items}>
                                            <li className='pb-4'><a href='#' className='font-lato font-normal text-base text-white opacity-70 hover:opacity-[1] duration-700'>{list.listOne}</a></li>
                                            <li className='pb-4'><a href='#' className='font-lato font-normal text-base text-white opacity-70 hover:opacity-[1] duration-700'>{list.listBtnTwo}</a></li>
                                            <li className='pb-4'><a href='#' className='font-lato font-normal text-base text-white opacity-70 hover:opacity-[1] duration-700'>{list.listBtnThree}</a></li>
                                            <li className='pb-4'><a href='#' className='font-normal text-base text-white opacity-70 hover:opacity-[1] duration-700'>{list.listBtnFour}</a></li>
                                            <li><a href='#' className='font-normal text-base text-white opacity-70 hover:opacity-[1] duration-700'>{list.listBtnFive}</a></li>
                                        </ul>
                                    ))}
                                </div>
                           </div>
                        ))}
                    <div className='lg:w-[20%] flex flex-col lg:items-center md:w-[33.33%] sm:w-[50%] w-full'>
                        <p className='font-semibold text-lg text-white'>Follow Us On</p>
                        <div className='flex'> 
                            <div className='size-8 border border-white opacity-15 rounded-full'>
                                <Icon iconName="facebook" />
                            </div>
                            <div className='size-8 border border-white opacity-15 rounded-full'>
                                <Icon iconName="twitter" />
                            </div>
                            <div className='size-8 border border-white opacity-15 rounded-full'>
                                <Icon iconName="youtube" />
                            </div>
                            <div className='size-8 border border-white opacity-15 rounded-full'>
                                <Icon iconName="linkedin" />
                            </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer