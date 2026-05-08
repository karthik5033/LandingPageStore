'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function VortexFooter() {
  return (
    <footer className="w-full bg-transparent text-white relative z-20 py-12 px-8 md:px-16 border-t border-[#ccff00]/15">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="md:w-1/3">
            <span className="text-3xl font-normal tracking-[0.3em] text-[#ccff00] block mb-4" style={{ fontFamily: "'Krona One', sans-serif" }}>Vortex</span>
            <p className="text-sm font-light text-white/40 leading-relaxed max-w-xs">High-velocity cacao extraction. Kinetic refinement, sonic tempering. Esmeraldas, Ecuador → London, England.</p>
          </motion.div>
          <div className="grid grid-cols-3 gap-16 md:w-2/3">
            <div><h4 className="text-xs font-medium text-[#ccff00] uppercase tracking-[0.3em] mb-6">Frequency</h4><ul className="flex flex-col gap-4 text-xs font-light tracking-wider text-white/40"><li><a href="#collection" className="hover:text-white transition-colors">Pulse 88</a></li><li><a href="#collection" className="hover:text-white transition-colors">Surge 78</a></li><li><a href="#collection" className="hover:text-white transition-colors">Volt 70</a></li></ul></div>
            <div><h4 className="text-xs font-medium text-[#ccff00] uppercase tracking-[0.3em] mb-6">System</h4><ul className="flex flex-col gap-4 text-xs font-light tracking-wider text-white/40"><li><a href="#manifesto" className="hover:text-white transition-colors">Declaration</a></li><li><a href="#atelier" className="hover:text-white transition-colors">Kinetics</a></li><li><a href="#craft" className="hover:text-white transition-colors">The pipeline</a></li></ul></div>
            <div><h4 className="text-xs font-medium text-[#ccff00] uppercase tracking-[0.3em] mb-6">Connect</h4><ul className="flex flex-col gap-4 text-xs font-light tracking-wider text-white/40"><li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li><li><a href="#" className="hover:text-white transition-colors">Instagram</a></li><li><a href="#" className="hover:text-white transition-colors">Journal</a></li></ul></div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-[0.25em] text-white/25 uppercase font-light"><p>&copy; {new Date().getFullYear()} Vortex Kinetics. All rights reserved.</p><p>London · Guayaquil · Tokyo</p></div>
      </div>
    </footer>
  );
}
