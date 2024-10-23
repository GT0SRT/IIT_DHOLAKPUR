import React,{useState} from 'react'
import {FaArrowRight, FaArrowLeft} from "react-icons/fa6";

const Courses = () => {

  const [rest, setRest] = useState(0);
  const getThresholds = () => {
    const width = window.innerWidth;
    if (width <= 480) {
        return -4.5;
    } else if (width <= 768) { 
        return -4;
    } else if (width <= 1024) {
        return -3;
    } else {
        return -3.2;
    }
};

const nextRest = () => {
    const threshold = getThresholds();
    if (rest <= threshold) {
        setRest(0);
    } else {
        setRest(rest - 0.8);
    }
};

const prevRest = () => {
    if (rest >= 0) {
        setRest(-3.2);
    } else {
        setRest(rest + 0.8);
    }
};

const ugCourses = [
  {
    name: "Bachelor of Science in Computer Science",
    para: "Covers programming, data structures, algorithms, and software development fundamentals.",
    banner: "https://example.com/ug_cs_banner.jpg"
  },
  {
    name: "Bachelor of Engineering in Civil Engineering",
    para: "Focuses on the design, construction, and maintenance of infrastructure like roads and bridges.",
    banner: "https://example.com/ug_civil_banner.jpg"
  },
  {
    name: "Bachelor of Science in Mechanical Engineering",
    para: "Covers thermodynamics, fluid mechanics, and the design of mechanical systems.",
    banner: "https://example.com/ug_mech_banner.jpg"
  },
  {
    name: "Bachelor of Arts in Economics",
    para: "Provides a foundation in microeconomics, macroeconomics, and statistical methods.",
    banner: "https://example.com/ug_economics_banner.jpg"
  },
  {
    name: "Bachelor of Commerce",
    para: "Focuses on accounting, finance, business law, and economics for a career in business and finance.",
    banner: "https://example.com/ug_commerce_banner.jpg"
  },
  {
    name: "Bachelor of Arts in Psychology",
    para: "Introduces cognitive processes, human behavior, and research methodologies in psychology.",
    banner: "https://example.com/ug_psych_banner.jpg"
  }
];

const pgCourses = [
  {
    name: "Master of Business Administration (MBA)",
    para: "Develops leadership, business management, and decision-making skills.",
    banner: "https://example.com/pg_mba_banner.jpg"
  },
  {
    name: "Master of Science in Data Science",
    para: "Advanced study in statistical analysis, data mining, and machine learning.",
    banner: "https://example.com/pg_datascience_banner.jpg"
  },
  {
    name: "Master of Arts in Psychology",
    para: "Explores clinical psychology, mental health, and research in human behavior.",
    banner: "https://example.com/pg_psychology_banner.jpg"
  },
  {
    name: "Master of Technology in Mechanical Engineering",
    para: "Specializes in thermodynamics, advanced mechanics, and materials science.",
    banner: "https://example.com/pg_mech_banner.jpg"
  },
  {
    name: "Master of Science in Artificial Intelligence",
    para: "Focuses on machine learning, deep learning, and AI systems.",
    banner: "https://example.com/pg_ai_banner.jpg"
  },
  {
    name: "Master of Arts in Economics",
    para: "Advanced study in econometrics, policy analysis, and global economics.",
    banner: "https://example.com/pg_economics_banner.jpg"
  }
];

const phdCourses = [
  {
    name: "PhD in Physics",
    para: "Research on quantum mechanics, relativity, and particle physics.",
    banner: "https://example.com/phd_physics_banner.jpg"
  },
  {
    name: "PhD in Computer Science",
    para: "Focuses on AI, cybersecurity, and advanced algorithms research.",
    banner: "https://example.com/phd_computerscience_banner.jpg"
  },
  {
    name: "PhD in Economics",
    para: "Researches economic theory, econometrics, and applied economics.",
    banner: "https://example.com/phd_economics_banner.jpg"
  },
  {
    name: "PhD in Mechanical Engineering",
    para: "Involves research in advanced mechanics, robotics, and materials engineering.",
    banner: "https://example.com/phd_mech_banner.jpg"
  },
  {
    name: "PhD in Data Science",
    para: "Research in big data, machine learning, and statistical methods for data analysis.",
    banner: "https://example.com/phd_datascience_banner.jpg"
  },
  {
    name: "PhD in Biotechnology",
    para: "Explores genetic engineering, bioprocessing, and molecular biology research.",
    banner: "https://example.com/phd_biotech_banner.jpg"
  }
];

  return (
    <>
      <div
        className='h-[120%] bg-cover bg-no-repeat bg-fixed bg-[#d2d690]'
        style={{
          // backgroundImage: 'url(https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-56228.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1729555200&semt=ais_hybrid)',
          margin: 0,
          padding: 0,
        }}
      >
        <h1 className='text-[#24100c] text-[36px] text-center mb-[30px] m font-bold'>Courses Offered</h1>
        {/* UG Courses */}
        <h1 className='text-[32px] text-center font-bold'>UG Courses</h1>
        <div className='flex justify-center items-center'>
          <div onClick={prevRest} className='flex cursor-pointer justify-center items-center w-[30px] h-[30px] 
          bg-[#adacac] hover:bg-[#e2e2e7] rounded-full mx-2'><FaArrowLeft /></div>

        <div className='flex overflow-hidden gap-5 mt-[32px] mb-[64px] w-[80vw]'>
          {
            ugCourses.map(
              (cat, index) => {
                return <div key={index} style={{ transform: `translateX(${rest * 100}%)`}}  className='bg-white rounded-md w-[320px] h-[420] object-cover shrink-0 cursor-pointer duration-500 hover:bg-[#adacac]'>
                          <img src={cat.banner} className='w-[320px] h-[220px] p-[10px] hover:p-0' alt=''/>
                          <h1 className='text-[22px] text-center font-bold'>{cat.name}</h1>
                          <p className='p-[10px] text-[14px] ml-[10%] mr-[10%] h-[120px]'>{cat.para}</p>
                          <button className='border-[3px] rounded-md ml-[32%] p-1 pl-2 pr-2 text-[16px] m-3 hover:border-[#2e27a8] hover:text-[#2e27a8]'>See More</button>
                        </div>
              }
            )
          }
        </div>

          <div onClick={nextRest} className='flex cursor-pointer justify-center items-center w-[30px] h-[30px] 
          bg-[#adacac] hover:bg-[#e2e2e7] rounded-full mx-2'><FaArrowRight /></div>
        </div>

            {/* PG Courses */}
            <h1 className='text-[32px] text-center font-bold'>PG Courses</h1>
        <div className='flex justify-center items-center'>
          <div onClick={prevRest} className='flex cursor-pointer justify-center items-center w-[30px] h-[30px] 
          bg-[#adacac] hover:bg-[#e2e2e7] rounded-full mx-2'><FaArrowLeft /></div>

        <div className='flex overflow-hidden gap-5 mt-[32px] mb-[64px] w-[80vw]'>
          {
            pgCourses.map(
              (cat, index) => {
                return <div key={index} style={{ transform: `translateX(${rest * 100}%)`}}  className='bg-white rounded-md w-[320px] h-[420] object-cover shrink-0 cursor-pointer duration-500 hover:bg-[#adacac]'>
                          <img src={cat.banner} className='w-[320px] h-[220px] p-[10px] hover:p-0' alt=''/>
                          <h1 className='text-[22px] text-center font-bold'>{cat.name}</h1>
                          <p className='p-[10px] text-[14px] ml-[10%] mr-[10%] h-[120px]'>{cat.para}</p>
                          <button className='border-[3px] rounded-md ml-[32%] p-1 pl-2 pr-2 text-[16px] m-3 hover:border-[#2e27a8] hover:text-[#2e27a8]'>See More</button>
                        </div>
              }
            )
          }
        </div>

          <div onClick={nextRest} className='flex cursor-pointer justify-center items-center w-[30px] h-[30px] 
          bg-[#adacac] hover:bg-[#e2e2e7] rounded-full mx-2'><FaArrowRight /></div>
        </div>

        {/* PHD Courses */}
        <h1 className='text-[32px] text-center font-bold'>PHD Courses</h1>
        <div className='flex justify-center items-center'>
          <div onClick={prevRest} className='flex cursor-pointer justify-center items-center w-[30px] h-[30px] 
          bg-[#adacac] hover:bg-[#e2e2e7] rounded-full mx-2'><FaArrowLeft /></div>

        <div className='flex overflow-hidden gap-5 mt-[32px] mb-[64px] w-[80vw]'>
          {
            phdCourses.map(
              (cat, index) => {
                return <div key={index} style={{ transform: `translateX(${rest * 100}%)`}}  className='bg-white rounded-md w-[320px] h-[420] object-cover shrink-0 cursor-pointer duration-500 hover:bg-[#adacac]'>
                          <img src={cat.banner} className='w-[320px] h-[220px] p-[10px] hover:p-0' alt=''/>
                          <h1 className='text-[22px] text-center font-bold'>{cat.name}</h1>
                          <p className='p-[10px] text-[14px] ml-[10%] mr-[10%] h-[120px]'>{cat.para}</p>
                          <button className='border-[3px] rounded-md ml-[32%] p-1 pl-2 pr-2 text-[16px] m-3 hover:border-[#2e27a8] hover:text-[#2e27a8]'>See More</button>
                        </div>
              }
            )
          }
        </div>

          <div onClick={nextRest} className='flex cursor-pointer justify-center items-center w-[30px] h-[30px] 
          bg-[#adacac] hover:bg-[#e2e2e7] rounded-full mx-2'><FaArrowRight /></div>
        </div>

      </div>
    </>
  );
};

export default Courses;
