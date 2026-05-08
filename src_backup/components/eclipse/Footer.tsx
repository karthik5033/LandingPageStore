'use client';
import { motion } from 'framer-motion';

export default function EclipseFooter() {
  return (
    <footer className="relative z-10 pt-40 pb-12 px-8 border-t border-[#8f1722]/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-4xl md:text-5xl font-light text-white mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Join the <span className="italic text-[#8f1722]">Syndicate.</span>
            </h3>
            <p className="text-white/60 text-lg font-light leading-relaxed max-w-md mb-12">
              Our rarest harvests never reach the public domain. Apply to join the syndicate for early access to our private allocations.
            </p>
            <form className="flex border-b border-[#8f1722]/30 pb-4 max-w-md focus-within:border-[#8f1722] transition-colors group">
              <input
                type="email"
                placeholder="Submit your email"
                className="bg-transparent flex-1 outline-none text-white placeholder-white/20 text-sm font-light"
              />
              <button type="submit" className="text-[10px] font-bold tracking-[0.3em] text-[#8f1722] uppercase group-hover:text-white transition-colors">
                Apply
              </button>
            </form>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-16 md:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 1 }}
              className="flex flex-col gap-6"
            >
              <span className="text-[10px] font-bold tracking-[0.3em] text-[#8f1722] uppercase mb-4">Explore</span>
              <a href="#origin" className="text-white/60 hover:text-[#8f1722] text-sm font-light transition-colors">Origin</a>
              <a href="#philosophy" className="text-white/60 hover:text-[#8f1722] text-sm font-light transition-colors">Philosophy</a>
              <a href="#process" className="text-white/60 hover:text-[#8f1722] text-sm font-light transition-colors">Craft</a>
              <a href="#collection" className="text-white/60 hover:text-[#8f1722] text-sm font-light transition-colors">Boutique</a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1 }}
              className="flex flex-col gap-6"
            >
              <span className="text-[10px] font-bold tracking-[0.3em] text-[#8f1722] uppercase mb-4">Connect</span>
              <a href="#" className="text-white/60 hover:text-[#8f1722] text-sm font-light transition-colors">Instagram</a>
              <a href="#" className="text-white/60 hover:text-[#8f1722] text-sm font-light transition-colors">Journal</a>
              <a href="#" className="text-white/60 hover:text-[#8f1722] text-sm font-light transition-colors">Wholesale</a>
              <a href="#" className="text-white/60 hover:text-[#8f1722] text-sm font-light transition-colors">Contact</a>
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase">
          <p>© 2024 ECLIPSE. All rights reserved.</p>
          <div className="flex gap-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-[#8f1722] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#8f1722] transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
