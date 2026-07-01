import AllBtn from "./Allbtn";
import Products from "../pages/Products";

function ProductSlideInfo({
  productName,
  productType,
  description,
  logo,
  goToProduct,
}) {
  return (
    <div className="absolute bottom-0 left-0 z-20 flex h-[45%] w-full translate-y-full flex-col justify-between bg-white px-[2vw] py-[3vh] transition-transform duration-700 ease-out group-hover:translate-y-0 group-active:translate-y-0">
      {/* Top detail area */}
      <div className="flex h-[70%] w-full justify-between">
        {/* Left text */}
        <div className="flex h-full w-[55%] flex-col justify-start">
          <h2 className="font-[nordm] text-[7vw] uppercase leading-none text-[var(--colorblue)] sm:text-[4vw] md:text-[3vw] lg:text-[2.5vw] 2xl:text-[2vw]">
            {productName}
          </h2>

          <h3 className="mt-[1vh] font-[nordm] text-[4vw] uppercase leading-none text-black sm:text-[2.5vw] md:text-[1.8vw] lg:text-[1.5vw] 2xl:text-[1.2vw]">
            {productType}
          </h3>

          <p className="mt-[2vh] w-[85%] font-[haaslt] text-[2.5vw] uppercase leading-[1.15] text-black sm:text-[1.5vw] md:text-[1vw] lg:text-[0.85vw] 2xl:text-[0.75vw]">
            {description}
          </p>
        </div>

        {/* Right logo */}
        <div className="flex h-full w-[35%] items-start justify-end">
          {logo && (
            <img
              src={logo}
              alt="logo"
              className="h-auto w-[70%] object-contain"
            />
          )}
        </div>
      </div>

      {/* Button */}
      <div className="flex h-[30%] w-full items-end justify-end">
        <AllBtn
          text="VIEW PRODUCT →"
          to={goToProduct}
          className="py-2 text-[3vw] sm:text-xs md:text-sm 2xl:text-xl"
          bgClass="bg-[var(--colorblue)]"
          textClass="text-white"
          particleClass="bg-white"
          hoverTextColor="white"
        />
      </div>
    </div>
  );
}

export default ProductSlideInfo;