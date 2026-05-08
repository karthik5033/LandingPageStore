'use client';
import { motion } from 'framer-motion';

export default function BotanicaProcess() {
  return (
    <section id="harvest" className="relative z-10 py-48 px-6 bg-gradient-to-b from-black/0 via-black/80 to-black/40 border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1.2 }}
        >
          <span className="block text-green-400 text-[10px] font-bold tracking-[0.4em] mb-8 uppercase">
            The Harvest
          </span>
          <h2 className="text-5xl md:text-7xl font-light text-white mb-10 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            Rooted in <br/><span className="italic text-gray-400">Nature.</span>
          </h2>
          <p className="text-gray-300 text-base font-light tracking-wide leading-relaxed max-w-2xl mx-auto mb-16">
            We partner exclusively with regenerative organic farms. Every fruit and root is harvested at peak ripeness, ensuring the highest bio-availability of essential nutrients and a profoundly vibrant flavor profile.
          </p>

          <button className="px-14 py-5 border border-white/20 text-white text-[10px] font-medium tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all duration-500">
            Explore Our Farms
          </button>
        </motion.div>
      </div>
    </section>
  );
}
