import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

function AllBtn({
  text = "Click Me",
  to,
  onClick,
  className = "",
  bgClass = "bg-[var(--colorblue)]",
  textClass = "text-white",
  particleClass = "bg-white",
  hoverTextColor = "#ffffff",
  fontClass = "font-[nordm]",
}) {
  const navigate = useNavigate();

  const btnRef = useRef(null);
  const textRef = useRef(null);
  const particleWrapRef = useRef(null);

  const createDustParticles = () => {
    const particleWrap = particleWrapRef.current;
    if (!particleWrap) return;

    for (let i = 0; i < 24; i++) {
      const particle = document.createElement("span");

      particle.className = `pointer-events-none absolute left-1/2 top-1/2 h-1 w-1 rounded-full ${particleClass}`;

      particleWrap.appendChild(particle);

      gsap.fromTo(
        particle,
        {
          x: gsap.utils.random(-20, 20),
          y: gsap.utils.random(-5, 10),
          scale: gsap.utils.random(0.4, 1.1),
          opacity: gsap.utils.random(0.5, 1),
          filter: "blur(0px)",
        },
        {
          x: gsap.utils.random(-120, 120),
          y: gsap.utils.random(-80, -160),
          scale: gsap.utils.random(0, 0.4),
          opacity: 0,
          filter: "blur(2px)",
          duration: gsap.utils.random(0.8, 1.6),
          delay: gsap.utils.random(0, 0.15),
          ease: "power2.out",
          onComplete: () => {
            particle.remove();
          },
        }
      );
    }
  };

  const handleMouseEnter = () => {
    createDustParticles();

    gsap.to(btnRef.current, {
      y: -4,
      scale: 1.04,
      duration: 0.35,
      ease: "power3.out",
    });

    gsap.to(textRef.current, {
      y: -1,
      letterSpacing: "0.08em",
      color: hoverTextColor,
      duration: 0.35,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(btnRef.current, {
      y: 0,
      scale: 1,
      duration: 0.35,
      ease: "power3.out",
    });

    gsap.to(textRef.current, {
      y: 0,
      letterSpacing: "0em",
      clearProps: "color",
      duration: 0.35,
      ease: "power3.out",
    });
  };

  const handleClick = () => {
    gsap.fromTo(
      btnRef.current,
      {
        scale: 0.92,
      },
      {
        scale: 1.04,
        duration: 0.35,
        ease: "elastic.out(1, 0.45)",
      }
    );

    createDustParticles();

    if (onClick) {
      onClick();
      return;
    }

    if (to) {
      setTimeout(() => {
        navigate(to);
      }, 180);
    }
  };

  return (
    <button
      ref={btnRef}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-visible rounded-lg px-3 font-semibold uppercase will-change-transform ${fontClass} ${bgClass} ${textClass} ${className}`}
    >
      {/* Dust particles */}
      <span
        ref={particleWrapRef}
        className="pointer-events-none absolute inset-0 z-0 overflow-visible"
      ></span>

      {/* Button text */}
      <span ref={textRef} className="relative z-10 inline-block">
        {text}
      </span>
    </button>
  );
}

export default AllBtn;