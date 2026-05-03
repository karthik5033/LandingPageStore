'use client';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

export default function HeroSection() {
    return (
        <section id="hero" className="h-screen flex flex-col justify-center px-6 md:px-12 relative z-10 pointer-events-none overflow-hidden pt-32 md:pt-48">
            {/* Left Gradient specific for Hero text readability */}
            <div className="absolute inset-y-0 left-0 w-full md:w-2/3 bg-gradient-to-r from-black via-black/80 to-transparent z-0 pointer-events-none" />

            {/* Content */}
            <div className="max-w-7xl mx-auto w-full flex flex-col items-start justify-center relative z-10 pointer-events-auto h-full">
                
                <motion.div
                   initial={{ opacity: 0, x: -50 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.8, ease: "circOut" }}
                   className="max-w-3xl"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="flex gap-1">
                            <div className="w-2 h-2 bg-[#ccff00]" />
                            <div className="w-2 h-2 bg-[#ccff00]/50" />
                            <div className="w-2 h-2 bg-[#ccff00]/25" />
                        </div>
                        <span className="text-[#ccff00] font-mono font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs">System Online // Power Surge</span>
                    </div>

                    <h1 className="text-7xl md:text-[9rem] font-black italic tracking-tighter leading-[0.85] mb-10 text-white">
                        VOLT<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] to-transparent">RUSH</span>
                    </h1>

                    <p className="text-gray-400 max-w-lg text-lg md:text-2xl font-medium leading-relaxed border-l-4 border-[#ccff00] pl-8 py-2 mb-12">
                        <span className="text-white font-bold block mb-1">Limitless Energy. Zero Compromise.</span>
                        The next evolution in high-performance fuel for the digital athlete.
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 mb-24 w-full justify-start">
                        <button className="px-10 py-4 bg-[#ccff00] text-black font-black uppercase tracking-widest hover:bg-white transition-colors skew-x-[-12deg] group w-full md:w-auto">
                            <span className="block skew-x-[12deg] group-hover:scale-105 transition-transform">Pre-Order Now</span>
                        </button>
                        <button className="px-10 py-4 border border-white/20 text-white font-bold uppercase tracking-widest hover:border-[#ccff00] hover:text-[#ccff00] transition-colors skew-x-[-12deg] group w-full md:w-auto">
                            <span className="block skew-x-[12deg] group-hover:scale-105 transition-transform">Explore Can</span>
                        </button>
                    </div>

                    {/* Integrated Stats at Bottom Left */}
                    <div className="grid grid-cols-2 gap-16 border-t border-white/10 pt-8 w-full max-w-lg">
                        <div className="text-[#ccff00] font-mono">
                            <div className="text-4xl md:text-5xl font-black">100%</div>
                            <div className="text-[10px] tracking-widest uppercase text-gray-500 mt-1">Bio-Availability</div>
                        </div>
                        <div className="text-white font-mono">
                            <div className="text-4xl md:text-5xl font-black">0<span className="text-sm align-top text-gray-600">g</span></div>
                            <div className="text-[10px] tracking-widest uppercase text-gray-500 mt-1">Sugar Crash</div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
