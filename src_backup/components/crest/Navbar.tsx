'use client';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

export default function CrestNavbar() {
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
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 md:px-16 py-5 transition-all duration-500 ${
        scrolled ? 'bg-[#0c0604]/90 backdrop-blur-2xl border-b border-[#d4a054]/15' : 'bg-transparent'
      }`}
    >
      <Link href="/" className="text-xs font-medium tracking-[0.4em] text-[#d4a054] uppercase hover:text-white transition-colors">
        ← Store
      </Link>

      <div className="absolute left-1/2 -translate-x-1/2">
        <span
          className="text-xl md:text-2xl font-normal tracking-[0.5em] text-white uppercase"
          style={{ fontFamily: "'EB Garamond', serif" }}
        >
          CREST
        </span>
      </div>

      <div className="hidden md:flex gap-10 text-xs font-medium tracking-[0.25em] text-white/60 uppercase">
        <a href="#manifesto" className="hover:text-[#d4a054] transition-colors duration-300">Manifesto</a>
        <a href="#atelier" className="hover:text-[#d4a054] transition-colors duration-300">Atelier</a>
        <a href="#collection" className="hover:text-[#d4a054] transition-colors duration-300">Collection</a>
        <a href="#reserve" className="hover:text-[#d4a054] transition-colors duration-300">Réserve</a>
      </div>
    </motion.nav>
  );
}
