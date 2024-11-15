import React from 'react'
import { ROADMAP_DATA } from '../../utils/Helper'
import Heading from '../../common/Heading'

const Roadmap = () => {
    return (
        <div className="lg:py-20 md:py-14 sm:py-10 py-6">
            <div className="flex justify-center items-center">
                <Heading className='text-center' text={"FlipVault Roadmap"} />
            </div>
            <div className="container">
                <div className="mx-auto md:mt-24 mt-10 w-full relative after:absolute after:w-[1px] after:h-[100%] after:bg-dark-blue after:top-[1px] after:bottom-0 after:left-[47%] after:border after:border-dashed max-md:after:left-0 flex flex-col max-md:gap-10 md:gap-0 rounded-">
                    {ROADMAP_DATA.map((item, index) => (
                        <div
                            key={index}
                            className={`container_${index % 2 === 0 ? "1" : "2"
                                } ps-[55px] md:ps-0 md:w-[50%] w-full left-0 relative ${index % 2 === 0 ? "" : "md:left-[50%]"
                                }`}
                        >
                            <div
                                className={`${index === 0 ? 'bg-timeline-one' : index === 1 ? 'bg-timeline-two md:ms-20' : index === 2 ? 'bg-timeline-three' : index === 3 ? 'bg-timeline-four md:ms-20'
                                                : index === 4
                                                    ? 'bg-timeline-five'
                                                    : index === 5
                                            ? 'bg-timeline-six md:ms-20'
                                                        : index === 6
                                                            ? 'bg-timeline-seven'
                                                : 'bg-timeline-eight md:ms-20'
                                    } max-w-[492px] rounded-[20px] bg-cover bg-no-repeat bg-[100%-100%] p-6`}
                            >
                                <p className={`container_${index % 2 === 0 ? "1 text-end" : "2 text-start"} font-normal text-white`}>
                                    {item.year}
                                </p>
                                {item.milestones.map((milestone, milestoneIndex) => (
                                    <div key={milestoneIndex} className="flex pt-4">
                                        <p className={`container_${index % 2 === 0 ? "1 text-end" : "2 text-start"} font-normal text-white`}>
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