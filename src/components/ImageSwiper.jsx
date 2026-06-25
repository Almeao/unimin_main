import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import AllBtn from "./Allbtn";
import gsap from "gsap";

import "swiper/css";

function ImageSwiper({ slides = [] }) {
  const swiperRef = useRef(null);
  const progressRef = useRef(null);
  const prevIndexRef = useRef(0);

  const [progress, setProgress] = useState(0);

  const updateProgress = (swiper) => {
    const currentIndex = swiper.realIndex;
    const totalSlides = slides.length;

    const percentage = ((currentIndex + 1) / totalSlides) * 100;

    setProgress(percentage);

    if (prevIndexRef.current === totalSlides - 1 && currentIndex === 0) {
      gsap.set(progressRef.current, {
        width: "0%",
      });
    }

    gsap.to(progressRef.current, {
      width: `${percentage}%`,
      duration: 0.7,
      ease: "power3.out",
    });

    prevIndexRef.current = currentIndex;
  };

  const animateActiveImage = (swiper) => {
    const activeSlide = swiper.slides[swiper.activeIndex];
    const activeImage = activeSlide?.querySelector("[data-slide-image]");

    if (!activeImage) return;

    gsap.fromTo(
      activeImage,
      {
        scale: 1.08,
      },
      {
        scale: 1,
        duration: 1.1,
        ease: "power3.out",
      }
    );
  };

  if (!slides.length) return null;

  return (
    <section className="relative left-1/2 w-[98vw] max-w-[98vw] -translate-x-1/2 overflow-hidden bg-white px-6 py-4 md:px-10 lg:px-12">
      {/* Image Slider */}
      <Swiper
        slidesPerView={1.30}
        spaceBetween={24}
        loop={true}
        speed={1000}
        grabCursor={true}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;

          const firstProgress = (1 / slides.length) * 100;
          setProgress(firstProgress);

          gsap.set(progressRef.current, {
            width: `${firstProgress}%`,
          });

          animateActiveImage(swiper);
        }}
        onSlideChange={(swiper) => {
          updateProgress(swiper);
        }}
        onSlideChangeTransitionStart={(swiper) => {
          animateActiveImage(swiper);
        }}
        breakpoints={{
          768: {
            slidesPerView: 1.35,
            spaceBetween: 28,
          },
          1024: {
            slidesPerView: 1.45,
            spaceBetween: 36,
          },
          1440: {
            slidesPerView: 1.5,
            spaceBetween: 42,
          },
        }}
        className="w-full overflow-visible"
      >
        {slides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="h-[42vh] w-full overflow-hidden rounded-2xl md:h-[55vh] lg:h-[62vh]">
                <img
                  data-slide-image
                  src={slide.image}
                  alt={slide.title || `Slide ${index + 1}`}
                  className="h-full w-full object-cover will-change-transform"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Bottom progress + button */}
      <div className="mt-16 flex w-full items-center gap-8">
        <div className="w-[60%]">
          <div className="relative h-[3px] w-full bg-black/60">
            <div
              ref={progressRef}
              className="absolute left-0 top-0 h-full bg-[var(--colorblue)]"
            ></div>
          </div>
        </div>

        <div className="flex w-[40%] justify-end">
          <AllBtn
            text="View More →"
            onClick={() => swiperRef.current?.slideNext()}
            className="mt-5 py-2 text-[2vw]
              sm:text-xs
              md:text-sm
              2xl:text-xl
              "
            bgClass="bg-[var(--colorblue)]"
            textClass="text-white"
            particleClass="bg-white"
            hoverTextColor="white"
          />
        </div>
      </div>
    </section>
  );
}

export default ImageSwiper;