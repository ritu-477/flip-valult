
import React, { useEffect, useState } from 'react';
import Icon from '../../common/Icons';

export const BackTop = () => {
    const [visible, setValue] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const checkScroll = () => {
        setValue(window.scrollY >= 50);
    };

    useEffect(() => {
        window.addEventListener("scroll", checkScroll);
    },);

    return (
        <div className="relative">
               {visible && (
                <a className='bg-dark-blue p-2 rounded border-white border fixed right-3 bottom-3 cursor-pointer' href="">
                    <Icon
                    onClick={scrollToTop}
                    iconName="doubleArrow"
                /></a>
          )}
             </div>
    );
};

export default BackTop

