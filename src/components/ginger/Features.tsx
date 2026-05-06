'use client';
import { motion } from 'framer-motion';

export default function Features() {
  return (
    <section id="features" className="py-32 relative z-20 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="aspect-square rounded-full border border-[#ffcc80]/30 flex items-center justify-center bg-black/40 backdrop-blur-sm p-12 text-center">
            <div>
              <h2 className="text-5xl text-[#ffcc80] font-light mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>High Gingerol</h2>
              <p className="text-white/70 font-light text-lg">Our ginger contains 4x the gingerol content of supermarket alternatives, delivering unmatched medicinal warmth and digestive benefits.</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
            <div className="border-b border-white/10 pb-8">
              <h3 className="text-white text-2xl font-serif mb-2">Fierce Heat</h3>
              <p className="text-white/50 font-light">A sharp, lingering bite that cuts through rich dishes.</p>
            </div>
            <div className="border-b border-white/10 pb-8">
              <h3 className="text-white text-2xl font-serif mb-2">Citrus Undertones</h3>
              <p className="text-white/50 font-light">Bright, lemony aromatic top notes.</p>
            </div>
            <div>
              <h3 className="text-white text-2xl font-serif mb-2">Zero Fibers</h3>
              <p className="text-white/50 font-light">Milled to an ultra-fine, dissolving powder.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}