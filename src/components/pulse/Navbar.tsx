'use client';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Search, ShoppingCart, Menu } from 'lucide-react';
import { useState } from 'react';

export default function PulseNavbar() {
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
        visible: { y: 0 },
        hidden: { y: "-100%" }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
        scrolled ? 'bg-[#0a0604]/60 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-xl font-normal uppercase tracking-[0.3em] text-white" style={{ fontFamily: "'Playfair Display', serif" }}>PULSE</span>
          <motion.div 
            animate={{ opacity: [1, 0.3, 1] }} 
            transition={{ repeat: Infinity, duration: 3 }}
            className="w-1.5 h-1.5 rounded-full bg-[#c8922a]"
          />
        </div>

        <div className="hidden md:flex items-center gap-10 text-[10px] font-medium tracking-[0.25em] uppercase text-white/60">
          <a href="#origin" className="hover:text-[#c8922a] transition-colors duration-300">Origin</a>
          <a href="#features" className="hover:text-[#c8922a] transition-colors duration-300">Craft</a>
          <a href="#process" className="hover:text-[#c8922a] transition-colors duration-300">Method</a>
          <a href="#products" className="hover:text-[#c8922a] transition-colors duration-300">Collection</a>
        </div>

        <div className="flex items-center gap-8 text-white/60">
          <Search size={16} className="hover:text-[#c8922a] cursor-pointer transition-colors duration-300" />
          <ShoppingCart size={16} className="hover:text-[#c8922a] cursor-pointer transition-colors duration-300" />
          <Menu size={18} className="md:hidden hover:text-[#c8922a] cursor-pointer transition-colors duration-300" />
        </div>
      </div>
    </motion.nav>
  );
}
