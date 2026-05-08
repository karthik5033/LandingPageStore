'use client';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, Search } from 'lucide-react';
import { useState } from 'react';

export default function AuroraNavbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
        visible: { y: 0, opacity: 1 },
        hidden: { y: -100, opacity: 0 }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-20 py-8 transition-all duration-500 ${
        scrolled ? 'bg-black/40 backdrop-blur-md border-b border-yellow-500/10 py-6' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center gap-12">
        <span className="text-xl font-light tracking-[0.4em] text-white uppercase" style={{ fontFamily: "'Playfair Display', serif" }}>
          AURORA
        </span>
        <div className="hidden md:flex gap-10 text-[10px] font-medium tracking-[0.2em] text-gray-400 uppercase font-sans">
          <a href="#dawn" className="hover:text-yellow-400 transition-colors duration-300">The Dawn</a>
          <a href="#citrus" className="hover:text-yellow-400 transition-colors duration-300">Citrus</a>
          <a href="#nectar" className="hover:text-yellow-400 transition-colors duration-300">Nectar</a>
        </div>
      </div>

      <div className="flex items-center gap-8 text-white">
        <Search className="w-5 h-5 cursor-pointer hover:text-yellow-400 transition-colors" />
        <Menu className="w-6 h-6 cursor-pointer hover:text-yellow-400 transition-colors" />
      </div>
    </motion.nav>
  );
}
