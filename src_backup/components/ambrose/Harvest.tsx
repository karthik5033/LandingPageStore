'use client';
import { motion } from 'framer-motion';

export default function AmbroseHarvest() {
  return (
    <section id="harvest" className="py-32 px-8 relative z-10 bg-gradient-to-b from-transparent to-[#140a05]/90">
      <div className="max-w-[1200px] mx-auto border-t border-[#e6cda3]/20 pt-32">
        <div className="text-center mb-24">
          <span className="text-[10px] font-bold tracking-[0.4em] text-[#e6cda3] uppercase block mb-6">Chapter II</span>
          <h2 className="text-5xl md:text-6xl font-normal text-[#f4eee1]" style={{ fontFamily: "'Libre Baskerville', serif" }}>
            The Sacred <span className="italic text-[#e6cda3]">Harvest.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { metric: 'Selection', title: 'The Criollo', desc: 'Accounting for less than 1% of global cacao, the Criollo bean lacks the defensive bitterness of bulk varieties, yielding a pale, highly aromatic interior.' },
            { metric: 'Ecosystem', title: 'Deep Canopy', desc: 'Our trees grow entirely in the shade of the ancient rainforest canopy. They mature slower, drawing unprecedented minerality from the soil.' },
            { metric: 'Fermentation', title: 'Wild Yeast', desc: 'Pods are opened and fermented in wooden boxes wrapped in banana leaves for seven days, guided entirely by the ambient wild yeasts of the jungle.' }
          ].map((t, i) => (
            <motion.div
              key={t.metric}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 1 }}
              className="p-10 border border-[#f4eee1]/5 bg-[#140a05]/50 backdrop-blur-md hover:border-[#e6cda3]/30 transition-all duration-700 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-[1px] bg-[#e6cda3]/40 group-hover:w-16 transition-all duration-500" />
                <span className="text-[10px] tracking-[0.3em] font-bold uppercase text-[#e6cda3]">{t.metric}</span>
              </div>
              <h3 className="text-3xl text-[#f4eee1] font-normal mb-6" style={{ fontFamily: "'Libre Baskerville', serif" }}>{t.title}</h3>
              <p className="text-[#f4eee1]/60 text-sm font-light leading-[1.9]">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
