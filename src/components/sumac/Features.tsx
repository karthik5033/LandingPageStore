'use client';
import { motion } from 'framer-motion';

export default function Features() {
  return (
    <section id="features" className="py-32 relative z-20 bg-transparent">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-[#800000]/20 backdrop-blur-lg border border-[#800000] p-12 md:p-24 text-center max-w-5xl mx-auto">
          <h2 className="text-5xl font-black text-white uppercase tracking-tighter mb-8">Zero Added Salt.</h2>
          <p className="text-white/80 text-xl font-light mb-12">
            Commercial sumac is often diluted with up to 30% salt. Ours is 100% pure, freshly crushed drupes.
          </p>
          <div className="flex justify-center gap-12 text-[#800000] font-bold tracking-widest uppercase">
            <span>Antioxidant Rich</span>
            <span>•</span>
            <span>Vibrant Color</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}