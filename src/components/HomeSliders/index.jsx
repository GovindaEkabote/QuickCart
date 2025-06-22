import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import images from "../../assets/banner/banner"; // Make sure this exports img3, img5, img6, img7, img8, etc.
import { Pagination, Autoplay } from "swiper/modules";

const HomeSliders = () => {
  return (
    <div className="homeSlider !py-4 ">
      <div className="container flex gap-6">
        <div className="w-[80%]">
          <Swiper
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper !rounded-[20px]"
          >
            <SwiperSlide className="w-full">
              <img src={images.img3} alt="Banner Slide" className="w-full rounded-[20px]" />
            </SwiperSlide>
            <SwiperSlide className="w-full">
              <img src={images.img5} alt="Banner Slide" className="w-full rounded-[20px]" />
            </SwiperSlide>
            <SwiperSlide className="w-full">
              <img src={images.img6} alt="Banner Slide" className="w-full rounded-[20px]" />
            </SwiperSlide>
            <SwiperSlide className="w-full">
              <img src={images.img7} alt="Banner Slide" className="w-full rounded-[20px]" />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="w-[20%] ">
          <img src={images.img8} alt="Grid Img 4" className=" h-full rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default HomeSliders;
