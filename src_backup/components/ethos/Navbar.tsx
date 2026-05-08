'use client';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

export default function EthosNavbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useMotionValueEvent(scrollY, "change", (latest) => { const p = scrollY.getPrevious() || 0; setHidden(latest > p && latest > 150); setScrolled(latest > 50); });

  return (
    <motion.nav variants={{ visible: { y: 0, opacity: 1 }, hidden: { y: -100, opacity: 0 } }} animate={hidden ? "hidden" : "visible"} transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 w-full z-50 px-8 py-5 transition-all duration-500 ${scrolled ? 'bg-[#fafaf8]/90 backdrop-blur-md border-b border-[#1a1a1a]/5' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex gap-10 text-xs font-light tracking-[0.3em] text-[#1a1a1a]/40"><a href="#manifesto" className="hidden md:block hover:text-[#1a1a1a] transition-colors">Commitment</a><a href="#atelier" className="hidden md:block hover:text-[#1a1a1a] transition-colors">Principles</a></div>
        <div className="absolute left-1/2 -translate-x-1/2"><span className="text-2xl font-light tracking-[0.5em] text-[#1a1a1a]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Ethos</span></div>
        <div className="flex items-center gap-10 text-xs font-light tracking-[0.3em] text-[#1a1a1a]/40"><a href="#craft" className="hidden md:block hover:text-[#1a1a1a] transition-colors">Process</a><a href="#collection" className="hidden md:block hover:text-[#1a1a1a] transition-colors">Ledger</a><Link href="/gallery" className="hover:text-[#1a1a1a] transition-colors">Gallery</Link></div>
      </div>
    </motion.nav>
  );
}
