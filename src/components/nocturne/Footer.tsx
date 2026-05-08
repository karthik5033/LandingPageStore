'use client';
import { motion } from 'framer-motion';

export default function NocturneFooter() {
  return (
    <footer className="relative z-10 pt-40 pb-12 px-8 bg-gradient-to-t from-[#050505] to-transparent border-t border-[#cfbba0]/20">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8" style={{ fontFamily: "'Cinzel', serif" }}>
              The Private <br /> <span className="italic text-[#cfbba0]">Registry.</span>
            </h3>
            <p className="text-white/60 text-lg font-light leading-relaxed max-w-md mb-12">
              Our allocations sell out within hours of release. Register to secure your place in the queue for our next vintage.
            </p>
            <form className="flex border-b border-[#cfbba0]/30 pb-4 max-w-md focus-within:border-[#cfbba0] transition-colors group">
              <input
                type="email"
                placeholder="Enter email address"
                className="bg-transparent flex-1 outline-none text-white placeholder-white/30 text-sm font-light"
              />
              <button type="submit" className="text-[10px] font-bold tracking-[0.4em] text-[#cfbba0] uppercase group-hover:text-white transition-colors">
                Register
              </button>
            </form>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-16 md:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 1 }}
              className="flex flex-col gap-6"
            >
              <span className="text-[10px] font-bold tracking-[0.4em] text-[#cfbba0] uppercase mb-4">The Maison</span>
              <a href="#awakening" className="text-white/60 hover:text-[#cfbba0] text-sm font-light transition-colors">Awakening</a>
              <a href="#terroir" className="text-white/60 hover:text-[#cfbba0] text-sm font-light transition-colors">Terroir</a>
              <a href="#botanicals" className="text-white/60 hover:text-[#cfbba0] text-sm font-light transition-colors">Botanicals</a>
              <a href="#craft" className="text-white/60 hover:text-[#cfbba0] text-sm font-light transition-colors">Craft</a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1 }}
              className="flex flex-col gap-6"
            >
              <span className="text-[10px] font-bold tracking-[0.4em] text-[#cfbba0] uppercase mb-4">Inquiries</span>
              <a href="#vault" className="text-white/60 hover:text-[#cfbba0] text-sm font-light transition-colors">The Vault</a>
              <a href="#sensory" className="text-white/60 hover:text-[#cfbba0] text-sm font-light transition-colors">Sensory</a>
              <a href="#masters" className="text-white/60 hover:text-[#cfbba0] text-sm font-light transition-colors">Lineage</a>
              <a href="#" className="text-white/60 hover:text-[#cfbba0] text-sm font-light transition-colors">Contact</a>
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/10 text-[10px] font-bold tracking-[0.3em] text-white/30 uppercase">
          <p>© 2024 NOCTURNE CHOCOLATIER. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-[#cfbba0] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#cfbba0] transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
