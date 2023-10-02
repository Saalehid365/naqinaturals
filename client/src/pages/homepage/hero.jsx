import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import bg1 from "./images/bg1.JPG";
import bg2 from "./images/bg2.JPG";
import bg3 from "./images/bg3.JPG";

import {
  Autoplay,
  EffectFade,
  FreeMode,
  Navigation,
  Pagination,
  Thumbs,
} from "swiper/modules";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";

import "swiper/css/autoplay";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className=" flex w-screen px-12 pt-2 mb-32">
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        effect={"fade"}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[
          Autoplay,
          Pagination,
          Navigation,
          FreeMode,
          Thumbs,
          EffectFade,
        ]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className=" h-[60vh] w-[100vw] object-center"
      >
        <SwiperSlide>
          <img
            src={bg1}
            className="w-full h-full object-cover"
            alt="image43"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={bg2}
            className="w-full h-full object-cover"
            alt="image43"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={bg3}
            className="w-full h-full object-cover"
            alt="image43"
          ></img>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
