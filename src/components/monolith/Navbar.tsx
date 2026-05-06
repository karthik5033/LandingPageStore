'use client';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function MonolithNavbar() {
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
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 md:px-16 py-8 transition-all duration-500 ${
        scrolled ? 'bg-black/90 backdrop-blur-2xl border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center gap-3">
        <span className="text-xl font-bold tracking-[0.5em] text-white uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
          MONOLITH
        </span>
      </div>

      <div className="hidden md:flex gap-16 text-[10px] font-bold tracking-[0.4em] text-gray-500 uppercase font-sans">
        <a href="#structures" className="hover:text-white transition-colors duration-300">Structures</a>
        <a href="#ethos" className="hover:text-white transition-colors duration-300">Ethos</a>
        <a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a>
      </div>

      <div className="flex items-center gap-6 text-white">
        <Menu className="w-6 h-6 cursor-pointer hover:text-gray-400 transition-colors" />
      </div>
    </motion.nav>
  );
}
