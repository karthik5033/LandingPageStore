'use client';
import { motion } from 'framer-motion';

export default function Features() {
  return (
    <section id="features" className="py-32 relative z-20 bg-transparent">
      <div className="container mx-auto px-6 md:px-16">
        <div className="bg-black/40 backdrop-blur-sm border border-[#dcb83c]/20 rounded-3xl p-12 md:p-24 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#dcb83c]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="max-w-xl relative z-10">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              The Gold Standard of <span className="italic text-[#dcb83c]">Curcumin.</span>
            </h2>
            <ul className="space-y-6">
              {[
                '8%+ Curcumin content (Standard is 2%)',
                'Hand-harvested in the Meghalaya hills',
                'Cold-milled to prevent thermal degradation',
                'Zero heavy metals or synthetic dyes'
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-4 text-white/70 font-light">
                  <span className="w-2 h-2 rounded-full bg-[#dcb83c] shadow-[0_0_10px_rgba(220,184,60,0.8)]" />
                  {text}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}