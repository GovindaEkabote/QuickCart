import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

// import bannerData from "../../assets/banner/banner";

import Products from "../components/Products";

const ProductSlider = (props) => {
  return (
    <div className="productSlider">
      <Swiper
        slidesPerView={props.items}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Products />
        </SwiperSlide>
        <SwiperSlide>
          <Products />
        </SwiperSlide>
        <SwiperSlide>
          <Products />
        </SwiperSlide>
        <SwiperSlide>
          <Products />
        </SwiperSlide>
        <SwiperSlide>
          <Products />
        </SwiperSlide>
        <SwiperSlide>
          <Products />
        </SwiperSlide>
        <SwiperSlide>
          <Products />
        </SwiperSlide>
        <SwiperSlide>
          <Products />
        </SwiperSlide>
        <SwiperSlide>
          <Products />
        </SwiperSlide>
        <SwiperSlide>
          <Products />
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
};

export default ProductSlider;
