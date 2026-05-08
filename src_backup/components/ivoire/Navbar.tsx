'use client';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

export default function IvoireNavbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) setHidden(true);
    else setHidden(false);
    setScrolled(latest > 50);
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -100, opacity: 0 }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 w-full z-50 px-8 md:px-16 py-5 transition-all duration-500 ${
        scrolled ? 'bg-[#f5efe6]/85 backdrop-blur-2xl border-b border-[#6b4a2e]/10 shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xs font-medium tracking-[0.4em] text-[#6b4a2e] uppercase hover:text-[#2a1f1a] transition-colors">
          ← Store
        </Link>

        <div className="absolute left-1/2 -translate-x-1/2">
          <span
            className="text-lg md:text-xl font-normal tracking-[0.6em] uppercase text-[#2a1f1a]"
            style={{ fontFamily: "'Libre Baskerville', serif" }}
          >
            IVOIRE
          </span>
        </div>

        <div className="hidden md:flex gap-10 text-xs font-medium tracking-[0.25em] text-[#6b4a2e]/70 uppercase">
          <a href="#essence" className="hover:text-[#2a1f1a] transition-colors duration-300">Essence</a>
          <a href="#craft" className="hover:text-[#2a1f1a] transition-colors duration-300">Craft</a>
          <a href="#alchemy" className="hover:text-[#2a1f1a] transition-colors duration-300">Alchemy</a>
          <a href="#collection" className="hover:text-[#2a1f1a] transition-colors duration-300">Collection</a>
        </div>
      </div>
    </motion.nav>
  );
}
