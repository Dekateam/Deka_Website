// import React, { useRef, useState } from "react";
// import { Virtual, Navigation, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import "./styles.css";

// export default function BrandsSwipper() {
//   const brands = [
//     { url: "./icons/america.png" },
//     { url: "./icons/america.png" },
//     { url: "./icons/america.png" },
//     { url: "./icons/america.png" },
//     { url: "./icons/america.png" },
//     { url: "./icons/america.png" },
//   ];

//   return (
//     <>
//       <Swiper
//         modules={[Virtual, Navigation, Pagination]}
//         slidesPerView={5}
//         centeredSlides={true}
//         spaceBetween={20}
//         // pagination={{
//         //   type: "fraction",
//         // }}
//         navigation={true}
//         virtual
//       >
//         {brands.map((brand, index) => (
//           <SwiperSlide key={index}>
//             <img src={brand.url} width={"90px"} height={"90px"} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </>
//   );
// }

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
    { url: "./icons/america.png" },
    { url: "./icons/america.png" },
    { url: "./icons/america.png" },
    { url: "./icons/america.png" },
    { url: "./icons/america.png" },
  ];

  return (
    <>
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        centeredSlides={true}
        spaceBetween={20}
        navigation={true}
        virtual
        breakpoints={{
          0: {
            slidesPerView: 1, // xs
          },
          600: {
            slidesPerView: 3, // sm
            slidesPerGroup: 3,
          },
          960: {
            slidesPerView: 5, // md
            slidesPerGroup: 5,
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
