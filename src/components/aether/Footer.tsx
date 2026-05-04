'use client';
import { motion } from 'framer-motion';

export default function AetherFooter() {
  return (
    <footer className="w-full bg-black text-white relative z-20 py-24 px-6 md:px-24 border-t border-white/10">
      <div className="flex flex-col md:flex-row justify-between items-start gap-16 max-w-7xl mx-auto">
        
        {/* Brand Section */}
        <div className="flex flex-col gap-8 w-full md:w-1/3">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-2xl font-light tracking-[0.4em] uppercase text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              AETHER
            </span>
          </motion.div>
          <p className="text-xs font-light text-gray-500 leading-relaxed max-w-xs tracking-wide">
            Swiss precision engineered for the modern vanguard. Geneva, Switzerland.
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 w-full md:w-2/3">
          <div>
            <h4 className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.3em] mb-8">Timepieces</h4>
            <ul className="flex flex-col gap-5 text-xs font-light tracking-widest text-gray-600">
              <li><a href="#" className="hover:text-white transition-colors">Titanium</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Carbon</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sapphire</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.3em] mb-8">Manufacture</h4>
            <ul className="flex flex-col gap-5 text-xs font-light tracking-widest text-gray-600">
              <li><a href="#" className="hover:text-white transition-colors">Heritage</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Craftsmanship</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Boutiques</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.3em] mb-8">Services</h4>
            <ul className="flex flex-col gap-5 text-xs font-light tracking-widest text-gray-600">
              <li><a href="#" className="hover:text-white transition-colors">Client Care</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Servicing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Manuals</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-24 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] tracking-[0.2em] text-gray-600 uppercase font-bold max-w-7xl mx-auto">
        <p>&copy; {new Date().getFullYear()} Aether Horology. All rights reserved.</p>
        <div className="flex gap-8">
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
