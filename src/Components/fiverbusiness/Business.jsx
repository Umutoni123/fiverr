import React from 'react'
import business from '../../img/business.webp'
import tick from '../../img/tick.webp'
import '../fiverbusiness/business.css'

export default function Business() {
  return (
    <div className="buscontainer">
      <div className="featurebus">
        <div className="rightbus">
            <div className='first'>
            <h1>fiverr business</h1>
            <button >NEW</button>
            </div>
            
          
            <h1 className='head12'>A business solution designed for teams</h1>
            <p>Upgrade to a curated experience packed with tools and benefits, dedicated to businesses</p>
            <div className="title">
              <img src={tick} alt="" />
              The best for every budget
            </div>
            
            <div className="title">
              <img src={tick} alt="" />
              The best for every budget
            </div>
            
            <div className="title">
              <img src={tick} alt="" />
              The best for every budget
            </div>
            <button>Explore  FIverr Business</button>
            
         
        </div>
        <div className="leftpart">
          <img src={business} alt="" srcset="" />
        </div>
      </div>
    </div>
  )
}
