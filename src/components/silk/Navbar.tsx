'use client';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, Search, ShoppingBag } from 'lucide-react';
import { useState } from 'react';

export default function SilkNavbar() {
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
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-6 transition-all duration-500 ${
        scrolled ? 'bg-[#1a110a]/80 backdrop-blur-xl border-b border-[#c8a97e]/20' : 'bg-transparent'
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        <span className="text-2xl font-light tracking-[0.3em] text-white uppercase" style={{ fontFamily: "'Playfair Display', serif" }}>
          S I L K
        </span>
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex gap-12 text-[10px] font-bold tracking-[0.2em] text-[#e8d5c4] uppercase font-sans">
        <a href="#collections" className="hover:text-[#c8a97e] transition-colors duration-300">Collections</a>
        <a href="#craft" className="hover:text-[#c8a97e] transition-colors duration-300">The Craft</a>
        <a href="#gifting" className="hover:text-[#c8a97e] transition-colors duration-300">Gifting</a>
        <a href="#maison" className="hover:text-[#c8a97e] transition-colors duration-300">Maison</a>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-6 text-[#e8d5c4]">
        <Search className="w-4 h-4 cursor-pointer hover:text-[#c8a97e] transition-colors" />
        <ShoppingBag className="w-4 h-4 cursor-pointer hover:text-[#c8a97e] transition-colors" />
        <Menu className="w-5 h-5 md:hidden cursor-pointer hover:text-[#c8a97e] transition-colors" />
      </div>
    </motion.nav>
  );
}
