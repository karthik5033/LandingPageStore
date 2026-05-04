'use client';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, ShoppingBag } from 'lucide-react';
import { useState } from 'react';

export default function BotanicaNavbar() {
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
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 md:px-20 py-8 transition-all duration-500 ${
        scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-6' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center gap-3">
        <span className="text-2xl font-light tracking-widest text-white uppercase" style={{ fontFamily: "'Playfair Display', serif" }}>
          Botanica
        </span>
      </div>

      <div className="hidden md:flex gap-16 text-[11px] font-medium tracking-[0.2em] text-gray-300 uppercase font-sans">
        <a href="#harvest" className="hover:text-green-400 transition-colors duration-300">Harvest</a>
        <a href="#essence" className="hover:text-green-400 transition-colors duration-300">Essence</a>
        <a href="#apothecary" className="hover:text-green-400 transition-colors duration-300">Apothecary</a>
      </div>

      <div className="flex items-center gap-8 text-white">
        <ShoppingBag className="w-5 h-5 cursor-pointer hover:text-green-400 transition-colors" />
        <Menu className="w-6 h-6 md:hidden cursor-pointer hover:text-green-400 transition-colors" />
      </div>
    </motion.nav>
  );
}
