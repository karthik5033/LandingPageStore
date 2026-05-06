'use client';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Coffee, Menu } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function VelvetNavbar() {
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
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        scrolled 
          ? "bg-[#0a0806]/80 backdrop-blur-xl border-[#d4af37]/20 py-4" 
          : "bg-transparent border-transparent py-8"
      }`}
    >
      <div className="container mx-auto px-8 md:px-16 flex items-center justify-between font-sans">
        <Link href="/" className="flex items-center gap-3 group">
          <Coffee className="text-[#d4af37]" size={22} strokeWidth={1.5} />
          <span className="text-xl tracking-[0.25em] text-white uppercase" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Velvet
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-12 text-[11px] tracking-[0.2em] text-white/70 uppercase font-light">
          <a href="#origin" className="hover:text-[#d4af37] transition-colors duration-300">Origin</a>
          <a href="#roast" className="hover:text-[#d4af37] transition-colors duration-300">The Roast</a>
          <a href="#reserve" className="hover:text-[#d4af37] transition-colors duration-300">Reserve</a>
          <Link href="/gallery" className="hover:text-white transition-colors">GALLERY</Link>
        </div>

        <button className="text-white/80 hover:text-[#d4af37] transition-colors duration-300">
          <Menu size={24} strokeWidth={1} />
        </button>
      </div>
    </motion.nav>
  );
}
