'use client';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Beaker, Thermometer, Clock, ShieldCheck } from 'lucide-react';

const stats = [
  { 
    value: "24h", 
    label: "Maturation", 
    icon: Clock,
    desc: "Resting the base for optimal flavor infusion."
  },
  { 
    value: "-14°C", 
    label: "Serving Precision", 
    icon: Thermometer,
    desc: "The exact point of perfect silkiness."
  },
  { 
    value: "100%", 
    label: "Organic A2", 
    icon: ShieldCheck,
    desc: "Sourced from local heritage pastures."
  }
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section id="roast" ref={ref} className="py-40 px-6 md:pl-40 md:pr-12 relative z-10 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
           
           <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <span className="text-[#fbcfe8] text-xs font-bold tracking-[0.5em] uppercase block mb-8">The Methodology</span>
                <h2 className="text-6xl md:text-8xl font-serif text-white leading-[0.9] mb-12 tracking-tighter">
                   Precision in <br/> 
                   <span className="text-gray-600 font-light italic">Every Churn.</span>
                </h2>
                
                <div className="space-y-12">
                   <p className="text-xl text-gray-400 font-light leading-relaxed max-w-lg border-l-2 border-[#fbcfe8]/30 pl-8">
                      Our process is a delicate balance of molecular science and culinary intuition. 
                      We don't just freeze; we cultivate texture through precise temperature control 
                      and controlled aeration.
                   </p>

                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 group hover:border-[#fbcfe8]/30 transition-all duration-500">
                         <Beaker className="w-6 h-6 text-[#fbcfe8] mb-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                         <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-2">Molecular Prep</h4>
                         <p className="text-xs text-gray-500 leading-relaxed">Exact fat-to-sugar ratios for a non-crystallized finish.</p>
                      </div>
                      <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 group hover:border-[#fbcfe8]/30 transition-all duration-500">
                         <div className="w-6 h-6 border border-[#fbcfe8] rounded-full mb-4 flex items-center justify-center text-[10px] text-[#fbcfe8] font-bold">A</div>
                         <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-2">Batch Freezing</h4>
                         <p className="text-xs text-gray-500 leading-relaxed">Small batch production ensuring total quality control.</p>
                      </div>
                   </div>
                </div>
              </motion.div>
           </div>

           <div className="relative mt-20 lg:mt-0">
              <div className="space-y-6">
                {stats.map((s, i) => (
                   <motion.div 
                     key={i}
                     initial={{ opacity: 0, x: 50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ delay: i * 0.2, duration: 0.8 }}
                     className="group flex items-center gap-8 p-10 bg-gradient-to-r from-white/[0.02] to-transparent border-b border-white/5 hover:border-[#fbcfe8]/20 transition-all duration-500"
                   >
                      <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#fbcfe8] group-hover:text-black transition-all duration-500">
                         <s.icon className="w-6 h-6" />
                      </div>
                      <div>
                         <div className="flex items-baseline gap-4">
                            <h3 className="text-5xl font-serif text-white">{s.value}</h3>
                            <span className="text-[10px] font-bold text-[#fbcfe8] uppercase tracking-[0.2em]">{s.label}</span>
                         </div>
                         <p className="text-sm text-gray-500 mt-1 font-light">{s.desc}</p>
                      </div>
                   </motion.div>
                ))}
              </div>

              {/* Parallax Decorative Elements */}
              <motion.div 
                style={{ y: y1 }}
                className="absolute -top-20 -right-20 w-64 h-64 border border-white/5 rounded-full pointer-events-none"
              />
              <motion.div 
                style={{ y: y2 }}
                className="absolute top-1/2 -left-10 w-40 h-40 bg-[#fbcfe8]/5 blur-3xl rounded-full pointer-events-none"
              />
           </div>
           
        </div>
      </div>
    </section>
  );
}

