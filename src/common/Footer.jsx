import React from 'react'
import footerLogo from '../assets/images/webp/footer-logo.webp'
import { FOOTER_DATA } from '../utils/Helper'
import Icon from './Icons'
import { SOCIAL_DATA } from '../utils/Helper'
import { CONTACT_DATA } from '../utils/Helper'
import ellipseOne from '.././assets/images/webp/footer-ellipse-one.webp'
import ellipseTwo from '.././assets/images/webp/footer-ellipse-two.webp'
import BackTop from '../components/home/BackTop'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className='bg-ink-black lg:pt-20 md:pt-16 pt-12  lg:mt-20 md:mt-14 sm:mt-10 mt-6 relative'>
            <img className='absolute bottom-0 left-0 sm:block hidden' src={ellipseOne} alt="ellipse-one" />
            <img className='absolute bottom-0 right-0 sm:block hidden' src={ellipseTwo} alt="ellipse-one" />
            <div className='container'>
                <div className='lg:flex-row flex flex-wrap justify-between'>
                    <div className='lg:w-1/4 w-full'>
                        <a href=""><img src={footerLogo} className='max-w-[114.57px]' alt="footer-logo" /></a>
                        <p className='font-normal pp-telegraf-normal text-base text-primary-gray max-w-[299px] pt-5'>Trade NFTs, Cryptocurrencies, and Files Across Multiple Networks.</p>
                    </div>``
                        {FOOTER_DATA.map((value, i) => (
                            <div className='lg:w-[20%] md:w-[33.33%] sm:w-[50%] w-full flex lg:items-center flex-col lg:mt-0 mt-6'>
                                <div key={i}>
                                    <p className='pp-telegraf-normal font-normal text-lg text-white whitespace-nowrap pb-4'>{value.list}</p>
                                    {value.content.map((list, items) => (
                                        <ul key={items}>
                                            <li className='pb-4'><a href='#home' className='font-normal pp-telegraf-normal text-base text-white opacity-70 hover:opacity-[1] duration-700'>{list.listOne}</a></li>
                                            <li className='pb-4'><a href='#view' className='font-normal pp-telegraf-normal text-base text-white opacity-70 hover:opacity-[1] duration-700'>{list.listBtnTwo}</a></li>
                                            <li className='pb-4'><a href='#connect' className='font-normal pp-telegraf-normal text-base text-white opacity-70 hover:opacity-[1] duration-700'>{list.listBtnThree}</a></li>
                                            <li className='pb-4'><a href='#roadmap' className='font-normal pp-telegraf-normal text-base text-white opacity-70 hover:opacity-[1] duration-700'>{list.listBtnFour}</a></li>
                                            <li><a href='#' className='font-normal text-base text-white pp-telegraf-normal opacity-70 hover:opacity-[1] duration-700'>{list.listBtnFive}</a></li>
                                        </ul>
                                    ))}
                                </div>
                           </div>
                        ))}
                    <div className="lg:w-[20%] flex flex-col md:w-[33.33%] sm:w-[50%] w-full lg:mt-0 mt-6 max-sm:-mt-3">
                        <p className="pp-telegraf-normal font-normal text-lg text-white text-start">Follow Us On</p>
                        <div className="flex gap-3 pt-4">
                            {SOCIAL_DATA.map((social, index) => (
                                <a key={index} href={social.href} className="size-8 border flex items-center justify-center border-circle-border rounded-full"aria-label={social.icon}>
                                    <Icon iconName={social.icon} /></a>
                            ))}
                        </div>
                        <div className="md:pt-8 pt-5">
                            <p className="font-semibold text-lg text-white text-start">Contact Us</p>
                            <div className="flex items-center gap-3 pt-4">
                                {CONTACT_DATA.map((contact, index) => (
                                    <React.Fragment key={index}>
                                        <a target='blank' href="mailto:info@flipvault.com"><Icon iconName={contact.icon} /></a>
                                        <a href={contact.href} className="gradientText pp-telegraf-normal text-base leading-5">{contact.label}</a>
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:pt-12 pt-8 pb-[22px]'>
                <p className='text-primary-gray text-base pp-telegraf-normal font-normal text-center'>©{currentYear}FlipVault</p>
            </div>
            <BackTop />
        </div>
    )
}

export default Footer