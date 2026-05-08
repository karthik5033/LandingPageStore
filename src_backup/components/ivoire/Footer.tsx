'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function IvoireFooter() {
  return (
    <footer className="w-full bg-[#f5efe6]/70 backdrop-blur-xl relative z-20 py-12 px-8 md:px-16 border-t border-[#2a1f1a]/[0.08]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="md:w-1/3">
            <span className="text-3xl font-normal tracking-[0.5em] text-[#2a1f1a] uppercase block mb-4" style={{ fontFamily: "'Libre Baskerville', serif" }}>IVOIRE</span>
            <p className="text-sm font-light text-[#6b4a2e]/70 leading-relaxed max-w-xs">The art of white chocolate, elevated. Four ingredients, infinite patience.</p>
          </motion.div>
          <div className="grid grid-cols-3 gap-16 md:w-2/3">
            <div>
              <h4 className="text-xs font-medium text-[#6b4a2e] uppercase tracking-[0.3em] mb-6">Collection</h4>
              <ul className="flex flex-col gap-4 text-xs font-light tracking-wider text-[#6b4a2e]/50">
                <li><a href="#collection" className="hover:text-[#2a1f1a] transition-colors">Classique</a></li>
                <li><a href="#collection" className="hover:text-[#2a1f1a] transition-colors">Caramel Blond</a></li>
                <li><a href="#collection" className="hover:text-[#2a1f1a] transition-colors">Fleur de Sel</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-medium text-[#6b4a2e] uppercase tracking-[0.3em] mb-6">Maison</h4>
              <ul className="flex flex-col gap-4 text-xs font-light tracking-wider text-[#6b4a2e]/50">
                <li><a href="#essence" className="hover:text-[#2a1f1a] transition-colors">Essence</a></li>
                <li><a href="#craft" className="hover:text-[#2a1f1a] transition-colors">Craft</a></li>
                <li><a href="#alchemy" className="hover:text-[#2a1f1a] transition-colors">Alchemy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-medium text-[#6b4a2e] uppercase tracking-[0.3em] mb-6">Connect</h4>
              <ul className="flex flex-col gap-4 text-xs font-light tracking-wider text-[#6b4a2e]/50">
                <li><Link href="/gallery" className="hover:text-[#2a1f1a] transition-colors">Gallery</Link></li>
                <li><a href="#" className="hover:text-[#2a1f1a] transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-[#2a1f1a] transition-colors">Press</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[#2a1f1a]/[0.06] flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-[0.25em] text-[#6b4a2e]/40 uppercase font-light">
          <p>&copy; {new Date().getFullYear()} Ivoire Chocolatier. All rights reserved.</p>
          <p>Zürich · Paris · Kyoto</p>
        </div>
      </div>
    </footer>
  );
}
