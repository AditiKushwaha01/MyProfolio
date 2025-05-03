// src/components/CustomCursor.jsx
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const [clicked, setClicked] = useState(false);

  const springConfig = { damping: 30, stiffness: 500 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleClick = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 200); // shrink back
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <motion.div
    className={`custom-cursor ${clicked ? "clicked" : ""}`}
    style={{
      translateX: cursorX,
      translateY: cursorY,
      zIndex: 9999, // Ensure it's on top
      position: 'fixed',
      pointerEvents: 'none',
      }}
    />
  );
};

export default CustomCursor;
