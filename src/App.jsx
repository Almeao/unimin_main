import { useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { ReactLenis } from "lenis/react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";




import Home from "./pages/home";
import ClickSpark from "./components/ClickSpark";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const lenisRef = useRef(null);

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (

    <ReactLenis root ref={lenisRef} autoRaf={false}>
   
   <ClickSpark
      sparkColor="var(--colorblue)"
      sparkSize={10}
      sparkRadius={18}
      sparkCount={8}
      duration={400}
      easing="ease-out"
      extraScale={1}
    >
      
      
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ClickSpark>
    </ReactLenis>
  );
}

export default App;