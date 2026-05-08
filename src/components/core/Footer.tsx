'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CoreFooter() {
  return (
    <footer className="w-full bg-transparent text-white relative z-20 py-12 px-8 md:px-16 border-t border-[#00f0ff]/15">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/3"
          >
            <span
              className="text-3xl font-light tracking-[0.5em] text-white block mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Core
            </span>
            <p className="text-sm font-light text-[#7a8a9a] leading-relaxed max-w-xs">
              Technical-grade single-origin chocolate. Zero additives. Full transparency. Tumaco, Colombia → Berlin, Germany.
            </p>
          </motion.div>

          <div className="grid grid-cols-3 gap-16 md:w-2/3">
            <div>
              <h4 className="text-xs font-medium text-[#00f0ff] uppercase tracking-[0.3em] mb-6">Collection</h4>
              <ul className="flex flex-col gap-4 text-xs font-light tracking-wider text-white/40">
                <li><a href="#collection" className="hover:text-white transition-colors">Core Noir 90</a></li>
                <li><a href="#collection" className="hover:text-white transition-colors">Core Noir 82</a></li>
                <li><a href="#collection" className="hover:text-white transition-colors">Core Noir 75</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-medium text-[#00f0ff] uppercase tracking-[0.3em] mb-6">System</h4>
              <ul className="flex flex-col gap-4 text-xs font-light tracking-wider text-white/40">
                <li><a href="#manifesto" className="hover:text-white transition-colors">Manifesto</a></li>
                <li><a href="#atelier" className="hover:text-white transition-colors">Atelier</a></li>
                <li><a href="#craft" className="hover:text-white transition-colors">The process</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-medium text-[#00f0ff] uppercase tracking-[0.3em] mb-6">Connect</h4>
              <ul className="flex flex-col gap-4 text-xs font-light tracking-wider text-white/40">
                <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Journal</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-[0.25em] text-white/25 uppercase font-light">
          <p>&copy; {new Date().getFullYear()} Core Chocolate. All rights reserved.</p>
          <p>Berlin · Tumaco · Tokyo</p>
        </div>
      </div>
    </footer>
  );
}
