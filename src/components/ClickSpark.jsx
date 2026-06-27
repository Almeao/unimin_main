import { useRef, useEffect, useCallback } from "react";

const ClickSpark = ({
  sparkSize = 5,
  sparkRadius = 15,
  sparkCount = 4,
  duration = 400,
  easing = "ease-out",
  extraScale = 1,
  children,
}) => {
  const canvasRef = useRef(null);
  const sparksRef = useRef([]);

  // Helper to resolve CSS variable if needed
  const resolveColor = (color) => {
    if (typeof color === "string" && color.startsWith("var(")) {
      const varName = color.substring(4, color.length - 1).trim();
      // getPropertyValue may return with leading whitespace, trim it
      return getComputedStyle(document.documentElement)
        .getPropertyValue(varName)
        .trim() || color;
    }
    return color;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    let resizeTimeout;

    const resizeCanvas = () => {
      const { width, height } = parent.getBoundingClientRect();

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
    };

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resizeCanvas, 100);
    };

    const ro = new ResizeObserver(handleResize);
    ro.observe(parent);

    resizeCanvas();

    return () => {
      ro.disconnect();
      clearTimeout(resizeTimeout);
    };
  }, []);

  const easeFunc = useCallback(
    (t) => {
      switch (easing) {
        case "linear":
          return t;
        case "ease-in":
          return t * t;
        case "ease-in-out":
          return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        default:
          // ease-out
          return t * (2 - t);
      }
    },
    [easing]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationId;

    // Resolve the required spark colors just once per frame
    const whiteColor = "#fff";
    const blueColor = resolveColor("var(--colorblue)");

    const draw = (timestamp) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      sparksRef.current = sparksRef.current.filter((spark) => {
        const elapsed = timestamp - spark.startTime;
        if (elapsed >= duration) {
          return false;
        }

        const progress = elapsed / duration;
        const eased = easeFunc(progress);

        const distance = eased * sparkRadius * extraScale;
        const lineLength = sparkSize * (1 - eased);

        const x1 = spark.x + distance * Math.cos(spark.angle);
        const y1 = spark.y + distance * Math.sin(spark.angle);
        const x2 =
          spark.x + (distance + lineLength) * Math.cos(spark.angle);
        const y2 =
          spark.y + (distance + lineLength) * Math.sin(spark.angle);

        // Alternate color per spark: even index blue, odd index white
        const sparkColor =
          spark.color === "white" ? whiteColor : blueColor;

        ctx.strokeStyle = sparkColor;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        return true;
      });

      animationId = requestAnimationFrame(draw);
    };

    animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [sparkSize, sparkRadius, duration, easeFunc, extraScale]);

  const handleClick = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const now = performance.now();

    // Alternate color assignment: even = blue, odd = white
    const newSparks = Array.from({ length: sparkCount }, (_, i) => ({
      x,
      y,
      angle: (2 * Math.PI * i) / sparkCount,
      startTime: now,
      color: i % 2 === 0 ? "blue" : "white",
    }));

    sparksRef.current.push(...newSparks);
  };

  return (
    <div
      onClick={handleClick}
      className="relative min-h-screen w-full overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute left-0 top-0 z-[9999] block h-full w-full select-none"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default ClickSpark;