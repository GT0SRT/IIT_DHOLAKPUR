import React from 'react'
import { IoMdDownload } from "react-icons/io";

const About = () => {
    return (
        <>
            <div className='bg-white p-5 flex flex-col items-center justify-center'>
                <div className='h-[60px] border-l-[4px] mt-[10px] border-[#d2d690]'></div>
                <h1 className='text-[#24100c] text-[32px] p-[10px] text-center font-bold'>About us</h1>
                <p className='p-[30px] text-[22px] ml-[10%] mr-[10%]'>Established in 2005, IIT Dholakpur stands as a beacon of excellence in engineering and technology education in India. Nestled in the scenic landscapes of Dholakpur, our institute is committed to nurturing innovative minds and fostering a spirit of research and entrepreneurship.</p>
                <button className='border-[3px] rounded-md text-[#24100c] border-[#24100c]
                 p-1 pl-2 pr-2 text-[22px] m-3 hover:border-[black] hover:text-[black]'><IoMdDownload className='inline'/> Brochure</button>
                <div className='mt-[50px] mb-30px vmtable'>
                    <div className='one'>
                        <h1 className='text-[#24100c] text-[32px] p-[10px] text-center font-bold'>Vision</h1>
                        <p className='p-[30px] text-[18px] ml-[15%] mr-[5%]'>Our vision is to empower students with cutting-edge knowledge and skills that will enable them to tackle the challenges of the future. We aim to be a global leader in engineering education, recognized for our innovative research, interdisciplinary collaboration, and commitment to societal development.</p>
                    </div>
                    <div>
                    <h1 className='text-[#24100c] text-[32px] p-[10px] text-center font-bold'>Mission</h1>
                 <p className='p-[30px] text-[18px] ml-[15%] mr-[10%]'>At IIT Dholakpur, we strive to:

                        <li>Provide high-quality education in engineering and technology.</li>
                        <li>Promote research that addresses real-world problems and drives technological advancements.</li>
                        <li>Cultivate a vibrant campus culture that encourages creativity, collaboration, and leadership.</li>
                        <li>Foster an inclusive environment that celebrates diversity and empowers all students.</li></p>
                    </div>
                 </div>
            </div>
        </>
    )
}

export default About