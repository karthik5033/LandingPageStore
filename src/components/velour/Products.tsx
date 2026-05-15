'use client';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, Plus } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Matcha Cloud",
    price: "$8.00",
    notes: "Earthy, Sweet, Umami",
    color: "from-green-100 to-green-300",
    accent: "#d8b4e2",
    description: "Ceremonial grade matcha whisked into our signature A2 dairy base."
  },
  {
    id: 2,
    name: "Ube Velvet",
    price: "$9.00",
    notes: "Nutty, Vanilla, Purple Yam",
    color: "from-purple-100 to-purple-300",
    accent: "#d8b4e2",
    description: "Hand-mashed purple yam slow-churned for an intense, earthy sweetness."
  },
  {
    id: 3,
    name: "Charcoal Sesame",
    price: "$9.00",
    notes: "Toasted, Savory, Dark",
    color: "from-stone-300 to-stone-500",
    accent: "#d8b4e2",
    description: "Activated charcoal and double-toasted black sesame seeds."
  }
];

export default function Products() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="products" className="py-32 overflow-hidden relative z-10 bg-black/20 backdrop-blur-md border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:pl-40 md:pr-12 mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
         <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
         >
            <span className="text-[#d8b4e2] text-xs font-bold tracking-[0.4em] uppercase block mb-4">The Selection</span>
            <h2 className="text-5xl md:text-7xl font-serif text-white tracking-tighter">Signature <span className="italic text-gray-500 font-light">Swirls.</span></h2>
         </motion.div>
         <motion.button 
           whileHover={{ x: 10 }}
           className="text-xs uppercase tracking-[0.3em] font-bold flex items-center gap-4 text-[#d8b4e2] group transition-all"
         >
           View Seasonal Menu
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
             <div className="relative h-[600px] bg-[#0a0a0a] border border-white/5 overflow-hidden transition-all duration-700 group-hover:border-[#d8b4e2]/30">
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
                        <h3 className="text-4xl md:text-5xl font-serif text-white tracking-tight group-hover:text-[#d8b4e2] transition-colors duration-500">
                          {p.name}
                        </h3>
                        <p className="text-xs text-[#d8b4e2] uppercase tracking-[0.3em] font-bold opacity-60">
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
                           className="w-12 h-12 rounded-full bg-[#d8b4e2] flex items-center justify-center text-black"
                         >
                            <Plus className="w-5 h-5" />
                         </motion.div>
                      </div>
                   </div>
                </div>
             </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

