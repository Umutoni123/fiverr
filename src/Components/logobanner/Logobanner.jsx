import React from 'react'
import banner from '../../img/logo-maker-banner.png'
import '../logobanner/logobanner.css'
export default function Logobanner() {
  return (
    <div className='ban'>
        <div className='ban-container'>
            <div className='leftban'>
                <div >

                </div>
                <h2 className='h2ban'>Make an incredible logo <i> in minutes</i></h2>
                <div className='p-ban'>
                    <p>Pre-designed by top talent. Just add your touch.</p>
                </div>
                <div><button className='ban-button'>Try FIverr Logo Maker</button></div>
            </div>
            <div className='imgban'>
                <img src={banner} alt="" />
            </div>
        </div>
    </div>
  )
}
