'use client';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Coffee, Menu } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function ExtractNavbar() {
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
          ? "bg-[#0c0a08]/90 backdrop-blur-md border-[#cfa052]/20 py-4" 
          : "bg-transparent border-transparent py-8"
      }`}
    >
      <div className="container mx-auto px-8 md:px-12 flex items-center justify-between font-sans">
        <Link href="/" className="flex items-center gap-3 group">
          <Coffee className="text-[#cfa052]" size={22} strokeWidth={1.5} />
          <span className="text-xl font-bold tracking-[0.3em] text-[#ffffff] uppercase">
            EXTRACT
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-12 text-[10px] tracking-[0.3em] text-[#ffffff]/60 uppercase font-semibold">
          <a href="#yield" className="hover:text-[#cfa052] transition-colors duration-300">The Yield</a>
          <a href="#pressure" className="hover:text-[#cfa052] transition-colors duration-300">Pressure</a>
          <a href="#equipment" className="hover:text-[#cfa052] transition-colors duration-300">Equipment</a>
          <Link href="/gallery" className="hover:text-white transition-colors">GALLERY</Link>
        </div>

        <button className="text-[#ffffff] hover:text-[#cfa052] transition-colors duration-300">
          <Menu size={24} strokeWidth={1.5} />
        </button>
      </div>
    </motion.nav>
  );
}
