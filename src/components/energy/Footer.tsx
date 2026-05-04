'use client';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

// Custom Footer for Energy Drink Theme
const Footer = () => (
   <footer className="py-10 px-6 md:px-12 relative z-20 border-t border-[#ccff00]/20 backdrop-blur-xl bg-black/40 text-left">
      <div className="flex flex-col md:flex-row justify-between items-start gap-24 w-full max-w-7xl mx-auto">
          
          <div>
              <div className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase mb-2 text-white leading-none">
                 VOLT<span className="text-[#ccff00]">.</span>OS
              </div>
              <p className="text-gray-500 font-mono text-sm max-w-xs">
                 The world's first bio-adaptive energy matrix. 
                 Designed for eSports athletes and high-performance creators.
              </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24 text-sm font-bold uppercase tracking-widest text-gray-400">
             <div className="flex flex-col gap-4">
                <span className="text-white mb-4 block text-xs font-mono tracking-[0.2em] border-b border-[#ccff00] pb-2 w-12">LINK</span>
                <a className="hover:text-[#ccff00] transition-colors" href="#">Products</a>
                <a className="hover:text-[#ccff00] transition-colors" href="#">Science</a>
                <a className="hover:text-[#ccff00] transition-colors" href="#">Sponsorships</a>
             </div>
             <div className="flex flex-col gap-4">
                <span className="text-white mb-4 block text-xs font-mono tracking-[0.2em] border-b border-[#ccff00] pb-2 w-12">Social</span>
                <a className="hover:text-[#ccff00] transition-colors" href="#">Twitch</a>
                <a className="hover:text-[#ccff00] transition-colors" href="#">Discord</a>
                <a className="hover:text-[#ccff00] transition-colors" href="#">Instagram</a>
             </div>
          </div>
      </div>
      
      <div className="mt-12 pt-8 border-t border-white/10 flex justify-between items-center text-[10px] text-gray-600 font-mono tracking-widest uppercase">
          <span>© 2026 VOLT BEVERAGE CO. SECTOR 7.</span>
          <span>POWERED BY KINETIC ENGINE</span>
      </div>
   </footer>
);

export default Footer;
