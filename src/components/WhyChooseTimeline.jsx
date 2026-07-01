import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import truck from "../assets/truck.png";
import search from "../assets/search.png";
import file from "../assets/file.png";
import setting from "../assets/setting.png";

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  {
    number: "01",
    cardSide: "left",
    icon: search,
    cardTitle: "SOURCE WITH INTEGRITY",
    cardText:
      "We source from the richest mineral deposits across India, ensuring purity, consistency, and long-term reliability from the beginning.",
    stepTitle: "CHOOSE A SERVICE",
    stepText:
      "Tell us what you need. We'll understand your requirement in detail.",
  },
  {
    number: "02",
    cardSide: "right",
    icon: file,
    cardTitle: "TRANSPARENT & COMPETITIVE",
    cardText:
      "We believe in fair pricing and full transparency. Our quotes are clear, competitive, and tailored to your exact needs.",
    stepTitle: "GET A FREE QUOTE",
    stepText:
      "Receive a fast, no-obligation quote tailored to your requirements.",
  },
  {
    number: "03",
    cardSide: "left",
    icon: setting,
    cardTitle: "ADVANCED PROCESSING",
    cardText:
      "Our state-of-the-art processing ensures every mineral meets the highest industrial standards with precision and care.",
    stepTitle: "BUILDING AT WORK",
    stepText:
      "We process, grade, and prepare your minerals with precision and strict quality checks.",
  },
  {
    number: "04",
    cardSide: "right",
    icon: truck,
    cardTitle: "RELIABLE DELIVERY",
    cardText:
      "From rare compositions to bulk orders, we deliver on time, every time wherever you are.",
    stepTitle: "ON-TIME DELIVERY",
    stepText:
      "We ensure safe, timely, and hassle-free delivery to your location, every time.",
  },
];

