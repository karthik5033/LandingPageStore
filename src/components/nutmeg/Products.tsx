'use client';
import { motion } from 'framer-motion';
export default function Products() {
  return (
    <section id="collection" className="py-32 relative z-20 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {['Premium Whole', 'Finely Milled'].map((p,i) => (
            <motion.div key={p} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.2 }} className="w-full md:w-96 bg-black/60 backdrop-blur-md border border-[#a1887f]/20 p-12 hover:border-[#a1887f] transition-colors rounded-2xl text-center group">
              <h3 className="text-3xl text-white font-light mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{p}</h3>
              <p className="text-[#a1887f] font-serif italic mb-8">$25.00</p>
              <button className="border border-white/20 px-8 py-3 rounded-full text-white/60 text-xs uppercase tracking-widest group-hover:bg-white group-hover:text-black transition-colors">Acquire</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}