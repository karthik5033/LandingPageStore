'use client';
import { motion } from 'framer-motion';

export default function Products() {
  return (
    <section id="collection" className="py-32 relative z-20 bg-transparent border-t border-[#dc143c]/20">
      <div className="container mx-auto px-6 md:px-16">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex-1 w-full relative">
            <div className="aspect-square bg-gradient-to-br from-[#dc143c]/30 to-black rounded-full blur-3xl absolute inset-0" />
            <div className="aspect-[4/3] bg-black/80 border-2 border-[#dc143c] relative z-10 flex flex-col justify-between p-12">
              <span className="text-[#dc143c] font-mono text-sm tracking-widest">ITEM // 001</span>
              <div>
                <h3 className="text-5xl font-black text-white uppercase tracking-tighter mb-4">Hellfire Flakes</h3>
                <p className="text-white/60 font-mono text-xs max-w-sm mb-8">Coarse crushed. Preserving the seeds for maximum capsaicin delivery.</p>
                <button className="bg-[#dc143c] text-black font-black uppercase tracking-widest px-8 py-4 hover:bg-white transition-colors">Acquire - $30</button>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex-1 w-full relative">
            <div className="aspect-[4/3] bg-black/80 border border-white/10 relative flex flex-col justify-between p-12 hover:border-[#dc143c]/50 transition-colors">
              <span className="text-white/50 font-mono text-sm tracking-widest">ITEM // 002</span>
              <div>
                <h3 className="text-4xl font-bold text-white uppercase tracking-tighter mb-4">Smoked Dust</h3>
                <p className="text-white/60 font-mono text-xs max-w-sm mb-8">Micro-milled for instant absorption. Intense hickory profile.</p>
                <button className="border border-[#dc143c] text-[#dc143c] font-black uppercase tracking-widest px-8 py-4 hover:bg-[#dc143c] hover:text-black transition-colors">Acquire - $25</button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}