'use client';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Coffee, Menu } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function RitualNavbar() {
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
          ? "bg-[#2b221a]/90 backdrop-blur-md border-[#e8c490]/20 py-4" 
          : "bg-transparent border-transparent py-8"
      }`}
    >
      <div className="container mx-auto px-8 md:px-12 flex items-center justify-between font-serif">
        <Link href="/" className="flex items-center gap-3 group">
          <Coffee className="text-[#e8c490]" size={22} strokeWidth={1} />
          <span className="text-xl tracking-[0.2em] text-[#fdfbf7] uppercase" style={{ fontFamily: "'Playfair Display', serif" }}>
            RITUAL
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-12 text-[10px] tracking-[0.2em] text-[#fdfbf7]/80 uppercase font-light">
          <a href="#origin" className="hover:text-[#e8c490] transition-colors duration-300">The Origin</a>
          <a href="#sanctuary" className="hover:text-[#e8c490] transition-colors duration-300">Sanctuary</a>
          <a href="#offerings" className="hover:text-[#e8c490] transition-colors duration-300">Offerings</a>
          <Link href="/gallery" className="hover:text-[#e8c490] transition-colors duration-300">Gallery</Link>
        </div>

        <button className="text-[#fdfbf7] hover:text-[#e8c490] transition-colors duration-300">
          <Menu size={24} strokeWidth={1} />
        </button>
      </div>
    </motion.nav>
  );
}
