'use client';
import { motion } from 'framer-motion';

export default function NocturneEcosystem() {
  return (
    <section className="py-40 px-8 relative z-10">
      <div className="max-w-[1000px] mx-auto text-center border-t border-b border-[#cfbba0]/10 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="text-[10px] font-bold tracking-[0.4em] text-[#cfbba0] uppercase block mb-8">Ecosystem</span>
          <h2 className="text-4xl md:text-5xl font-light text-white leading-tight mb-12" style={{ fontFamily: "'Cinzel', serif" }}>
            Beyond Sustainability. <br /> <span className="italic text-[#cfbba0]">Regeneration.</span>
          </h2>
          <p className="text-white/60 text-lg font-light leading-[2.1] max-w-3xl mx-auto mb-12">
            We pay our farmers 400% above the Fair Trade premium. In return, they commit to preserving the ancient, low-yield varieties of cacao, maintaining the biodiversity of the forest canopy, and hand-harvesting every single pod without the use of industrial machinery.
          </p>
          <div className="flex justify-center gap-12 text-[#cfbba0]">
            <div className="text-center">
              <div className="text-4xl font-light mb-2" style={{ fontFamily: "'Cinzel', serif" }}>400%</div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-white/40">Premium Paid</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light mb-2" style={{ fontFamily: "'Cinzel', serif" }}>0</div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-white/40">Chemicals</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light mb-2" style={{ fontFamily: "'Cinzel', serif" }}>100%</div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-white/40">Canopy Cover</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
