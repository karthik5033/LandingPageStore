'use client';
import { motion } from 'framer-motion';

const steps = [
  {
    num: "01",
    title: "Harvest",
    desc: "Hand-selected pods from the equatorial canopy."
  },
  {
    num: "02",
    title: "Ferment",
    desc: "Six days of natural fermentation to unlock flavor precursors."
  },
  {
    num: "03",
    title: "Roast",
    desc: "Precision heating to deepen the profile without burning."
  },
  {
    num: "04",
    title: "Conche",
    desc: "Continuous refinement for ultimate smoothness."
  }
];

export default function NoirProcess() {
  return (
    <section id="process" className="py-32 pl-6 pr-6 md:pl-40 md:pr-12 relative z-10 bg-[#0a0300]/95 border-y border-[#3a2010]/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 text-center md:text-left">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase block mb-4" style={{ color: '#c8922a' }}>Methodology</span>
            <h2 className="text-4xl md:text-5xl font-black text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>The Alchemy of Noir.</h2>
        </div>

        <div className="relative">
           {/* Connecting Line */}
           <div className="absolute top-12 left-0 right-0 h-[1px] hidden md:block" style={{ background: 'linear-gradient(90deg, transparent, #3a2010 10%, #3a2010 90%, transparent)' }} />

           <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative z-10">
             {steps.map((s, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: i * 0.15, duration: 0.6 }}
                 viewport={{ once: true }}
                 className="relative pt-8 md:pt-0"
               >
                  {/* Circle Node */}
                  <div className="hidden md:flex absolute top-[48px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#0a0300] border border-[#c8922a] items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-[#c8922a] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <div className="text-center md:text-left md:mt-24">
                     <div className="text-4xl font-serif font-black mb-4 opacity-20 text-white select-none">{s.num}</div>
                     <h3 className="text-xl font-serif text-white mb-3 tracking-wide">{s.title}</h3>
                     <p className="text-xs font-light leading-relaxed max-w-[200px] mx-auto md:mx-0" style={{ color: '#8a7060' }}>{s.desc}</p>
                  </div>
               </motion.div>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
}
