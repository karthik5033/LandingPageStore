'use client';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Coffee, Menu } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function OpusNavbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-700 border-b ${
        scrolled 
          ? "bg-[#050505]/90 backdrop-blur-md border-[#f5f5f0]/10 py-4" 
          : "bg-transparent border-transparent py-8"
      }`}
    >
      <div className="container mx-auto px-8 md:px-12 flex items-center justify-between font-sans">
        <Link href="/" className="flex items-center gap-3 group">
          <Coffee className="text-[#f5f5f0]" size={22} strokeWidth={1.5} />
          <span className="text-xl font-normal tracking-[0.4em] text-[#f5f5f0] uppercase" style={{ fontFamily: "'Playfair Display', serif" }}>
            OPUS
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-12 text-[9px] tracking-[0.4em] text-[#a3a3a3] uppercase font-light">
          <a href="#art" className="hover:text-[#f5f5f0] transition-colors duration-300">The Art</a>
          <a href="#canvas" className="hover:text-[#f5f5f0] transition-colors duration-300">The Canvas</a>
          <a href="#gallery" className="hover:text-[#f5f5f0] transition-colors duration-300">Gallery</a>
        </div>

        <button className="text-[#f5f5f0] hover:text-[#a3a3a3] transition-colors duration-300">
          <Menu size={24} strokeWidth={1} />
        </button>
      </div>
    </motion.nav>
  );
}
