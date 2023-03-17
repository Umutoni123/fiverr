import React from 'react'
import meta from '../../img/meta.png'
import google from '../../img/google.png'
import netflix from '../../img/netflix.png'
import pg from '../../img/pg.png'
import paypal from '../../img/paypal.png'
import '../trustedby/trusted.css'



export default function trusted() {
  return (
    <div className="trusted">
        <div className="containertrusted">
        <span>Trusted: </span>
        <img src={meta} alt="" srcset="" />
        <img src={google} alt="" srcset="" />
        <img src={netflix} alt="" srcset="" />
        <img src={pg} alt="" srcset="" />
        <img src={paypal} alt="" srcset="" />
        </div>
    </div>
  )
}
