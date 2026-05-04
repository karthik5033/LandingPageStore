'use client';
import { motion } from 'framer-motion';

export default function MonolithFooter() {
  return (
    <footer className="w-full bg-black text-white relative z-20 py-10 px-6 md:px-24 border-t border-white/20">
      <div className="flex flex-col md:flex-row justify-between items-start gap-20 max-w-7xl mx-auto mb-12">
        
        {/* Brand Section */}
        <div className="flex flex-col gap-10 w-full md:w-2/5">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-4xl font-black tracking-[0.2em] uppercase text-white">
              MONOLITH
            </span>
          </motion.div>
          <p className="text-sm font-bold text-gray-600 leading-relaxed uppercase tracking-[0.2em]">
            Architectural brutalism for the 22nd century. Global headquarters in Berlin.
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 gap-16 w-full md:w-3/5">
          <div>
            <h4 className="text-[11px] font-black text-white uppercase tracking-[0.4em] mb-10">Studio</h4>
            <ul className="flex flex-col gap-6 text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase">
              <li><a href="#" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Profile</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Publications</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] font-black text-white uppercase tracking-[0.4em] mb-10">Contact</h4>
            <ul className="flex flex-col gap-6 text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase">
              <li><a href="#" className="hover:text-white transition-colors">Berlin HQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tokyo Office</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Inquiries</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] tracking-[0.3em] text-gray-700 uppercase font-bold max-w-7xl mx-auto">
        <p>&copy; {new Date().getFullYear()} Monolith Architecture. All rights reserved.</p>
        <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Legal Terms</a>
        </div>
      </div>
    </footer>
  );
}
