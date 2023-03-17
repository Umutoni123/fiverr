import React from "react";
import video1 from "../../../src/img/vid1.mp4";
import "../freelancer/Freelancer.css";
import tick from '../../img/tick.webp'

export default function Freelancer() {
  return (
    <div className="freecontainer">
      <div className="feature">
        <div className="rightpart">
          
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <img src={tick} alt="" />
              The best for every budget
            </div>
            <p>Find high-quality services at every price point. No hourly rates, just project-based pricing.</p>
            <div className="title">
              <img src={tick} alt="" />
              The best for every budget
            </div>
            <p>Find high-quality services at every price point. No hourly rates, just project-based pricing.</p>
            <div className="title">
              <img src={tick} alt="" />
              The best for every budget
            </div>
            <p>Find high-quality services at every price point. No hourly rates, just project-based pricing.</p>
            
         
        </div>
        <div className="leftpart">
          <video  controls>
            <source src={video1} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
