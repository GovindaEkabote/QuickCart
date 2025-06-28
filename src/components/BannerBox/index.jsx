import React from 'react';
import bannerData from '../../assets/banner/banner';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const BannerBox = (props) => {


  return (
    <div className="py-5 w-full">
      <Swiper
        spaceBetween={20}
        slidesPerView={props.item} // Mobile defaul
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        modules={[Autoplay, Pagination]}
        className="w-full mx-auto"
      >
        {bannerData.imagesArray.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Banner ${index + 1}`}
              className="w-full h-[200px] object-cover rounded-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerBox;
