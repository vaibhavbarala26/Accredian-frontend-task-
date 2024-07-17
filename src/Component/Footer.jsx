import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <div className='bg-black h-full flex items-center justify-center  pr-20 pl-20 flex-col'>
                <div className='border-b-2 border-gray-50 text-white flex-row flex justify-between w-full xs:max-sm:justify-center mt-4 items-center'>
                    <div className="flex items-center flex-col xs:max-sm:hidden">
                        <span className='text-4xl text-white'>accerdian</span>
                        <span className='text-sm text-gray-500'>credentials that matter</span>
                    </div>
                    <div className="flex items-center flex-col">
                        <button className='text-1xl text-white border-zinc-100 rounded-md bg-sky-500 pr-2 pl-2 pt-2 pb-2'>Schedule 1-on-1 Call Now</button>
                        <span className='text-xs text-gray-500'>Speaking with our Learning Advisor</span>
                    </div>
                </div>
                <div className='flex flex-row justify-between gap-20'>
                    <div className=' text-white flex flex-col text-sm'>
                        <span className='font-thin'>Programs</span>
                        <span className='font-bold' >Product Management </span>
                        <span className='font-bold'>Business Analytics</span>
                        <span className='font-bold'>Digital Transformation</span>
                        <span className='font-bold'>Business Management</span>
                        <span className='font-bold'>Project Management</span>
                        <span className='font-bold'>Strategy & Leadership</span>
                        <span className='font-bold'>Senior Management</span>
                        <span className='font-bold' >Fintech</span>
                    </div>
                    <div className=' text-white flex flex-col text-xs '>
                            <span className='text-2xl'>Contact us</span>
                            <span >Email us (For Data Science Query) admission@accerdian.com</span>
                            <span>Email us (For Data Product Management) admission@accerdian.com</span>
                            <span>Data Science Admission Helpline +91 9079653292(9 AM - 7 PM)</span>
                            <span>Product Management Admission Helpline +91 9079653212(9 AM - 7 PM)</span>
                            <span>Enrolled student Helpline +91 9079623292(9 AM - 7 PM)</span>
                            <span>Office Address:4th Floor , 250 , Phase IV, Udyog Vihar Sector 18 , Gurugram.</span>
                            <span className='text-2xl'>Follow us</span>
                            <div className='flex flex-row gap-2'>
                                <span><FaInstagram /></span>
                                <span><FaFacebook /></span>
                                <span><FaLinkedin></FaLinkedin></span>
                                <span><FaTwitter></FaTwitter></span>
                                <span><FaYoutube></FaYoutube></span>
                            </div>
                        </div>
                        <div className='flex flex-col text-white text-xs xs:max-sm:hidden'>
                            <span className='text-2xl font-bold'>Accerdian</span>
                            <span>About</span>
                            <span>Career</span>
                            <span>Blog</span>
                            <span>Admission Policy</span>
                            <span>Referral Policy</span>
                            <span>Privacy Policy</span>
                            <span>Terms of Service</span>
                            <span>Master FAQs</span>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
