'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === 'button' || 
          target.tagName.toLowerCase() === 'a' ||
          target.closest('button') ||
          target.closest('a')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-[#00f0ff] rounded-sm pointer-events-none z-[100] mix-blend-screen flex items-center justify-center"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
          rotate: isHovering ? 45 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 28,
          mass: 0.5
        }}
      >
        <motion.div 
          className="w-full h-full border border-[#00f0ff]/50 absolute"
          animate={{ rotate: isHovering ? -90 : 0, scale: isHovering ? 1.2 : 0.8 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-[#00f0ff] pointer-events-none z-[100] mix-blend-screen"
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0 }}
      />
    </>
  );
}
