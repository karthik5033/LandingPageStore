'use client';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Droplets, Menu } from 'lucide-react';
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
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-[#ff0066]/20" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between font-sans">
        <Link href="/" className="flex items-center gap-2 group">
          <Droplets className="text-[#ff0066]" size={24} strokeWidth={2.5} />
          <span className="font-bold text-3xl tracking-wide text-white uppercase mt-1" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>PRISM</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-12 text-[12px] font-bold tracking-[0.2em] text-white/60 uppercase">
          <a href="#spectrum" className="hover:text-[#ff0066] transition-colors">Spectrum</a>
          <a href="#formula" className="hover:text-[#ff0066] transition-colors">Formula</a>
          <a href="#variants" className="hover:text-[#ff0066] transition-colors">Variants</a>
        </div>

        <button className="text-white/80 hover:text-[#ff0066] transition-colors">
          <Menu size={28} />
        </button>
      </div>
    </motion.nav>
  );
}
