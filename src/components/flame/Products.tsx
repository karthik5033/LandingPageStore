'use client';
import { motion } from 'framer-motion';

export default function Products() {
  return (
    <section id="collection" className="py-32 relative z-20 bg-transparent border-t border-[#ff4500]/20">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex justify-between items-end border-b-2 border-white/10 pb-8 mb-16">
          <h2 className="text-5xl font-black italic text-white tracking-tighter uppercase">The Arsenal</h2>
          <span className="text-[#ff4500] font-bold tracking-widest uppercase text-sm hidden md:block">View All Ignitions</span>
        </motion.div>

        <div className="flex flex-col gap-4">
          {[
            { n: 'Cayenne Extract', p: '$45' },
            { n: 'Crushed Fire Flakes', p: '$22' },
            { n: 'Whole Crimson Pods', p: '$30' }
          ].map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex justify-between items-center bg-black/60 border border-white/5 p-8 hover:border-[#ff4500] group cursor-pointer transition-colors">
              <h3 className="text-3xl font-black italic text-white tracking-tighter uppercase group-hover:text-[#ff4500] transition-colors">{p.n}</h3>
              <div className="flex items-center gap-8">
                <span className="text-white/50 font-bold">{p.p}</span>
                <div className="w-12 h-12 rounded-full bg-[#ff4500]/20 flex items-center justify-center group-hover:bg-[#ff4500] transition-colors">
                  <span className="text-white text-xl font-black">+</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}