import React from 'react'
import flex from "../assets/flex.png"
const Heronext = () => {
  return (
    <div>
        <div className=' text-2xl font-bold flex items-center justify-center pb-6 pt-6'><h1>Frequenty Asked <span className='text-sky-500'>Question</span> </h1></div>
      <div className="flex items-center justify-center flex-row xs:max-sm:px-4 ">
        <div className='flex w-auto flex-col gap-10'>
            <div className=" flex items-center">
            <div className='shadow-md text-sky-500 h-10 border w-24 flex flex-row items-center justify-center basis-1/3'>Eligiblity</div>
            <div className='pr-9'></div>
            <div className=' basis-2/3 text-xs text-sky-500'> Do i need to prior Product Management or project Management experience</div>
            </div>
            <div className=" flex items-center">
            <div className=' h-10 border-2  border-zinc-950 w-24 flex flex-row items-center justify-center basis-1/3'>Eligiblity</div>
            <div className='pr-9'></div>
            <div className=' basis-2/3 text-xs'> Do i need to prior Product Management or project Management experience</div>
            </div>
            <div className=" flex items-center">
            <div className='  h-10 border-2 border-zinc-950 w-24 flex flex-row items-center justify-center basis-1/3'>Eligiblity</div>
            <div className='pr-9'></div>
            <div className=' basis-2/3 text-xs'> Do i need to prior Product Management or project Management experience</div>
            </div>
        </div>
        </div>
        <div className='pt-40'></div>
        <div className='flex items-center justify-center flex-row'>
        <div className='  flex flex-row items-center bg-sky-400 justify-between w-4/6 pr-4 pt-4 pb-4 pl-4 xs:max-md:flex-col'>
            <img src={flex} alt="" />
            <button className='text-sky-500 bg-white pr-2 pt-2 pl-2 pb-2 rounded-sm xs:max-sm:text-xs'>Get in Touch</button>
        </div>
        </div>
        <div className='pt-40'></div>
      </div>
  
  )
}

export default Heronext
