'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Activity, Clock, Weight, BatteryCharging } from 'lucide-react';

const stats = [
    { label: "Caffeine", value: "200mg", icon: Zap, color: "#ccff00" },
    { label: "B-Vitamins", value: "500%", icon: Activity, color: "#33bbff" },
    { label: "Sugar", value: "0g", icon: Weight, color: "#ff3366" },
    { label: "Focus", value: "6hrs", icon: BatteryCharging, color: "#ffffff" }
];

export default function SpecsGrid() {
    return (
        <section id="performance" className="min-h-screen py-32 px-6 md:px-12 flex items-center relative z-10 pointer-events-none overflow-hidden text-left">
            {/* Left Gradient */}
            <div className="absolute inset-y-0 left-0 w-full md:w-3/5 bg-gradient-to-r from-black via-black/90 to-transparent z-0 pointer-events-none" />

            <div className="max-w-7xl mx-auto w-full relative z-10 pointer-events-auto">
                
                <div className="flex flex-col md:w-1/2 items-start">
                    <motion.div
                       initial={{ opacity: 0, x: -50 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       viewport={{ once: true }}
                       transition={{ duration: 0.8 }}
                       className="mb-16"
                    >
                        <span className="text-[#ccff00] font-black uppercase tracking-[0.4em] text-sm mb-4 block">
                            /// System Architecture
                        </span>
                        <h2 className="text-6xl md:text-8xl font-black italic uppercase leading-[0.85] mb-8 text-white">
                            Total <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] to-green-600">Dominance.</span>
                        </h2>
                        <p className="text-gray-400 text-lg md:text-xl font-medium max-w-md border-l-4 border-[#ccff00] pl-6 py-2">
                           Engineered with a proprietary Nootropic stack designed to elevate cognitive function and extend physical endurance without the crash.
                        </p>
                    </motion.div>

                    {/* Left aligned specs grid */}
                    <div className="grid grid-cols-2 gap-4">
                        {stats.map((stat, i) => (
                            <motion.div 
                                key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05, borderColor: stat.color }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-black/60 backdrop-blur-md border border-white/10 p-8 flex flex-col justify-between aspect-square group cursor-default transition-colors hover:bg-black/80"
                        >
                            <div className="flex justify-between items-start">
                                <stat.icon className="w-8 h-8 transition-colors duration-300" style={{ color: stat.color }} />
                                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: stat.color, boxShadow: `0 0 10px ${stat.color}` }} />
                            </div>
                            <div>
                                <h3 className="text-4xl md:text-5xl font-black italic text-white mb-2 tracking-tighter">{stat.value}</h3>
                                <p className="text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">{stat.label}</p>
                            </div>
                        </motion.div>
                    ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
