'use client';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Search, ShoppingBag } from 'lucide-react';
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
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-black/40 backdrop-blur-md border-b border-rose-500/10" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-bold text-2xl tracking-[0.2em] text-white">ZEST</span>
            <div className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
          </Link>
          
          <div className="hidden md:flex items-center gap-8 text-[11px] font-bold tracking-[0.2em] text-white/60">
            <a href="#origin" className="hover:text-rose-500 transition-colors">ORIGIN</a>
            <a href="#craft" className="hover:text-rose-500 transition-colors">CRAFT</a>
            <a href="#nectar" className="hover:text-rose-500 transition-colors">NECTAR</a>
            <a href="#process" className="hover:text-rose-500 transition-colors">PROCESS</a>
          </div>
        </div>

        <div className="flex items-center gap-6 text-white/80">
          <button className="hover:text-rose-500 transition-colors">
            <Search size={18} />
          </button>
          <button className="hover:text-rose-500 transition-colors">
            <ShoppingBag size={18} />
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
