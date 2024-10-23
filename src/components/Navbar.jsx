import React,{useState} from 'react'
import { TbInfoTriangle } from "react-icons/tb";
import { FaBookReader } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import { MdCall } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const Navbar = () => {

    const links = [
        {
            icon: <FaHome />,
            name: "Home"
        },
        {
            icon: <TbInfoTriangle />,
            name: "About us"
        },
        {
            icon: <FaBookReader />,
            name: "Courses Offered"
        },
        {
            icon: <GrServices />,
            name: "Services"
        },
        {
            icon: <MdCall />,
            name: "Contact us"
        }
      ];

      const showMenu = ()=>{
        document.querySelector('.menubar').style.display = "flex";
        document.querySelector('.header').style.background = "#24100c75";
        document.querySelector('.menu').style.display = "none";
        document.querySelector('.close').style.display = "flex";
      };
      const hideMenu = ()=>{
        document.querySelector('.menubar').style.display = "none";
        document.querySelector('.header').style.background = "transparent";
        document.querySelector('.close').style.display = "none";
        document.querySelector('.menu').style.display = "flex";
      };

  return (
    <>
        <header className='p-[15px] bg-transparent header'>
            <div className='max-w-[1200px] mx-auto flex items-center'>
                <div className='w-[100px]'>
                    <img src="https://pbs.twimg.com/profile_images/1376144020489969665/GncmIqby_400x400.jpg" className='w-[60px] rounded-[50%] hover:scale-125' alt='' />
                </div>
                <div>
                </div>
                {/* <div className='flex list-none gap-5 ml-auto text-[16px] font-semibold text-[white] menu-links'>
                    { 
                        links.map(
                            (link, index) => {
                                return <li key={index} className='cursor-pointer flex items-center gap-2 hover:text-[#24100c]'>
                                    {link.icon}
                                    {link.name}
                                </li>
                            }
                        )
                    }
                </div> */}
                <div onClick={showMenu} className='menu text-[white] ml-auto font-semibold cursor-pointer flex items-center p-3 gap-2 hover:bg-[#00000038]'>
                    MENU
                    <CiMenuFries />
                </div>
                <div className='ml-auto close cursor-pointer p-3 text-[white]' onClick={hideMenu}><IoClose size={30} /></div>
            </div>
        </header>
        <div className='bg-[#24100c75] w-[100%] h-[100%] menubar'>
                <div className='list-none mt-0 pt-0 text-[16px] font-semibold text-[white] menu-links'>
                    { 
                        links.map(
                            (link, index) => {
                                return <li key={index} className='cursor-pointer p-3 flex items-center gap-2 hover:text-[#d2d690]'>
                                    {link.icon}
                                    {link.name}
                                </li>
                            }
                        )
                    }
                </div>
        </div>
    </>
  )
}

export default Navbar
