import React from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import bannerData from "../../assets/banner/banner";

const ProductZoom = () => {
  return (
    <>
      <div className="flex gap-3">
        <div className="slider w-[20%]">
          <Swiper
          direction={"vertical"}
            slidesPerView={4}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
            className="zoomProductSliderThumb "
          >
            <SwiperSlide >
              <div className="item">
                <img
                  src={bannerData.images.img3}
                  alt="Banner Slide"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide >
              <div className="item">
                <img
                  src={bannerData.images.img3}
                  alt="Banner Slide"
                />
              </div>
            </SwiperSlide>
             <SwiperSlide >
              <div className="item">
                <img
                  src={bannerData.images.img3}
                  alt="Banner Slide"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide >
              <div className="item">
                <img
                  src={bannerData.images.img3}
                  alt="Banner Slide"
                />
              </div>
            </SwiperSlide>
             <SwiperSlide >
              <div className="item">
                <img
                  src={bannerData.images.img3}
                  alt="Banner Slide"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide >
              <div className="item">
                <img
                  src={bannerData.images.img3}
                  alt="Banner Slide"
                />
              </div>
            </SwiperSlide>
             <SwiperSlide >
              <div className="item">
                <img
                  src={bannerData.images.img3}
                  alt="Banner Slide"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide >
              <div className="item">
                <img
                  src={bannerData.images.img3}
                  alt="Banner Slide"
                />
              </div>
            </SwiperSlide>

          </Swiper>
        </div>
       <div className="zoomContainer w-[80%] !rounded-md">
         <InnerImageZoom
          src={
            "https://www.gonoise.com/cdn/shop/products/1.5_fdcb9945-d221-48fb-a61c-20025c7f2992.png?v=1681610912"
          }
          zoomType="hover"
          zoomScale={1}
        />
       </div>
      </div>
    </>
  );
};

export default ProductZoom;