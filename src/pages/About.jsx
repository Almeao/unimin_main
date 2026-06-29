import React from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Nav_bar from "../components/Nav_bar";
import Footer from "../components/Footer";
import AllBtn from "../components/Allbtn";

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
        <div className='h-auto w-[98vw] flex justify-center items-center text-center uppercase  border-t-2 border-[var(--colorblue)] border-b-2 border-[var(--colorblue)] text-[7vw] leading-[1] font-[nordm]'>
          <h1>A top global <span className='text-[var(--colorblue)]'> supplier <br /> of premium minerals .</span></h1>
        </div>

        {/* part2 */}


        <div className=" w-[98vw] h-[100v] grid grid-cols-1 grid-rows-10 gap-4 bg-amber-300
        sm:grid-cols-8 sm:grid-rows-7
        ">
          <div className="row-span-4
          sm:col-span-2 sm:row-span-5
          ">1</div>

          <div className="row-span-2 row-start-5
          sm:col-span-6 sm:row-span-3 sm:col-start-3
          ">2</div>

          <div className="row-span-3 row-start-7
          sm:col-span-5 sm:row-span-2 sm:col-start-1 sm:row-start-6
          ">3</div>

          <div className="row-start-10
          sm:col-span-3 sm:row-span-3 sm:col-start-6 sm:row-start-5
          ">4</div>

        </div>



      


      </div>
    </div>

  )
}

export default About