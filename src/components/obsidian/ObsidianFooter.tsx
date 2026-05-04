'use client';
import { motion } from 'framer-motion';

export default function ObsidianFooter() {
  return (
    <footer className="w-full bg-black text-white relative z-20 py-10 px-6 md:px-32 border-t border-[#1a120f]">
      <div className="flex flex-col md:flex-row justify-between items-start gap-16">
        
        {/* Brand Section */}
        <div className="flex flex-col gap-8 w-full md:w-1/3">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3"
          >
            <div className="w-2 h-2 bg-[#a67c52] rotate-45" />
            <span className="text-2xl font-bold tracking-[0.3em] uppercase" style={{ fontFamily: "'Playfair Display', serif" }}>OBSIDIAN</span>
          </motion.div>
          <p className="text-sm text-[#8c7f75] leading-relaxed tracking-wide max-w-sm">
            The pinnacle of dark chocolate.<br/>
            Uncompromising. Unapologetic. Unforgettable.
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 w-full md:w-2/3">
          <div>
            <h4 className="text-[10px] font-bold text-[#a67c52] uppercase tracking-[0.3em] mb-6">Collections</h4>
            <ul className="flex flex-col gap-4 text-xs tracking-widest text-[#a09085] uppercase">
              <li><a href="#" className="hover:text-white transition-colors">The Core</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Reserve</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Limited</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gifts</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-bold text-[#a67c52] uppercase tracking-[0.3em] mb-6">Maison</h4>
            <ul className="flex flex-col gap-4 text-xs tracking-widest text-[#a09085] uppercase">
              <li><a href="#" className="hover:text-white transition-colors">Philosophy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sourcing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Journal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-bold text-[#a67c52] uppercase tracking-[0.3em] mb-6">Legal</h4>
            <ul className="flex flex-col gap-4 text-xs tracking-widest text-[#a09085] uppercase">
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-[#1a120f] flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] tracking-widest text-[#60554d] uppercase">
        <p>&copy; {new Date().getFullYear()} Obsidian Chocolate Co. All rights reserved.</p>
        <p>Crafted for the bold.</p>
      </div>
    </footer>
  );
}
