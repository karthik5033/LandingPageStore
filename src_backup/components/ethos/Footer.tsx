'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function EthosFooter() {
  return (
    <footer className="w-full bg-transparent text-[#1a1a1a] relative z-20 py-12 px-8 md:px-16 border-t border-[#1a1a1a]/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="md:w-1/3">
            <span className="text-3xl font-light tracking-[0.5em] text-[#1a1a1a] block mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Ethos</span>
            <p className="text-sm font-light text-[#1a1a1a]/40 leading-relaxed max-w-xs">Radically transparent chocolate. Every cost published. Every farmer paid fairly. Tumaco, Colombia → Amsterdam, Netherlands.</p>
          </motion.div>
          <div className="grid grid-cols-3 gap-16 md:w-2/3">
            <div><h4 className="text-xs font-medium text-[#1a1a1a]/60 uppercase tracking-[0.3em] mb-6">Ledger</h4><ul className="flex flex-col gap-4 text-xs font-light tracking-wider text-[#1a1a1a]/30"><li><a href="#collection" className="hover:text-[#1a1a1a] transition-colors">Tumaco 72</a></li><li><a href="#collection" className="hover:text-[#1a1a1a] transition-colors">Kilombero 68</a></li><li><a href="#collection" className="hover:text-[#1a1a1a] transition-colors">Davao 75</a></li></ul></div>
            <div><h4 className="text-xs font-medium text-[#1a1a1a]/60 uppercase tracking-[0.3em] mb-6">System</h4><ul className="flex flex-col gap-4 text-xs font-light tracking-wider text-[#1a1a1a]/30"><li><a href="#manifesto" className="hover:text-[#1a1a1a] transition-colors">Commitment</a></li><li><a href="#atelier" className="hover:text-[#1a1a1a] transition-colors">Principles</a></li><li><a href="#craft" className="hover:text-[#1a1a1a] transition-colors">The pipeline</a></li></ul></div>
            <div><h4 className="text-xs font-medium text-[#1a1a1a]/60 uppercase tracking-[0.3em] mb-6">Connect</h4><ul className="flex flex-col gap-4 text-xs font-light tracking-wider text-[#1a1a1a]/30"><li><Link href="/gallery" className="hover:text-[#1a1a1a] transition-colors">Gallery</Link></li><li><a href="#" className="hover:text-[#1a1a1a] transition-colors">Impact reports</a></li><li><a href="#" className="hover:text-[#1a1a1a] transition-colors">Open source</a></li></ul></div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[#1a1a1a]/[0.06] flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-[0.25em] text-[#1a1a1a]/25 uppercase font-light"><p>&copy; {new Date().getFullYear()} Ethos Transparent. All rights reserved.</p><p>Amsterdam · Tumaco · Davao</p></div>
      </div>
    </footer>
  );
}
