'use client';
import { motion } from 'framer-motion';

export default function SilkProcess() {
  return (
    <section id="process" className="relative z-10 py-32 px-6">
      <div className="max-w-5xl mx-auto text-center border border-[#c8a97e]/20 p-12 md:p-24 rounded-2xl bg-[#1a110a]/30 backdrop-blur-md">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
        >
          <span className="block text-[#c8a97e] text-[10px] font-bold tracking-[0.4em] mb-6 uppercase">
            The Philosophy
          </span>
          <h2 className="text-4xl md:text-6xl font-light text-white mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            Melt <br/><span className="italic text-[#e8d5c4]">Seamlessly.</span>
          </h2>
          <p className="text-[#a89584] text-lg font-light leading-relaxed max-w-2xl mx-auto mb-12">
            Chocolate is an emotional experience. We designed the SILK collection to bypass the intellect and speak directly to the senses. Through an obsessive 96-hour conching process, we eliminate all harshness, leaving only pure, unadulterated flavor that melts instantly upon the palate.
          </p>

          <button className="px-10 py-4 bg-[#c8a97e] text-[#1a110a] text-[10px] font-bold tracking-[0.2em] uppercase rounded-full hover:bg-white transition-all duration-300">
            Read Our Story
          </button>
        </motion.div>
      </div>
    </section>
  );
}
