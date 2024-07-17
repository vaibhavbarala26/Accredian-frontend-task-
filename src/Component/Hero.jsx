import React, { useContext, useState } from 'react'
import "./Hero.css"
import mon from "../assets/money.png"
import img from "../assets/hero.png"
import Refersubmit from './Refersubmit'
import { AuthContext } from './Context/Context'
const Hero = () => {
  const {handler , currentUser} = useContext(AuthContext)
  console.log(currentUser);
  const handle = ()=>{
    handler();
  }
  return (
    <div>
         <><div className="dod my-10">
           <div className="box flex xs:max-md:w-3/4 xs:max-sm:h-auto xs:max-sm:flex-col-reverse py-2 justify-center items-center">
            <div className='basis-2/5 xs:max-md:flex xs:max-md:flex-col '>
            <h1 className='text-7xl font-bold pt-10 pl-8 pr-2 xs:max-md:text-3xl'>Let's Learn and Earn</h1>
            <h1 className='text-3xl font-thin pt-5 pl-10 pr-16 xs:max-md:text-2xl xs:max-sm:hidden'>Get a chance to win up-to <span className='text-sky-500 font-bold'>Rs. 15,000</span></h1>
            <button className='pl-5 pr-5 pt-2 pb-2 ml-10 mt-10 bg-sky-500 rounded-xl xs:max-sm:w-40' onClick={handle}>Refer Now</button>

            </div>
            <div className='basis-3/5  flex items-center   xs:max-md:flex  xs:max-md:items-center  xs:max-md:justify-center  h-100'>
            <div className="div absolute flex justify-between">
            <img src={mon} alt="" className='mon2 xs:max-lg:hidden lg:relative lg:w-24 bottom-32' />
            <img src={mon} alt="" className='mon2 xs:max-lg:hidden lg:relative lg:w-24 bottom-4' />
            </div>
            <img src={img} alt="" className=' w-full h-fit relative md:bottom-8 pr-14  ' />
            <img src={mon} alt="" className='mon xs:max-lg:hidden lg:relative lg:w-24 lg:bottom-40 lg:right-40' />
            <img src={mon} alt="" className='mon1 xs:max-lg:hidden lg:relative lg:w-24 lg:right-80  lg:top-20' />
            </div>
           </div>
      </div></> 
    </div>
  )
}

export default Hero
