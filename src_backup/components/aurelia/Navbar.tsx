'use client';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import { Menu } from 'lucide-react';

export default function AureliaNavbar() {
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
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={`fixed top-0 left-0 w-full z-50 px-8 py-6 transition-all duration-700 ${
        scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#c79a52]/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex gap-8 text-[10px] md:text-xs font-semibold tracking-[0.3em] uppercase text-white/70">
          <a href="#heritage" className="hidden md:block hover:text-[#c79a52] transition-colors">Heritage</a>
          <a href="#philosophy" className="hidden md:block hover:text-[#c79a52] transition-colors">Philosophy</a>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2">
          <span
            className="text-2xl font-normal tracking-[0.4em] uppercase text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            AURELIA
          </span>
        </div>

        <div className="flex items-center gap-8 text-[10px] md:text-xs font-semibold tracking-[0.3em] uppercase text-white/70">
          <a href="#process" className="hidden md:block hover:text-[#c79a52] transition-colors">Craft</a>
          <a href="#collection" className="hidden md:block hover:text-[#c79a52] transition-colors">Collection</a>
          <button className="text-white hover:text-[#c79a52] transition-colors">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
