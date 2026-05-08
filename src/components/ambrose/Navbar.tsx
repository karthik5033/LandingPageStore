'use client';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import { Menu } from 'lucide-react';

export default function AmbroseNavbar() {
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
        scrolled ? 'bg-[#140a05]/95 backdrop-blur-xl border-b border-[#e6cda3]/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        <div className="flex gap-12 text-[10px] font-bold tracking-[0.3em] uppercase text-[#f4eee1]/60">
          <a href="#manifesto" className="hidden lg:block hover:text-[#e6cda3] transition-colors">Manifesto</a>
          <a href="#harvest" className="hidden lg:block hover:text-[#e6cda3] transition-colors">Harvest</a>
          <a href="#roasting" className="hidden lg:block hover:text-[#e6cda3] transition-colors">Roasting</a>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2">
          <span
            className="text-2xl font-normal tracking-[0.3em] uppercase text-[#e6cda3]"
            style={{ fontFamily: "'Libre Baskerville', serif" }}
          >
            AMBROSE
          </span>
        </div>

        <div className="flex items-center gap-12 text-[10px] font-bold tracking-[0.3em] uppercase text-[#f4eee1]/60">
          <a href="#artistry" className="hidden lg:block hover:text-[#e6cda3] transition-colors">Artistry</a>
          <a href="#sensory" className="hidden lg:block hover:text-[#e6cda3] transition-colors">Sensory</a>
          <a href="#collection" className="hidden lg:block hover:text-[#e6cda3] transition-colors">Collection</a>
          <div className="flex gap-6 items-center border-l border-[#f4eee1]/20 pl-6">
            <button className="text-[#f4eee1] hover:text-[#e6cda3] transition-colors">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
