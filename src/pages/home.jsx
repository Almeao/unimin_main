import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Nav_bar from "../components/Nav_bar";
import home_page_logo from "../assets/home_page_logo.png";
import home_page_main from "../assets/home_page_main.png";
import home_page_cricle from "../assets/homepage_circle.png"
import Subtract from "../assets/Subtract.png"
import Subtract2 from "../assets/Subtract2.png"
import AllBtn from "../components/Allbtn";

import ImageSwiper from "../components/ImageSwiper";
import home_swiper1 from "../assets/home_swiper1.png"
import Blogs_card from "../components/Blogs_card";
import Blog1 from "../assets/blog1.png"
import Blog2 from "../assets/blog2.png"

function Home() {





  const slides = [
    {
      image: home_swiper1,
      title: "Flour Image One",
    },
    {
      image: home_swiper1,
      title: "Flour Image Two",
    },
    {
      image: home_swiper1,
      title: "Flour Image Three",
    },
    {
      image: home_swiper1,
      title: "Flour Image One",
    },
    {
      image: home_swiper1,
      title: "Flour Image Two",
    },
    {
      image: home_swiper1,
      title: "Flour Image Three",
    },
  ]








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
        <div className="w-[98vw] h-auto border-t-2 border-[var(--colorblue)] mt-[2%]
        sm:border-t-3
        md:mt-[1%]
        2xl:border-t-4  
        ">
          <img src={home_page_logo} alt="" className="object-contain h-auto" />
        </div>
        {/* part2 */}
        <div className="w-[98vw] h-auto flex items-center   border-t-2  border-b-2 border-[var(--colorblue)]
        sm:border-t-3  border-b-3
        ">
          <p className="text-lg  uppercase font-[haasr] font-medium tracking-wider
           sm:text-3xl
           md:text-4xl
           lg:text-4xl
           xl:text-6xl
     



          ">minerals and more</p>
        </div>
        {/* part3*/}
        <div className="w-[100vw] h-auto relative mt-[2%] flex justify-center items-start bg-amber-400">
          {/* part3 main image div*/}
          <div
            className="h-[100vh] w-[100vw] bg-cover bg-center bg-no-repeat "

            style={{ backgroundImage: `url(${home_page_main})` }}
          >
          </div>

          {/* part3 main inside image data div*/}



          <div
            className="h-[35vh] w-[98vw] grid grid-cols-2 grid-rows-2 gap-4 absolute top-[73%] 
                md:h-[40vh] md:top-[70%]
                lg:h-[50vh] lg:top-[63%]
                xl:h-[60vh] xl:top-[55%]"
          >

            {/* Grid Cell: Text spanning 3 out of 4 boxes */}
            <div className="h-[50%] col-span-2 row-span-2 col-start-1 row-start-1 flex items-center  ml-[3%] 
            md:ml-0 p-4 ">
              <p
                className="text-[6vw] text-white font-[nordm] 
                sm:text-3xl sm:w-[70%]
                md:text-4xl md:w-[60%]
                lg:text-4xl
                xl:text-5xl xl:w-[70%]
                2xl:text-5xl 2xl:w-[40%]

                "

              >
                EMPOWERING INDUSTRIES WORLDWIDE WITH MINERAL SOLUTION
              </p>
            </div>


            {/* Grid Cell 2: Rotating Circle */}
            <div className="flex items-center justify-end col-span-1 row-span-1 col-start-2 row-start-2 ">
              <div
                className="h-[15vh] w-[15vh] relative bg-contain bg-center bg-no-repeat flex items-end 
                  md:h-[20vh] md:w-[20vh]
                  lg:h-[25vh] lg:w-[25vh]
                  xl:h-[30vh] xl:w-[30vh]
                "
                style={{
                  backgroundImage: `url(${home_page_cricle})`,
                  animation: "spin 10s linear infinite"
                }}
              >
              </div>
            </div>


          </div>


        </div>

        {/* part4 */}

        <div className="h-[50vh] w-[98vw]  mt-[20%] flex flex-col items-center justify-center
        sm:mt-[15%]
        md:mt-[10%]
        lg:mt-[15%]
        xl:mb-[2%]
        2xl:mt-[10%] 
        ">
          <div className="w-[90%] flex flex flex-col items-center justify-center 
          sm:w-[60%]
          md:w-[60%]
          lg:w-[65%]
          xl:w-[75%]
          2xl:w-[70%]
          ">
            <h2 className=" text-lg font-[nordm] text-center
              sm:
              md:text-2xl
              lg:text-3xl
              xl:text-5xl
              2xl:text-6xl
                
                
            "
            > <span className="text-[var(--colorblue)]">FUELING SUCCESS</span> WITH THE FINEST PERFORMANCE MINERALS.</h2>

            <p className="text-xs mt-[5%] font-[haasl] text-center pl-10 pr-10
              sm:
              md:text-lg
              lg:text-lg 
              xl:text-3xl
              2xl:text-4xl 2xl:pl-15 2xl:pr-15
            ">At UNI-MIN, innovation drives precision in mineral extraction. We specialize in delivering superior Ball Clay, Potassium Feldspar, and Kaolin Clay, ensuring unmatched quality with every batch. Experience the UNI-MIN difference.</p>

            <div className="h-0.5 w-[60%]  mt-[5%] bg-gradient-to-r from-white via-[var(--colorblue)] to-white
                xl:h-1
                "></div>
            <AllBtn
              text="LEARN MORE ABOUT US"
              to="/About.jsx"
              className="mt-5  py-2  text-[2vw]
              sm:text-xs
              md:text-sm
              2xl:text-xl
              "
              bgClass="bg-[var(--colorblue)]"
              textClass="text-white"
              particleClass="bg-white"
              hoverTextColor="var(--colorblue)"
            />



          </div>
        </div>


        {/* part5 */}
        <div className="h-auto w-[98vw] mt-[10%]  relative flex flex-col items-center
        
        ">
          {/* heading of the part */}
          <h2 className=" text-lg font-[nordm] text-center 
              sm:
              md:text-2xl
              lg:text-3xl
              xl:text-5xl
              2xl:text-6xl
                
                
            "
          > <span className="text-[var(--colorblue)]">IMPACTFUL</span> STATISTICS</h2>

          {/* text and btn */}
          <div className=" w-[100%] flex  flex-col items-start mt-5
          sm:w-[]
          ">
            <p className="text-xs mt-[5%] font-[haaslt] text-start
              sm:text-xs sm:w-[70%]
              md:text-lg
              lg:text-lg 
              xl:text-3xl
              2xl:text-4xl 
            "
            >Impactful statistics reveal surprising truths, drive business strategy (like 81% of consumers needing trust to buy), highlight social trends (like FOMO affecting 69% of US people), showcase scientific wonders (clouds weighing a million tons), and guide professional fields (LinkedIn's B2B marketingdominance).</p>
            <AllBtn
              text="LEARN MORE ABOUT US"
              to="/About.jsx"
              className="mt-5 ml-0 py-2  text-[2vw]
              sm:text-xs
              md:text-sm
              2xl:text-xl
              "
              bgClass="bg-[var(--colorblue)]"
              textClass="text-white"
              particleClass="bg-white"
              hoverTextColor="var(--colorblue)"
            />

          </div>


          {/* img div */}
          <div className="w-[98vw] h-auto mt-[-10%] flex flex-col items-center justify-between gap-2 
          sm:flex-row sm:items-end
          2xl:gap-0.5
          ">


            {/* img 1 */}
            <div className="order-1
           sm:order-2
           
           ">
              <img src={Subtract} alt="" className=" h-[100%] w-[100%] object-contain
            
            "/>
            </div>
            {/* img 2 */}
            <div className="order-2
           sm:order-1
           
           ">
              <img src={Subtract2} alt="" className="h-[100%] w-[100%] object-contain
            
            " />
            </div>

          </div>
        </div>


        {/* part6 */}


        <div className="h-[70vh]  w-[98vw] mt-[10%] flex flex-col gap-[5%]
                md:h-[80vh]
                lg:h-[95vh]
                
                ">
          <h2 className=" text-lg font-[nordm] text-center 
              sm:
              md:text-2xl
              lg:text-3xl
              xl:text-5xl
              2xl:text-6xl
                
                
            "
          > <span className="text-[var(--colorblue)]">OUR</span> PRODUCTS</h2>


          <ImageSwiper slides={slides} />
        </div>



        {/* part7 */}

        <div className="h-auto w-[98vw]  mt-[5%] flex flex-col items-center">
          <h2 className=" text-lg font-[nordm] text-center 
              sm:
              md:text-2xl
              lg:text-3xl
              xl:text-5xl
              2xl:text-6xl
                
                
            "
          > <span className="text-[var(--colorblue)]">LATEST</span> BLOGS</h2>

          <div className="w-[98vw] h-auto flex flex-col items-center gap-5 mt-[10%]
          sm:flex-row
          "
          >

            <Blogs_card
              image={Blog1}
              date="October 15,2023"
              card_text="Why India Stopped Buying Kaolin from Ukraine, France, and Bulgaria… The Shift in India’s Kaolin Market"
              go_to_blog=""
            />

            <Blogs_card
              image={Blog2}
              date="September 28,2023"
              card_text="Morbi Emerges as Asia’s Leading Hub for High-End Slab Tile Manufacturing"
              go_to_blog=""
            />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;