'use client';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, Search, ShoppingBag } from 'lucide-react';
import { useState } from 'react';

export default function ObsidianNavbar() {
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
        scrolled ? 'bg-[#0f0a08]/80 backdrop-blur-xl border-b border-[#a67c52]/20' : 'bg-transparent'
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="w-1.5 h-1.5 bg-[#a67c52] rotate-45 shadow-[0_0_8px_#a67c52]" />
        <span className="text-xl font-bold tracking-[0.4em] text-white uppercase" style={{ fontFamily: "'Playfair Display', serif" }}>
          OBSIDIAN
        </span>
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex gap-12 text-[11px] font-semibold tracking-[0.2em] text-[#a09085] uppercase font-sans">
        <a href="#origin" className="hover:text-[#a67c52] transition-colors duration-300">Terroir</a>
        <a href="#craft" className="hover:text-[#a67c52] transition-colors duration-300">Alchemy</a>
        <a href="#flavors" className="hover:text-[#a67c52] transition-colors duration-300">Tasting</a>
        <a href="#ritual" className="hover:text-[#a67c52] transition-colors duration-300">Reserve</a>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-6 text-[#d4ccc5]">
        <Search className="w-4 h-4 cursor-pointer hover:text-[#a67c52] transition-colors" />
        <ShoppingBag className="w-4 h-4 cursor-pointer hover:text-[#a67c52] transition-colors" />
        <Menu className="w-5 h-5 md:hidden cursor-pointer hover:text-[#a67c52] transition-colors" />
      </div>
    </motion.nav>
  );
}
