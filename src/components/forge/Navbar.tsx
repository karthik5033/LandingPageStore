'use client';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Anvil, Menu } from 'lucide-react';
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
        scrolled ? "bg-[#0a0a0f]/80 backdrop-blur-md border-b border-[#4a90d9]/20" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between font-sans">
        <Link href="/" className="flex items-center gap-2 group">
          <Anvil className="text-[#4a90d9]" size={24} strokeWidth={2.5} />
          <span className="font-bold text-3xl tracking-wide text-white uppercase mt-1" style={{ fontFamily: "'Oswald', sans-serif" }}>FORGE</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-12 text-[12px] font-bold tracking-[0.2em] text-white/60 uppercase">
          <a href="#foundry" className="hover:text-[#4a90d9] transition-colors">Foundry</a>
          <a href="#temper" className="hover:text-[#4a90d9] transition-colors">Temper</a>
          <a href="#alloys" className="hover:text-[#4a90d9] transition-colors">Alloys</a>
        </div>

        <button className="text-white/80 hover:text-[#4a90d9] transition-colors">
          <Menu size={28} />
        </button>
      </div>
    </motion.nav>
  );
}
