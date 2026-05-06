'use client';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, Search, ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export default function Navbar() {
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
      className={cn(
        "fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-6 transition-colors duration-500",
        scrolled ? "bg-black/20 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      )}
    >
      <div className="flex items-center gap-3">
        <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse" />
        <span className="text-lg font-bold tracking-[0.25em] text-white uppercase font-sans">AURA</span>
      </div>

      <div className="hidden md:flex gap-12 text-[11px] font-bold tracking-[0.2em] text-gray-400 uppercase">
        <a href="#origin" className="hover:text-amber-500 transition-colors">Origins</a>
        <a href="#roast" className="hover:text-amber-500 transition-colors">Process</a>
        <a href="#ritual" className="hover:text-amber-500 transition-colors">Heritage</a>
        <a href="/gallery" className="hover:text-amber-500 transition-colors">Gallery</a>
      </div>

      <div className="flex items-center gap-8 text-white">
        <Search className="w-4 h-4 cursor-pointer hover:text-amber-500 transition-colors" />
        <ShoppingBag className="w-4 h-4 cursor-pointer hover:text-amber-500 transition-colors" />
        <Menu className="w-5 h-5 md:hidden cursor-pointer hover:text-amber-500 transition-colors" />
      </div>
    </motion.nav>
  );
}
