'use client';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Coffee, Menu } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function GravityNavbar() {
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
          ? "bg-[#0d0704]/95 backdrop-blur-md border-[#b87333]/20 py-4" 
          : "bg-transparent border-transparent py-8"
      }`}
    >
      <div className="container mx-auto px-8 md:px-12 flex items-center justify-between font-sans">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-[#b87333] flex items-center justify-center transform -skew-x-12 group-hover:skew-x-0 transition-transform duration-500">
            <Coffee className="text-[#0d0704]" size={18} strokeWidth={2.5} />
          </div>
          <span className="text-2xl font-bold tracking-widest text-[#fdfbf7] uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>
            GRAVITY
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-12 text-[11px] tracking-widest text-[#fdfbf7]/60 uppercase font-bold">
          <a href="#impact" className="hover:text-[#b87333] transition-colors duration-300">The Impact</a>
          <a href="#force" className="hover:text-[#b87333] transition-colors duration-300">The Force</a>
          <a href="#fuel" className="hover:text-[#b87333] transition-colors duration-300">The Fuel</a>
        </div>

        <button className="text-[#fdfbf7] hover:text-[#b87333] transition-colors duration-300">
          <Menu size={28} strokeWidth={2} />
        </button>
      </div>
    </motion.nav>
  );
}
