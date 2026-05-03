'use client';
import { motion } from 'framer-motion';

export default function NoirFooter() {
  return (
    <footer className="w-full relative z-20 py-24 px-6 md:px-24 border-t border-[#3a2010]" style={{ backgroundColor: '#050100' }}>
      <div className="flex flex-col md:flex-row justify-between items-start">
        
        {/* Brand Section */}
        <div className="flex flex-col gap-8 w-full md:w-1/3">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3"
          >
            <div className="w-2 h-2 rounded-full" style={{ background: '#c8922a' }} />
            <span className="text-3xl font-black tracking-widest text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>NOIR</span>
          </motion.div>
          <p className="text-sm leading-relaxed font-light tracking-wide max-w-sm" style={{ color: '#8a7060' }}>
            The art of indulgence.<br/>
            Uncompromising cacao, sculpted by masters.
          </p>
          <div className="flex gap-6 mt-4">
             {['Instagram', 'Twitter', 'Journal'].map((social) => (
               <a key={social} href="#" className="text-[9px] uppercase tracking-[0.3em] hover:text-[#c8922a] transition-colors" style={{ color: '#5a4030' }}>{social}</a>
             ))}
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24 mt-16 md:mt-0 w-full md:w-2/3 justify-end text-left md:text-right">
          
          <div className="flex flex-col gap-6">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: '#c8922a' }}>Discover</h4>
            <a href="#" className="text-xs font-light hover:text-white transition-colors" style={{ color: '#8a7060' }}>Our Heritage</a>
            <a href="#" className="text-xs font-light hover:text-white transition-colors" style={{ color: '#8a7060' }}>The Process</a>
            <a href="#" className="text-xs font-light hover:text-white transition-colors" style={{ color: '#8a7060' }}>Sustainability</a>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: '#c8922a' }}>Boutique</h4>
            <a href="#" className="text-xs font-light hover:text-white transition-colors" style={{ color: '#8a7060' }}>All Collections</a>
            <a href="#" className="text-xs font-light hover:text-white transition-colors" style={{ color: '#8a7060' }}>Gifting</a>
            <a href="#" className="text-xs font-light hover:text-white transition-colors" style={{ color: '#8a7060' }}>Atelier Members</a>
          </div>

          <div className="flex flex-col gap-6">
             <h4 className="text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: '#c8922a' }}>Contact</h4>
             <span className="text-xs font-light" style={{ color: '#8a7060' }}>concierge@noir.com</span>
             <span className="text-xs font-light" style={{ color: '#8a7060' }}>Paris, FR</span>
          </div>

        </div>
      </div>

      <div className="mt-24 pt-8 border-t border-[#3a2010] flex flex-col md:flex-row justify-between items-center text-[9px] uppercase tracking-[0.3em]" style={{ color: '#4a3020' }}>
         <span>© 2026 NOIR CHOCOLATIER.</span>
         <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#c8922a] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#c8922a] transition-colors">Terms</a>
         </div>
      </div>
    </footer>
  );
}
