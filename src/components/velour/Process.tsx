'use client';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Wind, Thermometer, FlaskConical, CircleDot } from 'lucide-react';

const stats = [
  { 
    value: "35%", 
    label: "Optimal Overrun", 
    icon: Wind,
    desc: "The mathematically perfect ratio of air to cream."
  },
  { 
    value: "-8°C", 
    label: "Extrusion Point", 
    icon: Thermometer,
    desc: "Precision temperature for peak silkiness."
  },
  { 
    value: "A2", 
    label: "Protein Grade", 
    icon: FlaskConical,
    desc: "Easier digestion, superior texture profile."
  }
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section id="roast" ref={ref} className="py-40 px-6 md:pl-40 md:pr-12 relative z-10 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
           
           <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <span className="text-[#d8b4e2] text-xs font-bold tracking-[0.5em] uppercase block mb-8">The Alchemy</span>
                <h2 className="text-6xl md:text-8xl font-serif text-white leading-[0.9] mb-12 tracking-tighter">
                   Molecular <br/> 
                   <span className="text-gray-600 font-light italic">Refinement.</span>
                </h2>
                
                <div className="space-y-12">
                   <p className="text-xl text-gray-400 font-light leading-relaxed max-w-lg border-l-2 border-[#d8b4e2]/30 pl-8">
                      Velour is the result of exhaustive research into the physics of frozen emulsions. 
                      Every swirl is a testament to our commitment to structural perfection and 
                      sensory elevation.
                   </p>

                   <div className="flex flex-wrap gap-12">
                      <div className="flex items-center gap-4">
                         <div className="w-12 h-12 rounded-full border border-[#d8b4e2]/20 flex items-center justify-center">
                            <CircleDot className="w-4 h-4 text-[#d8b4e2]" />
                         </div>
                         <span className="text-xs font-bold uppercase tracking-widest text-white">Precision Flow</span>
                      </div>
                      <div className="flex items-center gap-4">
                         <div className="w-12 h-12 rounded-full border border-[#d8b4e2]/20 flex items-center justify-center">
                            <Wind className="w-4 h-4 text-[#d8b4e2]" />
                         </div>
                         <span className="text-xs font-bold uppercase tracking-widest text-white">Aerated Silk</span>
                      </div>
                   </div>
                </div>
              </motion.div>
           </div>

           <div className="relative">
              <div className="grid grid-cols-1 gap-6">
                {stats.map((s, i) => (
                   <motion.div 
                     key={i}
                     initial={{ opacity: 0, scale: 0.9 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     transition={{ delay: i * 0.1, duration: 0.6 }}
                     className="group p-10 bg-[#0a0a0a] border border-white/5 hover:border-[#d8b4e2]/30 transition-all duration-700 relative overflow-hidden"
                   >
                      <div className="relative z-10">
                        <s.icon className="w-6 h-6 text-[#d8b4e2] mb-6 opacity-40 group-hover:opacity-100 transition-opacity" />
                        <h3 className="text-6xl font-serif text-white mb-2 tracking-tighter">{s.value}</h3>
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-[0.3em] group-hover:text-[#d8b4e2] transition-colors">{s.label}</p>
                        <p className="text-sm text-gray-600 mt-4 font-light max-w-[200px]">{s.desc}</p>
                      </div>
                      
                      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                         <span className="text-xs font-mono text-white">0{i+1}</span>
                      </div>
                   </motion.div>
                ))}
              </div>

              {/* Decorative Parallax */}
              <motion.div 
                style={{ y: y1 }}
                className="absolute -top-40 -right-20 w-96 h-96 bg-[#d8b4e2]/5 blur-[120px] rounded-full pointer-events-none"
              />
           </div>
           
        </div>
      </div>
    </section>
  );
}

