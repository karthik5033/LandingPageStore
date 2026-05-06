'use client';
import { motion } from 'framer-motion';

export default function Process() {
  return (
    <section id="craft" className="py-32 relative z-20 bg-transparent">
      <div className="container mx-auto px-6 md:px-16">
        <div className="flex flex-col md:flex-row gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex-1 md:mt-24">
            <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter mb-6">
              Tart <span className="text-[#800000]">Crimson.</span>
            </h2>
            <p className="text-white/60 text-lg border-l-4 border-[#800000] pl-6 bg-black/40 backdrop-blur-sm p-4">
              Wild-foraged sumac berries, crushed to deliver a vibrant, lemon-like tang. Essential to Mediterranean and Middle Eastern cuisine.
            </p>
          </motion.div>
          <div className="flex-1 space-y-8">
            {['Wild Foraging', 'Sun Drying', 'Coarse Crushing'].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="bg-black/60 backdrop-blur-md p-8 border-l-2 border-[#800000] hover:bg-[#800000]/10 transition-colors">
                <h3 className="text-2xl text-white font-bold uppercase tracking-wide mb-2">{s}</h3>
                <p className="text-white/50 text-sm">Processed without salt to maintain absolute purity and tartness.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}