import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import gsap from "gsap";

import logo from "../assets/logo_main.png";
import Mobail_nav_btn from "../context/Mobail_nav_btn";

function Nav_bar() {
  const [isOpen, setIsOpen] = useState(false);

  const mobileMenuRef = useRef(null);
  const mobileLinkRefs = useRef([]);
  const activeTextRef = useRef(null);

  const navigate = useNavigate();

  const navLinkes = [
    { name: "Applications", path: "/Applications" },
    { name: "Products", path: "/Products" },
    { name: "Blogs", path: "/Blogs" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/Contact" },
  ];

  useEffect(() => {
    gsap.set(mobileMenuRef.current, {
      scale: 1.25,
      opacity: 0,
      pointerEvents: "none",
      transformOrigin: "center center",
    });

    gsap.set(mobileLinkRefs.current, {
      y: 40,
      opacity: 0,
    });
  }, []);

  useEffect(() => {
    if (isOpen) {
      gsap.to(mobileMenuRef.current, {
        scale: 1,
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.7,
        ease: "power3.out",
      });

      gsap.to(mobileLinkRefs.current, {
        y: 0,
        opacity: 1,
        duration: 0.45,
        stagger: 0.08,
        delay: 0.2,
        ease: "power3.out",
      });

      document.body.style.overflow = "hidden";
    } else {
      gsap.to(mobileLinkRefs.current, {
        y: 40,
        opacity: 0,
        duration: 0.25,
        stagger: 0.04,
        ease: "power3.in",
      });

      gsap.to(mobileMenuRef.current, {
        scale: 1.25,
        opacity: 0,
        pointerEvents: "none",
        duration: 0.5,
        delay: 0.1,
        ease: "power3.inOut",
      });

      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  const animateTextIn = (textEl) => {
    if (!textEl || activeTextRef.current === textEl) return;

    if (activeTextRef.current) {
      animateTextOut(activeTextRef.current);
    }

    activeTextRef.current = textEl;

    gsap.to(textEl, {
      scale: 1.18,
      z: 90,
      x: 18,
      rotateX: -10,
      rotateY: 12,
      color: "#ffffff",
      textShadow: "0px 10px 28px rgba(0,0,0,0.4)",
      duration: 0.28,
      ease: "back.out(2)",
      transformPerspective: 1000,
      transformOrigin: "left center",
    });
  };

  const animateTextOut = (textEl) => {
    if (!textEl) return;

    gsap.to(textEl, {
      scale: 1,
      z: 0,
      x: 0,
      rotateX: 0,
      rotateY: 0,
      color: "var(--colorblue)",
      textShadow: "0px 0px 0px rgba(0,0,0,0)",
      duration: 0.3,
      ease: "power3.out",
    });
  };

  const handleFingerMove = (e) => {
    const touch = e.touches ? e.touches[0] : e;
    const element = document.elementFromPoint(touch.clientX, touch.clientY);

    const link = element?.closest("[data-mobile-nav-link]");
    const text = link?.querySelector("[data-mobile-nav-text]");

    if (text) {
      animateTextIn(text);
    }
  };

  const handleFingerEnd = () => {
    if (activeTextRef.current) {
      animateTextOut(activeTextRef.current);
      activeTextRef.current = null;
    }
  };

  // desktop nav bar links animation 
  const handleDesktopLinkEnter = (el) => {
    const chars = el.querySelectorAll("[data-desktop-char-track]");
    // Fix possible glitch: clear previous and prevent overlapping animation
    gsap.killTweensOf(chars);

    gsap.to(chars, {
      yPercent: 0,
      duration: 0.35,
      stagger: 0.015,
      ease: "power3.out",
      onUpdate: () => {
        // On hover, ensure text color is var(--colorblue)
        chars.forEach((char) => {
          char.querySelectorAll('span').forEach((span, i) => {
            // The second span is the colored one
            if (i === 1) {
              span.style.color = "var(--colorblue)";
            }
          });
        });
      },
      // Also, set color after animation in case
      onComplete: () => {
        chars.forEach((char) => {
          char.querySelectorAll('span').forEach((span, i) => {
            if (i === 1) {
              span.style.color = "var(--colorblue)";
            }
          });
        });
      },
    });
  };
  
  const handleDesktopLinkLeave = (el) => {
    const chars = el.querySelectorAll("[data-desktop-char-track]");
    gsap.killTweensOf(chars);

    gsap.to(chars, {
      yPercent: -50,
      duration: 0.35,
      stagger: 0.015,
      ease: "power3.out",
      onUpdate: () => {
        // On leave, revert colored span back to original (inherit) color
        chars.forEach((char) => {
          char.querySelectorAll('span').forEach((span, i) => {
            if (i === 1) {
              span.style.color = "";
            }
          });
        });
      },
      onComplete: () => {
        chars.forEach((char) => {
          char.querySelectorAll('span').forEach((span, i) => {
            if (i === 1) {
              span.style.color = "";
            }
          });
        });
      }
    });
  };

  return (
    <header className="relative z-50 flex h-[5vh] w-[95vw] justify-between">
      <Link to="/" className="z-50 flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="h-[7vh] w-[50%] object-contain lg:h-[6vh] xl:h-[7vh] 2xl:h-[8vh]"
        />
      </Link>

      {/* nav button with menu for mobile */}
      <div onClick={() => setIsOpen(!isOpen)} className="z-[100] lg:hidden">
        <Mobail_nav_btn />
      </div>

      {/* mobile links page */}
      <div
        ref={mobileMenuRef}
        className={`fixed right-0 top-0 z-[80] h-screen w-full bg-white/30 backdrop-blur-md px-8 text-[var(--colorblue)] lg:hidden ${
          isOpen ? "overflow-hidden touch-none" : ""
        }`}
        style={
          isOpen
            ? {
                pointerEvents: "auto",
                touchAction: "none",
                overscrollBehavior: "none",
              }
            : {}
        }
      >
        <Link to="/" className="z-50 flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-[7vh] w-[50%] object-contain lg:h-[6vh] xl:h-[7vh] 2xl:h-[8vh]"
          />
        </Link>

        <nav
          className="flex flex-col gap-6 pt-[5%] [perspective:1000px]"
          onTouchStart={handleFingerMove}
          onTouchMove={handleFingerMove}
          onTouchEnd={handleFingerEnd}
          onPointerMove={handleFingerMove}
          onPointerLeave={handleFingerEnd}
        >
          {navLinkes.map((link, index) => {
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={(e) => {
                  e.preventDefault();

                  const text = e.currentTarget.querySelector(
                    "[data-mobile-nav-text]"
                  );

                  animateTextIn(text);

                  setTimeout(() => {
                    handleFingerEnd();
                    closeMobileMenu();
                    navigate(link.path);
                  }, 220);
                }}
                ref={(el) => (mobileLinkRefs.current[index] = el)}
                data-mobile-nav-link
                className="border-b border-white pb-4 text-4xl font-bold uppercase touch-none"
              >
                <span
                  data-mobile-nav-text
                  className="inline-block will-change-transform"
                >
                  {link.name}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* nav links for big screen desktop/laptop */}
      <div className="absolute z-40 hidden h-[5vh] w-[95vw] grow items-center justify-center gap-8 lg:flex">
  {navLinkes.map((link) => {
    return (
      <Link
        key={link.name}
        to={link.path}
        onMouseLeave={(e) => handleDesktopLinkEnter(e.currentTarget)}
        onMouseEnter={(e) => handleDesktopLinkLeave(e.currentTarget)}
        className="h-fit w-auto text-sm uppercase text-black/80 font-medium transition 
         
        
        lg:text-SM
        xl:text-[0.8vw]
        2xl:text-[1vw]"
      >
        <p className="flex overflow-hidden">
          {link.name.split("").map((char, index) => {
            return (
              <span
                key={index}
                className="relative inline-block h-[1.2em] overflow-hidden leading-[1.2em]"
              >
                <span
                  data-desktop-char-track
                  className="block"
                >
                  <span className="block h-[1.2em] leading-[1.2em]">
                    {char === " " ? "\u00A0" : char}
                  </span>

                  <span className="block h-[1.2em] leading-[1.2em] text-[var(--colorblue)]">
                    {char === " " ? "\u00A0" : char}
                  </span>
                </span>
              </span>
            );
          })}
        </p>
      </Link>
    );
  })}
</div>
    </header>
  );
}

export default Nav_bar;