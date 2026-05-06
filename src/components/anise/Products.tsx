'use client';
import { motion } from 'framer-motion';

export default function Products() {
  return (
    <section id="collection" className="py-32 relative z-20 bg-transparent border-t border-[#4b0082]/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-24">
          <h2 className="text-5xl font-light text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>The Dark Collection</h2>
          <div className="w-px h-16 bg-gradient-to-b from-[#4b0082] to-transparent" />
        </div>

        <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
          {['Midnight Stars', 'Anise Extract', 'Crushed Licorice'].map((p, i) => (
            <motion.div key={p} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="flex-1 bg-black border border-white/5 p-10 hover:border-[#9370db]/50 transition-all text-center group rounded-2xl">
              <h3 className="text-2xl text-white font-light mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{p}</h3>
              <p className="text-[#9370db] font-serif italic mb-8">$22.00</p>
              <div className="w-12 h-12 rounded-full border border-white/10 mx-auto flex items-center justify-center group-hover:bg-[#4b0082]/20 transition-colors cursor-pointer">
                <span className="text-white">+</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}