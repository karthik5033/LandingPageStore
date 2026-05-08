'use client';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import { Menu, Search } from 'lucide-react';

export default function EclipseNavbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) setHidden(true);
    else setHidden(false);
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
      className={`fixed top-0 left-0 w-full z-50 px-8 py-6 transition-all duration-700 ${
        scrolled ? 'bg-[#030303]/90 backdrop-blur-md border-b border-[#8f1722]/30' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex gap-10 text-[10px] md:text-xs font-semibold tracking-[0.3em] uppercase text-white/60">
          <a href="#origin" className="hidden md:block hover:text-[#8f1722] transition-colors">Origin</a>
          <a href="#philosophy" className="hidden md:block hover:text-[#8f1722] transition-colors">Philosophy</a>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-4">
          <div className="w-2 h-2 rounded-full bg-[#8f1722] animate-pulse" />
          <span
            className="text-xl md:text-2xl font-light tracking-[0.4em] uppercase text-white"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            ECLIPSE
          </span>
        </div>

        <div className="flex items-center gap-10 text-[10px] md:text-xs font-semibold tracking-[0.3em] uppercase text-white/60">
          <a href="#process" className="hidden md:block hover:text-[#8f1722] transition-colors">Craft</a>
          <a href="#collection" className="hidden md:block hover:text-[#8f1722] transition-colors">Boutique</a>
          <div className="flex gap-4 items-center">
            <button className="text-white hover:text-[#8f1722] transition-colors">
              <Search className="w-4 h-4" />
            </button>
            <button className="text-white hover:text-[#8f1722] transition-colors">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
