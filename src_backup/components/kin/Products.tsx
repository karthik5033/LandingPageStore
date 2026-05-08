'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Products() {
  const products = [
    { name: 'Smoked Cinnamon', price: '$24', desc: 'Aged over oak and sweet cherry wood for 72 hours.', weight: '50g Glass Jar' },
    { name: 'Wild Cardamom', price: '$32', desc: 'Hand-foraged from the high-altitude forests of the Western Ghats.', weight: '45g Glass Jar' },
    { name: 'Reserve Saffron', price: '$85', desc: 'Grade I Coupe. Deep crimson threads with extraordinary aromatic strength.', weight: '5g Glass Jar' }
  ];

  return (
    <section id="collection" className="py-32 relative z-20 bg-black/40 backdrop-blur-xl border-t border-[#8b4513]/10">
      <div className="container mx-auto px-6 md:px-16">
        
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#8b4513] text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block">The Collection</span>
            <h2 className="text-4xl md:text-6xl font-light text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Signature Blends.
            </h2>
            <p className="text-white/50 text-sm font-light leading-relaxed">
              Curated for the discerning palate. Sourced from the world's most pristine terroirs.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, delay: idx * 0.2, ease: [0.21, 1.11, 0.81, 0.99] }}
              className={`group relative flex flex-col ${idx === 1 ? 'md:mt-16' : ''} ${idx === 2 ? 'md:mt-32' : ''}`}
            >
              {/* Image Placeholder */}
              <div className="aspect-[3/4] w-full bg-[#111] overflow-hidden relative rounded-t-lg border border-white/5 border-b-0">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#8b4513]/10 to-transparent group-hover:opacity-100 opacity-50 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-32 h-40 bg-black/40 backdrop-blur-sm border border-white/10 rounded-sm shadow-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                    <span className="text-[#8b4513]/30 text-xs tracking-widest font-serif">KIN</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 bg-black/80 backdrop-blur-md border border-white/5 rounded-b-lg flex flex-col flex-grow group-hover:border-[#8b4513]/30 transition-colors duration-500">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl text-white font-light" style={{ fontFamily: "'Playfair Display', serif" }}>{product.name}</h3>
                  <span className="text-[#8b4513] font-light font-serif">{product.price}</span>
                </div>
                <p className="text-white/50 text-xs font-light tracking-wide mb-6">
                  {product.weight}
                </p>
                <p className="text-white/70 font-light text-sm leading-relaxed mb-8 flex-grow">
                  {product.desc}
                </p>
                <button className="flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase text-white/50 group-hover:text-[#8b4513] transition-colors w-max">
                  <span>Add to Reserve</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}