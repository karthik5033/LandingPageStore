'use client';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Zap, Menu } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
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
      transition={{ duration: 0.3, ease: "linear" }}
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-black/60 backdrop-blur-md border-b border-[#ccff00]/20" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between font-mono">
        <Link href="/" className="flex items-center gap-2 group">
          <Zap className="text-[#ccff00]" size={20} />
          <span className="font-bold text-xl tracking-[0.3em] text-white">SURGE</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-[10px] font-bold tracking-[0.2em] text-white/60">
          <a href="#core" className="hover:text-[#ccff00] transition-colors">CORE</a>
          <a href="#specs" className="hover:text-[#ccff00] transition-colors">SPECS</a>
          <a href="#loadout" className="hover:text-[#ccff00] transition-colors">LOADOUT</a>
        </div>

        <button className="text-white/80 hover:text-[#ccff00] transition-colors">
          <Menu size={24} />
        </button>
      </div>
    </motion.nav>
  );
}
