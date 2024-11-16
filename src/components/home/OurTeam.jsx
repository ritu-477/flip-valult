import { useState } from "react";
import Heading from "../../common/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import sliderImg from "../../assets/images/webp/slider-image.webp";

const OurTeam = () => {
    const [activeTab, setActiveTab] = useState("tab1");

    const tabHandler = (e) => {
        setActiveTab(e.target.id);
    };

    return (
        <div className="lg:pt-[80px] md:pt-[14px] sm:pt-12 pt-6 lg:pb-[72px] md:pb-14 sm:pb-12 pb-6">
            <div className="container">
                <Heading
                    className="text-center max-w-[758px] mx-auto"
                    text={"Our Team"}
                />
                <div className="flex justify-center gap-3 mb-14 mt-[22px]">
                    <button
                        id="tab1"
                        onClick={tabHandler}
                        className={`sm:px-6 sm:py-4 py-2 px-3 rounded-[40px] pp-telegraf-normal font-normal text-base border ${activeTab === "tab1"
                                ? "bg-white text-midnight-black border-white"
                                : "bg-midnight-black text-white border-gray-border"
                            }`}
                    >
                        Team members
                    </button>
                    <button
                        id="tab2"
                        onClick={tabHandler}
                        className={`sm:px-6 sm:py-4 py-2 px-3 rounded-[40px] pp-telegraf-normal font-normal text-base border ${activeTab === "tab2"
                                ? "bg-white text-midnight-black border-white"
                                : "bg-midnight-black text-white border-gray-border"
                            }`}
                    >
                        Advisory board
                    </button>
                </div>
                <div>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        modules={[Pagination]}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            1024: {
                                slidesPerView: 3,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            640: {
                                slidesPerView: 1,
                            },
                            375: {
                                slidesPerView: 1,
                            },
                        }}
                        className="mySwiper !pb-[70px]"
                    >
                        {activeTab === "tab1" && (
                            <SwiperSlide>
                                <div className="relative overflow-hidden flex justify-center items-center">
                                    <div className="rounded-[30px] max-w-[373px] w-full p-[30px] bg-light-black">
                                        <img
                                            className="max-w-[312px] w-full pointer-events-none"
                                            src={sliderImg}
                                            alt="Marc Ryan"
                                        />
                                        <h3 className="text-2xl text-center pp-telegraf-bold font-extrabold pt-[14px] text-white">
                                            Marc Ryan
                                        </h3>
                                        <p className="text-base leading-custom-xl text-center pp-telegraf-normal font-normal opacity-60 text-white">
                                            Co-founder
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )}
                        {activeTab === "tab2" && (
                            <SwiperSlide>
                                <div className="relative overflow-hidden flex justify-center items-center">
                                    <div className="rounded-[30px] max-w-[373px] w-full p-[30px] bg-light-black">
                                        <img
                                            className="max-w-[312px] w-full pointer-events-none"
                                            src={sliderImg}
                                            alt="John Doe"
                                        />
                                        <h3 className="text-2xl text-center pp-telegraf-bold font-extrabold pt-[14px] text-white">
                                            Marc Ryan
                                        </h3>
                                        <p className="text-base leading-custom-xl text-center pp-telegraf-normal font-normal opacity-60 text-white">
                                            Advisor
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )}
                        {activeTab === "tab2" && (
                            <SwiperSlide>
                                <div className="relative overflow-hidden flex justify-center items-center">
                                    <div className="rounded-[30px] max-w-[373px] w-full p-[30px] bg-light-black">
                                        <img
                                            className="max-w-[312px] w-full pointer-events-none"
                                            src={sliderImg}
                                            alt="John Doe"
                                        />
                                        <h3 className="text-2xl text-center pp-telegraf-bold font-extrabold pt-[14px] text-white">
                                            Marc Ryan
                                        </h3>
                                        <p className="text-base leading-custom-xl text-center pp-telegraf-normal font-normal opacity-60 text-white">
                                            Advisor
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )}
                        {activeTab === "tab2" && (
                            <SwiperSlide>
                                <div className="relative overflow-hidden flex justify-center items-center">
                                    <div className="rounded-[30px] max-w-[373px] w-full p-[30px] bg-light-black">
                                        <img
                                            className="max-w-[312px] w-full pointer-events-none"
                                            src={sliderImg}
                                            alt="John Doe"
                                        />
                                        <h3 className="text-2xl text-center pp-telegraf-bold font-extrabold pt-[14px] text-white">
                                            Marc Ryan
                                        </h3>
                                        <p className="text-base leading-custom-xl text-center pp-telegraf-normal font-normal opacity-60 text-white">
                                            Advisor
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )}
                        {activeTab === "tab1" && (
                            <SwiperSlide>
                                <div className="relative overflow-hidden flex justify-center items-center">
                                    <div className="rounded-[30px] max-w-[373px] w-full p-[30px] bg-light-black">
                                        <img
                                            className="max-w-[312px] w-full pointer-events-none"
                                            src={sliderImg}
                                            alt="Jane Smith"
                                        />
                                        <h3 className="text-2xl text-center pp-telegraf-bold font-extrabold pt-[14px] text-white">
                                            Marc Ryan
                                        </h3>
                                        <p className="text-base leading-custom-xl text-center pp-telegraf-normal font-normal opacity-60 text-white">
                                            Co-founder
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )}
                        {activeTab === "tab1" && (
                            <SwiperSlide>
                                <div className="relative overflow-hidden flex justify-center items-center">
                                    <div className="rounded-[30px] max-w-[373px] w-full p-[30px] bg-light-black">
                                        <img
                                            className="max-w-[312px] w-full pointer-events-none"
                                            src={sliderImg}
                                            alt="Marc Ryan"
                                        />
                                        <h3 className="text-2xl text-center pp-telegraf-bold font-extrabold pt-[14px] text-white">
                                            Marc Ryan
                                        </h3>
                                        <p className="text-base leading-custom-xl text-center pp-telegraf-normal font-normal opacity-60 text-white">
                                            Co-founder
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )}
                        {activeTab === "tab1" && (
                            <SwiperSlide>
                                <div className="relative overflow-hidden flex justify-center items-center">
                                    <div className="rounded-[30px] max-w-[373px] w-full p-[30px] bg-light-black">
                                        <img
                                            className="max-w-[312px] w-full pointer-events-none"
                                            src={sliderImg}
                                            alt="Jane Smith"
                                        />
                                        <h3 className="text-2xl text-center pp-telegraf-bold font-extrabold pt-[14px] text-white">
                                            Marc Ryan
                                        </h3>
                                        <p className="text-base leading-custom-xl text-center pp-telegraf-normal font-normal opacity-60 text-white">
                                            Co-founder
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;
