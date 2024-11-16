import React, { useState, useEffect } from 'react';

const Volume = () => {
    const [tradeVolume, setTradeVolume] = useState(0);
    useEffect(() => {
        const targetVolume = 32.45;
        const step = 0.1;
        const interval = 30;
        let currentValue = 0;
        const timer = setInterval(() => {
            if (currentValue >= targetVolume) {
                clearInterval(timer);
            } else {
                currentValue += step;
                setTradeVolume(currentValue.toFixed(2));
            }
        }, interval);
        return () => clearInterval(timer);
    }, []);
    const [numUsers, setNumUsers] = useState(0);
    useEffect(() => {
        const targetUsers = 1697;
        const step = 1;
        const interval = 20;
        let currentValue = 0;
        const timer = setInterval(() => {
            if (currentValue >= targetUsers) {
                clearInterval(timer);
            } else {
                currentValue += step;
                setNumUsers(currentValue);
            }
        }, interval);
        return () => clearInterval(timer);
    }, []);
    const [ethValue, setEthValue] = useState(0);
    useEffect(() => {
        const targetEth = 10;
        const step = 0.1;
        const interval = 50;
        let currentValue = 0;
        const timer = setInterval(() => {
            if (currentValue >= targetEth) {
                clearInterval(timer);
            } else {
                currentValue += step;
                setEthValue(currentValue.toFixed(1));
            }
        }, interval);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="lg:py-20 md:py-14 sm:py-10 py-6">
            <div className="container">
                <div className="max-w-[1141px] mx-auto">
                    <div className="flex-row -mx-3 flex-wrap flex justify-center">
                        <div className="lg:w-1/3 md:w-1/2 w-full px-[10px]">
                            <div className="bg-navy-blue sm:py-[30px] sm:px-[27px] py-5 px-4 rounded-[30px]">
                                <div className="flex gap-2 items-center">
                                    <p className="gradientText pp-telegraf-bold font-extrabold sm:text-5xl text-custom3xl leading-8 xl:text-custom5xl xl:leading-custom-8xl">${tradeVolume}</p>
                                    <p className="sm:text-2xl text-base font-extrabold pp-telegraf-bold text-white leading-custom-6xl">million</p>
                                </div>
                                <div className="border-dashed border-dark-blue border w-full"></div>
                                <p className="sm:text-2xl text-base pt-2 pp-telegraf-bold font-extrabold text-white">Total trade volume</p>
                                <p className="text-white pt-2 pp-telegraf-normal font-normal sm:text-base text-sm leading-custom-xl opacity-60">Today</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 md:w-1/2 w-full px-[10px] md:mt-0 mt-5">
                            <div className="bg-navy-blue sm:py-[30px] sm:px-[27px] py-5 px-4 rounded-[30px]">
                                <div className="flex gap-2 items-center">
                                    <p className="gradientText sm:text-5xl text-custom3xl pp-telegraf-bold font-extrabold leading-8 xl:text-custom5xl xl:leading-custom-8xl">{numUsers}</p>
                                </div>
                                <div className="border-dashed border-dark-blue border w-full"></div>
                                <p className="sm:text-2xl text-base pt-2 pp-telegraf-bold font-extrabold text-white">Number of users</p>
                                <p className="text-white pt-2 sm:text-base text-sm pp-telegraf-normal font-normal leading-custom-xl opacity-60">Online right now</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 md:w-1/2 w-full px-[10px] lg:mt-0 mt-5">
                            <div className="bg-navy-blue sm:py-[30px] sm:px-[27px] py-5 px-4 rounded-[30px]">
                                <div className="flex gap-2 items-center">
                                    <p className="gradientText sm:text-5xl text-custom3xl pp-telegraf-bold font-extrabold leading-8 xl:text-custom5xl xl:leading-custom-8xl">{ethValue} ETH</p>
                                </div>
                                <div className="border-dashed border-dark-blue border"></div>
                                <p className="sm:text-2xl text-base pt-2 font-extrabold pp-telegraf-bold text-white">Total trade volume</p>
                                <p className="text-white pt-2 sm:text-base font-normal pp-telegraf-normal text-sm leading-custom-xl opacity-60">Today</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Volume;