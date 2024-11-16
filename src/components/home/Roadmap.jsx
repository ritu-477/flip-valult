import React from 'react'
import { ROADMAP_DATA } from '../../utils/Helper'
import Heading from '../../common/Heading'
import roadmapLeft from '../../assets/images/webp/roadmap-left-ellipse.webp'
import roadmapRight from '../../assets/images/webp/roadmap-right-ellipse.webp'


const Roadmap = () => {
    return (
        <div className="lg:py-20 md:py-14 sm:py-10 py-6 relative" id='roadmap'>
            <img className='absolute lg:block hidden max-w-[700px] pointer-events-none bottom-[-85px] -z-10 w-full left-0' src={roadmapLeft} alt="left-ellipse" />
            <img className='absolute lg:block hidden right-0 top-[160px] pointer-events-none max-w-[350px] -z-10' src={roadmapRight} alt="right-ellipse" />
            <div className="flex justify-center items-center">
                <Heading className='text-center' text={"FlipVault Roadmap"} />
            </div>
            <div className="container">
                <div className="mx-auto md:mt-24 mt-10 w-full relative after:absolute after:w-[1px] after:h-[100%] after:bg-dark-blue after:top-[20px] after:bottom-0 after:left-[47%] after:border after:border-dashed max-md:after:left-4 flex flex-col max-md:gap-10 md:gap-0 rounded-">
                    {ROADMAP_DATA.map((item, index) => (
                        <div
                            key={index}
                            className={`container_${index % 2 === 0 ? "1 lg:pr-28 md:pr-14" : "2"
                                } ps-[55px] md:ps-0 md:w-[50%] w-full left-0 relative ${index % 2 === 0 ? "" : "md:left-[50%]"
                                }`}
                            
                        >
                            <div
                                className={`${index === 0 ? 'md:bg-timeline-one' : index === 1 ? 'md:bg-timeline-two lg:ms-20 md:ms-10' : index === 2 ? 'md:bg-timeline-three' : index === 3 ? 'md:bg-timeline-four lg:ms-20 md:ms-10'
                                                : index === 4
                                                    ? 'md:bg-timeline-five'
                                                    : index === 5
                                            ? 'md:bg-timeline-six lg:ms-20 md:ms-10'
                                                        : index === 6
                                                            ? 'md:bg-timeline-seven'
                                                : 'md:bg-timeline-eight lg:ms-20 md:ms-10'
                                    } max-w-[492px] backdrop:blur-[40px] max-md:bg-light-black rounded-[20px] bg-cover bg-no-repeat bg-center p-3 md:p-6`}
                            >
                                <p className={`container_${index % 2 === 0 ? "1 md:text-end" : "2 text-start max-w-[424px]"} font-extrabold pp-telegraf-bold sm:text-xl text-base leading-6 text-white`}>
                                    {item.year}
                                </p>
                                {item.milestones.map((milestone, milestoneIndex) => (
                                    <div key={milestoneIndex} className="flex pt-4">
                                        <p className={`container_${index % 2 === 0 ? "1 md:text-end" : "2 text-start max-w-[424px]"} text-white sm:text-base text-sm pp-telegraf-normal font-normal leading-6`}>
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