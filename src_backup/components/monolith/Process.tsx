'use client';
import { motion } from 'framer-motion';

export default function MonolithProcess() {
  return (
    <section id="process" className="relative z-10 py-48 px-6 bg-gradient-to-b from-black/0 via-black/80 to-black/40 border-t border-white/10">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
        >
          <span className="block text-gray-600 text-[10px] font-bold tracking-[0.5em] mb-8 uppercase">
            Our Approach
          </span>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-12 uppercase leading-none">
            Concrete. <br/><span className="text-gray-700">Steel.</span> Void.
          </h2>
          <p className="text-gray-400 text-base md:text-lg font-medium tracking-wide leading-relaxed max-w-3xl mx-auto mb-20 uppercase">
            Architecture is not about decorating space. It is about defining it. We carve monuments out of the urban landscape, creating structures that demand presence and stand invincible against time.
          </p>

          <button className="px-14 py-6 bg-white text-black text-[10px] font-bold tracking-[0.5em] uppercase hover:bg-gray-300 transition-colors">
            Commission a Project
          </button>
        </motion.div>
      </div>
    </section>
  );
}
