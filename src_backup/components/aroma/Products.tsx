'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Products() {
  const products = [
    { name: '1g Reserve Tins', price: '$18', desc: 'Perfect for a single grand culinary event. Preserved in an airtight crimson tin.', weight: '1g Net Wt.' },
    { name: '5g Glass Apothocary', price: '$80', desc: 'The chef\'s standard. UV-protected dark glass ensures maximum longevity.', weight: '5g Net Wt.' },
    { name: '10g Wooden Vault', price: '$150', desc: 'Housed in an artisan-crafted walnut box. A true collector\'s item.', weight: '10g Net Wt.' }
  ];

  return (
    <section id="collection" className="py-32 relative z-20 bg-black/40 backdrop-blur-lg border-t border-[#f4a460]/20">
      <div className="container mx-auto px-6 md:px-16">
        
        <div className="text-center max-w-2xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#f4a460] text-[10px] font-bold tracking-[0.3em] uppercase mb-6 block">The Collection</span>
            <h2 className="text-4xl md:text-6xl font-light text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Saffron Gold.
            </h2>
            <p className="text-white/60 text-sm font-light leading-relaxed">
              Available in highly limited quantities to preserve exclusivity and freshness.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col gap-8 max-w-5xl mx-auto">
          {products.map((product, idx) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="group flex flex-col md:flex-row justify-between items-center p-8 md:p-12 border border-white/10 hover:border-[#f4a460]/50 bg-black/30 backdrop-blur-md rounded-xl transition-all duration-500"
            >
              <div className="flex-1 md:pr-12 text-center md:text-left mb-6 md:mb-0">
                <h3 className="text-2xl text-white font-light mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{product.name}</h3>
                <span className="text-[#f4a460] font-light font-serif block mb-4">{product.price} <span className="text-white/40 text-xs ml-2 uppercase tracking-widest">{product.weight}</span></span>
                <p className="text-white/50 text-sm font-light leading-relaxed max-w-md mx-auto md:mx-0">
                  {product.desc}
                </p>
              </div>

              <div className="flex-shrink-0">
                <button className="flex items-center gap-4 text-[10px] tracking-[0.3em] uppercase text-white/70 group-hover:text-[#f4a460] transition-colors py-4 px-8 border border-white/10 group-hover:border-[#f4a460] rounded-full">
                  <span>Add to Reserve</span>
                  <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}