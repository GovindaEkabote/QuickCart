import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import bannerData from "../../assets/banner/banner";
// import './styles.css';

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const Categories = () => {
  return (
    <div className="categories  pt-4 py-5">
      <div className="container ">
        <Swiper
          slidesPerView={7}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link to="/">
              <div className="item h-[160px] w-full bg-white text-center flex flex-col items-center justify-between p-4 rounded-md">
                <img
                  src={bannerData.images.img8}
                  alt="Category"
                  className="w-[90px] h-[90px] object-contain rounded-md"
                />
                <h3 className="uppercase text-sm font-bold">Fashion</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item h-[160px] w-full bg-white text-center flex flex-col items-center justify-between p-4 rounded-md">
                <img
                  src={bannerData.images.img1}
                  alt="Category"
                  className="w-[90px] h-[90px] object-contain rounded-md"
                />
                <h3 className="uppercase text-sm font-bold">Fashion</h3>
              </div>
            </Link>
          </SwiperSlide><SwiperSlide>
            <Link to="/">
              <div className="item h-[160px] w-full bg-white text-center flex flex-col items-center justify-between p-4 rounded-md">
                <img
                  src={bannerData.images.img2}
                  alt="Category"
                  className="w-[90px] h-[90px] object-contain rounded-md"
                />
                <h3 className="uppercase text-sm font-bold">Fashion</h3>
              </div>
            </Link>
          </SwiperSlide><SwiperSlide>
            <Link to="/">
              <div className="item h-[160px] w-full bg-white text-center flex flex-col items-center justify-between p-4 rounded-md">
                <img
                  src={bannerData.images.img3}
                  alt="Category"
                  className="w-[90px] h-[90px] object-contain rounded-md"
                />
                <h3 className="uppercase text-sm font-bold">Fashion</h3>
              </div>
            </Link>
          </SwiperSlide><SwiperSlide>
            <Link to="/">
              <div className="item h-[160px] w-full bg-white text-center flex flex-col items-center justify-between p-4 rounded-md">
                <img
                  src={bannerData.images.img7}
                  alt="Category"
                  className="w-[90px] h-[90px] object-contain rounded-md"
                />
                <h3 className="uppercase text-sm font-bold">Fashion</h3>
              </div>
            </Link>
          </SwiperSlide><SwiperSlide>
            <Link to="/">
              <div className="item h-[160px] w-full bg-white text-center flex flex-col items-center justify-between p-4 rounded-md">
                <img
                  src={bannerData.images.img8}
                  alt="Category"
                  className="w-[90px] h-[90px] object-contain rounded-md"
                />
                <h3 className="uppercase text-sm font-bold">Fashion</h3>
              </div>
            </Link>
          </SwiperSlide><SwiperSlide>
            <Link to="/">
              <div className="item h-[160px] w-full bg-white text-center flex flex-col items-center justify-between p-4 rounded-md">
                <img
                  src={bannerData.images.img8}
                  alt="Category"
                  className="w-[90px] h-[90px] object-contain rounded-md"
                />
                <h3 className="uppercase text-sm font-bold">Fashion</h3>
              </div>
            </Link>
          </SwiperSlide><SwiperSlide>
            <Link to="/">
              <div className="item h-[160px] w-full bg-white text-center flex flex-col items-center justify-between p-4 rounded-md">
                <img
                  src={bannerData.images.img8}
                  alt="Category"
                  className="w-[90px] h-[90px] object-contain rounded-md"
                />
                <h3 className="uppercase text-sm font-bold">Fashion</h3>
              </div>
            </Link>
          </SwiperSlide><SwiperSlide>
            <Link to="/">
              <div className="item h-[160px] w-full bg-white text-center flex flex-col items-center justify-between p-4 rounded-md">
                <img
                  src={bannerData.images.img8}
                  alt="Category"
                  className="w-[90px] h-[90px] object-contain rounded-md"
                />
                <h3 className="uppercase text-sm font-bold">Fashion</h3>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Categories;
