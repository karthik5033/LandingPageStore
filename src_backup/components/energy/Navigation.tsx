'use client';
import { motion } from 'framer-motion';
import { Menu, Zap } from 'lucide-react';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-5 mix-blend-difference text-white bg-gradient-to-b from-black/90 to-transparent text-left backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <Zap className="text-[#ccff00] fill-[#ccff00]" size={24} />
        <div className="text-2xl font-black italic tracking-tighter uppercase font-sans">
          VOLT<span className="text-[#ccff00]">.</span>OS
        </div>
      </div>
      
      <div className="hidden md:flex gap-12 text-sm font-bold uppercase tracking-widest">
         <a href="#performance" className="hover:text-[#ccff00] transition-colors">Performance</a>
         <a href="#ingredients" className="hover:text-[#ccff00] transition-colors">Formula</a>
         <a href="#reviews" className="hover:text-[#ccff00] transition-colors">Reviews</a>
      </div>

      <button className="px-6 py-2 border border-white/20 rounded-full hover:bg-[#ccff00] hover:text-black hover:border-[#ccff00] transition-all font-bold text-xs tracking-widest uppercase">
        Pre-Order
      </button>
    </nav>
  );
}
