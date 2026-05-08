'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NovaFooter() {
  return (
    <footer className="w-full bg-transparent text-white relative z-20 py-12 px-8 md:px-16 border-t border-[#e0e7ff]/15">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="md:w-1/3">
            <span className="text-3xl font-light tracking-[0.5em] text-[#e0e7ff] block mb-4" style={{ fontFamily: "'Fraunces', serif" }}>Nova</span>
            <p className="text-sm font-light text-[#8a8fa8] leading-relaxed max-w-xs">Celestial cacao from volcanic highlands. Altitude-forged, sun-captured. Huila, Colombia → Copenhagen, Denmark.</p>
          </motion.div>
          <div className="grid grid-cols-3 gap-16 md:w-2/3">
            <div><h4 className="text-xs font-medium text-[#e0e7ff] uppercase tracking-[0.3em] mb-6">Constellation</h4><ul className="flex flex-col gap-4 text-xs font-light tracking-wider text-white/40"><li><a href="#collection" className="hover:text-white transition-colors">Zenith 90</a></li><li><a href="#collection" className="hover:text-white transition-colors">Apex 82</a></li><li><a href="#collection" className="hover:text-white transition-colors">Orbit 72</a></li></ul></div>
            <div><h4 className="text-xs font-medium text-[#e0e7ff] uppercase tracking-[0.3em] mb-6">Maison</h4><ul className="flex flex-col gap-4 text-xs font-light tracking-wider text-white/40"><li><a href="#manifesto" className="hover:text-white transition-colors">Thesis</a></li><li><a href="#atelier" className="hover:text-white transition-colors">Atelier</a></li><li><a href="#craft" className="hover:text-white transition-colors">The process</a></li></ul></div>
            <div><h4 className="text-xs font-medium text-[#e0e7ff] uppercase tracking-[0.3em] mb-6">Connect</h4><ul className="flex flex-col gap-4 text-xs font-light tracking-wider text-white/40"><li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li><li><a href="#" className="hover:text-white transition-colors">Instagram</a></li><li><a href="#" className="hover:text-white transition-colors">Journal</a></li></ul></div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-[0.25em] text-white/25 uppercase font-light"><p>&copy; {new Date().getFullYear()} Nova Celestial. All rights reserved.</p><p>Copenhagen · Huila · Kyoto</p></div>
      </div>
    </footer>
  );
}
