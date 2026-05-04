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
        scrolled ? "bg-black/40 backdrop-blur-md border-b border-fuchsia-500/20" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-black text-2xl tracking-[0.2em] text-white">CRUSH</span>
            <div className="w-2 h-2 rounded-full bg-fuchsia-500 group-hover:scale-150 transition-transform duration-300" />
          </Link>
          
          <div className="hidden md:flex items-center gap-8 text-[11px] font-bold tracking-[0.2em] text-white/60">
            <a href="#essence" className="hover:text-fuchsia-400 transition-colors">ESSENCE</a>
            <a href="#blend" className="hover:text-fuchsia-400 transition-colors">BLEND</a>
            <a href="#nectars" className="hover:text-fuchsia-400 transition-colors">NECTARS</a>
          </div>
        </div>

        <div className="flex items-center gap-6 text-white/80">
          <button className="hover:text-fuchsia-400 transition-colors">
            <Search size={20} />
          </button>
          <button className="hover:text-fuchsia-400 transition-colors">
            <ShoppingBag size={20} />
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
