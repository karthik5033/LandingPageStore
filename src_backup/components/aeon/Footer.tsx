'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AeonFooter() {
  return (
    <footer className="w-full bg-transparent text-[#f4f1ea] relative z-20 py-12 px-8 md:px-16 border-t border-[#c5a059]/15">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="md:w-1/3">
            <span className="text-3xl font-normal tracking-[0.5em] text-[#c5a059] block mb-4" style={{ fontFamily: "'Cinzel', serif" }}>Aeon</span>
            <p className="text-sm font-light text-[#a89080] leading-relaxed max-w-xs">Heritage cacao from century-old trees. Vault-aged, stone-milled. Catatumbo, Venezuela → Vienna, Austria.</p>
          </motion.div>
          <div className="grid grid-cols-3 gap-16 md:w-2/3">
            <div><h4 className="text-xs font-medium text-[#c5a059] uppercase tracking-[0.3em] mb-6">Vault</h4><ul className="flex flex-col gap-4 text-xs font-light tracking-wider text-[#f4f1ea]/40"><li><a href="#collection" className="hover:text-[#f4f1ea] transition-colors">Epoch 100</a></li><li><a href="#collection" className="hover:text-[#f4f1ea] transition-colors">Relic 85</a></li><li><a href="#collection" className="hover:text-[#f4f1ea] transition-colors">Vestige 72</a></li></ul></div>
            <div><h4 className="text-xs font-medium text-[#c5a059] uppercase tracking-[0.3em] mb-6">Maison</h4><ul className="flex flex-col gap-4 text-xs font-light tracking-wider text-[#f4f1ea]/40"><li><a href="#manifesto" className="hover:text-[#f4f1ea] transition-colors">Legacy</a></li><li><a href="#atelier" className="hover:text-[#f4f1ea] transition-colors">Atelier</a></li><li><a href="#craft" className="hover:text-[#f4f1ea] transition-colors">The ritual</a></li></ul></div>
            <div><h4 className="text-xs font-medium text-[#c5a059] uppercase tracking-[0.3em] mb-6">Connect</h4><ul className="flex flex-col gap-4 text-xs font-light tracking-wider text-[#f4f1ea]/40"><li><Link href="/gallery" className="hover:text-[#f4f1ea] transition-colors">Gallery</Link></li><li><a href="#" className="hover:text-[#f4f1ea] transition-colors">Instagram</a></li><li><a href="#" className="hover:text-[#f4f1ea] transition-colors">Journal</a></li></ul></div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-[0.25em] text-[#f4f1ea]/25 uppercase font-light"><p>&copy; {new Date().getFullYear()} Aeon Heritage. All rights reserved.</p><p>Vienna · Catatumbo · Kyoto</p></div>
      </div>
    </footer>
  );
}
