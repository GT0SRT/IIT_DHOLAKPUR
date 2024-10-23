import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
// import { TbInfoTriangle } from "react-icons/tb";
// import { FaBookReader } from "react-icons/fa";
// import { GrServices } from "react-icons/gr";
// import { MdCall } from "react-icons/md";
// import { FaHome } from "react-icons/fa";

const links = [
    {
        icon: <FaInstagram size={22} className='text-[white] m-3 hover:text-[#d2d690] hover:scale-150' />,
    },
    {
        icon: <FaLinkedin size={22} className='text-[white] m-3 hover:text-[#d2d690] hover:scale-150' />,
    },
    {
        icon: <FaSquareXTwitter size={22} className='text-[white] m-3 hover:text-[#d2d690] hover:scale-150'  />,
    },
    {
        icon: <FaGithub size={22} className='text-[white] m-3 hover:text-[#d2d690] hover:scale-150'  />,
    }
];

const Hero = () => {
  return (
    <>
        <div className='hero'>
            <div className='flex justify-center items-center mt-5'>
                <div className='text-center'>
                    <h1 className='text-[white] text-[64px] font-bold'>IIT Dholakpur</h1>
                    <h5 className='font-semibold text-[#d2d690] text-[32px]'>When Ladoo meets oppurtunity</h5>
                    <button className='border-[3px] text-[white] border-[white] p-1 pl-2 pr-2 text-[22px] m-3 hover:border-[#d2d690] hover:text-[#d2d690] hover:bg-[#24100c]'>Explore</button>
                </div>
            </div>
            <div className='flex justify-between items-center w-full mb-[32px]'>
            <div className='flex flex-col items-center mt-[100px]'>
                <div className='h-[50px] border-l-[3px] border-[#d2d690] ml-3'></div>
                <ul className='flex flex-col'>
                    {
                        links.map((link, index) => (
                            <li key={index} className='cursor-pointer flex items-center ml-3 gap-2 hover:rotate-12'>
                                {link.icon}
                            </li>
                        ))
                    }
                </ul>
            </div>
                <div className='text-[#adacac] rotate-90 font-semibold text-[22px] bounce-animation'>Scroll Down <FaArrowRightLong className='inline' /></div>
            </div>
        </div>
    </>
  )
}

export default Hero