'use client';
import { motion } from 'framer-motion';
import { Brain, HeartPulse, Clock, Zap } from 'lucide-react';

const sciencePoints = [
    { title: "Nootropic Focus", desc: "Proprietary blend of Lion's Mane and Alpha-GPC.", icon: Brain },
    { title: "Zero Lag", desc: "Optimized absorption curve for jitter-free energy.", icon: Zap },
    { title: "Sustained Release", desc: "6-hour peak performance window.", icon: Clock },
    { title: "System Health", desc: "No sugar. No crash. Full vitality.", icon: HeartPulse }
];

export default function Science() {
  return (
    <section id="science" className="min-h-screen py-32 px-6 md:px-12 relative z-10 overflow-hidden flex items-center justify-start pointer-events-none">
         
         {/* Left Gradient */}
         <div className="absolute inset-y-0 left-0 w-full md:w-3/5 bg-gradient-to-r from-black via-black/90 to-transparent z-0 pointer-events-none" />

         <div className="max-w-7xl mx-auto w-full relative z-10 pointer-events-auto">
             <div className="flex flex-col items-start md:w-1/2 text-left">

                <motion.div
                   initial={{ opacity: 0, x: -50 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   className="mb-16"
                >
                   <span className="text-gray-500 font-bold uppercase tracking-[0.5em] mb-4 block">
                      /// Data Core
                   </span>
                   <h2 className="text-5xl md:text-8xl font-black italic uppercase leading-none mb-8 text-white">
                      The Science of <br/> <span className="text-[#ccff00]">Victory.</span>
                   </h2>
                   <p className="text-gray-400 text-lg leading-relaxed max-w-sm border-l-4 border-[#ccff00] pl-6 py-2">
                      Backed by clinical research on cognitive enhancement and physical endurance. 
                      This isn't just caffeine—it's high-octane brain fuel.
                   </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                    {sciencePoints.map((pt, i) => (
                        <motion.div 
                           key={i}
                           initial={{ opacity: 0, scale: 0.95 }}
                           whileInView={{ opacity: 1, scale: 1 }}
                           viewport={{ once: true }}
                           transition={{ delay: i * 0.1 }}
                           className="bg-neutral-900/40 p-6 border border-white/5 hover:border-[#ccff00] transition-all group backdrop-blur-sm text-left"
                        >
                            <div className="flex justify-start mb-4">
                                <pt.icon className="text-gray-600 group-hover:text-[#ccff00] transition-colors" size={24} />
                            </div>
                            <h3 className="text-xl font-black italic uppercase mb-2 text-white">{pt.title}</h3>
                            <p className="text-sm font-mono text-gray-500">{pt.desc}</p>
                        </motion.div>
                    ))}
                </div>

             </div>
         </div>
    </section>
  );
}
