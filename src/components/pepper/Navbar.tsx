'use client';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    setHidden(latest > previous && latest > 150);
    setScrolled(latest > 50);
  });

  return (
    <motion.nav
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "linear" }}
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-black/60 backdrop-blur-md border-b border-[#a0a0a0]/20" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between font-sans">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="font-light text-2xl tracking-[0.2em] text-white uppercase mt-1" style={{ fontFamily: "'Playfair Display', serif" }}>PEPPER</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-12 text-[10px] font-bold tracking-[0.3em] text-white/60 uppercase">
          <a href="#origin" className="hover:text-[#a0a0a0] transition-colors">Origin</a>
          <a href="#craft" className="hover:text-[#a0a0a0] transition-colors">Craft</a>
          <a href="#collection" className="hover:text-[#a0a0a0] transition-colors">Collection</a>
          <Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link>
        </div>

        <button className="text-white/80 hover:text-[#a0a0a0] transition-colors">
          <Menu size={24} strokeWidth={1.5} />
        </button>
      </div>
    </motion.nav>
  );
}