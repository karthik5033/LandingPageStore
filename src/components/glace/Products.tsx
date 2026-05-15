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
    <section id="products" className="py-32 overflow-hidden relative z-10 bg-transparent border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:pl-40 md:pr-12 mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
         <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
         >
            <span className="text-[#fbcfe8] text-xs font-bold tracking-[0.4em] uppercase block mb-4">The Selection</span>
            <h2 className="text-5xl md:text-7xl font-serif text-white tracking-tight">Signature <span className="italic text-gray-400 font-light">Gelato.</span></h2>
         </motion.div>
         <motion.button 
           whileHover={{ x: 10 }}
           className="text-xs uppercase tracking-[0.3em] font-bold flex items-center gap-4 text-[#fbcfe8] group transition-all"
         >
           View Menu
           <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
         </motion.button>
      </div>

      <div className="flex gap-8 px-6 md:pl-40 pb-20 overflow-x-auto no-scrollbar snap-x snap-mandatory">
        {products.map((p, i) => (
          <motion.div 
            key={p.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.8 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHoveredId(p.id)}
            onMouseLeave={() => setHoveredId(null)}
            className="flex-shrink-0 w-[85vw] md:w-[380px] group relative snap-center cursor-pointer"
          >
             <div className="relative h-[550px] bg-black/40 backdrop-blur-xl border border-white/20 rounded-lg overflow-hidden transition-all duration-500 hover:border-[#fbcfe8]/50">
                {/* Main Content Container */}
                <div className="absolute inset-0 p-10 flex flex-col justify-between z-10">
                   <div className="flex justify-between items-center">
                      <div className="w-8 h-[1px] bg-white/40 group-hover:w-16 group-hover:bg-[#fbcfe8] transition-all duration-500" />
                      <span className="text-[10px] font-mono text-gray-400 tracking-widest uppercase">Variant 0{p.id}</span>
                   </div>

                   <div className="space-y-6">
                      <div className="space-y-3">
                        <h3 className="text-4xl font-serif text-white tracking-tight group-hover:text-[#fbcfe8] transition-colors duration-500">
                          {p.name}
                        </h3>
                        <p className="text-xs text-[#fbcfe8] uppercase tracking-[0.2em] font-bold">
                          {p.notes}
                        </p>
                      </div>
                      
                      <p className="text-sm text-gray-200 font-light leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 h-0 group-hover:h-auto overflow-hidden">
                        {p.description}
                      </p>

                      <div className="pt-6 flex justify-between items-center border-t border-white/10 mt-6">
                         <span className="text-2xl font-serif text-white">{p.price}</span>
                         <motion.div 
                           whileHover={{ scale: 1.1, rotate: 90 }}
                           className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black hover:bg-[#fbcfe8] transition-colors"
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

