'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white relative z-20 py-10 px-6 md:px-24 border-t border-white/10">
      <div className="flex flex-col md:flex-row justify-between items-start">
        
        {/* Brand Section */}
        <div className="flex flex-col gap-8 w-full md:w-1/3">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3"
          >
            <div className="w-2 h-2 bg-[#fbcfe8]" />
            <span className="text-3xl font-serif font-bold tracking-tighter">GLACÉ</span>
          </motion.div>
          <p className="text-sm text-gray-300 leading-relaxed font-light tracking-wide max-w-sm">
            Crafting the finest gelato experience. <br/>
            Sourced ethically. Churned with precision.
          </p>
          <div className="flex gap-6 mt-4">
             {['Instagram', 'Twitter', 'LinkedIn'].map((social) => (
               <a key={social} href="#" className="text-[10px] text-gray-300 uppercase tracking-[0.2em] hover:text-[#fbcfe8] transition-colors">{social}</a>
             ))}
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24 mt-16 md:mt-0 w-full md:w-2/3 justify-end text-left md:text-right">
          
          <div className="flex flex-col gap-6">
            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.25em]">Explore</h4>
            <a href="#origin" className="text-sm font-light text-gray-200 hover:text-[#fbcfe8] transition-colors">Our Story</a>
            <a href="#origin" className="text-sm font-light text-gray-200 hover:text-[#fbcfe8] transition-colors">Sourcing</a>
            <a href="/gallery" className="text-sm font-light text-gray-200 hover:text-[#fbcfe8] transition-colors">Gallery</a>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.25em]">Shop</h4>
            <a href="#collection" className="text-sm font-light text-gray-200 hover:text-[#fbcfe8] transition-colors">Signature Gelatos</a>
            <a href="#collection" className="text-sm font-light text-gray-200 hover:text-[#fbcfe8] transition-colors">Pints</a>
            <a href="#collection" className="text-sm font-light text-gray-200 hover:text-[#fbcfe8] transition-colors">Merch</a>
          </div>

          <div className="flex flex-col gap-6">
             <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.25em]">Reach Us</h4>
             <a href="mailto:hello@glace.gelato" className="text-sm font-light text-gray-200 hover:text-[#fbcfe8] transition-colors">hello@glace.gelato</a>
             <span className="text-sm font-light text-gray-200">Los Angeles, CA</span>
          </div>

        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-400 uppercase tracking-[0.2em]">
         <span>© 2026 Glacé Gelato Co.</span>
         <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#fbcfe8] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#fbcfe8] transition-colors">Terms</a>
         </div>
      </div>
    </footer>
  );
}
