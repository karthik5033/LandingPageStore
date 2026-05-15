'use client';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, ShoppingBag, Plus } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Madagascar Vanilla",
    price: "$12.00",
    notes: "Creamy, Classic, Pure",
    color: "from-pink-100 to-pink-300",
    accent: "#fbcfe8",
    description: "Cold-pressed bourbon vanilla beans from the Sava region."
  },
  {
    id: 2,
    name: "Sicilian Pistachio",
    price: "$14.00",
    notes: "Nutty, Rich, Earthy",
    color: "from-emerald-100 to-emerald-300",
    accent: "#6ee7b7",
    description: "Bronte pistachios roasted to perfection and stone-ground."
  },
  {
    id: 3,
    name: "Dark Chocolate Truffle",
    price: "$14.00",
    notes: "Decadent, Deep, Cocoa",
    color: "from-stone-300 to-stone-500",
    accent: "#78716c",
    description: "70% Single-origin cocoa from the Ivory Coast."
  }
];

export default function Products() {
  const containerRef = useRef(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="products" className="py-32 overflow-hidden relative z-10 bg-black/20 backdrop-blur-md border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:pl-40 md:pr-12 mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
         <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
         >
            <span className="text-[#fbcfe8] text-xs font-bold tracking-[0.4em] uppercase block mb-4">Curated Selections</span>
            <h2 className="text-5xl md:text-7xl font-serif text-white tracking-tighter">The <span className="italic text-gray-500 font-light">Atelier</span> Collection.</h2>
         </motion.div>
         <motion.button 
           whileHover={{ x: 10 }}
           className="text-xs uppercase tracking-[0.3em] font-bold flex items-center gap-4 text-[#fbcfe8] group transition-all"
         >
           Explore All Flavors
           <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
         </motion.button>
      </div>

      <div className="flex gap-10 px-6 md:pl-40 pb-20 overflow-x-auto no-scrollbar snap-x snap-mandatory">
        {products.map((p, i) => (
          <motion.div 
            key={p.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.8 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHoveredId(p.id)}
            onMouseLeave={() => setHoveredId(null)}
            className="flex-shrink-0 w-[85vw] md:w-[450px] group relative snap-center cursor-pointer"
          >
             <div className="relative h-[600px] bg-[#111] border border-white/5 overflow-hidden transition-all duration-700 group-hover:border-white/20">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-10 transition-opacity duration-1000`} />
                
                {/* Large Background Text */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex items-center justify-center opacity-[0.03] group-hover:opacity-[0.07] transition-all duration-1000 rotate-90">
                    <span className="text-[12rem] font-serif font-bold whitespace-nowrap tracking-tighter select-none uppercase">
                      {p.name.split(' ')[0]}
                    </span>
                </div>

                {/* Main Content Container */}
                <div className="absolute inset-0 p-12 flex flex-col justify-between z-10">
                   <div className="flex justify-between items-start">
                      <div className="w-12 h-[1px] bg-white/20 mt-3 group-hover:w-20 transition-all duration-700" />
                      <span className="text-xs font-mono text-gray-500 tracking-widest uppercase">Variant 0{p.id}</span>
                   </div>

                   <div className="space-y-6">
                      <div className="space-y-2">
                        <h3 className="text-4xl md:text-5xl font-serif text-white tracking-tight group-hover:text-[#fbcfe8] transition-colors duration-500">
                          {p.name}
                        </h3>
                        <p className="text-xs text-[#fbcfe8] uppercase tracking-[0.3em] font-bold opacity-60">
                          {p.notes}
                        </p>
                      </div>
                      
                      <p className="text-sm text-gray-400 font-light leading-relaxed max-w-[280px] opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-100">
                        {p.description}
                      </p>

                      <div className="pt-8 flex justify-between items-center border-t border-white/5 transform translate-y-8 group-hover:translate-y-0 transition-all duration-700 delay-200">
                         <span className="text-2xl font-serif text-white">{p.price}</span>
                         <motion.div 
                           whileHover={{ scale: 1.1, rotate: 90 }}
                           className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black"
                         >
                            <Plus className="w-5 h-5" />
                         </motion.div>
                      </div>
                   </div>
                </div>

                {/* Animated Corner Accent */}
                <div 
                  className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/10 to-transparent transition-transform duration-1000 translate-x-32 translate-y--32 group-hover:translate-x-0 group-hover:translate-y-0"
                  style={{ background: `linear-gradient(to bottom left, ${p.accent}22, transparent)` }}
                />
             </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

