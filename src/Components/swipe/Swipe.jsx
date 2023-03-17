import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import '../swipe/swipe.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import camera from '../../img/camera.png'
import book from '../../img/book-covers.png'
import data from '../../img/data-entry.png'
import ikopo from '../../img/ikopo.png'
import illustration from '../../img/illustration.png'





// import required modules
import { Navigation } from "swiper";

export default function Swipe() {
  return (
    <div className="myswipe">
      <h1>Popular professional services</h1>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="imgslide">
            <div>
              <img src={camera} alt="" />
              <h4>Engage your audience</h4>
              <h2>Video explainer</h2>
            </div>
            <div>
            <img src={book} alt="" />
            <h4></h4>
            <h2></h2>
            </div>
            <div>
            <img src={data} alt="" />
            <h4></h4>
            <h2></h2>
            </div>
            <div>
            <img src={ikopo} alt="" />
            <h4></h4>
            <h2></h2>
            </div>
            <div>
              <img src={illustration} alt="" />
              <h4></h4>
              <h2></h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="imgslide">
            <img src={camera} alt="" />
            <img src={book} alt="" />
            <img src={data} alt="" />
            <img src={ikopo} alt="" />
            <img src={illustration} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="imgslide">
            <img src={camera} alt="" />
            <img src={book} alt="" />
            <img src={data} alt="" />
            <img src={ikopo} alt="" />
            <img src={illustration} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
