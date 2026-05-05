import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Create multiple dots with different spring settings for a trailing effect
  const dots = [
    { size: 8, stiffness: 400, damping: 28, opacity: 1 },
    { size: 6, stiffness: 300, damping: 24, opacity: 0.8 },
    { size: 4, stiffness: 200, damping: 20, opacity: 0.6 },
    { size: 3, stiffness: 150, damping: 16, opacity: 0.4 },
  ];

  const springs = dots.map(dot => ({
    x: useSpring(mouseX, { stiffness: dot.stiffness, damping: dot.damping }),
    y: useSpring(mouseY, { stiffness: dot.stiffness, damping: dot.damping }),
    ...dot
  }));

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const moveMouse = (e) => {
      if (!isVisible) setIsVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveMouse);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveMouse);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('resize', checkMobile);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isMobile) return null;

  return (
    <>
      {springs.map((spring, index) => (
        <motion.div
          key={index}
          className="fixed top-0 left-0 bg-foreground rounded-full pointer-events-none z-[9999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? spring.opacity : 0 }}
          transition={{ duration: 0.2 }}
          style={{
            x: spring.x,
            y: spring.y,
            width: spring.size,
            height: spring.size,
            translateX: '-50%',
            translateY: '-50%',
          }}
        />
      ))}
    </>
  );
}
