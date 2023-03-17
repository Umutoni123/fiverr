import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import '../swiper2/swipe.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import lavender from "../../img/lavender.mp4";
import dan from "../../img/dan.mp4";
import nadam from "../../img/nadam.mp4";
import kim from "../../img/kim.png";

// import required modules
import { Navigation } from "swiper";

export default function Swipe() {
  return (
    <div className="myswipe">
      <h1>Popular professional services</h1>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="imgslide">
            <video controls>
              <source src={lavender} type="video/mp4" />
            </video>
          </div>
          <div>
              <div className="containersw">
                <div className="founder">
                  <div>
                  <h5>
                    Tim and Dan JOO, Co-Founder
                    
                  </h5>
                  </div>
                  
                  <img src={kim} alt="" />
                </div>
                <div className="swipetext">
                  <span>
                    <i>
                      It is extremely exciting tha fiver has freelancers from
                      all over the word - it is broadens the talent pool. One of
                      the best things about fiverr is that while we're sleeping,
                      someone's working
                    </i>
                  </span>
                </div>
              </div>
              
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="imgslide">
            <video controls>
              <source src={dan} type="video/mp4" />
            </video>
          </div>
          <div>
              <div className="containersw">
                <div className="founder">
                  <div>
                  <h5>
                    Tim and Dan JOO, Co-Founder
                    
                  </h5>
                  </div>
                  
                  <img src={kim} alt="" />
                </div>
                <div className="swipetext">
                  <span>
                    <i>
                      It is extremely exciting tha fiver has freelancers from
                      all over the word - it is broadens the talent pool. One of
                      the best things about fiverr is that while we're sleeping,
                      someone's working
                    </i>
                  </span>
                </div>
              </div>
              
            </div>
          
          
        </SwiperSlide>
        <SwiperSlide>
          <div className="imgslide">
            <video controls>
              <source src={nadam} type="video/mp4" />
            </video>
            <div>
              <div className="containersw">
                <div className="founder">
                  <div>
                  <h5>
                    Tim and Dan JOO, Co-Founder
                    
                  </h5>
                  </div>
                  
                  <img src={kim} alt="" />
                </div>
                <div className="swipetext">
                  <span>
                    <i>
                      It is extremely exciting tha fiver has freelancers from
                      all over the word - it is broadens the talent pool. One of
                      the best things about fiverr is that while we're sleeping,
                      someone's working
                    </i>
                  </span>
                </div>
              </div>
              
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="imgslide">
            <video controls>
              <source src={kim} type="video/mp4" />
            </video>
            <div>
              <div className="containersw">
                <div className="founder">
                  <div>
                  <h5>
                    Tim and Dan JOO, Co-Founder
                    
                  </h5>
                  </div>
                  
                  <img src={kim} alt="" />
                </div>
                <div className="swipetext">
                  <span>
                    <i>
                      It is extremely exciting tha fiver has freelancers from
                      all over the word - it is broadens the talent pool. One of
                      the best things about fiverr is that while we're sleeping,
                      someone's working
                    </i>
                  </span>
                </div>
              </div>
              
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
