'use client';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Coffee, Menu } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function LumenNavbar() {
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
          ? "bg-[#0a0602]/90 backdrop-blur-md border-[#d97706]/20 py-4" 
          : "bg-transparent border-transparent py-8"
      }`}
    >
      <div className="container mx-auto px-8 md:px-12 flex items-center justify-between font-sans">
        <Link href="/" className="flex items-center gap-3 group">
          <Coffee className="text-[#d97706]" size={24} strokeWidth={1.5} />
          <span className="text-2xl font-normal tracking-[0.3em] text-white uppercase" style={{ fontFamily: "'Playfair Display', serif" }}>
            LUMEN
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-12 text-[10px] tracking-[0.3em] text-white/60 uppercase font-semibold">
          <a href="#essence" className="hover:text-[#d97706] transition-colors duration-300">The Essence</a>
          <a href="#roast" className="hover:text-[#d97706] transition-colors duration-300">The Roast</a>
          <a href="#beans" className="hover:text-[#d97706] transition-colors duration-300">Reserve</a>
          <Link href="/gallery" className="hover:text-white transition-colors">GALLERY</Link>
        </div>

        <button className="text-white hover:text-[#d97706] transition-colors duration-300">
          <Menu size={26} strokeWidth={1} />
        </button>
      </div>
    </motion.nav>
  );
}
