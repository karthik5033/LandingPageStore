'use client';
import { motion } from 'framer-motion';

export default function Features() {
  return (
    <section id="features" className="py-32 relative z-20 bg-transparent">
      <div className="container mx-auto px-6 md:px-16">
        <div className="border border-[#d2691e]/20 p-4 rounded-sm bg-black/40 backdrop-blur-md">
          <div className="border border-[#d2691e]/20 p-12 md:p-24 rounded-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-10" />
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-20">
              <div>
                <h2 className="text-4xl md:text-5xl font-light text-white mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                  True <span className="italic text-[#d2691e]">Ceylon.</span>
                </h2>
                <p className="text-white/60 leading-relaxed font-light mb-8">
                  Commercial cinnamon is often harsh, spicy, and contains high levels of coumarin. CASSIA sources exclusively true Ceylon cinnamon—sweet, floral, delicate, and entirely safe for daily consumption.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <span className="text-4xl text-white font-light block mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>0.004%</span>
                  <span className="text-[#d2691e] text-[10px] tracking-widest uppercase">Coumarin Level</span>
                </div>
                <div>
                  <span className="text-4xl text-white font-light block mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Alba</span>
                  <span className="text-[#d2691e] text-[10px] tracking-widest uppercase">Highest Grade</span>
                </div>
                <div>
                  <span className="text-4xl text-white font-light block mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Sweet</span>
                  <span className="text-[#d2691e] text-[10px] tracking-widest uppercase">Flavor Profile</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}