import { useRef, useState } from "react";
import gsap from "gsap";

const Mobail_nav_btn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const lineOneRef = useRef(null);
  const lineTwoRef = useRef(null);
  const buttonRef = useRef(null);

  const handleClick = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);

    if (nextState) {
      // Open animation
      gsap.to(lineOneRef.current, {
        y: 4,
        rotate: 45,
        backgroundColor: "#fff", // make white
        duration: 0.3,
        ease: "power3.out",
      });

      gsap.to(lineTwoRef.current, {
        y: -4,
        rotate: -45,
        backgroundColor: "#fff", // make white
        duration: 0.3,
        ease: "power3.out",
      });

      gsap.to(buttonRef.current, {
        backgroundColor: "var(--colorblue)",
        borderWidth: 0, // remove border
        duration: 0.3,
        ease: "power3.out",
      });
    } else {
      // Close animation
      gsap.to(lineOneRef.current, {
        y: 0,
        rotate: 0,
        backgroundColor: "var(--colorblue)", // original color
        duration: 0.3,
        ease: "power3.out",
      });

      gsap.to(lineTwoRef.current, {
        y: 0,
        rotate: 0,
        backgroundColor: "var(--colorblue)", // original color
        duration: 0.3,
        ease: "power3.out",
      });

      gsap.to(buttonRef.current, {
        borderRadius: "16px",
        backgroundColor: "[var(--colorbg)]",
        borderWidth: 1, // restore border
        borderColor: "#000",
        duration: 0.3,
        ease: "power3.out",
      });
    }
  };

  return (
    <div
      className="flex h-[5vh] w-[20vw] items-center justify-end sm:w-[10vw] lg:hidden"
    >
      <button
        ref={buttonRef}
        onClick={handleClick}
        className="flex h-6 w-10 flex-col items-center justify-around rounded-2xl border border-black p-0.5"
      >
        <div
          ref={lineOneRef}
          className="h-[2px] w-4 bg-[var(--colorblue)]"
        ></div>

        <div
          ref={lineTwoRef}
          className="h-[2px] w-4 bg-[var(--colorblue)]"
        ></div>
      </button>
    </div>
  );
};

export default Mobail_nav_btn;