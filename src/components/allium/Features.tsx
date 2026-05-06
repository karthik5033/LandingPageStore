'use client';
import { motion } from 'framer-motion';

export default function Features() {
  return (
    <section id="features" className="py-32 relative z-20 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 justify-center">
          {[
            { t: 'Intense Allicin', d: 'The compound responsible for the signature pungency is retained at 95%.' },
            { t: 'Zero Anti-Caking', d: 'We refuse to use silicon dioxide. Expect pure, sticky, natural clumping.' }
          ].map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }} className="bg-black/60 backdrop-blur-md p-12 border-t-4 border-[#f5f5dc] w-full md:w-96 text-center">
              <h3 className="text-3xl text-white font-light mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>{f.t}</h3>
              <p className="text-white/60 font-light">{f.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}