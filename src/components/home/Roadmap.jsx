import React from 'react'
import { ROADMAP_DATA } from '../../utils/Helper'
import Heading from '../../common/Heading'
import roadmapLeft from '../../assets/images/webp/roadmap-left-ellipse.webp'
import roadmapRight from '../../assets/images/webp/roadmap-right-ellipse.webp'
import timelineImg from '../../assets/images/webp/timeline-line.webp'


const Roadmap = () => {
    return (
        <div className="lg:py-20 md:py-14 sm:py-10 py-6 relative" id='roadmap'>
            <img className='absolute lg:block hidden max-w-[700px] pointer-events-none bottom-[-85px] -z-10 w-full left-0' src={roadmapLeft} alt="left-ellipse" />
            <img className='absolute lg:block hidden right-0 top-[160px] pointer-events-none max-w-[350px] -z-10' src={roadmapRight} alt="right-ellipse" />
            <div className="flex justify-center items-center">
                <Heading className='text-center' text={"FlipVault Roadmap"} />
            </div>
            <div className="container">
                <div className="mx-auto md:mt-24 mt-10 relative">
                    <img src={timelineImg} alt="timeline-image" className='h-full absolute left-0 md:right-0 md:mx-auto' />
                    {ROADMAP_DATA.map((item, index) => (
                        <div
                            key={index}
                            className={`container_${index % 2 === 0 ? "1 md:pr-14" : "2"
                                } ps-[75px] md:ps-0 md:w-[50%] w-full left-0 relative ${index % 2 === 0 ? "" : "md:left-[50%]"
                                }`}
                            
                        >
                            <div
                                className={`${index === 0 ? 'lg:bg-timeline-one xl:p-[23px_24px_23px_10px]' : index === 1 ? 'lg:bg-timeline-two xl:ms-28 md:ms-14 xl:p-6' : index === 2 ? 'lg:bg-timeline-three xl:p-[23px_24px_23px_10px]' : index === 3 ? 'lg:bg-timeline-four xl:ms-28 md:ms-14 md:p-6'
                                                : index === 4
                                        ? 'lg:bg-timeline-five xl:p-[21px_21px_21px_12px]'
                                                    : index === 5
                                            ? 'lg:bg-timeline-six xl:ms-28 md:ms-14 md:p-6'
                                                        : index === 6
                                                ? 'lg:bg-timeline-seven xl:p-[23px_24px_23px_10px]'
                                                : 'lg:bg-timeline-eight xl:ms-28 md:ms-14 md:p-6'
                                    } max-w-[492px] backdrop:blur-[40px] max-lg:bg-light-black rounded-[20px] bg-cover bg-no-repeat bg-center p-3`}
                            >
                                <p className={`container_${index % 2 === 0 ? "1 md:text-end" : "2 text-start max-w-[424px]"} font-extrabold pp-telegraf-bold lg:text-xl text-base leading-6 text-white`}>
                                    {item.year}
                                </p>
                                {item.milestones.map((milestone, milestoneIndex) => (
                                    <div key={milestoneIndex} className="flex pt-3">
                                        <p className={`container_${index % 2 === 0 ? "1 md:text-end" : "2 text-start max-w-[424px]"} text-white lg:text-base text-sm pp-telegraf-normal font-normal leading-6 opacity-60`}>
                                            {milestone}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Roadmap