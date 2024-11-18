import { useState } from "react";
import Heading from "../../common/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { TABS_DATA } from "../../utils/Helper"

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
                    text={"Our Team"} />
                <div className="flex justify-center gap-3 mb-14 mt-[22px]">
                    <button
                        id="tab1"
                        onClick={tabHandler}
                        className={`sm:px-6 sm:py-4 py-2 px-3 rounded-[40px] pp-telegraf-normal font-normal text-base border ${activeTab === "tab1"
                            ? "bg-white text-midnight-black border-white"
                            : "bg-midnight-black text-white border-gray-border"
                            }`}>
                        Team members
                    </button>
                    <button
                        id="tab2"
                        onClick={tabHandler}
                        className={`sm:px-6 sm:py-4 py-2 px-3 rounded-[40px] pp-telegraf-normal font-normal text-base border ${activeTab === "tab2"
                            ? "bg-white text-midnight-black border-white"
                            : "bg-midnight-black text-white border-gray-border"
                            }`} >Advisory board</button>
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
                            1280: { slidesPerView: 3 }, 1024: { slidesPerView: 3 }, 768: { slidesPerView: 2 }, 375: { slidesPerView: 1 },
                        }}
                        className="mySwiper !pb-[70px]">
                        {TABS_DATA[activeTab].map((member) => (
                            <SwiperSlide key={member.id}>
                                <div className="relative overflow-hidden flex justify-center items-center h-[385.79px]">
                                        <div className="rounded-[30px] max-w-[373px] w-full p-[30px] hover:p-0 hover:bg-transparent group-hover:hidden group bg-light-black relative overflow-hidden transition-all duration-300">
                                            <img
                                                className="max-w-[312px] w-full pointer-events-none group-hover:h-[385.79px] opacity-100 group-hover:max-w-[373px] group-hover:opacity-15 transition-all duration-300"
                                                src={member.img}
                                                alt={member.name}
                                            />
                                            <h3 className="text-2xl text-center pp-telegraf-bold font-extrabold pt-[14px] text-white group-hover:hidden">
                                                {member.name}
                                            </h3>
                                            <p className="text-base leading-custom-xl text-center pp-telegraf-normal font-normal text-white group-hover:hidden">
                                                {member.role}
                                            </p>
                                        <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300 overflow-hidden">
                                            <p className="text-base leading-custom-xl text-center p-[30px] max-w-[350px] mx-auto text-white opacity-60">
                                                    Lorem ipsum dolor sit amet consectetur. Augue proin pellentesque nibh purus. Urna aliquam egestas semper proin amet et consequat mauris ut. Hendrerit suspendisse sed habitant egestas. Egestas suspendisse ultrices vulputate nec quisque pretium mauris.
                                                </p>
                                            </div>
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