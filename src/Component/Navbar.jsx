import React, { useState } from 'react'

const Navbar = () => {
    const [menu, setMenu] = useState(false)
    return (
        <div>
            <div>
                <div className="flex flex-row items-center justify-around xs:flex xs:justify-between xs:px-7">
                    <div className='flex flex-r items-center gap-4'>
                        <div className="flex items-center flex-col">
                            <span className='text-4xl text-sky-500/100'>accerdian</span>
                            <span className='text-xs text-gray-500'>credentials that matter</span>
                        </div>
                        <button className='bg-sky-500 h-10 rounded-lg pt-2 pb-2 pr-2 pl-2 text-white'>Courses</button>
                    </div>
                    <div className=" xs:hidden con lg:flex  flex-row justify-between gap-10 items-center">
                        <span>Refer and earn</span>
                        <span>Resources</span>
                        <span>About Us</span>
                        <button className='bg-gray-100 h-10 rounded-lg pt-2 pb-3 pl-3 pr-3 text-black'>Login</button>
                        <button className='bg-sky-500 h-10 rounded-lg pt-2 pb-2 pr-4 pl-4 text-white'>Try for free</button>
                    </div>
                    <div className='lg:hidden xs:flex flex-col bg-sky-500 px-2 py-2 rounded-lg cursor-pointer text-white '>
                        <span onClick={() => setMenu(!menu)}>{menu ? <span>close</span> : <span>menu</span>}</span>
                        {menu && <div className='flex flex-col gap-7 z-50 justify-center '>
                            <span className='mt-7'> Refer and earn</span>
                            <span>Resources</span>
                            <span>About Us</span>
                            <button className='bg-gray-100 h-10 rounded-lg pt-2 pb-3 pl-3 pr-3 text-black'>Login</button>
                            <button className='bg-sky-500 h-10 rounded-lg pt-2 pb-2 pr-4 pl-4 text-white'>Try for free</button>
                        </div>}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar
