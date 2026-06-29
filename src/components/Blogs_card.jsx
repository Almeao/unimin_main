import React from 'react'
import AllBtn from './Allbtn'

const Blogs_card = ({
  image,
  date,
  card_text,
  go_to_blog,
}) => {
  return (
    <div className='bg-[var(--colorblue)] h-[50vh] w-[80vw] p-4 pb-3 flex flex-col justify-between
    md:h-[40vh]
    lg:h-[55vh] lg:w-[30vw]
    xl:h-[55vh] xl:w-[30vw]
    2xl:h-[65vh] 2xl:w-[30vw]
    '>
      <div className='w-[100%] h-[45%] '>
        <img src={image} alt="" className="w-full h-full object-cover" />
   
      </div>
      <div className="w-[100%] h-[55%]  text-white flex flex-col justify-between items-start
      
      ">
        <div className=" h-[70%]  flex flex-col justify-around">


          <h2 className="font-[nordm] text-2xl
            md:text-3xl
            2xl:text-4xl
          "
          >{date}</h2>

          <p className=" font-[haaslt]  text-justify text-lg
            md:text-xl
            2xl:text-2xl
          "
          >{card_text}</p>
        </div>
        <AllBtn
          text="READ ARTILE →"
          to={go_to_blog}
          className="mt-5  py-2  text-[3vw]
        sm:text-xs
        md:text-sm
        2xl:text-xl
        "
          bgClass="bg-white"
          textClass="text-[var(--colorblue)]"
          particleClass="bg-var(--colorblue)]"
          hoverTextColor="text-[var(--colorblue)]"
          fontClass="font-[nordl]"
        />
      </div>
    </div>
  )
}

export default Blogs_card