import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import bannerData from "../../assets/banner/banner";   
import { Pagination, Autoplay } from "swiper/modules";

const HomeSliders = () => {
  return (
    <div className="homeSlider pt-4 py-5 ">
      <div className="container flex gap-6">
        <div className="w-[80%]">
          <Swiper
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper !rounded-[20px]"
          >
            <SwiperSlide className="w-full">
              <img src={bannerData.images.img3} alt="Banner Slide" className="w-full rounded-[20px]" />
            </SwiperSlide>
            <SwiperSlide className="w-full">
              <img src={bannerData.images.img5} alt="Banner Slide" className="w-full rounded-[20px]" />
            </SwiperSlide>
            <SwiperSlide className="w-full">
              <img src={bannerData.images.banner1} alt="Banner Slide" className="w-full rounded-[20px]" />
            </SwiperSlide>
            <SwiperSlide className="w-full">
              <img src={bannerData.images.banner2} alt="Banner Slide" className="w-full rounded-[20px]" />
            </SwiperSlide>
             <SwiperSlide className="w-full">
              <img src={bannerData.images.banner3} alt="Banner Slide" className="w-full rounded-[20px]" />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="w-[20%] ">
          <img src={bannerData.images.img8} alt="Grid Img 4" className=" h-full rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default HomeSliders;
