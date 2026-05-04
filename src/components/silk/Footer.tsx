'use client';
import { motion } from 'framer-motion';

export default function SilkFooter() {
  return (
    <footer className="w-full bg-[#0a0705] text-white relative z-20 py-10 px-6 md:px-32 border-t border-[#c8a97e]/20">
      <div className="flex flex-col md:flex-row justify-between items-start gap-16 max-w-7xl mx-auto">
        
        {/* Brand Section */}
        <div className="flex flex-col gap-6 w-full md:w-1/3">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-3xl font-light tracking-[0.3em] uppercase text-[#e8d5c4]" style={{ fontFamily: "'Playfair Display', serif" }}>
              S I L K
            </span>
          </motion.div>
          <p className="text-sm font-light text-[#a89584] leading-relaxed max-w-xs">
            The ultimate expression of chocolate refinement. Paris, France.
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 w-full md:w-2/3">
          <div>
            <h4 className="text-[10px] font-bold text-[#c8a97e] uppercase tracking-[0.3em] mb-6">Explore</h4>
            <ul className="flex flex-col gap-4 text-xs font-light tracking-wider text-[#a89584]">
              <li><a href="#" className="hover:text-white transition-colors">Truffles</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bars</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pralines</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-bold text-[#c8a97e] uppercase tracking-[0.3em] mb-6">Maison</h4>
            <ul className="flex flex-col gap-4 text-xs font-light tracking-wider text-[#a89584]">
              <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ingredients</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Boutiques</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-bold text-[#c8a97e] uppercase tracking-[0.3em] mb-6">Support</h4>
            <ul className="flex flex-col gap-4 text-xs font-light tracking-wider text-[#a89584]">
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-[#c8a97e]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] tracking-widest text-[#a89584] uppercase font-light max-w-7xl mx-auto">
        <p>&copy; {new Date().getFullYear()} Silk Chocolatier. All rights reserved.</p>
        <p>Paris • New York • Tokyo</p>
      </div>
    </footer>
  );
}
