'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const products = [
  {
    id: 1,
    name: "Ethiopian Yirgacheffe",
    price: "$24.00",
    notes: "Jasmine, Berries, Floral",
    color: "from-amber-600 to-amber-900" 
  },
  {
    id: 2,
    name: "Colombian Supremo",
    price: "$21.00",
    notes: "Caramel, Nutty, Citrus",
    color: "from-emerald-700 to-emerald-900"
  },
  {
    id: 3,
    name: "Sumatra Mandheling",
    price: "$22.00",
    notes: "Earthy, Spicy, Bold",
    color: "from-stone-600 to-stone-900"
  }
];

export default function Products() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section id="products" ref={containerRef} className="py-24 overflow-hidden relative z-10 bg-black/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto pl-6 pr-6 md:pl-40 md:pr-12 mb-16 flex justify-between items-end">
         <div>
            <span className="text-amber-500 text-xs font-bold tracking-[0.3em] uppercase block mb-4">The Collection</span>
            <h2 className="text-4xl md:text-6xl font-serif text-white">Signature Blends.</h2>
         </div>
         <button className="hidden md:block text-xs uppercase tracking-widest border-b border-gray-600 hover:text-white hover:border-white transition-all pb-1 text-gray-400">View All</button>
      </div>

      <div className="flex gap-8 px-6 pb-12 overflow-x-auto no-scrollbar snap-x snap-mandatory">
        {products.map((p, i) => (
          <motion.div 
            key={p.id}
            whileHover={{ scale: 0.98 }}
            className="flex-shrink-0 w-[85vw] md:w-[400px] h-[500px] bg-neutral-900 border border-white/10 relative group overflow-hidden snap-center cursor-pointer"
          >
             {/* Product Image Placeholder */}
             <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-20 group-hover:opacity-30 transition-opacity duration-700`} />
             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                <span className="px-6 py-3 bg-white text-black text-xs font-bold uppercase tracking-widest">Add to Cart</span>
             </div>
             
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-64 bg-black/40 border border-white/5 backdrop-blur-sm flex items-center justify-center">
                 <span className="text-6xl font-serif text-white/10 rotate-90 whitespace-nowrap tracking-widest pointer-events-none select-none">AURA {p.id}</span>
             </div>
             
             <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
                <div className="flex justify-between items-end">
                   <div>
                      <h3 className="text-2xl font-serif text-white mb-1">{p.name}</h3>
                      <p className="text-xs text-gray-400 uppercase tracking-widest">{p.notes}</p>
                   </div>
                   <span className="text-lg font-mono text-amber-500">{p.price}</span>
                </div>
             </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
