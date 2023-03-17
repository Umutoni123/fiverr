import React from "react";
import graph from "../../img/icons/graphics-design.svg";
import online from "../../img/icons/online-marketing.svg";
import writing from "../../img/icons/writing-translation.svg";
import video from "../../img/icons/video-animation.svg";
import music from "../../img/icons/music-audio.svg";
import programming from "../../img/icons/programming.svg";
import business from "../../img/icons/business.svg";
import lifestyle from "../../img/icons/lifestyle.svg";
import data from "../../img/icons/data.svg";
import photography from "../../img/icons/photography.svg";
import '../icons/icons.css'

export default function Icons() {
  return (
    <div className="icons">
      <div className="iconscontainer">
        <div className="iconsfirst">
          <div className="inside-icons">
            <img src={graph}  alt="" />
            <hr />
            <p>Graphics & Design</p>
          </div>
          <div className="inside-icons">
            <img src={online} alt="" />
            <hr />
            <p>Digital Marketing</p>
          </div>
          <div className="inside-icons">
            <img src={writing} alt="" />
            <hr />
            <p>Writing & Translation</p>
          </div>
          <div className="inside-icons">
            <img src={video} alt="" />
            <hr />
            <p>Video & Animation</p>
          </div>
          <div className="inside-icons">
            <img src={music} alt="" />
            <hr />
            <p>Music & Audio</p>
          </div>
        </div>
        <div className="iconsfirst">
        <div className="inside-icons"> 
            <img src={programming} alt="" />
            <hr />
            <p>Programming & Tech</p>
          </div>
          <div className="inside-icons">
            <img src={business} alt="" />
            <hr />
            <p>Business</p>
          </div>
          <div className="inside-icons">
            <img src={lifestyle} alt="" />
            <hr />
            <p>Lifestyle</p>
          </div>
          <div className="inside-icons">
            <img src={data} alt="" />
            <hr />
            <p>Data</p>
          </div>
          <div className="inside-icons">
            <img src={photography} alt="" />
            <hr />
            <p>Photography</p>
          </div>
        </div>
      </div>
    </div>
  );
}
