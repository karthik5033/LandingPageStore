'use client';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, Search, ShoppingBag } from 'lucide-react';
import { useState } from 'react';

export default function AetherNavbar() {
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
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-16 py-6 transition-all duration-500 ${
        scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center gap-3">
        <span className="text-xl font-light tracking-[0.4em] text-white uppercase" style={{ fontFamily: "'Playfair Display', serif" }}>
          AETHER
        </span>
      </div>

      <div className="hidden md:flex gap-16 text-[9px] font-bold tracking-[0.3em] text-gray-400 uppercase font-sans">
        <a href="#vision" className="hover:text-white transition-colors duration-300">Vision</a>
        <a href="#engineering" className="hover:text-white transition-colors duration-300">Engineering</a>
        <a href="#collection" className="hover:text-white transition-colors duration-300">Collection</a>
      </div>

      <div className="flex items-center gap-6 text-gray-300">
        <Search className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
        <ShoppingBag className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
        <Menu className="w-5 h-5 md:hidden cursor-pointer hover:text-white transition-colors" />
      </div>
    </motion.nav>
  );
}
