'use client';
import { motion } from 'framer-motion';

export default function Process() {
  const steps = [
    { num: '01', title: 'The Harvest', desc: 'Hand-picked at dawn when essential oils are at their absolute peak, ensuring maximum potency and aromatic complexity.' },
    { num: '02', title: 'Sun Curing', desc: 'Slow-dried under the equatorial sun on raised beds, allowing flavours to concentrate and deepen naturally over weeks.' },
    { num: '03', title: 'Stone Grinding', desc: 'Milled using traditional granite stones at low temperatures to preserve the delicate volatile compounds that industrial grinders destroy.' }
  ];

  return (
    <section id="craft" className="py-32 relative z-20 bg-[#050302]/60 backdrop-blur-md border-y border-white/5">
      <div className="container mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Sticky Header */}
          <div className="lg:sticky lg:top-40">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1 }}
            >
              <span className="text-[#8b4513] text-[10px] font-bold tracking-[0.4em] uppercase mb-6 block">The Process</span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                Time is our <br />
                <span className="italic text-[#8b4513]">primary ingredient.</span>
              </h2>
              <p className="text-white/50 text-lg font-light leading-relaxed max-w-md">
                We refuse to rush perfection. Our ancestral methods take four times longer than commercial processing, yielding a depth of flavour that cannot be manufactured.
              </p>
            </motion.div>
          </div>

          {/* Right Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-[27px] top-4 bottom-4 w-[1px] bg-gradient-to-b from-[#8b4513] via-[#8b4513]/20 to-transparent z-0" />
            
            <div className="flex flex-col gap-24 relative z-10">
              {steps.map((step, idx) => (
                <motion.div 
                  key={step.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.8, delay: idx * 0.2 }}
                  className="flex gap-12 group"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-black border border-[#8b4513]/50 flex items-center justify-center text-[#8b4513] font-light text-xl transition-colors duration-500 group-hover:bg-[#8b4513] group-hover:text-black" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {step.num}
                    </div>
                  </div>
                  <div className="pt-2">
                    <h3 className="text-2xl text-white mb-4 transition-colors duration-300 group-hover:text-[#8b4513]" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {step.title}
                    </h3>
                    <p className="text-white/60 font-light leading-relaxed max-w-sm">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}