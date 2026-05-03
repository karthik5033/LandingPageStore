'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const flavors = [
   { name: "Void Lemon", hex: "#ccff00" },
   { name: "Cyber Cherry", hex: "#ff0066" },
   { name: "Neon Blue", hex: "#00ccff" },
];

export default function FlavorProfile() {
    return (
        <section id="ingredients" className="min-h-screen flex flex-col justify-center items-start px-6 md:px-12 relative z-10 pointer-events-none overflow-hidden text-left">
             {/* Left Gradient */}
            <div className="absolute inset-y-0 left-0 w-full md:w-3/5 bg-gradient-to-r from-black via-black/90 to-transparent z-0 pointer-events-none" />

            <div className="max-w-4xl w-full text-left relative z-10 pointer-events-auto flex flex-col gap-16">
                
                <motion.div
                   initial={{ opacity: 0, x: -50 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                >
                   <span className="text-gray-500 font-bold uppercase tracking-[0.5em] mb-4 block">Flavor Profiles</span>
                   <h2 className="text-6xl md:text-9xl font-black italic uppercase leading-none mb-12 text-white">
                      Liquid <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Adrenaline.</span>
                   </h2>
                </motion.div>

                <div className="flex flex-wrap justify-start gap-12 mt-12">
                   {flavors.map((fl, i) => (
                      <div key={i} className="group relative w-32 md:w-48 aspect-[2/3] border border-white/20 bg-black/40 backdrop-blur-md hover:border-white transition-all cursor-pointer overflow-hidden p-6 flex flex-col justify-end">
                         
                         {/* Color splash */}
                         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                         <div 
                            className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-[40px] opacity-50 group-hover:opacity-100 transition-opacity duration-500"
                            style={{ backgroundColor: fl.hex }} 
                         />
                         
                         <div className="relative z-20">
                            <div className="w-8 h-[2px] bg-white mb-4 group-hover:w-full transition-all duration-300" style={{ backgroundColor: fl.hex }} />
                            <h3 className="text-xl md:text-2xl font-black italic uppercase text-white leading-none">{fl.name.split(' ')[0]}<br/>{fl.name.split(' ')[1]}</h3>
                         </div>

                         {/* Hover details */}
                         <div className="absolute inset-0 bg-black/90 flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-30">
                            <span className="text-[#ccff00] font-bold text-xs uppercase tracking-widest">Select</span>
                         </div>
                      </div>
                   ))}
                </div>

                <div className="mt-12 border-t border-white/10 pt-12 flex flex-wrap justify-start gap-16 text-xs font-mono text-gray-500 w-full text-left">
                   <div>
                       <span className="block text-white mb-2">SERVING SIZE</span>
                       1 CAN (16 FL OZ)
                   </div>
                   <div>
                       <span className="block text-white mb-2">CALORIES</span>
                       10 KCAL
                   </div>
                   <div>
                       <span className="block text-white mb-2">VITAMIN B12</span>
                       2.4MCG (100%)
                   </div>
                </div>

            </div>
        </section>
    );
}
