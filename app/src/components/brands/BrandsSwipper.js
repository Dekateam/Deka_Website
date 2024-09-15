import React from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

export default function BrandsSwipper() {
  const brands = [
    { url: "./icons/america.png" },
    { url: "./icons/innovation.png" },
    { url: "./icons/paintbucket.png" },
    { url: "./icons/paintpalette.png" },
    { url: "./icons/pen.png" },
    { url: "./icons/tools.png" },
  ];

  return (
    <>
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        spaceBetween={20}
        navigation={true}
        className="right-arrow-white left-arrow-white"
        breakpoints={{
          0: {
            slidesPerView: 1, // xs
          },
          600: {
            slidesPerView: 3, // sm
          },
          960: {
            slidesPerView: 5, // md
          },
        }}
      >
        {brands.map((brand, index) => (
          <SwiperSlide key={index}>
            <img src={brand.url} width={"90px"} height={"90px"} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
