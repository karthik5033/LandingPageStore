'use client';
import { motion } from 'framer-motion';
import { Crosshair, Code, Zap, Headphones } from 'lucide-react';

const modes = [
    {
        icon: Crosshair,
        title: "COMPETITIVE",
        desc: "Maintains peak reaction times during intense clutches.",
        color: "#ccff00"
    },
    {
        icon: Code,
        title: "DEVELOPMENT",
        desc: "Sustained focus for long coding sprints without jitter.",
        color: "#00ccff"
    },
    {
        icon: Headphones,
        title: "CREATOR",
        desc: "High energy presence for stream endurance.",
        color: "#ff0066"
    }
];

export default function Lifestyle() {
  return (
    <section id="lifestyle" className="min-h-screen py-32 px-6 md:px-12 relative z-10 flex items-center justify-start pointer-events-none text-left overflow-hidden">
        
        {/* Left Gradient */}
        <div className="absolute inset-y-0 left-0 w-full md:w-3/5 bg-gradient-to-r from-black via-black/90 to-transparent z-0 pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10 pointer-events-auto">
            <div className="flex flex-col items-start md:w-1/2">
                
                <motion.div
                   initial={{ opacity: 0, x: -50 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   className="mb-16"
                >
                   <span className="text-[#ccff00] font-bold uppercase tracking-[0.5em] mb-4 block text-xs">
                      /// USE CASES
                   </span>
                   <h2 className="text-5xl md:text-7xl font-black italic uppercase leading-none mb-6 text-white">
                      Engineered for <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] to-white">The Grind.</span>
                   </h2>
                </motion.div>

                <div className="flex flex-col gap-8 w-full">
                    {modes.map((mode, i) => (
                        <motion.div 
                           key={i}
                           initial={{ opacity: 0, x: -20 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           viewport={{ once: true }}
                           transition={{ delay: i * 0.1 }}
                           className="group flex items-center gap-6 p-6 border-l-2 border-white/10 hover:border-[#ccff00] bg-gradient-to-r from-white/5 to-transparent transition-all cursor-default"
                        >
                            <div className="p-4 bg-black border border-white/10 rounded-sm group-hover:border-[#ccff00] transition-colors">
                                <mode.icon size={24} style={{ color: mode.color }} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black italic uppercase text-white mb-1">{mode.title}</h3>
                                <p className="text-gray-400 font-mono text-xs tracking-wide">{mode.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    </section>
  );
}
