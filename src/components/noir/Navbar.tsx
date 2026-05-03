'use client';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, Search, ShoppingBag } from 'lucide-react';
import { useState } from 'react';

export default function NoirNavbar() {
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
    
    if (latest > 50) {
        setScrolled(true);
    } else {
        setScrolled(false);
    }
  });

  return (
    <motion.nav 
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -100, opacity: 0 }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-6 transition-colors duration-500 ${
        scrolled ? "bg-[#0a0300]/40 backdrop-blur-md border-b border-[#c8922a]/10" : "bg-transparent"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#c8922a' }} />
        <span className="text-lg font-bold tracking-[0.25em] text-white uppercase" style={{ fontFamily: "'Cormorant Garamond', serif" }}>NOIR</span>
      </div>

      <div className="hidden md:flex gap-12 text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: '#8a7060' }}>
        <a href="#origin" className="hover:text-[#c8922a] transition-colors">Source</a>
        <a href="#craft" className="hover:text-[#c8922a] transition-colors">Creation</a>
        <a href="#flavors" className="hover:text-[#c8922a] transition-colors">Tasting</a>
        <a href="#ritual" className="hover:text-[#c8922a] transition-colors">Boutique</a>
      </div>

      <div className="flex items-center gap-8 text-white">
        <Search className="w-4 h-4 cursor-pointer hover:text-[#c8922a] transition-colors" />
        <ShoppingBag className="w-4 h-4 cursor-pointer hover:text-[#c8922a] transition-colors" />
        <Menu className="w-5 h-5 md:hidden cursor-pointer hover:text-[#c8922a] transition-colors" />
      </div>
    </motion.nav>
  );
}
