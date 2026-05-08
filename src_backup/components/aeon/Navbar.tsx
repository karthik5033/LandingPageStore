'use client';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

export default function AeonNavbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useMotionValueEvent(scrollY, "change", (latest) => { const p = scrollY.getPrevious() || 0; setHidden(latest > p && latest > 150); setScrolled(latest > 50); });

  return (
    <motion.nav variants={{ visible: { y: 0, opacity: 1 }, hidden: { y: -100, opacity: 0 } }} animate={hidden ? "hidden" : "visible"} transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 w-full z-50 px-8 py-5 transition-all duration-500 ${scrolled ? 'bg-[#1c1c1c]/95 backdrop-blur-md border-b border-[#c5a059]/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex gap-10 text-xs font-light tracking-[0.3em] text-[#f4f1ea]/40"><a href="#manifesto" className="hidden md:block hover:text-[#f4f1ea] transition-colors">Legacy</a><a href="#atelier" className="hidden md:block hover:text-[#f4f1ea] transition-colors">Atelier</a></div>
        <div className="absolute left-1/2 -translate-x-1/2"><span className="text-2xl font-normal tracking-[0.5em] text-[#c5a059]" style={{ fontFamily: "'Cinzel', serif" }}>Aeon</span></div>
        <div className="flex items-center gap-10 text-xs font-light tracking-[0.3em] text-[#f4f1ea]/40"><a href="#craft" className="hidden md:block hover:text-[#f4f1ea] transition-colors">Ritual</a><a href="#collection" className="hidden md:block hover:text-[#f4f1ea] transition-colors">Vault</a><Link href="/gallery" className="hover:text-[#f4f1ea] transition-colors">Gallery</Link></div>
      </div>
    </motion.nav>
  );
}
