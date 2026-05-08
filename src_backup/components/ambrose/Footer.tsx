'use client';
import { motion } from 'framer-motion';

export default function AmbroseFooter() {
  return (
    <footer className="relative z-10 pt-40 pb-12 px-8 bg-gradient-to-t from-[#140a05] to-transparent border-t border-[#e6cda3]/20">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#f4eee1] mb-8" style={{ fontFamily: "'Libre Baskerville', serif" }}>
              Join the <br /> <span className="italic text-[#e6cda3]">Maison.</span>
            </h3>
            <p className="text-[#f4eee1]/60 text-lg font-light leading-relaxed max-w-md mb-12">
              Our allocations are strictly limited by the yield of the harvest. Subscribe to our letters to be notified of new vintages and private events.
            </p>
            <form className="flex border-b border-[#e6cda3]/30 pb-4 max-w-md focus-within:border-[#e6cda3] transition-colors group">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent flex-1 outline-none text-[#f4eee1] placeholder-[#f4eee1]/30 text-sm font-light"
              />
              <button type="submit" className="text-[10px] font-bold tracking-[0.4em] text-[#e6cda3] uppercase group-hover:text-[#f4eee1] transition-colors">
                Subscribe
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
              <span className="text-[10px] font-bold tracking-[0.4em] text-[#e6cda3] uppercase mb-4">Discover</span>
              <a href="#manifesto" className="text-[#f4eee1]/60 hover:text-[#e6cda3] text-sm font-bold tracking-[0.1em] transition-colors">Manifesto</a>
              <a href="#harvest" className="text-[#f4eee1]/60 hover:text-[#e6cda3] text-sm font-bold tracking-[0.1em] transition-colors">Harvest</a>
              <a href="#roasting" className="text-[#f4eee1]/60 hover:text-[#e6cda3] text-sm font-bold tracking-[0.1em] transition-colors">Roasting</a>
              <a href="#artistry" className="text-[#f4eee1]/60 hover:text-[#e6cda3] text-sm font-bold tracking-[0.1em] transition-colors">Artistry</a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1 }}
              className="flex flex-col gap-6"
            >
              <span className="text-[10px] font-bold tracking-[0.4em] text-[#e6cda3] uppercase mb-4">Experience</span>
              <a href="#collection" className="text-[#f4eee1]/60 hover:text-[#e6cda3] text-sm font-bold tracking-[0.1em] transition-colors">The Collection</a>
              <a href="#sensory" className="text-[#f4eee1]/60 hover:text-[#e6cda3] text-sm font-bold tracking-[0.1em] transition-colors">Sensory Guide</a>
              <a href="#" className="text-[#f4eee1]/60 hover:text-[#e6cda3] text-sm font-bold tracking-[0.1em] transition-colors">Wholesale</a>
              <a href="#" className="text-[#f4eee1]/60 hover:text-[#e6cda3] text-sm font-bold tracking-[0.1em] transition-colors">Contact</a>
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-[#f4eee1]/10 text-[10px] font-bold tracking-[0.3em] text-[#f4eee1]/30 uppercase">
          <p>© 2024 AMBROSE CHOCOLATIER. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-[#e6cda3] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#e6cda3] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
