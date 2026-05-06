'use client';
import { motion } from 'framer-motion';

export default function Features() {
  return (
    <section id="features" className="py-32 relative z-20 bg-transparent">
      <div className="container mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            {[
              { t: 'Whole Pods', d: 'Never broken. Eight perfect points on every star.' },
              { t: 'Anethole Rich', d: 'Maximum concentration of the active licorice compound.' },
              { t: 'Shade Cured', d: 'Dried slowly in dark lofts for 30 days.' }
            ].map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }} className="mb-12 last:mb-0 border-l border-[#4b0082] pl-8">
                <h3 className="text-3xl text-white font-light mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{f.t}</h3>
                <p className="text-white/40 font-light">{f.d}</p>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center">
            <div className="w-64 h-64 border border-[#4b0082]/40 rounded-full flex items-center justify-center relative animate-[spin_60s_linear_infinite]">
              <div className="absolute inset-4 border border-[#9370db]/20 rounded-full" />
              <div className="text-[#9370db] font-serif italic text-2xl rotate-45">Eight Points</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}