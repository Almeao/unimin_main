import React from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Nav_bar from "../components/Nav_bar";
import Footer from "../components/Footer";
import AllBtn from "../components/Allbtn";
import WhyChooseTimeline from "../components/WhyChooseTimeline";

import aboutimg1 from "../assets/about1.png"
import aboutimg2 from "../assets/about2.png"
import our_mission from "../assets/our_mission.png"

const About = () => {
  return (
    <div className="
    

    flex
    justify-center
    h-auto
   w-screen

    ">


      <div className="
      w-[100vw]
 
      h-auto
      mt-[1%]
      bg-[var(--bgcolor)]
      flex
      flex-col

      items-center
 
      ">
        <Nav_bar />

        {/* part1 */}
        <div className='h-auto w-[95vw] flex justify-center items-center text-center uppercase  border-t-2 border-[var(--colorblue)] border-b-2 border-[var(--colorblue)] text-[7vw] leading-[1] font-[nordm] mt-[5%]'>
          <h1>A top global <span className='text-[var(--colorblue)]'> supplier <br /> of premium minerals .</span></h1>
        </div>

        {/* part2 */}


        <div className=" w-[95vw] h-auto mt-[10%] flex flex-col gap-10  bg-amber-300 text-justify text-base/6 font-[haasl] 
        sm:h-[60vh] sm:grid sm:grid-cols-9 sm:grid-rows-9 sm:text-sm
        md:h-[50vh] md:text-lg
        lg:h-[70vh]
       
        2xl:h-[90vh]
   
        ">
          <div className="row-span-1 w-[100%] bg-amber-500
          sm:col-span-4 sm:row-span-6
          lg:col-span-4 lg:row-span-7
           2xl:col-span-3 2xl:row-span-7
          ">
            <img src={aboutimg1} alt="" className="h-full w-full object-cover" />
          </div>

          <div className="row-span-1 bg-amber-500
          sm:col-span-5 sm:row-span-2 sm:col-start-5 sm:text-md/5

          xl:text-2xl/7
          2xl:col-span-6 2xl:row-span-2 2xl:col-start-4 
          ">
            <p>Established in 2021, Uni-Min India is a leading provider of minerals and chemical solutions. With a diverse client base spanning Asia and beyond, we are committed to delivering top-quality products and exceptional service. Our experienced team, led by dedicated professionals, ensures seamless operations and customer satisfaction at every turn.</p>
          </div>

          <div className="row-span-1 bg-amber-500
          sm:col-span-4 sm:row-span-5 sm:col-start-6 sm:row-start-6

          ">
            <img src={aboutimg2} alt="" className="h-full w-full object-cover" />

          </div>

          <div className="row-span-1 bg-amber-500 flex items-end
          sm:col-span-5 sm:row-span-4 sm:col-start-1 sm:row-start-7 sm:text-md/5
          lg:col-span-5 lg:row-span-3 lg:col-start-1 lg:row-start-8 
          xl:text-2xl/7
          ">
            <p>We take pride in our agile approach, swiftly adapting to industry demands and staying at the forefront of technological advancements. This enables us to offer innovative solutions tailored to your specific needs, setting us apart as your trusted partner in mineral sourcing</p>

          </div>



        </div>


        {/* part3 */}
        <div className="h-auto w-[95vw] mt-[10%]  relative  items-center gap-10 flex flex-col "


        >

          {/* heading of the part */}
          <h2
            className=" text-lg font-[nordm] text-center 
              sm:text-xl
              md:text-2xl
              lg:text-3xl
              xl:text-4xl
              2xl:text-5xl
                
                
            "
          >
            <span className="text-[var(--colorblue)]">IMPACTFUL</span> STATISTICS
          </h2>
          <div className='w-[95vw] h-auto flex flex-col justify-between bg-amber-200 gap-10
          sm:flex-row sm:gap-5
          '>

            <div className='w-[100%] sm:text-md/5 font-[haasl] flex flex-col justify-between order-2

          sm:text-base/5
          md:text-lg/5
          xl:text-2xl/5
          2xl:text-3xl/7
          '>
              <p>Our mission is to deliver superior quality performance minerals that meet the diverse needs of the ceramic industry, ensuring unmatched quality, reliability, and sustainability in every shipment. ​</p>
              <p>We are dedicated to building long-term relationships with our customers by consistently exceeding their expectations and providing exceptional service.</p>
            </div>
            <div className='w-[100%]
            sm:order-2'>
              <img src={our_mission} alt="" className='object-cover w-[100%] h-[100%]' />
            </div>
          </div>

        </div>

        {/* part4 */}
        <div className="h-auto w-[95vw] mt-[10%]  relative  items-center gap-10 flex flex-col "


        >

          {/* heading of the part */}
          <h2
            className=" text-lg font-[nordm] text-center 
              sm:text-xl
              md:text-2xl
              lg:text-3xl
              xl:text-4xl
              2xl:text-5xl
                
                
            "
          >
            <span className="text-[var(--colorblue)]">OUR</span> VISION
          </h2>
          <div className='w-[100%] h-auto text-center font-[haasl]
          sm:flex-row sm:gap-5 sm:w-[70%] sm:text-base/5
          md:text-lg/5 md:w-[60%]
          xl:text-2xl/5 xl:w-[50%]
          2xl:text-3xl/7
          '>

            <p>Empowering Industries with Uncompromising Quality, Pioneering Innovation, and Trusted Partnerships for a Sustainable Future</p>
          </div>

        </div>



        {/* part5 */}
        <div className="h-auto w-[95vw] mt-[10%]  relative  items-center flex flex-col gap-10"


        >

          {/* heading of the part */}
          <h2
            className=" text-lg font-[nordm] text-center 
      sm:text-xl
      md:text-2xl
      lg:text-3xl
      xl:text-4xl
      2xl:text-5xl
        
        
    "
          >
            <span className="text-[var(--colorblue)]">WHY</span> CHOOSE US
          </h2>
          <div className='w-[100%] h-auto text-center font-[haasl]
  sm:flex-row sm:gap-5 sm:w-[70%] sm:text-base/5
  md:text-lg/5 md:w-[60%]
  xl:text-2xl/5 xl:w-[50%]
  2xl:text-3xl/7
  '>

            <p>Empowering Industries with Uncompromising Quality, Pioneering Innovation, and Trusted Partnerships for a Sustainable Future</p>
          </div>

          <WhyChooseTimeline />

        </div>

        <Footer />

      </div>
    </div>

  )
}

export default About