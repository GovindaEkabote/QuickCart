import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import images from "../../assets/banner/banner";
import { Pagination, Autoplay } from "swiper/modules"; // Import Autoplay

const HomeSliders = () => {
  return (
  
        <Swiper
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000, // 3 seconds
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]} // Add Autoplay here
          className="mySwiper !py-4"
        >
          <SwiperSlide className="w-full">
            <img src={images.img3} alt="Banner Slide" />
          </SwiperSlide>
          <SwiperSlide className="w-full">
            <img src={images.img5} alt="Banner Slide" />
          </SwiperSlide>
          <SwiperSlide className="w-full">
            <img src={images.img6} alt="Banner Slide" />
          </SwiperSlide>
          <SwiperSlide className="w-full">
            <img src={images.img7} alt="Banner Slide" />
          </SwiperSlide>
        </Swiper>
    
  );
};

export default HomeSliders;
