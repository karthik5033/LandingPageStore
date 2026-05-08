'use client';
import { motion } from 'framer-motion';

export default function Features() {
  return (
    <section id="features" className="py-32 relative z-20 bg-transparent">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-gradient-to-r from-[#e2725b]/20 to-transparent backdrop-blur-lg border-l-4 border-[#e2725b] p-12">
          <h2 className="text-4xl text-white font-light mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Masterfully Balanced</h2>
          <p className="text-white/80 font-light text-lg max-w-2xl">
            A true Garam Masala should not burn the palate with heat, but warm the body with aromatic depth. Our blend contains 12 distinct spices, highlighting sweet cinnamon, pungent clove, and floral cardamom.
          </p>
        </motion.div>
      </div>
    </section>
  );
}