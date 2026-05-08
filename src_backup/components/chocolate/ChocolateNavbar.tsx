'use client';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, Search, ShoppingBag } from 'lucide-react';
import { useState } from 'react';

export default function ChocolateNavbar() {
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
        scrolled ? 'bg-[#1a0a00]/60 backdrop-blur-xl border-b border-[#7a4a2a]/20' : 'bg-transparent'
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 bg-[#c8922a] rounded-full animate-pulse shadow-[0_0_8px_#c8922a]" />
        <span className="text-base font-black tracking-[0.3em] text-white uppercase" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          VELVET
        </span>
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex gap-10 text-[10px] font-bold tracking-[0.25em] text-[#b8a090] uppercase">
        <a href="#origin" className="hover:text-[#c8922a] transition-colors duration-300">Origins</a>
        <a href="#craft" className="hover:text-[#c8922a] transition-colors duration-300">Craft</a>
        <a href="#flavors" className="hover:text-[#c8922a] transition-colors duration-300">Flavors</a>
        <a href="#ritual" className="hover:text-[#c8922a] transition-colors duration-300">Indulge</a>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-6 text-white">
        <Search className="w-4 h-4 cursor-pointer hover:text-[#c8922a] transition-colors" />
        <ShoppingBag className="w-4 h-4 cursor-pointer hover:text-[#c8922a] transition-colors" />
        <Menu className="w-5 h-5 md:hidden cursor-pointer hover:text-[#c8922a] transition-colors" />
      </div>
    </motion.nav>
  );
}
