import { useState } from "react";
import Heading from "../../common/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from 'swiper/modules';
import "swiper/css/pagination"; 
import { TABS_DATA } from "../../utils/Helper";

const OurTeam = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="lg:pt-[80px] md:pt-[14px] sm:pt-12 pt-6 lg:pb-[72px] md:pb-14 sm:pb-12 pb-6">
            <div className="container">
                <Heading
                    className="text-center max-w-[758px] mx-auto"
                    text={"Our Team"}
                />
                <div className="max-w-4xl mx-auto">
                    <div className="flex justify-center gap-3 mb-14">
                        {TABS_DATA.map((tab, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)} 
                                className={`px-6 py-4 rounded-[40px] text-base border ${activeTab === index
                                    ? "bg-white text-midnight-black border-white"
                                    : "bg-midnight-black text-white border-gray-border"
                                    }`}
                            >
                                {tab.title}
                            </button>
                        ))}
                    </div>
                    <Swiper
                        key={activeTab}
                        modules={[Pagination]} 
                        spaceBetween={30}
                        slidesPerView={1} 
                        pagination={{ clickable: true }} 
                        breakpoints={{
                            1024: {
                                slidesPerView: 2, 
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            640: {
                                slidesPerView: 1,
                            },
                        }}
                        className="w-full"
                    >
                        {TABS_DATA[activeTab].slides.map((slide) => (
                            <SwiperSlide key={slide.id}>
                                <div className="p-6 w-1/3">
                                    <div className="rounded-[30px] p-[30px_30px_18.79px_30px] bg-light-black">
                                        <img className="max-w-[312px] w-full pointer-events-none" src={slide.image} alt={slide.content} />
                                        <h3 className="text-2xl text-center font-extrabold text-white">
                                            {slide.content}
                                        </h3>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;
