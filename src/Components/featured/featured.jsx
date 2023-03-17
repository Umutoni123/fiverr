import React from "react";
import image from "../../img/bg.jpg";
import "../featured/featured.css";

export default function featured() {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>Find the perfect <i>freelance</i> services for your business</h1>
          <div className="search">
            <div className="searchinput">             
                <svg aria-hidden="true"  fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <input type="text" placeholder='Try "building mobile app"' />
            </div>
            <button>search</button>
          </div>
          <div className="popular">
            <span>popular:</span>
            <button>web design</button>
            <button>word press</button>
            <button>logo design</button>
            <button>AI services</button>
          </div>
        </div>
        <div className="right">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
}
