'use client';
import { motion } from 'framer-motion';

export default function BotanicaFooter() {
  return (
    <footer className="w-full bg-[#050505] text-white relative z-20 pt-32 pb-12 px-6 md:px-24 border-t border-white/10">
      <div className="flex flex-col md:flex-row justify-between items-start gap-16 max-w-7xl mx-auto mb-24">
        
        {/* Brand Section */}
        <div className="flex flex-col gap-8 w-full md:w-1/3">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-3xl font-light tracking-widest uppercase text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              Botanica
            </span>
          </motion.div>
          <p className="text-sm font-light text-gray-500 leading-relaxed max-w-xs tracking-wide">
            Wildcrafted nectars and botanical elixirs. Sourced globally, pressed locally.
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-16 w-full md:w-2/3">
          <div>
            <h4 className="text-[10px] font-medium text-green-400 uppercase tracking-[0.3em] mb-8">Nectars</h4>
            <ul className="flex flex-col gap-5 text-xs font-light tracking-widest text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Citrus</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Greens</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Roots</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-medium text-green-400 uppercase tracking-[0.3em] mb-8">Journal</h4>
            <ul className="flex flex-col gap-5 text-xs font-light tracking-widest text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Farming</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Nutrition</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Recipes</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-medium text-green-400 uppercase tracking-[0.3em] mb-8">Company</h4>
            <ul className="flex flex-col gap-5 text-xs font-light tracking-widest text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Stockists</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] tracking-[0.2em] text-gray-600 uppercase font-medium max-w-7xl mx-auto">
        <p>&copy; {new Date().getFullYear()} Botanica Wellness. All rights reserved.</p>
        <div className="flex gap-8">
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