function WhyChooseTimeline() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const lineRef = useRef(null);

  const itemRefs = useRef([]);
  const circleRefs = useRef([]);

  const mobileItemRefs = useRef([]);
  const mobileCircleRefs = useRef([]);

  const connectorRefs = useRef([]);
  const checkRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(headingRef.current, {
        opacity: 0,
        y: 40,
      });

      gsap.set(lineRef.current, {
        scaleY: 0,
        transformOrigin: "top center",
      });

      gsap.set(itemRefs.current, {
        opacity: 0,
        y: 50,
        scale: 0.96,
      });

      gsap.set(circleRefs.current, {
        opacity: 0,
        scale: 0,
      });

      gsap.set(mobileItemRefs.current, {
        opacity: 0,
        y: 70,
        scale: 0.92,
        rotateX: 12,
        filter: "blur(8px)",
        transformOrigin: "top center",
      });

      gsap.set(mobileCircleRefs.current, {
        opacity: 0,
        scale: 0,
        rotate: -20,
      });

      gsap.set(connectorRefs.current, {
        opacity: 0,
        scaleX: 0,
        transformOrigin: "center center",
      });

      gsap.set(checkRef.current, {
        opacity: 0,
        scale: 0,
      });

      gsap.to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(lineRef.current, {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 75%",
          scrub: true,
        },
      });

      itemRefs.current.forEach((item) => {
        if (!item) return;

        gsap.to(item, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        });
      });

      mobileItemRefs.current.forEach((item, index) => {
        if (!item) return;

        gsap.to(item, {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          filter: "blur(0px)",
          duration: 0.9,
          ease: "power4.out",
          delay: index % 2 === 0 ? 0 : 0.12,
          scrollTrigger: {
            trigger: item,
            start: "top 86%",
            toggleActions: "play none none reverse",
          },
        });
      });

      mobileCircleRefs.current.forEach((circle) => {
        if (!circle) return;

        gsap.to(circle, {
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 0.7,
          ease: "back.out(1.8)",
          scrollTrigger: {
            trigger: circle,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        });
      });

      circleRefs.current.forEach((circle, index) => {
        if (!circle) return;

        gsap.to(circle, {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.8)",
          scrollTrigger: {
            trigger: circle,
            start: "top 84%",
            toggleActions: "play none none reverse",
            onEnter: () => {
              const leftConnector = connectorRefs.current[index * 2];
              const rightConnector = connectorRefs.current[index * 2 + 1];

              gsap.to([leftConnector, rightConnector], {
                opacity: 1,
                scaleX: 1,
                duration: 0.5,
                ease: "power3.out",
              });
            },
            onLeaveBack: () => {
              const leftConnector = connectorRefs.current[index * 2];
              const rightConnector = connectorRefs.current[index * 2 + 1];

              gsap.to([leftConnector, rightConnector], {
                opacity: 0,
                scaleX: 0,
                duration: 0.3,
                ease: "power3.in",
              });
            },
          },
        });
      });

      gsap.to(checkRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.7,
        ease: "back.out(1.8)",
        scrollTrigger: {
          trigger: checkRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative left-1/2  w-[95vw] max-w-[95vw] -translate-x-1/2 bg-white py-[6vh]"
    >
      {/* Heading */}
     

      {/* Timeline */}
      <div className="relative mx-auto  w-[100%]">
        {/* Animated timeline line */}
        <div
          ref={lineRef}
          className="absolute left-[8vw] top-0 bottom-[5.5vw] w-[0.5vw] bg-[var(--colorblue)] md:left-1/2 md:bottom-[2.2vw] md:w-[0.15vw] md:-translate-x-1/2"
        ></div>

        {timelineData.map((item, index) => {
          const isLeftCard = item.cardSide === "left";

          return (
            <div
              key={item.number}
              className="relative grid min-h-[45vh] w-full grid-cols-[16vw_1fr] items-center md:min-h-[28vh] md:grid-cols-[42%_16%_42%]"
            >
              {/* Mobile center circle */}
              <div className="relative flex h-full items-center justify-center md:hidden">
                <div
                  ref={(el) => (mobileCircleRefs.current[index] = el)}
                  className="relative z-10 flex aspect-square h-[11vw] items-center justify-center rounded-full bg-[var(--colorblue)] font-[nordm] text-[4vw] text-white"
                >
                  {item.number}
                </div>
              </div>

              {/* Mobile content */}
              <div className="flex flex-col gap-[3vh] md:hidden">
                <div
                  ref={(el) => (mobileItemRefs.current[index * 2] = el)}
                  className="flex min-h-[12vh] w-full items-center bg-[var(--colorblue)] px-[3vw] py-[2vh] text-white"
                >
                  <div className="flex aspect-square h-[9vh] items-center justify-center rounded-full bg-white">
                    <img
                      src={item.icon}
                      alt={item.cardTitle}
                      className="h-[55%] w-[55%] object-contain"
                    />
                  </div>

                  <div className="ml-[4vw]">
                    <h3 className="font-[nordl] text-[4vw] uppercase leading-none">
                      {item.cardTitle}
                    </h3>
                    <p className="mt-[1vh] w-[95%] font-[haaslt] text-[3vw] leading-[1.25] text-white/85">
                      {item.cardText}
                    </p>
                  </div>
                </div>

                <div
                  ref={(el) => (mobileItemRefs.current[index * 2 + 1] = el)}
                  className="w-[95%] text-left"
                >
                  <h4 className="font-[nordm] text-[5vw] uppercase leading-none text-[var(--colorblue)]">
                    STEP {item.number}
                  </h4>
                  <h3 className="mt-[1vh] font-[nordm] text-[4vw] uppercase leading-none text-black">
                    {item.stepTitle}
                  </h3>
                  <p className="mt-[1vh] w-[95%] font-[haaslt] text-[3.5vw] leading-[1.25] text-black">
                    {item.stepText}
                  </p>
                </div>
              </div>

              {/* Desktop left side */}
              <div className="hidden h-full items-center justify-end md:flex">
                {isLeftCard ? (
                  <div
                    ref={(el) => (itemRefs.current[index * 2] = el)}
                    className="flex h-[10vh] w-[95%] items-center bg-[var(--colorblue)] px-[1vw] text-white"
                  >
                    <div className="flex aspect-square h-[70%] items-center justify-center rounded-full bg-white">
                      <img
                        src={item.icon}
                        alt={item.cardTitle}
                        className="h-[55%] w-[55%] object-contain"
                      />
                    </div>

                    <div className="ml-[1.5vw]">
                      <h3 className="font-[nordl] text-[1.4vw] uppercase leading-none">
                        {item.cardTitle}
                      </h3>
                      <p className="mt-[0.8vh] w-[85%] font-[haaslt] text-[0.85vw] leading-[1.25] text-white/85">
                        {item.cardText}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div
                    ref={(el) => (itemRefs.current[index * 2] = el)}
                    className="w-[80%] text-right"
                  >
                    <h4 className="font-[nordm] text-[1.3vw] uppercase leading-none text-[var(--colorblue)]">
                      STEP {item.number}
                    </h4>
                    <h3 className="mt-[1vh] font-[nordm] text-[1.1vw] uppercase leading-none text-black">
                      {item.stepTitle}
                    </h3>
                    <p className="ml-auto mt-[0.8vh] w-[80%] font-[haaslt] text-[1vw] leading-[1.25] text-black">
                      {item.stepText}
                    </p>
                  </div>
                )}
              </div>

              {/* Desktop center circle */}
              <div className="relative hidden h-full items-center justify-center md:flex">
                <div
                  ref={(el) => (connectorRefs.current[index * 2] = el)}
                  className="absolute left-0 h-[0.1vw] w-[38%] border-t border-dotted border-[var(--colorblue)]"
                ></div>
                <div
                  ref={(el) => (connectorRefs.current[index * 2 + 1] = el)}
                  className="absolute right-0 h-[0.1vw] w-[38%] border-t border-dotted border-[var(--colorblue)]"
                ></div>

                <div
                  ref={(el) => (circleRefs.current[index] = el)}
                  className="relative z-10 flex aspect-square h-[4.4vw] items-center justify-center rounded-full bg-[var(--colorblue)] font-[nordm] text-[1.5vw] text-white"
                >
                  {item.number}
                </div>
              </div>

              {/* Desktop right side */}
              <div className="hidden h-full items-center justify-start md:flex">
                {!isLeftCard ? (
                  <div
                    ref={(el) => (itemRefs.current[index * 2 + 1] = el)}
                    className="flex h-[10vh] w-[95%] items-center bg-[var(--colorblue)] px-[1vw] text-white"
                  >
                    <div className="flex aspect-square h-[70%] items-center justify-center rounded-full bg-white">
                      <img
                        src={item.icon}
                        alt={item.cardTitle}
                        className="h-[55%] w-[55%] object-contain"
                      />
                    </div>

                    <div className="ml-[1.5vw]">
                      <h3 className="font-[nordl] text-[1.4vw] uppercase leading-none">
                        {item.cardTitle}
                      </h3>
                      <p className="mt-[0.8vh] w-[85%] font-[haaslt] text-[0.85vw] leading-[1.25] text-white/85">
                        {item.cardText}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div
                    ref={(el) => (itemRefs.current[index * 2 + 1] = el)}
                    className="w-[80%] text-left"
                  >
                    <h4 className="font-[nordm] text-[1.3vw] uppercase leading-none text-[var(--colorblue)]">
                      STEP {item.number}
                    </h4>
                    <h3 className="mt-[1vh] font-[nordm] text-[1.1vw] uppercase leading-none text-black">
                      {item.stepTitle}
                    </h3>
                    <p className="mt-[0.8vh] w-[80%] font-[haaslt] text-[1vw] leading-[1.25] text-black">
                      {item.stepText}
                    </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {/* Final check circle */}
        <div className="relative grid h-[18vh] w-full grid-cols-[16vw_1fr] md:h-[14vh] md:grid-cols-[42%_16%_42%]">
          <div className="relative flex items-end justify-center md:col-start-2">
            <div
              ref={checkRef}
              className="relative z-10 flex aspect-square h-[11vw] items-center justify-center rounded-full bg-[var(--colorblue)] text-[5vw] text-white md:h-[4.4vw] md:text-[2vw]"
            >
              ✓
            </div>
          </div>

          <div></div>

          <div className="hidden md:block"></div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseTimeline;