import React from 'react'
import "./Bottom.css"
import layer from "../assets/layer2.png"
import ban from "../assets/banner.png"
import layer10 from "../assets/Layer_10.png"
import submit from "../assets/submit.png"
import earn from "../assets/earn.png"
const Herobottom = () => {
  return (
    <>
    <div>

      <div className='cont  pr-24 pl-7 flex flex-col'>
        <div className="div flex flex-row justify-center">
            <h1 className='text-2xl pt-3'>How Do I <span className="text-sky-500">Refer ?</span></h1>
        </div>
        <img src={ban} alt="" />
        <div className='flex flex-col justify-center items-center helo1 gap-3'>
            <img src={layer} alt=""  className='h-14 w-14'/>
            <img src={submit} alt="" className='h-12 w-26' />
        </div>
        <div className='flex flex-col justify-center items-center helo2 gap-3'>
            <img src={layer10} alt=""  className='h-14 w-14'/>
            <img src={submit} alt="" className='h-12 w-26' />
        </div>
        <div className='flex flex-col justify-center items-center helo3 gap-3'>
            <img src={layer} alt=""  className='h-14 w-14'/>
            <img src={submit} alt="" className='h-12 w-26' />
        </div>
        
      </div>
      <div></div>
    </div>
    
    </>
  )
}

export default Herobottom
