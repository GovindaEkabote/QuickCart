import React from 'react';
import bannerData from '../../assets/banner/banner';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';

const BannerBox = (props) => {
  return (
    <div className="py-5 w-full overflow-hidden box bannerBox">
      <Swiper
        spaceBetween={20}
        slidesPerView={props.items} // Mobile defaul
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        modules={[Autoplay, Pagination]}
        className="w-full mx-auto"
      >
        {bannerData.imagesArray.map((img, index) => (
          <SwiperSlide key={index} className="group">
            <Link to="/">
              <img
                src={img}
                alt={`Banner ${index + 1}`}
                className="w-full h-[200px] object-cover rounded-md transition-all duration-300 ease-in-out group-hover:scale-102"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerBox;
