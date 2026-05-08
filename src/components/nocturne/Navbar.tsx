'use client';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import { Menu, Search } from 'lucide-react';

export default function NocturneNavbar() {
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
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`fixed top-0 left-0 w-full z-50 px-8 py-6 transition-all duration-700 ${
        scrolled ? 'bg-[#050505]/95 backdrop-blur-xl border-b border-[#cfbba0]/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        <div className="flex gap-12 text-[10px] font-semibold tracking-[0.4em] uppercase text-white/60">
          <a href="#awakening" className="hidden lg:block hover:text-[#cfbba0] transition-colors">Awakening</a>
          <a href="#terroir" className="hidden lg:block hover:text-[#cfbba0] transition-colors">Terroir</a>
          <a href="#botanicals" className="hidden lg:block hover:text-[#cfbba0] transition-colors">Botanicals</a>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2">
          <span
            className="text-2xl font-medium tracking-[0.3em] uppercase text-white"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            NOCTURNE
          </span>
        </div>

        <div className="flex items-center gap-12 text-[10px] font-semibold tracking-[0.4em] uppercase text-white/60">
          <a href="#craft" className="hidden lg:block hover:text-[#cfbba0] transition-colors">Craft</a>
          <a href="#sensory" className="hidden lg:block hover:text-[#cfbba0] transition-colors">Sensory</a>
          <a href="#vault" className="hidden lg:block hover:text-[#cfbba0] transition-colors">The Vault</a>
          <div className="flex gap-6 items-center border-l border-white/20 pl-6">
            <button className="text-white hover:text-[#cfbba0] transition-colors">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
