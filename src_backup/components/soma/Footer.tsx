'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function SomaFooter() {
  return (
    <footer className="w-full bg-transparent text-[#f5e6d3] relative z-20 py-12 px-8 md:px-16 border-t border-[#d2691e]/15">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="md:w-1/3">
            <span className="text-3xl font-normal tracking-[0.5em] text-[#d2691e] block mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Soma</span>
            <p className="text-sm font-light text-[#c4956a] leading-relaxed max-w-xs">The art of cacao translation. Terroir-faithful, single-origin chocolate. Chulucanas, Peru → Melbourne, Australia.</p>
          </motion.div>
          <div className="grid grid-cols-3 gap-16 md:w-2/3">
            <div><h4 className="text-xs font-medium text-[#d2691e] uppercase tracking-[0.3em] mb-6">Library</h4><ul className="flex flex-col gap-4 text-xs font-light tracking-wider text-[#f5e6d3]/40"><li><a href="#collection" className="hover:text-[#f5e6d3] transition-colors">Piura Translation</a></li><li><a href="#collection" className="hover:text-[#f5e6d3] transition-colors">Maya Letter</a></li><li><a href="#collection" className="hover:text-[#f5e6d3] transition-colors">Tanga Dispatch</a></li></ul></div>
            <div><h4 className="text-xs font-medium text-[#d2691e] uppercase tracking-[0.3em] mb-6">Maison</h4><ul className="flex flex-col gap-4 text-xs font-light tracking-wider text-[#f5e6d3]/40"><li><a href="#manifesto" className="hover:text-[#f5e6d3] transition-colors">Philosophy</a></li><li><a href="#atelier" className="hover:text-[#f5e6d3] transition-colors">Craft</a></li><li><a href="#craft" className="hover:text-[#f5e6d3] transition-colors">Translation</a></li></ul></div>
            <div><h4 className="text-xs font-medium text-[#d2691e] uppercase tracking-[0.3em] mb-6">Connect</h4><ul className="flex flex-col gap-4 text-xs font-light tracking-wider text-[#f5e6d3]/40"><li><Link href="/gallery" className="hover:text-[#f5e6d3] transition-colors">Gallery</Link></li><li><a href="#" className="hover:text-[#f5e6d3] transition-colors">Instagram</a></li><li><a href="#" className="hover:text-[#f5e6d3] transition-colors">Journal</a></li></ul></div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-[0.25em] text-[#f5e6d3]/25 uppercase font-light"><p>&copy; {new Date().getFullYear()} Soma Chocolatier. All rights reserved.</p><p>Melbourne · Chulucanas · Tanga</p></div>
      </div>
    </footer>
  );
}
