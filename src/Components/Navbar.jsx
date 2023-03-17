import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import './Navbar.css'
import search from '../img/search1.png'
export default function Navbar() {
    const[active,setActive]= useState(false)
    const isActive=()=>{
        window.scrollY > 0 ? setActive(true) : setActive (false)
    }
    useEffect(( )=> {
        window.addEventListener('scroll', isActive);
        return ()=>{
            window.removeEventListener("scroll",isActive);
        }
    },[])
    
  return (
        // navigation
        <div  className="active ? 'navbar active': navbar
        
         ">
        
            {/* container */}
            <div 
            // className="container" 
            className=" flex justify-between  py-[0px] px-[20px]">
                {/* lOGO class */}
                <div 
                // className="logo" 
                className="text-[34px] font-bold ml-[30px]">
                    {/* <Link> */}
                    <span 
                    // className='text'
                    >fiverr</span>
                    {/* </Link> */}
                    
                    <span 
                    // className='dot' 
                    className="text-[#1dbf73] ">.</span>
                </div>
                <div>
                { active && (
                    <div className='searchbar'>
                    <input type="text" placeholder='What service are you looking for today' className='border-[1px] border-grey rounded '  />
                    <button><img src={search} alt="" /></button>
                    </div>
                    )}
                </div>
                {/* links class */}
                <div 
                // className="links" 
                className="flex gap-[24px] align-center p-[10px] py-[20px]  font-medium  font-sans">
                    <span>FIverr Business</span>
                    <span>Explore</span>
                    <span>English</span>
                    <span>Sign in</span>
                    <span>Become a seller</span>
                    <button 
                    className="text-white  px-[20px] py-[10px]  rounded-[5px] border-[1px] cursor-pointer border-solid border-white bg-transparent hover:bg-[#1dbf73] hover:border-[#1dbf73] " >Join</button>
                </div>
                
            </div>
            { active && (
                <>
                <hr className="w-[100%] border-[1px] border-solid border-[lightgrey] "/>
                <div 
                // className="menu" 
                className=" active:[text-black] py-[10px] justify-between flex font-[300] text-[grey]   ">
                    <span>Graphics & Design</span>
                    <span>Digital Marketing</span>
                    <span>Writing & Translation</span>
                    <span>Video & Animation</span>
                    <span>Music & Audio</span>
                    <span>Programming & Tech</span>
                    <span>Business</span>
                    <span>Lifestyle</span>
                    <div className='flex gap-[5px]'>
                    <span >AI Services</span>
                    <button className='border-[#FF62AD] border-[1px] rounded-full text-[#FF62AD] px-[10px]'>new</button>

                    </div>
                    
                </div>

                </>)

            }
            

        </div>
        
    
  )
}
