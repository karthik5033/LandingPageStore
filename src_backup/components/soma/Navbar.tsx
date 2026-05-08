'use client';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

export default function SomaNavbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useMotionValueEvent(scrollY, "change", (latest) => { const p = scrollY.getPrevious() || 0; setHidden(latest > p && latest > 150); setScrolled(latest > 50); });

  return (
    <motion.nav variants={{ visible: { y: 0, opacity: 1 }, hidden: { y: -100, opacity: 0 } }} animate={hidden ? "hidden" : "visible"} transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 w-full z-50 px-8 py-5 transition-all duration-500 ${scrolled ? 'bg-[#1a0f0a]/90 backdrop-blur-md border-b border-[#d2691e]/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex gap-10 text-xs font-light tracking-[0.3em] text-[#f5e6d3]/40"><a href="#manifesto" className="hidden md:block hover:text-[#f5e6d3] transition-colors">Philosophy</a><a href="#atelier" className="hidden md:block hover:text-[#f5e6d3] transition-colors">Craft</a></div>
        <div className="absolute left-1/2 -translate-x-1/2"><span className="text-2xl font-normal tracking-[0.5em] text-[#d2691e]" style={{ fontFamily: "'Playfair Display', serif" }}>Soma</span></div>
        <div className="flex items-center gap-10 text-xs font-light tracking-[0.3em] text-[#f5e6d3]/40"><a href="#craft" className="hidden md:block hover:text-[#f5e6d3] transition-colors">Process</a><a href="#collection" className="hidden md:block hover:text-[#f5e6d3] transition-colors">Library</a><Link href="/gallery" className="hover:text-[#f5e6d3] transition-colors">Gallery</Link></div>
      </div>
    </motion.nav>
  );
}
