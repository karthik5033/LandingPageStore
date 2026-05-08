'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function LuminaFooter() {
  return (
    <footer className="w-full bg-transparent text-white relative z-20 py-12 px-8 md:px-16 border-t border-[#ffd700]/15">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="md:w-1/3">
            <span className="text-3xl font-light tracking-[0.5em] text-[#ffd700] block mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Lumina</span>
            <p className="text-sm font-light text-[#c4a882] leading-relaxed max-w-xs">Solar-roasted, altitude-sourced chocolate from the cloud forests of the Andes. Arhuaco, Colombia → Paris, France.</p>
          </motion.div>
          <div className="grid grid-cols-3 gap-16 md:w-2/3">
            <div>
              <h4 className="text-xs font-medium text-[#ffd700] uppercase tracking-[0.3em] mb-6">Collection</h4>
              <ul className="flex flex-col gap-4 text-xs font-light tracking-wider text-white/40">
                <li><a href="#collection" className="hover:text-white transition-colors">Radiance 88</a></li>
                <li><a href="#collection" className="hover:text-white transition-colors">Aura 75</a></li>
                <li><a href="#collection" className="hover:text-white transition-colors">Halo 65</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-medium text-[#ffd700] uppercase tracking-[0.3em] mb-6">Maison</h4>
              <ul className="flex flex-col gap-4 text-xs font-light tracking-wider text-white/40">
                <li><a href="#manifesto" className="hover:text-white transition-colors">Manifesto</a></li>
                <li><a href="#atelier" className="hover:text-white transition-colors">Atelier</a></li>
                <li><a href="#craft" className="hover:text-white transition-colors">The process</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-medium text-[#ffd700] uppercase tracking-[0.3em] mb-6">Connect</h4>
              <ul className="flex flex-col gap-4 text-xs font-light tracking-wider text-white/40">
                <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Journal</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-[0.25em] text-white/25 uppercase font-light">
          <p>&copy; {new Date().getFullYear()} Lumina Chocolatier. All rights reserved.</p>
          <p>Paris · Bogotá · Kyoto</p>
        </div>
      </div>
    </footer>
  );
}
