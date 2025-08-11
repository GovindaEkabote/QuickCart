import React, { useRef, useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";

const ProductZoom = () => {
  const [slideindex, setSlideIndex] = useState(0);
  const zoomSliderBig = useRef();
  const zoomSliderSml = useRef();

  const goto = (index) =>{
    setSlideIndex(index)
    zoomSliderSml.current.swiper.slideTo(index);
    zoomSliderBig.current.swiper.slideTo(index);
  }
  return (
    <>
      <div className="flex gap-3 pb-10">
        <div className="slider w-[20%]">
          <Swiper
            ref={zoomSliderSml}
            direction={"vertical"}
            slidesPerView={4}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
            className="zoomProductSliderThumb h-[450px] overflow-hidden "
          >
            <SwiperSlide>
              <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideindex===0?'opacity-100':'opacity-30'}`} onClick={() => goto(0)}>
                <img
                  src="https://www.gonoise.com/cdn/shop/products/1.5_fdcb9945-d221-48fb-a61c-20025c7f2992.png?v=1681610912"
                  alt="Banner Slide"
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideindex===1?'opacity-100':'opacity-30'}`}  onClick={() => goto(1)}>
                <img
                  src="https://images.meesho.com/images/products/48013767/w4wu8_512.avif?width=512"
                  alt="Banner Slide"
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideindex===2?'opacity-100':'opacity-30'}`}  onClick={() => goto(2)}>
                <img
                  src="https://images.meesho.com/images/products/48013767/3w5gs_512.avif?width=512"
                  alt="Banner Slide"
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideindex===3?'opacity-100':'opacity-30'}`}  onClick={() => goto(3)}>
                <img
                  src="https://images.meesho.com/images/products/48013767/081au_512.avif?width=512"
                  alt="Banner Slide"
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideindex===4?'opacity-10000':'opacity-30'}`}  onClick={() => goto(4)}>
                <img
                  src="https://images.meesho.com/images/products/48013767/yzul1_512.avif?width=512"
                  alt="Banner Slide"
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide></SwiperSlide>
          </Swiper>
        </div>
        <div className="zoomContainer w-[80%] h-[450px] overflow-hidden rounded-md">
          <Swiper slidesPerView={1} spaceBetween={0} navigation={false} ref={zoomSliderBig}>
            <SwiperSlide>
              <InnerImageZoom
                src={
                  "https://images.meesho.com/images/products/48013767/yzul1_512.avif?width=512"
                }
                zoomType="hover"
                zoomScale={1} 
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                src={
                  "https://images.meesho.com/images/products/48013767/w4wu8_512.avif?width=512"
                }
                zoomType="hover"
                zoomScale={1}
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                src={
                  "https://images.meesho.com/images/products/48013767/3w5gs_512.avif?width=512"
                }
                zoomType="hover"
                zoomScale={1}
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                src={
                  "https://images.meesho.com/images/products/48013767/081au_512.avif?width=512"
                }
                zoomType="hover"
                zoomScale={1}
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                src={
                  "https://images.meesho.com/images/products/48013767/yzul1_512.avif?width=512"
                }
                zoomType="hover"
                zoomScale={1}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ProductZoom;
