'use client';
import { motion } from 'framer-motion';

export default function Features() {
  return (
    <section id="features" className="py-32 relative z-20 bg-transparent">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-gradient-to-br from-black/80 to-[#424242]/20 backdrop-blur-lg border border-white/10 p-12 md:p-24 text-center rounded-[3rem]">
          <h2 className="text-5xl font-black text-white uppercase tracking-tighter mb-12">The Piperine Standard</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <span className="text-6xl font-black text-[#424242] block mb-4">6.5%</span>
              <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Piperine Content</h4>
              <p className="text-white/40 text-xs">Standard pepper is 2%. Ours delivers triple the heat and aromatic bite.</p>
            </div>
            <div className="border-y md:border-y-0 md:border-x border-white/10 py-8 md:py-0 md:px-8">
              <span className="text-6xl font-black text-[#424242] block mb-4">Tellicherry</span>
              <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Highest Grade</h4>
              <p className="text-white/40 text-xs">Only the top 10% largest corns qualify for our reserve collection.</p>
            </div>
            <div>
              <span className="text-6xl font-black text-[#424242] block mb-4">Unmilled</span>
              <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Whole Form</h4>
              <p className="text-white/40 text-xs">Pre-ground pepper loses 80% of its oils in a month. We only sell whole corns.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}