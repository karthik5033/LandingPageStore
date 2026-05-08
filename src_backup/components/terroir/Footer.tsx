'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function TerroirFooter() {
  return (
    <footer className="w-full bg-transparent text-white relative z-20 py-12 px-8 md:px-16 border-t border-[#b8845a]/15">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/3"
          >
            <span
              className="text-3xl font-light tracking-[0.4em] text-white uppercase block mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              TERROIR
            </span>
            <p className="text-sm font-light text-[#a08a76] leading-relaxed max-w-xs">
              Chocolate that speaks of place. From the volcanic soils of South America to your palate, every bar is a landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-3 gap-16 md:w-2/3">
            <div>
              <h4 className="text-xs font-medium text-[#b8845a] uppercase tracking-[0.3em] mb-6">Harvest</h4>
              <ul className="flex flex-col gap-4 text-xs font-light tracking-wider text-white/35">
                <li><a href="#harvest" className="hover:text-white transition-colors">Amazonas 78%</a></li>
                <li><a href="#harvest" className="hover:text-white transition-colors">Soconusco 70%</a></li>
                <li><a href="#harvest" className="hover:text-white transition-colors">Sambirano 74%</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-medium text-[#b8845a] uppercase tracking-[0.3em] mb-6">Learn</h4>
              <ul className="flex flex-col gap-4 text-xs font-light tracking-wider text-white/35">
                <li><a href="#heritage" className="hover:text-white transition-colors">Our Heritage</a></li>
                <li><a href="#philosophy" className="hover:text-white transition-colors">Philosophy</a></li>
                <li><a href="#journey" className="hover:text-white transition-colors">The Journey</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-medium text-[#b8845a] uppercase tracking-[0.3em] mb-6">Connect</h4>
              <ul className="flex flex-col gap-4 text-xs font-light tracking-wider text-white/35">
                <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-[0.25em] text-white/20 uppercase font-light">
          <p>&copy; {new Date().getFullYear()} Terroir Chocolate. All rights reserved.</p>
          <p>Lima · Antananarivo · Barcelona</p>
        </div>
      </div>
    </footer>
  );
}
