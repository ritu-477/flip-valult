import React from 'react';
import navLogo from '../assets/images/webp/nav-logo.webp';
import { NAV_DATA_LINK, DATA_LINK } from '../utils/Helper'; 
import { useEffect, useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    useEffect(() => {

        const toggleMenu = () => {
            if (window.innerWidth < 1024) {
                document.body.style.overflow = !isMenuOpen ? "" : "hidden";
            }
            else {
                document.body.style.overflow = "";
            }
        }

        toggleMenu();
        window.removeEventListener("resize", toggleMenu);
        return () => {
            window.removeEventListener("resize", toggleMenu);
            document.body.style.overflow = "";
        }
    }, [isMenuOpen])
    
    return (
        <div className="lg:pt-[70px] md:-14 pt-12 flex items-center h-[51px]">
            <div className="container h-[51px]">
                <div className="flex justify-between">                    
                        <div className="flex items-center gap-[59px]">
                                <a className='lg:hidden block' href="/">
                                    <img className="max-w-[114px]" src={navLogo} alt="nav-logo" />
                                </a> 
                        <a href="">
                            <img className="max-w-[114px] lg:block hidden" src={navLogo} alt="nav-logo" />
                        </a>
                        <div className='lg:block hidden'>
                            <div className="flex gap-8 items-center">
                                {NAV_DATA_LINK.map((link, index) => (
                                    <a onClick={toggleMenu}
                                        key={index}
                                        className="font-normal pp-telegraf-normal relative after:absolute hover:after:bg-white hover:after:left-0 after:w-0 hover:after:w-full hover:after:h-[2px] after:left-0 hover:after:bottom-[-3px] after:ease-in-out after:duration-300 text-base leading-custom-base text-white"
                                        href={link.href}
                                    >
                                        {link.label}
                                    </a>
                                ))}
                                <button className="bg-btn-bg border pp-telegraf-normal hover:border-white text-white border-ink-blue py-[10px] px-5 rounded-[34px]">
                                    Flip+
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        onClick={toggleMenu}
                        className='menuIcon relative max-sm:w-[30px] max-sm:h-[24px] max-lg:w-[38px] max-lg:h-[28px] z-[15] max-lg:flex max-lg:justify-between max-lg:flex-col max-lg:cursor-pointer transition ease-linear duration-300 lg:hidden'
                    >
                        {isMenuOpen ? (
                            <>
                                <span className="h-[4px] absolute top-3 w-full bg-white transform rotate-45 transition duration-300"></span>
                                <span className="h-[4px] absolute top-3 w-full bg-white transform -rotate-45 transition duration-300"></span>
                            </>
                        ) : (
                            <>
                                <span className="h-[4px] w-full bg-white"></span>
                                <span className="h-[4px] w-full bg-white"></span>
                                <span className="h-[4px] w-full bg-white"></span>
                            </>
                        )}
                    </div>
                    <div className={`menuList ${isMenuOpen ? 'max-lg:left-0' : 'max-lg:left-[-100%]'} z-10 gap-8 max-lg:w-full max-lg:fixed max-lg:justify-center max-lg:top-0 max-lg:bg-black max-lg:flex-col max-lg:transition-all duration-300 flex items-center max-lg:min-h-screen`}>
                        <div className='lg:hidden block'>
                            <div className='flex-col flex gap-6 items-center'>
                                {NAV_DATA_LINK.map((link, index) => (
                                    <a onClick={toggleMenu}
                                        key={index}
                                        className="font-normal pp-telegraf-normal relative after:absolute hover:after:bg-white hover:after:left-0 after:w-0 hover:after:w-full hover:after:h-[2px] after:left-0 hover:after:bottom-[-3px] after:ease-in-out after:duration-300 text-base leading-custom-base text-white"
                                        href={link.href}
                                    >
                                        {link.label}
                                    </a>
                                ))}
                                <button className="bg-btn-bg border pp-telegraf-normal text-white border-ink-blue py-[10px] px-5 rounded-[34px]">
                                    Flip+
                                </button>
                            </div>
                        </div>
                        {DATA_LINK.map((link, index) => (
                            <a onClick={toggleMenu}
                                key={index}
                                className="font-normal pp-telegraf-normal text-base relative after:absolute hover:after:bg-white hover:after:left-0 after:w-0 hover:after:w-full hover:after:h-[2px] after:left-0 hover:after:bottom-[-3px] after:ease-in-out after:duration-300 leading-custom-base text-white"
                                href={link.href}
                            >
                                {link.label}
                            </a>
                        ))}
                        <button className="py-[14.5px] px-[52.5px] pp-telegraf-bold font-extrabold transition-all duration-300  hover:bg-white hover:text-dark-blue text-white rounded-[10px] border border-white">
                            Sign Up
                        </button>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
