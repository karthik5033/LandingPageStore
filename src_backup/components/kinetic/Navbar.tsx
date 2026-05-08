'use client';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Activity, Fingerprint } from 'lucide-react';
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
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 w-full z-50 transition-colors duration-500 ${
        scrolled ? "bg-[#02040a]/80 backdrop-blur-xl border-b border-[#00f0ff]/20" : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-16">
          <Link href="/" className="flex items-center gap-3 group">
            <Activity className="text-[#00f0ff]" size={24} />
            <span className="font-bold text-2xl tracking-[0.3em] text-white" style={{ fontFamily: "'Syncopate', sans-serif" }}>KINETIC</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-10 text-[10px] font-bold tracking-[0.4em] text-[#00f0ff]/60 uppercase font-mono">
            <a href="#system" className="hover:text-[#00f0ff] hover:text-shadow-[#00f0ff] transition-all duration-300 relative group flex flex-col">
              System
              <span className="h-[2px] w-0 bg-[#00f0ff] mt-1 group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#specs" className="hover:text-[#00f0ff] transition-all duration-300 relative group flex flex-col">
              Specs
              <span className="h-[2px] w-0 bg-[#00f0ff] mt-1 group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#modules" className="hover:text-[#00f0ff] transition-all duration-300 relative group flex flex-col">
              Modules
              <span className="h-[2px] w-0 bg-[#00f0ff] mt-1 group-hover:w-full transition-all duration-300" />
            </a>
          </div>
        </div>

        <div className="flex items-center gap-8 text-[#00f0ff]">
          <button className="hover:text-white transition-colors duration-300 relative group flex items-center gap-3">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase hidden md:block font-mono">Auth</span>
            <Fingerprint size={24} strokeWidth={1} />
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
